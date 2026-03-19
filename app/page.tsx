'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import Cart from './components/Cart';

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

  const products = [
    { name: 'Bunny Bodysuit', price: 24.00, badge: 'New', category: 'Bodysuit', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=85' },
    { name: 'Cloud Romper', price: 34.00, badge: 'Sale', category: 'Romper', image: 'https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=600&q=85' },
    { name: 'Bear Knit Hat', price: 18.00, category: 'Accessory', image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&q=85' },
  ];

  return (
    <main style={{ background: '#FAF6F1', minHeight: '100vh' }}>
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Hero />
      <section id="catalog" style={{ maxWidth: 1152, margin: '0 auto', padding: '60px 24px' }}>
        <h2 style={{
          fontFamily: 'Georgia, serif', fontSize: '2rem',
          color: '#3B2A24', marginBottom: 40, textAlign: 'center'
        }}>New Arrivals</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {products.map(product => (
            <ProductCard key={product.name} {...product} onAddToCart={addToCart} />
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