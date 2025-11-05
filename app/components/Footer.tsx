import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">FASHION</h3>
            <p className="text-gray-400 text-sm">
              Your destination for premium clothing and accessories. Quality meets style.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop?category=men" className="text-gray-400 hover:text-white">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/shop?category=women" className="text-gray-400 hover:text-white">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/shop?category=accessories" className="text-gray-400 hover:text-white">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-white">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400 hover:text-white cursor-pointer">Contact Us</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">Shipping Info</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">Returns</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">Size Guide</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400 hover:text-white cursor-pointer">Instagram</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">Facebook</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">Twitter</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">Pinterest</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Fashion Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
