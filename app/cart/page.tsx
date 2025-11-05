'use client'

import Link from 'next/link'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart()

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Add some items to get started!</p>
        <Link
          href="/shop"
          className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                className="flex gap-4 bg-white p-4 rounded-lg border"
              >
                {/* Product Image */}
                <Link
                  href={`/product/${item.id}`}
                  className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden flex-shrink-0"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </Link>

                {/* Product Details */}
                <div className="flex-1">
                  <Link href={`/product/${item.id}`}>
                    <h3 className="font-semibold text-lg hover:underline">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-gray-600">
                    Size: {item.selectedSize} | Color: {item.selectedColor}
                  </p>
                  <p className="font-bold mt-2">${item.price.toFixed(2)}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center border rounded-md">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.selectedSize,
                            item.selectedColor,
                            item.quantity - 1
                          )
                        }
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 border-x">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.selectedSize,
                            item.selectedColor,
                            item.quantity + 1
                          )
                        }
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() =>
                        removeFromCart(item.id, item.selectedSize, item.selectedColor)
                      }
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {/* Item Total */}
                <div className="text-right">
                  <p className="font-bold text-lg">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={clearCart}
            className="mt-6 text-red-600 hover:text-red-800 text-sm"
          >
            Clear Cart
          </button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">
                  {totalPrice > 100 ? 'FREE' : '$10.00'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (Estimated)</span>
                <span className="font-semibold">${(totalPrice * 0.08).toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>
                    ${(
                      totalPrice +
                      (totalPrice > 100 ? 0 : 10) +
                      totalPrice * 0.08
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {totalPrice < 100 && (
              <p className="text-sm text-gray-600 mb-4">
                Add ${(100 - totalPrice).toFixed(2)} more for free shipping!
              </p>
            )}

            <button className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors mb-3">
              Proceed to Checkout
            </button>

            <Link
              href="/shop"
              className="block text-center text-sm text-gray-600 hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
