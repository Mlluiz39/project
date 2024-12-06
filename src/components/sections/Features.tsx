import { Shield, Truck, Repeat2, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Qualidade Premium',
    description: 'Materiais de alta durabilidade e acabamento superior'
  },
  {
    icon: Truck,
    title: 'Entrega Grátis',
    description: 'Para compras acima de R$ 200 em todo Brasil'
  },
  {
    icon: Repeat2,
    title: '30 Dias de Garantia',
    description: 'Satisfação garantida ou seu dinheiro de volta'
  },
  {
    icon: ThumbsUp,
    title: 'Suporte 24/7',
    description: 'Atendimento especializado para todas as suas dúvidas'
  }
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center space-y-4">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}