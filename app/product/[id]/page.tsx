'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { products } from '../../../lib/products';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';

type CartItem = { name: string; price: number; qty: number; }

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  if (!product) {
    return (
      <main className="bg-[#FAF6F1] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#9C8478] text-lg mb-4">Товар не найден</p>
          <a href="/" className="text-[#3B2A24] underline">← На главную</a>
        </div>
      </main>
    );
  }

  const currentImage = product.colors[selectedColor].image;
  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);

  function addToCart() {
    if (!selectedSize) {
      alert('Выберите размер');
      return;
    }
    const name = `${product!.name} — ${product!.colors[selectedColor].name}, ${selectedSize}`;
    setCartItems(prev => {
      const existing = prev.find(i => i.name === name);
      if (existing) return prev.map(i => i.name === name ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { name, price: product!.price, qty: 1 }];
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

  return (
    <main className="bg-[#FAF6F1] min-h-screen">
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />

      <div className="max-w-6xl mx-auto px-6 py-10 md:py-16">

        {/* Назад */}
        <a href="/" className="text-sm text-[#9C8478] no-underline hover:text-[#3B2A24] transition-colors mb-8 inline-block">
          ← Назад в каталог
        </a>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Фото */}
          <div className="bg-[#F2E8DF] rounded-sm overflow-hidden" style={{ aspectRatio: '1/1' }}>
            <img
              src={currentImage}
              alt={product.name}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </div>

          {/* Инфо */}
          <div className="flex flex-col">

            {/* Категория + название */}
            <p className="text-xs tracking-[0.14em] uppercase text-[#9C8478] mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl text-[#3B2A24] mb-3">
              {product.name}
            </h1>
            <p className="font-serif text-2xl text-[#3B2A24] mb-6">
              ${product.price.toFixed(2)}
            </p>

            {/* Цвета */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.1em] uppercase text-[#9C8478] mb-3">
                Колір — <span className="text-[#3B2A24]">{product.colors[selectedColor].name}</span>
              </p>
              <div className="flex gap-3 flex-wrap">
                {product.colors.map((color, i) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(i)}
                    title={color.name}
                    className={`w-8 h-8 rounded-full border-2 transition-all cursor-pointer ${
                      selectedColor === i
                        ? 'border-[#3B2A24] scale-110'
                        : 'border-transparent hover:border-[#9C8478]'
                    }`}
                    style={{ background: color.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Размеры */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.1em] uppercase text-[#9C8478] mb-3">
                Розмір
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 text-sm border rounded-sm cursor-pointer transition-all ${
                      selectedSize === size
                        ? 'bg-[#3B2A24] text-white border-[#3B2A24]'
                        : 'bg-transparent text-[#3B2A24] border-[#E8D9CC] hover:border-[#3B2A24]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Кнопка */}
            <button
              onClick={addToCart}
              className="w-full bg-[#3B2A24] text-white py-4 text-xs tracking-[0.14em] uppercase rounded-sm border-none cursor-pointer hover:bg-[#C0785A] transition-colors mb-8"
            >
              Додати в кошик
            </button>

            {/* Описание */}
            <div className="border-t border-[#E8D9CC] pt-6">
              <p className="text-sm text-[#9C8478] leading-relaxed mb-4">
                {product.description}
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 text-sm">
                  <span className="text-[#9C8478] w-20">Тканина</span>
                  <span className="text-[#3B2A24]">{product.fabric}</span>
                </div>
                <div className="flex gap-3 text-sm">
                  <span className="text-[#9C8478] w-20">Розміри</span>
                  <span className="text-[#3B2A24]">{product.sizes.join(', ')}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />

      {cartOpen && (
        <Cart
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onChangeQty={changeQty}
          onRemove={(name) => setCartItems(prev => prev.filter(i => i.name !== name))}
        />
      )}
    </main>
  );
}