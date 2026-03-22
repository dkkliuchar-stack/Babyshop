export default function Footer() {
  const links = {
    Shop: ['New Arrivals', 'Bodysuits', 'Rompers', 'Accessories'],
    Help: ['Shipping & Returns', 'Size Guide', 'FAQ', 'Contact Us'],
  };

  return (
    <footer className="bg-[#3B2A24] px-6 pt-14 pb-8">
      <div className="max-w-6xl mx-auto">

        {/* Верхняя часть */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Логотип */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="font-serif text-2xl text-white mb-3">
              Baby<span className="text-[#C0785A]">Shop</span>
            </div>
            <p className="text-sm leading-relaxed text-white/40 max-w-[200px]">
              Premium organic clothing for the smallest members of your family.
            </p>
          </div>

          {/* Ссылки Shop и Help */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <div className="text-[11px] tracking-[0.14em] uppercase text-white font-medium mb-4">
                {title}
              </div>
              <div className="flex flex-col gap-2.5">
                {items.map(item => (
                  <a key={item} href="#"
                    className="text-sm text-white/50 no-underline hover:text-white/80 transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Подписка */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="text-[11px] tracking-[0.14em] uppercase text-white font-medium mb-3">
              Stay in Touch
            </div>
            <p className="text-sm text-white/40 mb-3">
              Get 10% off your first order.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 min-w-0 px-3.5 py-2.5 text-sm border border-white/15 bg-white/7 text-white outline-none rounded-l-sm placeholder:text-white/30"
              />
              <button className="bg-[#C0785A] text-white border-none px-4 py-2.5 text-[11px] tracking-[0.1em] uppercase rounded-r-sm cursor-pointer hover:bg-[#a8614a] transition-colors whitespace-nowrap">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Нижняя часть */}
        <div className="border-t border-white/8 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/25">
            © 2026 BabyShop. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Use'].map(item => (
              <a key={item} href="#"
                className="text-xs text-white/40 no-underline hover:text-white/70 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}