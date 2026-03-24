'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ShippingPage() {
  return (
    <main className="bg-[#FAF6F1] min-h-screen">
      <Header cartCount={0} onCartOpen={() => {}} />

      <div className="max-w-2xl mx-auto px-6 py-16">

        <a href="/" className="text-sm text-[#9C8478] no-underline hover:text-[#3B2A24] transition-colors mb-8 inline-block">
          ← Назад
        </a>

        <h1 className="font-serif text-4xl text-[#3B2A24] mb-12">
          Доставка та повернення
        </h1>

        {/* Доставка */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl text-[#3B2A24] mb-6">Доставка</h2>

          <div className="flex flex-col gap-6">
            <div className="border-b border-[#E8D9CC] pb-6">
              <p className="text-xs tracking-[0.12em] uppercase text-[#C0785A] mb-2">Нова Пошта</p>
              <p className="text-[15px] text-[#3B2A24] mb-1">Доставка по всій Україні</p>
              <p className="text-sm text-[#9C8478] leading-relaxed">
                Відправляємо щодня крім неділі. Термін доставки 1–3 робочих дні.
                Вартість доставки за тарифами Нової Пошти.
              </p>
            </div>

            <div className="border-b border-[#E8D9CC] pb-6">
              <p className="text-xs tracking-[0.12em] uppercase text-[#C0785A] mb-2">Укрпошта</p>
              <p className="text-[15px] text-[#3B2A24] mb-1">Доставка по всій Україні та за кордон</p>
              <p className="text-sm text-[#9C8478] leading-relaxed">
                Термін доставки по Україні 3–7 днів. Міжнародна доставка 7–21 день.
                Вартість за тарифами Укрпошти.
              </p>
            </div>

            <div className="border-b border-[#E8D9CC] pb-6">
              <p className="text-xs tracking-[0.12em] uppercase text-[#C0785A] mb-2">Безкоштовна доставка</p>
              <p className="text-[15px] text-[#3B2A24] mb-1">При замовленні від 1500 грн</p>
              <p className="text-sm text-[#9C8478] leading-relaxed">
                Безкоштовна доставка Новою Поштою при сумі замовлення від 1500 грн.
              </p>
            </div>
          </div>
        </div>

        {/* Повернення */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl text-[#3B2A24] mb-6">Повернення та обмін</h2>

          <div className="flex flex-col gap-6">
            <div className="border-b border-[#E8D9CC] pb-6">
              <p className="text-xs tracking-[0.12em] uppercase text-[#C0785A] mb-2">Термін повернення</p>
              <p className="text-sm text-[#9C8478] leading-relaxed">
                Повернення товару протягом 14 днів з моменту отримання.
                Товар має бути в оригінальному стані — не вдягнений, з етикетками.
              </p>
            </div>

            <div className="border-b border-[#E8D9CC] pb-6">
              <p className="text-xs tracking-[0.12em] uppercase text-[#C0785A] mb-2">Як повернути</p>
              <p className="text-sm text-[#9C8478] leading-relaxed">
                Напишіть нам на email або в Instagram з номером замовлення.
                Ми узгодимо деталі та надамо адресу для відправки.
                Вартість зворотної доставки оплачує покупець.
              </p>
            </div>

            <div className="border-b border-[#E8D9CC] pb-6">
              <p className="text-xs tracking-[0.12em] uppercase text-[#C0785A] mb-2">Обмін розміру</p>
              <p className="text-sm text-[#9C8478] leading-relaxed">
                Якщо розмір не підійшов — з радістю обміняємо.
                Зв'яжіться з нами протягом 14 днів після отримання.
              </p>
            </div>
          </div>
        </div>

        {/* Контакт */}
        <div className="bg-[#F2E8DF] rounded-sm p-6">
          <p className="text-xs tracking-[0.12em] uppercase text-[#C0785A] mb-2">Залишились питання?</p>
          <p className="text-sm text-[#9C8478] leading-relaxed mb-4">
            Напишіть нам — відповімо протягом декількох годин.
          </p>
          <a href="mailto:hello@babyshop.com"
            className="text-sm text-[#3B2A24] no-underline hover:text-[#C0785A] transition-colors font-medium">
            hello@babyshop.com →
          </a>
        </div>

      </div>

      <Footer />
    </main>
  );
}