import Link from 'next/link'
import { Product } from '../data/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="relative overflow-hidden rounded-lg bg-gray-100 mb-4 aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
      <p className="text-gray-600 mb-2 text-sm capitalize">{product.category}</p>
      <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
    </Link>
  )
}
