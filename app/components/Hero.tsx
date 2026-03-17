export default function Hero() {
    return (
      <section style={{
        background: '#F2E8DF',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: 1152,
          margin: '0 auto',
          padding: '80px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: 56,
        }}>
  
          {/* Текст */}
          <div style={{ flex: 1 }}>
            <p style={{
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#C0785A',
              marginBottom: 16
            }}>Spring / Summer 2026</p>
  
            <h1 style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              lineHeight: 1.06,
              color: '#3B2A24',
              fontWeight: 500,
              marginBottom: 24
            }}>
              Dressed in<br/>softness<br/>
              <em style={{ color: '#C0785A' }}>&amp; love.</em>
            </h1>
  
            <p style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: '#9C8478',
              maxWidth: 360,
              marginBottom: 32
            }}>
              Premium organic cotton clothing for babies 0–24 months.
              Safe dyes, gentle fabrics, thoughtful details.
            </p>
  
            <div style={{ display: 'flex', gap: 16 }}>
              <a href="#catalog" style={{
                background: '#3B2A24',
                color: '#fff',
                fontSize: 11,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '13px 28px',
                borderRadius: 2,
                textDecoration: 'none'
              }}>Shop Collection</a>
  
              <a href="#" style={{
                background: 'transparent',
                color: '#3B2A24',
                fontSize: 11,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '12px 24px',
                border: '1px solid #3B2A24',
                borderRadius: 2,
                textDecoration: 'none'
              }}>View Lookbook</a>
            </div>
          </div>
  
          {/* Фото */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <div style={{
              borderRadius: 6,
              overflow: 'hidden',
              aspectRatio: '4/5',
              maxWidth: 420,
              width: '100%'
            }}>
              <img
                src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=85"
                alt="Baby fashion"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
  
        </div>
      </section>
    );
  }