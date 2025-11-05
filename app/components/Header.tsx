'use client'

import Link from 'next/link'
import { useCart } from '../context/CartContext'
import { useState } from 'react'

export default function Header() {
  const { totalItems } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            FASHION
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-gray-600 transition-colors">
              Home
            </Link>
            <Link href="/shop" className="hover:text-gray-600 transition-colors">
              Shop
            </Link>
            <Link href="/shop?category=men" className="hover:text-gray-600 transition-colors">
              Men
            </Link>
            <Link href="/shop?category=women" className="hover:text-gray-600 transition-colors">
              Women
            </Link>
            <Link href="/shop?category=accessories" className="hover:text-gray-600 transition-colors">
              Accessories
            </Link>
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative hover:text-gray-600 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="cart-badge absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2">
            <Link
              href="/"
              className="block py-2 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block py-2 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/shop?category=men"
              className="block py-2 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Men
            </Link>
            <Link
              href="/shop?category=women"
              className="block py-2 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Women
            </Link>
            <Link
              href="/shop?category=accessories"
              className="block py-2 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Accessories
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
