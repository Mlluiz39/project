import { ProductCard } from './ProductCard'

import AquaBottleImage from '../../assets/images/aquas-bottle.jpg'
import UrbanBottleImage from '../../assets/images/bottle.jpg'
import KidsBottleImage from '../../assets/images/kids-bottle.jpg'

const products = [
  {
    id: 1,
    name: 'AquaFit Pro',
    capacity: '750ml',
    price: 89.9,
    image:
      AquaBottleImage,
    color: '#FF4B4B',
    category: 'sport',
  },
  {
    id: 2,
    name: 'Urban Bottle',
    capacity: '500ml',
    price: 69.9,
    image: UrbanBottleImage,
    color: '#4B9EFF',
    category: 'casual',
  },
  {
    id: 3,
    name: 'Kids Joy',
    capacity: '350ml',
    price: 49.9,
    image: KidsBottleImage,
    color: '#FFD54B',
    category: 'kids',
  },
]

export function ProductGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}
