'use client';

type CartItem = {
  name: string;
  price: number;
  qty: number;
}

type Props = {
  items: CartItem[];
  onClose: () => void;
  onChangeQty: (name: string, delta: number) => void;
  onRemove: (name: string) => void;
}

export default function Cart({ items, onClose, onChangeQty, onRemove }: Props) {
  const safeItems = items || [];
  const total = safeItems.reduce((s, i) => s + i.price * i.qty, 0);
  const displayTotal = Math.round(total * 100) / 100;
  const count = safeItems.reduce((s, i) => s + i.qty, 0);

  return (
    <div>
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(59,42,36,0.22)',
          zIndex: 199
        }}
      />
      <div style={{
        position: 'fixed', top: 0, right: 0,
        width: 380, height: '100vh',
        background: '#fff',
        borderLeft: '1px solid #E8D9CC',
        zIndex: 200,
        display: 'flex', flexDirection: 'column'
      }}>

        <div style={{
          padding: '22px 24px',
          borderBottom: '1px solid #E8D9CC',
          display: 'flex', alignItems: 'center'
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', color: '#3B2A24' }}>Your Cart</div>
            <div style={{ fontSize: 12, color: '#9C8478' }}>{count} item{count !== 1 ? 's' : ''}</div>
          </div>
          <button onClick={onClose} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#9C8478', fontSize: 20, lineHeight: 1
          }}>x</button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 24px' }}>
          {safeItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '52px 0', color: '#9C8478', fontSize: 14 }}>
              Your cart is empty
            </div>
          ) : (
            safeItems.map(item => (
              <div key={item.name} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '14px 0', borderBottom: '1px solid #E8D9CC'
              }}>
                <div style={{
                  width: 52, height: 52, background: '#F2E8DF',
                  borderRadius: 3, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20
                }}>🧺</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, color: '#3B2A24', fontWeight: 500 }}>{item.name}</div>
                  <div style={{ fontSize: 13, color: '#C0785A', marginTop: 2 }}>${item.price.toFixed(2)}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <button onClick={() => onChangeQty(item.name, -1)} style={{
                    width: 28, height: 28, border: '1px solid #E8D9CC',
                    background: 'transparent', cursor: 'pointer',
                    borderRadius: 2, fontSize: 16, lineHeight: 1,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#3B2A24'
                  }}>-</button>
                  <span style={{
                    fontSize: 14, minWidth: 20, textAlign: 'center',
                    color: '#3B2A24', display: 'inline-block', fontWeight: 500
                  }}>{item.qty}</span>
                  <button onClick={() => onChangeQty(item.name, 1)} style={{
                    width: 28, height: 28, border: '1px solid #E8D9CC',
                    background: 'transparent', cursor: 'pointer',
                    borderRadius: 2, fontSize: 16, lineHeight: 1,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#3B2A24'
                  }}>+</button>
                </div>
                <button onClick={() => onRemove(item.name)} style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: '#9C8478', fontSize: 15, padding: 4
                }}>x</button>
              </div>
            ))
          )}
        </div>

        <div style={{ padding: '18px 24px', borderTop: '1px solid #E8D9CC' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
            <span style={{ fontSize: 12, color: '#9C8478', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Subtotal</span>
            <span style={{ fontFamily: 'Georgia, serif', fontSize: '1.3rem', color: '#3B2A24', fontWeight: 600 }}>
              ${displayTotal.toFixed(2)}
            </span>
          </div>
          <a href="/checkout" style={{
            display: 'block', width: '100%', background: '#3B2A24', color: '#fff',
            border: 'none', padding: 14, fontSize: 11,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            borderRadius: 2, cursor: 'pointer', marginBottom: 10,
            textAlign: 'center', textDecoration: 'none',
            boxSizing: 'border-box'
          }}>Proceed to Checkout</a>
          <button onClick={onClose} style={{
            width: '100%', background: 'transparent', color: '#3B2A24',
            border: '1px solid #3B2A24', padding: 12, fontSize: 11,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            borderRadius: 2, cursor: 'pointer'
          }}>Continue Shopping</button>
        </div>

      </div>
    </div>
  );
}