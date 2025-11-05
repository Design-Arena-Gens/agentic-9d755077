export interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  description: string
  sizes: string[]
  colors: string[]
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
    category: 'men',
    description: 'Premium cotton t-shirt with a comfortable fit. Perfect for everyday wear.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Gray']
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1542272454315-7f6fabcc35a3?w=500&h=600&fit=crop',
    category: 'men',
    description: 'Modern slim fit jeans with stretch fabric for ultimate comfort.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Dark Blue', 'Light Blue', 'Black']
  },
  {
    id: 3,
    name: 'Leather Jacket',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop',
    category: 'men',
    description: 'Genuine leather jacket with a timeless design. Built to last.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Brown']
  },
  {
    id: 4,
    name: 'Cotton Polo Shirt',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=600&fit=crop',
    category: 'men',
    description: 'Classic polo shirt made from 100% cotton. Smart casual style.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'White', 'Red', 'Green']
  },
  {
    id: 5,
    name: 'Summer Dress',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=600&fit=crop',
    category: 'women',
    description: 'Elegant summer dress perfect for any occasion. Breathable fabric.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Floral', 'Solid Blue', 'Solid Red']
  },
  {
    id: 6,
    name: 'High-Waist Trousers',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop',
    category: 'women',
    description: 'Stylish high-waist trousers with a tailored fit. Office-ready.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Beige']
  },
  {
    id: 7,
    name: 'Cashmere Sweater',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop',
    category: 'women',
    description: 'Luxurious cashmere sweater for cozy comfort. Ultra-soft material.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Cream', 'Gray', 'Black', 'Camel']
  },
  {
    id: 8,
    name: 'Blazer',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=600&fit=crop',
    category: 'women',
    description: 'Professional blazer with a modern cut. Perfect for business wear.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Charcoal']
  },
  {
    id: 9,
    name: 'Denim Jacket',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1601333144130-8cbb312386b6?w=500&h=600&fit=crop',
    category: 'men',
    description: 'Classic denim jacket with a vintage wash. A wardrobe essential.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Light Wash', 'Dark Wash', 'Black']
  },
  {
    id: 10,
    name: 'Wool Scarf',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=500&h=600&fit=crop',
    category: 'accessories',
    description: 'Soft wool scarf to keep you warm. Elegant design.',
    sizes: ['One Size'],
    colors: ['Gray', 'Navy', 'Burgundy', 'Camel']
  },
  {
    id: 11,
    name: 'Leather Belt',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583f0?w=500&h=600&fit=crop',
    category: 'accessories',
    description: 'Premium leather belt with classic buckle. Versatile style.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Brown', 'Tan']
  },
  {
    id: 12,
    name: 'Canvas Sneakers',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&h=600&fit=crop',
    category: 'accessories',
    description: 'Comfortable canvas sneakers for everyday wear. Casual style.',
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['White', 'Black', 'Navy', 'Red']
  },
  {
    id: 13,
    name: 'Knit Beanie',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&h=600&fit=crop',
    category: 'accessories',
    description: 'Cozy knit beanie for cold weather. One size fits all.',
    sizes: ['One Size'],
    colors: ['Black', 'Gray', 'Navy', 'Burgundy']
  },
  {
    id: 14,
    name: 'Silk Blouse',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1564257577154-75f0c77f4d77?w=500&h=600&fit=crop',
    category: 'women',
    description: 'Elegant silk blouse with a luxurious feel. Perfect for formal occasions.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Blush', 'Navy', 'Black']
  },
  {
    id: 15,
    name: 'Chino Pants',
    price: 64.99,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=600&fit=crop',
    category: 'men',
    description: 'Classic chino pants with a modern fit. Versatile and comfortable.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Khaki', 'Navy', 'Olive', 'Black']
  },
  {
    id: 16,
    name: 'Tote Bag',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=600&fit=crop',
    category: 'accessories',
    description: 'Spacious leather tote bag for work or travel. Durable construction.',
    sizes: ['One Size'],
    colors: ['Black', 'Brown', 'Tan', 'Navy']
  }
]
