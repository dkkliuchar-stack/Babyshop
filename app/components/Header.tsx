'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

type Props = {
  cartCount: number;
  onCartOpen: () => void;
}

export default function Header({ cartCount, onCartOpen }: Props) {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUserEmail(data.user?.email || null);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserEmail(session?.user?.email || null);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
    setUserEmail(null);
  }

  return (
    <header className="sticky top-0 z-50 bg-[#FAF6F1]/95 border-b border-[#E8D9CC] backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Логотип */}
        <a href="/" className="font-serif text-2xl text-[#3B2A24] no-underline font-semibold">
          Baby<span className="text-[#C0785A]">Shop</span>
        </a>

        {/* Навигация — скрыта на мобиле */}
        <nav className="hidden md:flex gap-8">
          {['New Arrivals', 'Catalog', 'Collections', 'About'].map(item => (
            <a key={item} href="#"
              className="text-xs tracking-widest uppercase text-[#9C8478] no-underline hover:text-[#3B2A24] transition-colors">
              {item}
            </a>
          ))}
          <a href="/gift-configurator"
            className="text-xs tracking-widest uppercase text-[#C0785A] no-underline hover:text-[#3B2A24] transition-colors font-medium">
            Gift Finder
          </a>
        </nav>

        {/* Правая часть */}
        <div className="flex items-center gap-4">

          {/* Пользователь — скрыт на мобиле */}
          <div className="hidden md:flex items-center gap-3">
            {userEmail ? (
              <>
                <span className="text-xs text-[#9C8478] max-w-[160px] truncate">{userEmail}</span>
                <button onClick={handleSignOut}
                  className="text-xs tracking-widest uppercase text-[#9C8478] border border-[#E8D9CC] px-3 py-1.5 rounded-sm hover:border-[#3B2A24] hover:text-[#3B2A24] transition-colors bg-transparent cursor-pointer">
                  Sign Out
                </button>
              </>
            ) : (
              <a href="/auth"
                className="text-xs tracking-widest uppercase text-[#9C8478] border border-[#E8D9CC] px-3 py-1.5 rounded-sm no-underline hover:border-[#3B2A24] hover:text-[#3B2A24] transition-colors">
                Sign In
              </a>
            )}
          </div>

          {/* Корзина */}
          <button onClick={onCartOpen}
            className="relative text-[#9C8478] hover:text-[#3B2A24] transition-colors bg-transparent border-none cursor-pointer p-0">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6h18M16 10a4 4 0 01-8 0" strokeLinecap="round"/>
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 w-4 h-4 bg-[#C0785A] text-white text-[10px] rounded-full flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </button>

          {/* Hamburger — только на мобиле */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1">
            <span className={`block w-5 h-0.5 bg-[#3B2A24] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
            <span className={`block w-5 h-0.5 bg-[#3B2A24] transition-all ${menuOpen ? 'opacity-0' : ''}`}/>
            <span className={`block w-5 h-0.5 bg-[#3B2A24] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
          </button>

        </div>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#E8D9CC] bg-[#FAF6F1] px-6 py-4 flex flex-col gap-4">
          {['New Arrivals', 'Catalog', 'Collections', 'About'].map(item => (
            <a key={item} href="#"
              className="text-xs tracking-widest uppercase text-[#9C8478] no-underline">
              {item}
            </a>
          ))}
          <a href="/gift-configurator"
            className="text-xs tracking-widest uppercase text-[#C0785A] no-underline font-medium">
            Gift Finder
          </a>
          <div className="border-t border-[#E8D9CC] pt-4">
            {userEmail ? (
              <div className="flex flex-col gap-3">
                <span className="text-xs text-[#9C8478]">{userEmail}</span>
                <button onClick={handleSignOut}
                  className="text-xs tracking-widest uppercase text-[#9C8478] border border-[#E8D9CC] px-3 py-2 rounded-sm text-left bg-transparent cursor-pointer">
                  Sign Out
                </button>
              </div>
            ) : (
              <a href="/auth"
                className="text-xs tracking-widest uppercase text-[#9C8478] no-underline">
                Sign In
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}