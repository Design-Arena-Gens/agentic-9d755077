'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { products } from '@/app/data/products'
import { useCart } from '@/app/context/CartContext'

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const { addToCart } = useCart()
  const productId = parseInt(params.id as string)
  const product = products.find((p) => p.id === productId)

  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <Link href="/shop" className="text-blue-600 hover:underline">
          Back to Shop
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }
    if (!selectedColor) {
      alert('Please select a color')
      return
    }

    addToCart(product, selectedSize, selectedColor)
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:underline">Home</Link>
        {' / '}
        <Link href="/shop" className="hover:underline">Shop</Link>
        {' / '}
        <span className="capitalize">{product.category}</span>
        {' / '}
        <span>{product.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</p>

          <p className="text-gray-700 mb-8">{product.description}</p>

          {/* Size Selection */}
          <div className="mb-6">
            <label className="block font-semibold mb-3">Size</label>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md transition-colors ${
                    selectedSize === size
                      ? 'bg-black text-white border-black'
                      : 'border-gray-300 hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-8">
            <label className="block font-semibold mb-3">Color</label>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border rounded-md transition-colors ${
                    selectedColor === color
                      ? 'bg-black text-white border-black'
                      : 'border-gray-300 hover:border-black'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-4 rounded-md font-semibold hover:bg-gray-800 transition-colors mb-4"
          >
            Add to Cart
          </button>

          {/* Success Message */}
          {showSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              Product added to cart!
            </div>
          )}

          {/* Product Info */}
          <div className="border-t pt-6 space-y-4 text-sm">
            <div>
              <h3 className="font-semibold mb-1">Free Shipping</h3>
              <p className="text-gray-600">On orders over $100</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Secure Payment</h3>
              <p className="text-gray-600">All transactions are encrypted</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products
            .filter((p) => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/product/${relatedProduct.id}`} className="group">
                <div className="relative overflow-hidden rounded-lg bg-gray-100 mb-4 aspect-[3/4]">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">{relatedProduct.name}</h3>
                <p className="text-lg font-bold">${relatedProduct.price.toFixed(2)}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
