'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function ShopContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'all')
  const [sortBy, setSortBy] = useState<string>('featured')

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [categoryParam])

  let filteredProducts = products

  // Filter by category
  if (selectedCategory !== 'all') {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
    )
  }

  // Sort products
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
  } else if (sortBy === 'name') {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      a.name.localeCompare(b.name)
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Shop</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Category Filter */}
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="all">All Products</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>

        {/* Sort Filter */}
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2">Sort By</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="featured">Featured</option>
            <option value="name">Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-gray-600 mb-6">
        Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
      </p>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found in this category.</p>
        </div>
      )}
    </div>
  )
}

export default function Shop() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading...</div>}>
      <ShopContent />
    </Suspense>
  )
}
