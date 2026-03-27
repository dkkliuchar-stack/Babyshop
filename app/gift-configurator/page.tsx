'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GiftConfigurator() {
  const [ageMonths, setAgeMonths] = useState('');
  const [gender, setGender] = useState('');
  const [budget, setBudget] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit() {
    if (!ageMonths || !gender || !budget) {
      setError('Заполните все поля');
      return;
    }

    setLoading(true);
    setError('');
    setResult('');

    try {
      const response = await fetch('/api/gift-configurator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ageMonths: Number(ageMonths),
          gender,
          budget: Number(budget)
        })
      });

      const data = await response.json();

      if (data.success) {
        setResult(data.recommendation);
      } else {
        setError('Ошибка AI. Попробуйте ещё раз.');
      }
    } catch {
      setError('Ошибка соединения.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-[#FAF6F1] min-h-screen">
      <Header cartCount={0} onCartOpen={() => {}} />

      <section className="max-w-2xl mx-auto px-6 py-16">

        <h1 className="font-serif text-4xl text-[#3B2A24] mb-4 text-center">
          Подарочный конфигуратор
        </h1>
        <p className="text-[#9C8478] text-center mb-12 text-sm">
          Не знаете что подарить? AI подберёт идеальный набор.
        </p>

        <div className="flex flex-col gap-6">

          <div>
            <label className="text-xs uppercase tracking-[0.1em] text-[#9C8478] mb-2 block">
              Возраст ребёнка (в месяцах)
            </label>
            <input
              type="number"
              value={ageMonths}
              onChange={e => setAgeMonths(e.target.value)}
              placeholder="например: 6"
              className="w-full border border-[#E8D9CC] bg-white px-4 py-3 text-[#3B2A24] text-sm rounded-sm focus:outline-none focus:border-[#3B2A24]"
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-[0.1em] text-[#9C8478] mb-2 block">
              Пол ребёнка
            </label>
            <div className="flex gap-3">
              {['девочка', 'мальчик', 'не важно'].map(g => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`flex-1 py-3 text-sm border rounded-sm transition-all cursor-pointer ${
                    gender === g
                      ? 'bg-[#3B2A24] text-white border-[#3B2A24]'
                      : 'bg-transparent text-[#3B2A24] border-[#E8D9CC] hover:border-[#3B2A24]'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-[0.1em] text-[#9C8478] mb-2 block">
              Бюджет ($)
            </label>
            <input
              type="number"
              value={budget}
              onChange={e => setBudget(e.target.value)}
              placeholder="например: 50"
              className="w-full border border-[#E8D9CC] bg-white px-4 py-3 text-[#3B2A24] text-sm rounded-sm focus:outline-none focus:border-[#3B2A24]"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-[#3B2A24] text-white py-4 text-xs tracking-[0.14em] uppercase rounded-sm border-none cursor-pointer hover:bg-[#C0785A] transition-colors disabled:opacity-50"
          >
            {loading ? 'Claude подбирает подарок...' : 'Подобрать подарок'}
          </button>

        </div>

        {result && (
          <div className="mt-12 p-8 bg-white border border-[#E8D9CC] rounded-sm">
            <p className="text-xs uppercase tracking-[0.1em] text-[#9C8478] mb-4">
              Рекомендация AI
            </p>
            <p className="text-[#3B2A24] text-sm leading-relaxed whitespace-pre-wrap">
              {result}
            </p>
          </div>
        )}

      </section>

      <Footer />
    </main>
  );
}
