'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/cart-context'

interface Product {
  id: string
  name: string
  price: number
  image: string
}

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  const { addItem } = useCart()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div className="aspect-square relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-4"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-medium mb-2">{product.name}</h3>
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold">₦{product.price.toLocaleString()}</p>
              <Button 
                onClick={() => addItem(product)}
                variant="secondary"
              >
                Add to Cart
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
