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
      name,
      phone,
      address,
      items: cartItems,
      total,
      status: 'new'
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
      <main style={{ background: '#FAF6F1', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: '48px 40px' }}>
          <div style={{ fontSize: 48, marginBottom: 24 }}>🎉</div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', color: '#3B2A24', marginBottom: 16 }}>
            Заказ оформлен!
          </h1>
          <p style={{ fontSize: 15, color: '#9C8478', marginBottom: 32, lineHeight: 1.7 }}>
            Спасибо за покупку. Мы свяжемся с вами в ближайшее время.
          </p>
          <a href="/" style={{
            background: '#3B2A24', color: '#fff',
            padding: '13px 28px', borderRadius: 2,
            textDecoration: 'none', fontSize: 12,
            letterSpacing: '0.14em', textTransform: 'uppercase'
          }}>Вернуться в магазин</a>
        </div>
      </main>
    );
  }

  return (
    <main style={{ background: '#FAF6F1', minHeight: '100vh', padding: '60px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>

        {/* Форма */}
        <div>
          <a href="/" style={{ fontSize: 13, color: '#9C8478', textDecoration: 'none' }}>← Назад в магазин</a>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', color: '#3B2A24', margin: '24px 0 32px' }}>
            Оформление заказа
          </h1>

          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9C8478', display: 'block', marginBottom: 6 }}>Имя</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Иван Иванов"
              style={{
                width: '100%', padding: '12px 14px', fontSize: 14,
                border: '1px solid #E8D9CC', borderRadius: 2,
                outline: 'none', background: '#fff', color: '#3B2A24',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9C8478', display: 'block', marginBottom: 6 }}>Телефон</label>
            <input
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="+38 (099) 123-45-67"
              style={{
                width: '100%', padding: '12px 14px', fontSize: 14,
                border: '1px solid #E8D9CC', borderRadius: 2,
                outline: 'none', background: '#fff', color: '#3B2A24',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: 32 }}>
            <label style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9C8478', display: 'block', marginBottom: 6 }}>Адрес доставки</label>
            <textarea
              value={address}
              onChange={e => setAddress(e.target.value)}
              placeholder="г. Киев, ул. Крещатик, 1, кв. 10"
              rows={3}
              style={{
                width: '100%', padding: '12px 14px', fontSize: 14,
                border: '1px solid #E8D9CC', borderRadius: 2,
                outline: 'none', background: '#fff', color: '#3B2A24',
                boxSizing: 'border-box', resize: 'vertical',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <button
            onClick={handleOrder}
            disabled={loading}
            style={{
              width: '100%', background: '#3B2A24', color: '#fff',
              border: 'none', padding: 14, fontSize: 12,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              borderRadius: 2, cursor: 'pointer'
            }}
          >
            {loading ? 'Оформляем...' : 'Оформить заказ'}
          </button>
        </div>

        {/* Сводка заказа */}
        <div style={{ background: '#fff', border: '1px solid #E8D9CC', borderRadius: 4, padding: '32px', height: 'fit-content' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.3rem', color: '#3B2A24', marginBottom: 24 }}>
            Ваш заказ
          </h2>

          {cartItems.length === 0 ? (
            <p style={{ color: '#9C8478', fontSize: 14 }}>Корзина пуста</p>
          ) : (
            cartItems.map(item => (
              <div key={item.name} style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '12px 0', borderBottom: '1px solid #E8D9CC',
                fontSize: 14, color: '#3B2A24'
              }}>
                <span>{item.name} × {item.qty}</span>
                <span>${(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))
          )}

          <div style={{
            display: 'flex', justifyContent: 'space-between',
            padding: '16px 0 0', fontFamily: 'Georgia, serif',
            fontSize: '1.2rem', color: '#3B2A24', fontWeight: 600
          }}>
            <span>Итого</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

      </div>
    </main>
  );
}