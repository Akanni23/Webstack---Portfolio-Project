'use client'

import { ShoppingCart, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useCart } from '@/context/cart-context'
import Image from 'next/image'
import { Input } from '@/components/ui/input'

export function Cart() {
  const { items, removeItem, updateQuantity, total } = useCart()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="relative w-20 h-20">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-muted-foreground">
                  ₦{item.price.toLocaleString()}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-20"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
          {items.length === 0 && (
            <p className="text-center text-muted-foreground">Your cart is empty</p>
          )}
          {items.length > 0 && (
            <div className="border-t pt-4">
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>₦{total.toLocaleString()}</span>
              </div>
              <Button className="w-full mt-4">Checkout</Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
