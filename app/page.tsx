'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { products } from '../lib/products';

type CartItem = {
  name: string;
  price: number;
  qty: number;
}

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('cart');
      if (saved) setCartItems(JSON.parse(saved));
    } catch {}
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems, mounted]);

  function addToCart(name: string, price: number) {
    setCartItems(prev => {
      const existing = prev.find(i => i.name === name);
      if (existing) return prev.map(i => i.name === name ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { name, price, qty: 1 }];
    });
    setCartOpen(true);
  }

  function changeQty(name: string, delta: number) {
    setCartItems(prev => {
      const item = prev.find(i => i.name === name);
      if (!item) return prev;
      if (item.qty + delta <= 0) return prev.filter(i => i.name !== name);
      return prev.map(i => i.name === name ? { ...i, qty: i.qty + delta } : i);
    });
  }

  function removeItem(name: string) {
    setCartItems(prev => prev.filter(i => i.name !== name));
  }

  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);

  return (
    <main className="bg-[#FAF6F1] min-h-screen">
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Hero />

      <section id="catalog" className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <h2 className="font-serif text-3xl md:text-4xl text-[#3B2A24] mb-8 md:mb-12 text-center">
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              badge={product.badge}
              category={product.category}
              image={product.colors[0].image}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </section>

      <Footer />

      {cartOpen && (
        <Cart
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onChangeQty={changeQty}
          onRemove={removeItem}
        />
      )}
    </main>
  );
}