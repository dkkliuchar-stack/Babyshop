'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function AuthPage() {
  const [mode, setMode] = useState<'login' | 'register'>('register');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    setMessage('');

    if (mode === 'register') {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) setMessage('Ошибка: ' + error.message);
      else setMessage('Проверь почту — мы отправили письмо для подтверждения!');
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMessage('Ошибка: ' + error.message);
      else window.location.href = '/';
    }

    setLoading(false);
  }

  return (
    <main style={{ background: '#FAF6F1', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        background: '#fff', border: '1px solid #E8D9CC',
        borderRadius: 4, padding: '48px 40px', width: '100%', maxWidth: 420
      }}>

        {/* Логотип */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', color: '#3B2A24' }}>
            Baby<span style={{ color: '#C0785A' }}>Shop</span>
          </div>
        </div>

        {/* Переключатель */}
        <div style={{ display: 'flex', marginBottom: 28, border: '1px solid #E8D9CC', borderRadius: 2 }}>
          {(['register', 'login'] as const).map(m => (
            <button key={m} onClick={() => setMode(m)} style={{
              flex: 1, padding: '10px 0', fontSize: 12,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              border: 'none', cursor: 'pointer',
              background: mode === m ? '#3B2A24' : 'transparent',
              color: mode === m ? '#fff' : '#9C8478',
              borderRadius: 2
            }}>
              {m === 'register' ? 'Регистрация' : 'Вход'}
            </button>
          ))}
        </div>

        {/* Email */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9C8478', display: 'block', marginBottom: 6 }}>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            style={{
              width: '100%', padding: '12px 14px', fontSize: 14,
              border: '1px solid #E8D9CC', borderRadius: 2,
              outline: 'none', background: '#FAF6F1', color: '#3B2A24',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: 24 }}>
          <label style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9C8478', display: 'block', marginBottom: 6 }}>
            Пароль
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="минимум 6 символов"
            style={{
              width: '100%', padding: '12px 14px', fontSize: 14,
              border: '1px solid #E8D9CC', borderRadius: 2,
              outline: 'none', background: '#FAF6F1', color: '#3B2A24',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Кнопка */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            width: '100%', background: '#3B2A24', color: '#fff',
            border: 'none', padding: 14, fontSize: 12,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            borderRadius: 2, cursor: 'pointer'
          }}
        >
          {loading ? 'Загрузка...' : mode === 'register' ? 'Создать аккаунт' : 'Войти'}
        </button>

        {/* Сообщение */}
        {message && (
          <div style={{
            marginTop: 16, padding: '12px 14px', borderRadius: 2, fontSize: 13,
            background: message.includes('Ошибка') ? '#FFF0F0' : '#F0FFF4',
            color: message.includes('Ошибка') ? '#C0392B' : '#27AE60',
            border: `1px solid ${message.includes('Ошибка') ? '#F5C6C6' : '#A8E6B8'}`
          }}>
            {message}
          </div>
        )}

        {/* Ссылка на главную */}
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <a href="/" style={{ fontSize: 13, color: '#9C8478', textDecoration: 'none' }}>
            ← Вернуться в магазин
          </a>
        </div>

      </div>
    </main>
  );
}