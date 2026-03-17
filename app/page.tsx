import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

export default function Home() {
  const products = [
    {
      name: 'Bunny Bodysuit',
      price: 24.00,
      badge: 'New',
      category: 'Bodysuit',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=85'
    },
    {
      name: 'Cloud Romper',
      price: 34.00,
      badge: 'Sale',
      category: 'Romper',
      image: 'https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=600&q=85'
    },
    {
      name: 'Bear Knit Hat',
      price: 18.00,
      category: 'Accessory',
      image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&q=85'
    },
  ];

  return (
    <main style={{ background: '#FAF6F1', minHeight: '100vh' }}>
      <Header />
      <Hero />
      <section id="catalog" style={{ maxWidth: 1152, margin: '0 auto', padding: '60px 24px' }}>
        <h2 style={{
          fontFamily: 'Georgia, serif',
          fontSize: '2rem',
          color: '#3B2A24',
          marginBottom: 40,
          textAlign: 'center'
        }}>New Arrivals</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32
        }}>
          {products.map(product => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}