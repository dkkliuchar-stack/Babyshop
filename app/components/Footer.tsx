'use client';

import { useState } from 'react';

export default function Footer() {
  const [currency, setCurrency] = useState<'USD' | 'UAH'>('UAH');

  const shopLinks = [
    { label: 'Новинки', href: '/#catalog' },
    { label: 'Боді',    href: '/#catalog' },
  ];

  const helpLinks = [
    { label: 'Доставка та повернення', href: '/shipping' },
    { label: 'Зв\'язатись з нами',     href: 'mailto:hello@babyshop.com' },
  ];

  return (
    <footer className="bg-[#3B2A24] px-6 pt-14 pb-8">
      <div className="max-w-6xl mx-auto">

        {/* Верхняя часть */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Логотип + слоган + соцсети */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="font-serif text-2xl text-white mb-3 no-underline inline-block">
              Baby<span className="text-[#C0785A]">Shop</span>
            </a>
            <p className="text-sm leading-relaxed text-white/40 max-w-[200px] mt-2 mb-5">
              Одяг для найменших — з любов'ю до кожної деталі.
            </p>

            {/* Соцсети */}
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors no-underline">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors no-underline">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Магазин */}
          <div>
            <div className="text-[11px] tracking-[0.14em] uppercase text-white font-medium mb-4">
              Магазин
            </div>
            <div className="flex flex-col gap-2.5">
              {shopLinks.map(link => (
                <a key={link.label} href={link.href}
                  className="text-sm text-white/50 no-underline hover:text-white/80 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Допомога */}
          <div>
            <div className="text-[11px] tracking-[0.14em] uppercase text-white font-medium mb-4">
              Допомога
            </div>
            <div className="flex flex-col gap-2.5">
              {helpLinks.map(link => (
                <a key={link.label} href={link.href}
                  className="text-sm text-white/50 no-underline hover:text-white/80 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Підписка */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="text-[11px] tracking-[0.14em] uppercase text-white font-medium mb-3">
              Залишайтесь на зв'язку
            </div>
            <p className="text-sm text-white/40 mb-3">
              Знижка 10% на перше замовлення.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 min-w-0 px-3.5 py-2.5 text-sm border border-white/15 bg-white/7 text-white outline-none rounded-l-sm placeholder:text-white/30"
              />
              <button className="bg-[#C0785A] text-white border-none px-4 py-2.5 text-[11px] tracking-[0.1em] uppercase rounded-r-sm cursor-pointer hover:bg-[#a8614a] transition-colors whitespace-nowrap">
                Приєднатись
              </button>
            </div>
          </div>

        </div>

        {/* Нижняя часть */}
        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/25">
            © 2026 BabyShop. Всі права захищено.
          </p>

          {/* Перемикач валюти */}
          <div className="flex items-center gap-1 bg-white/5 rounded-sm p-1">
            {(['USD', 'UAH'] as const).map(c => (
              <button key={c} onClick={() => setCurrency(c)}
                className={`px-3 py-1 text-xs rounded-sm border-none cursor-pointer transition-colors ${
                  currency === c
                    ? 'bg-[#C0785A] text-white'
                    : 'bg-transparent text-white/40 hover:text-white/70'
                }`}>
                {c === 'USD' ? '$ USD' : '₴ UAH'}
              </button>
            ))}
          </div>

          <div className="flex gap-5">
            {[
              { label: 'Політика конфіденційності', href: '#' },
              { label: 'Умови використання', href: '#' },
            ].map(item => (
              <a key={item.label} href={item.href}
                className="text-xs text-white/40 no-underline hover:text-white/70 transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}