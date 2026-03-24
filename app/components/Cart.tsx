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

const TEXT = {
  title: 'Кошик',
  item1: 'товар',
  item2: 'товари',
  item5: 'товарів',
  empty: 'Кошик порожній',
  total: 'Разом',
  checkout: 'Оформити замовлення',
  continue: 'Продовжити покупки',
};

export default function Cart({ items, onClose, onChangeQty, onRemove }: Props) {
  const safeItems = items || [];
  const total = safeItems.reduce((s, i) => s + i.price * i.qty, 0);
  const displayTotal = Math.round(total * 100) / 100;
  const count = safeItems.reduce((s, i) => s + i.qty, 0);
  const countLabel = count === 1 ? TEXT.item1 : count < 5 ? TEXT.item2 : TEXT.item5;

  return (
    <div translate="no">
      <div onClick={onClose} className="fixed inset-0 bg-[#3B2A24]/20 z-[199]" />

      <div className="fixed top-0 right-0 w-[380px] max-w-full h-screen bg-white border-l border-[#E8D9CC] z-[200] flex flex-col">

        <div className="px-6 py-5 border-b border-[#E8D9CC] flex items-center">
          <div className="flex-1">
            <div className="font-serif text-xl text-[#3B2A24]">{TEXT.title}</div>
            <div className="text-xs text-[#9C8478] mt-0.5">{count} {countLabel}</div>
          </div>
          <button onClick={onClose} className="text-[#9C8478] hover:text-[#3B2A24] transition-colors bg-transparent border-none cursor-pointer text-xl leading-none p-1">
            x
          </button>
        </div>

        <div translate="no" className="flex-1 overflow-y-auto px-6 py-2">
          {safeItems.length === 0 ? (
            <div className="text-center py-14 text-[#9C8478] text-sm">{TEXT.empty}</div>
          ) : (
            <div>
              {safeItems.map(item => (
                <div key={item.name} className="flex items-center gap-3 py-4 border-b border-[#E8D9CC]">
                  <div className="w-12 h-12 bg-[#F2E8DF] rounded-sm flex-shrink-0 flex items-center justify-center text-xl">
                    🧺
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-[#3B2A24] font-medium truncate">{item.name}</div>
                    <div className="text-sm text-[#C0785A] mt-0.5">${item.price.toFixed(2)}</div>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <button onClick={() => onChangeQty(item.name, -1)} className="w-7 h-7 border border-[#E8D9CC] bg-transparent cursor-pointer rounded-sm flex items-center justify-center text-[#3B2A24] hover:border-[#3B2A24] transition-colors">
                      -
                    </button>
                    <span className="text-sm min-w-[20px] text-center text-[#3B2A24] font-medium">{item.qty}</span>
                    <button onClick={() => onChangeQty(item.name, 1)} className="w-7 h-7 border border-[#E8D9CC] bg-transparent cursor-pointer rounded-sm flex items-center justify-center text-[#3B2A24] hover:border-[#3B2A24] transition-colors">
                      +
                    </button>
                  </div>
                  <button onClick={() => onRemove(item.name)} className="text-[#9C8478] hover:text-[#3B2A24] transition-colors bg-transparent border-none cursor-pointer text-sm p-1 flex-shrink-0">
                    x
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="px-6 py-5 border-t border-[#E8D9CC]">
          <div className="flex justify-between mb-5">
            <span className="text-xs text-[#9C8478] uppercase tracking-[0.08em]">{TEXT.total}</span>
            <span className="font-serif text-xl text-[#3B2A24] font-semibold">${displayTotal.toFixed(2)}</span>
          </div>
          <a href="/checkout" className="block w-full bg-[#3B2A24] text-white text-center text-xs tracking-[0.14em] uppercase py-3.5 rounded-sm no-underline mb-2.5 hover:bg-[#C0785A] transition-colors">
            {TEXT.checkout}
          </a>
          <button onClick={onClose} className="w-full bg-transparent text-[#3B2A24] border border-[#3B2A24] text-xs tracking-[0.14em] uppercase py-3 rounded-sm cursor-pointer hover:bg-[#3B2A24] hover:text-white transition-colors">
            {TEXT.continue}
          </button>
        </div>

      </div>
    </div>
  );
}