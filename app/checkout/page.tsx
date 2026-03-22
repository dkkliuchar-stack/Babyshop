'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

type CartItem = {
  name: string;
  price: number;
  qty: number;
}

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('cart');
      if (saved) setCartItems(JSON.parse(saved));
    } catch {}
  }, []);

  const total = cartItems.reduce((s, i) => s + i.price * i.qty, 0);

  async function handleOrder() {
    if (!name || !phone || !address) {
      alert('Заполните все поля');
      return;
    }
    if (cartItems.length === 0) {
      alert('Корзина пуста');
      return;
    }
    setLoading(true);
    const { error } = await supabase.from('orders').insert({
      name, phone, address, items: cartItems, total, status: 'new'
    });
    if (error) {
      alert('Ошибка: ' + error.message);
    } else {
      localStorage.removeItem('cart');
      setSuccess(true);
    }
    setLoading(false);
  }

  if (success) {
    return (
      <main className="bg-[#FAF6F1] min-h-screen flex items-center justify-center px-6">
        <div className="text-center py-12 px-10">
          <div className="text-5xl mb-6">🎉</div>
          <h1 className="font-serif text-3xl text-[#3B2A24] mb-4">
            Заказ оформлен!
          </h1>
          <p className="text-[15px] text-[#9C8478] mb-8 leading-relaxed">
            Спасибо за покупку. Мы свяжемся с вами в ближайшее время.
          </p>
          <a href="/"
            className="bg-[#3B2A24] text-white px-7 py-3.5 rounded-sm no-underline text-xs tracking-[0.14em] uppercase hover:bg-[#C0785A] transition-colors">
            Вернуться в магазин
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#FAF6F1] min-h-screen px-6 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">

        {/* На мобиле: сначала сводка, потом форма — логично видеть что заказываешь */}
        {/* На компьютере: форма слева, сводка справа */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

          {/* Сводка заказа — на мобиле идёт первой */}
          <div className="md:order-2 bg-white border border-[#E8D9CC] rounded-sm p-6 md:p-8 h-fit">
            <h2 className="font-serif text-xl text-[#3B2A24] mb-6">
              Ваш заказ
            </h2>
            {cartItems.length === 0 ? (
              <p className="text-sm text-[#9C8478]">Корзина пуста</p>
            ) : (
              cartItems.map(item => (
                <div key={item.name}
                  className="flex justify-between py-3 border-b border-[#E8D9CC] text-sm text-[#3B2A24]">
                  <span>{item.name} × {item.qty}</span>
                  <span>${(item.price * item.qty).toFixed(2)}</span>
                </div>
              ))
            )}
            <div className="flex justify-between pt-4 font-serif text-xl text-[#3B2A24] font-semibold">
              <span>Итого</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Форма — на мобиле идёт второй */}
          <div className="md:order-1">
            <a href="/" className="text-sm text-[#9C8478] no-underline hover:text-[#3B2A24] transition-colors">
              ← Назад в магазин
            </a>
            <h1 className="font-serif text-3xl text-[#3B2A24] mt-6 mb-8">
              Оформление заказа
            </h1>

            <div className="mb-5">
              <label className="block text-[11px] tracking-[0.1em] uppercase text-[#9C8478] mb-2">Имя</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Иван Иванов"
                className="w-full px-3.5 py-3 text-sm border border-[#E8D9CC] rounded-sm outline-none bg-white text-[#3B2A24] focus:border-[#3B2A24] transition-colors"
              />
            </div>

            <div className="mb-5">
              <label className="block text-[11px] tracking-[0.1em] uppercase text-[#9C8478] mb-2">Телефон</label>
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="+38 (099) 123-45-67"
                className="w-full px-3.5 py-3 text-sm border border-[#E8D9CC] rounded-sm outline-none bg-white text-[#3B2A24] focus:border-[#3B2A24] transition-colors"
              />
            </div>

            <div className="mb-8">
              <label className="block text-[11px] tracking-[0.1em] uppercase text-[#9C8478] mb-2">Адрес доставки</label>
              <textarea
                value={address}
                onChange={e => setAddress(e.target.value)}
                placeholder="г. Киев, ул. Крещатик, 1, кв. 10"
                rows={3}
                className="w-full px-3.5 py-3 text-sm border border-[#E8D9CC] rounded-sm outline-none bg-white text-[#3B2A24] focus:border-[#3B2A24] transition-colors resize-y font-[inherit]"
              />
            </div>

            <button
              onClick={handleOrder}
              disabled={loading}
              className="w-full bg-[#3B2A24] text-white border-none py-3.5 text-xs tracking-[0.14em] uppercase rounded-sm cursor-pointer hover:bg-[#C0785A] transition-colors disabled:opacity-60"
            >
              {loading ? 'Оформляем...' : 'Оформить заказ'}
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}