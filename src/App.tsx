import { ProductHero } from '@/components/sections/ProductHero';
import { ProductGrid } from '@/components/products/ProductGrid';
import { Navbar } from '@/components/layout/Navbar';
import { Features } from '@/components/sections/Features';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <main>
        <ProductHero />
        <Features />
        <section id="products" className="py-24">
          <div className="container">
            <h2 className="text-center text-3xl font-bold mb-12">Nossa Coleção</h2>
            <ProductGrid />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;