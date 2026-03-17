type Props = {
    name: string;
    price: number;
    badge?: string;
    category: string;
    image: string;
  }
  
  export default function ProductCard({ name, price, badge, category, image }: Props) {
    return (
      <div style={{
        background: '#fff',
        border: '1px solid #E8D9CC',
        borderRadius: 4,
        overflow: 'hidden',
        transition: 'transform 0.3s, box-shadow 0.3s',
      }}>
        <div style={{ height: 320, overflow: 'hidden', position: 'relative', background: '#F2E8DF' }}>
          <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          {badge && (
            <span style={{
              position: 'absolute', top: 14, left: 14,
              background: badge === 'Sale' ? '#3B2A24' : '#C0785A',
              color: '#fff', fontSize: 10, letterSpacing: '0.12em',
              textTransform: 'uppercase', padding: '4px 10px', borderRadius: 2
            }}>{badge}</span>
          )}
        </div>
        <div style={{ padding: '20px 22px 22px' }}>
          <div style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9C8478' }}>{category}</div>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem', color: '#3B2A24', margin: '8px 0 4px' }}>{name}</h3>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 16 }}>
            <span style={{ fontFamily: 'Georgia, serif', fontSize: '1.4rem', fontWeight: 600, color: '#3B2A24' }}>
              ${price.toFixed(2)}
            </span>
            <button style={{
              background: '#3B2A24', color: '#fff', fontSize: 11,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '12px 22px', border: 'none', borderRadius: 2, cursor: 'pointer'
            }}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }