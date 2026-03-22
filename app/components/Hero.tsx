'use client';

export default function Hero() {
  return (
    <section className="bg-[#F2E8DF] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-14">

        {/* Текст */}
        <div className="flex-1 w-full">
          <p className="text-xs tracking-[0.14em] uppercase text-[#C0785A] mb-4">
            Spring / Summer 2026
          </p>

          <h1 className="font-serif text-[clamp(2.4rem,8vw,5rem)] leading-[1.06] text-[#3B2A24] font-medium mb-6">
            Dressed in<br/>softness<br/>
            <em className="text-[#C0785A]">&amp; love.</em>
          </h1>

          <p className="text-[15px] leading-relaxed text-[#9C8478] max-w-sm mb-8">
            Premium organic cotton clothing for babies 0–24 months.
            Safe dyes, gentle fabrics, thoughtful details.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#catalog"
              className="bg-[#3B2A24] text-white text-xs tracking-[0.14em] uppercase px-7 py-3.5 rounded-sm no-underline text-center hover:bg-[#2a1e1a] transition-colors">
              Shop Collection
            </a>
            <a href="#"
              className="border border-[#3B2A24] text-[#3B2A24] text-xs tracking-[0.14em] uppercase px-6 py-3 rounded-sm no-underline text-center hover:bg-[#3B2A24] hover:text-white transition-colors">
              View Lookbook
            </a>
          </div>
        </div>

        {/* Фото — на мобиле снизу, на компе справа */}
        <div className="flex-1 w-full flex justify-center">
          <div className="rounded-md overflow-hidden w-full max-w-[420px]" style={{ aspectRatio: '4/5' }}>
            <img
              src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=85"
              alt="Baby fashion"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}