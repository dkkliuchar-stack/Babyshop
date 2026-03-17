export default function Header() {
    return (
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(250,246,241,0.93)',
        borderBottom: '1px solid #E8D9CC',
        backdropFilter: 'blur(12px)'
      }}>
        <div style={{
          maxWidth: 1152,
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <a href="/" style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.6rem',
            color: '#3B2A24',
            textDecoration: 'none',
            fontWeight: 600
          }}>
            Baby<span style={{ color: '#C0785A' }}>Shop</span>
          </a>
  
          <nav style={{ display: 'flex', gap: 32 }}>
            {['New Arrivals', 'Catalog', 'Collections', 'About'].map(item => (
              <a key={item} href="#" style={{
                fontSize: 12,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#9C8478',
                textDecoration: 'none'
              }}>{item}</a>
            ))}
          </nav>
        </div>
      </header>
    );
  }