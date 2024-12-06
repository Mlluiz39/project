import { useState } from 'react';
import { ShoppingCart, Rotate3D } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProductCustomizer } from './ProductCustomizer';
import '@/styles/animations.css';

interface ProductCardProps {
  name: string;
  capacity: string;
  price: number;
  image: string;
  color: string;
}

export function ProductCard({ name, capacity, price, image: defaultImage, color: defaultColor }: ProductCardProps) {
  const [color, setColor] = useState(defaultColor);
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [isRotated, setIsRotated] = useState(false);

  const currentImage = customImage || defaultImage;

  return (
    <div className="mx-auto max-w-md">
      <Card className="relative overflow-hidden rounded-3xl bg-white p-8">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-sm font-medium text-neutral-500">Hidratação</p>
            <h2 className="text-3xl font-bold">{name}</h2>
            <p className="text-xl font-medium">{capacity}</p>
            <p className="text-sm text-neutral-500">CAPACIDADE</p>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full"
            onClick={() => setIsRotated(!isRotated)}
          >
            <Rotate3D className="h-5 w-5" />
          </Button>
        </div>

        <div className="relative mt-8 aspect-square">
          <div
            className="absolute inset-0 rounded-2xl transition-colors duration-500"
            style={{ backgroundColor: color }}
          />
          <img
            src={currentImage}
            alt={name}
            className={`relative h-full w-full object-contain p-8 product-image float-animation transition-transform duration-500 ${
              isRotated ? 'rotate-y-180' : ''
            }`}
            style={{
              transform: isRotated ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          />
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">
              R$ {price.toFixed(2)}
            </span>
            <Button className="rounded-full px-6" size="lg">
              Adicionar
              <ShoppingCart className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <ProductCustomizer
            currentColor={color}
            onColorChange={setColor}
            onImageUpload={setCustomImage}
          />
        </div>
      </Card>
    </div>
  );
}