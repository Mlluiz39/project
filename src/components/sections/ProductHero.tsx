import { ShoppingCart, Droplets, Wind, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ProductHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-32">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold tracking-tight">
              Hidratação com{' '}
              <span className="text-primary">Estilo</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Descubra nossa linha premium de garrafas de água, projetadas para 
              acompanhar seu estilo de vida ativo com elegância e sustentabilidade.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full">
                Comprar agora
                <ShoppingCart className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Saiba mais
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { icon: Droplets, label: 'Livre de BPA' },
                { icon: Wind, label: 'Isolamento térmico' },
                { icon: Leaf, label: 'Eco-friendly' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl" />
            <img
              src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=500"
              alt="Premium Water Bottle"
              className="relative w-full h-auto product-image float-animation"
            />
          </div>
        </div>
      </div>
    </section>
  );
}