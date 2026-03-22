'use client';

type Props = {
  id: string;
  name: string;
  price: number;
  badge?: string;
  category: string;
  image: string;
  onAddToCart: (name: string, price: number) => void;
}

export default function ProductCard({ id, name, price, badge, category, image, onAddToCart }: Props) {
  return (
    <a href={`/product/${id}`} className="bg-white border border-[#E8D9CC] rounded-sm overflow-hidden group block no-underline">

      {/* Фото */}
      <div className="relative overflow-hidden bg-[#F2E8DF]" style={{ aspectRatio: '3/4' }}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badge && (
          <span className={`absolute top-3 left-3 text-white text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-sm ${badge === 'Sale' ? 'bg-[#3B2A24]' : 'bg-[#C0785A]'}`}>
            {badge}
          </span>
        )}
        <button
          onClick={e => e.preventDefault()}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 border border-[#E8D9CC] rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
          <svg width="14" height="14" fill="none" stroke="#C0785A" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>

      {/* Инфо */}
      <div className="p-5">
        <p className="text-[10px] tracking-[0.12em] uppercase text-[#9C8478]">{category}</p>
        <h3 className="font-serif text-lg text-[#3B2A24] mt-2 mb-4">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="font-serif text-xl font-semibold text-[#3B2A24]">
            ${price.toFixed(2)}
          </span>
          <button
            onClick={e => { e.preventDefault(); onAddToCart(name, price); }}
            className="bg-[#3B2A24] text-white text-[11px] tracking-[0.14em] uppercase px-5 py-3 rounded-sm border-none cursor-pointer hover:bg-[#C0785A] transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>

    </a>
  );
}