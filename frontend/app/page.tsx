'use client'

import { useState } from 'react'
import { Hero } from '@/components/hero'
import { ProductGrid } from '@/components/product-grid'
import { Search } from '@/components/search'

const products = [
  {
    id: '1',
    name: '12.5kg Gas Cylinder (Iron)',
    price: 30000,
    image: 'https://onegas.ng/wp-content/uploads/2021/07/12.5kg-Gas-Cylinder-Iron.jpg'
  },
  {
    id: '2',
    name: 'Burner',
    price: 1700,
    image: 'https://onegas.ng/wp-content/uploads/2021/07/Burner.jpg'
  },
  {
    id: '3',
    name: 'Burner (Black)',
    price: 3000,
    image: 'https://onegas.ng/wp-content/uploads/2021/07/Burner-Black.jpg'
  },
  {
    id: '4',
    name: 'Gas Hose',
    price: 1500,
    image: 'https://onegas.ng/wp-content/uploads/2021/07/Gas-Hose.jpg'
  },
  {
    id: '5',
    name: 'Gas Regulator',
    price: 2000,
    image: 'https://onegas.ng/wp-content/uploads/2021/07/Gas-Regulator.jpg'
  },
  {
    id: '6',
    name: 'Cylinder Stand',
    price: 3500,
    image: 'https://onegas.ng/wp-content/uploads/2021/07/Cylinder-Stand.jpg'
  }
]

export default function AccessoriesPage() {
  const [filteredProducts, setFilteredProducts] = useState(products)

  const handleSearch = (query: string) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredProducts(filtered)
  }

  return (
    <main>
      <Hero 
        title="Order your accessories" 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Order your accessories', href: '/order-your-accessories' }
        ]}
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mb-8">
          <Search onSearch={handleSearch} />
        </div>
        <ProductGrid products={filteredProducts} />
      </div>
    </main>
  )
}
