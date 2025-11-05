'use client'

import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { products } from './data/products'

export default function Home() {
  const featuredProducts = products.slice(0, 8)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Elevate Your Style
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Discover our curated collection of premium clothing for the modern wardrobe
          </p>
          <Link
            href="/shop"
            className="bg-white text-black px-8 py-4 text-lg font-semibold rounded-md hover:bg-gray-200 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Collection</h2>
          <p className="text-gray-600 text-lg">Handpicked favorites from our latest arrivals</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/shop?category=men" className="group relative h-80 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-blue-600 group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative h-full flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">Men</h3>
              </div>
            </Link>
            <Link href="/shop?category=women" className="group relative h-80 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-pink-600 group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative h-full flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">Women</h3>
              </div>
            </Link>
            <Link href="/shop?category=accessories" className="group relative h-80 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-purple-600 group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative h-full flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">Accessories</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-black text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="mb-6 text-gray-300">Get exclusive deals and updates on new arrivals</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-black"
            />
            <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
