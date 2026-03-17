'use client';

type Props = {
  cartCount: number;
  onCartOpen: () => void;
}

export default function Header({ cartCount, onCartOpen }: Props) {
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

        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {/* Поиск */}
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9C8478' }}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Вишлист */}
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9C8478' }}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

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