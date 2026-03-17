export default function Footer() {
    const links = {
      Shop: ['New Arrivals', 'Bodysuits', 'Rompers', 'Accessories'],
      Help: ['Shipping & Returns', 'Size Guide', 'FAQ', 'Contact Us'],
    };
  
    return (
      <footer style={{ background: '#3B2A24', padding: '60px 24px 32px' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto' }}>
  
          {/* Верхняя часть */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 2fr', gap: 40, marginBottom: 48 }}>
  
            {/* Логотип */}
            <div>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', color: '#fff', marginBottom: 12 }}>
                Baby<span style={{ color: '#C0785A' }}>Shop</span>
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', maxWidth: 200 }}>
                Premium organic clothing for the smallest members of your family.
              </p>
            </div>
  
            {/* Ссылки */}
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <div style={{
                  fontSize: 11, letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: '#fff',
                  marginBottom: 16, fontWeight: 500
                }}>{title}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {items.map(item => (
                    <a key={item} href="#" style={{
                      fontSize: 13, color: 'rgba(255,255,255,0.5)',
                      textDecoration: 'none'
                    }}>{item}</a>
                  ))}
                </div>
              </div>
            ))}
  
            {/* Подписка */}
            <div>
              <div style={{
                fontSize: 11, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: '#fff',
                marginBottom: 12, fontWeight: 500
              }}>Stay in Touch</div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 12 }}>
                Get 10% off your first order.
              </p>
              <div style={{ display: 'flex' }}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  style={{
                    flex: 1, padding: '10px 14px', fontSize: 13,
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(255,255,255,0.07)',
                    color: '#fff', outline: 'none',
                    borderRadius: '2px 0 0 2px'
                  }}
                />
                <button style={{
                  background: '#C0785A', color: '#fff', border: 'none',
                  padding: '10px 16px', fontSize: 11,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  borderRadius: '0 2px 2px 0', cursor: 'pointer'
                }}>Join</button>
              </div>
            </div>
  
          </div>
  
          {/* Нижняя часть */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: 22,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>
              © 2026 BabyShop. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: 20 }}>
              {['Privacy Policy', 'Terms of Use'].map(item => (
                <a key={item} href="#" style={{
                  fontSize: 12, color: 'rgba(255,255,255,0.4)',
                  textDecoration: 'none'
                }}>{item}</a>
              ))}
            </div>
          </div>
  
        </div>
      </footer>
    );
  }