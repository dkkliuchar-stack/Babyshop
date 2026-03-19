'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

type Props = {
  cartCount: number;
  onCartOpen: () => void;
}

export default function Header({ cartCount, onCartOpen }: Props) {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUserEmail(data.user?.email || null);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserEmail(session?.user?.email || null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
    setUserEmail(null);
  }

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(250,246,241,0.93)',
      borderBottom: '1px solid #E8D9CC',
      backdropFilter: 'blur(12px)'
    }}>
      <div style={{
        maxWidth: 1152, margin: '0 auto',
        padding: '16px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <a href="/" style={{
          fontFamily: 'Georgia, serif', fontSize: '1.6rem',
          color: '#3B2A24', textDecoration: 'none', fontWeight: 600
        }}>
          Baby<span style={{ color: '#C0785A' }}>Shop</span>
        </a>

        <nav style={{ display: 'flex', gap: 32 }}>
          {['New Arrivals', 'Catalog', 'Collections', 'About'].map(item => (
            <a key={item} href="#" style={{
              fontSize: 12, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#9C8478', textDecoration: 'none'
            }}>{item}</a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>

          {/* Пользователь */}
          {userEmail ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 12, color: '#9C8478' }}>{userEmail}</span>
              <button onClick={handleSignOut} style={{
                background: 'none', border: '1px solid #E8D9CC',
                padding: '6px 12px', fontSize: 11,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: '#9C8478', cursor: 'pointer', borderRadius: 2
              }}>Sign Out</button>
            </div>
          ) : (
            <a href="/auth" style={{
              background: 'none', border: '1px solid #E8D9CC',
              padding: '6px 12px', fontSize: 11,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#9C8478', textDecoration: 'none', borderRadius: 2
            }}>Sign In</a>
          )}

          {/* Корзина */}
          <button onClick={onCartOpen} style={{
            position: 'relative', background: 'none',
            border: 'none', cursor: 'pointer', color: '#9C8478'
          }}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6h18M16 10a4 4 0 01-8 0" strokeLinecap="round"/>
            </svg>
            {cartCount > 0 && (
              <span style={{
                position: 'absolute', top: -6, right: -8,
                width: 17, height: 17,
                background: '#C0785A', color: '#fff',
                fontSize: 10, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 500
              }}>{cartCount}</span>
            )}
          </button>

        </div>
      </div>
    </header>
  );
}