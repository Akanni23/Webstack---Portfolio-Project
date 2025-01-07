import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { CartProvider } from '@/context/cart-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '2-Good Gas Limited',
  description: 'Order your gas accessories online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
