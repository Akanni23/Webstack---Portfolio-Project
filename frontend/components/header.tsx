import Link from 'next/link'
import Image from 'next/image'
import { Home, Phone, Mail } from 'lucide-react'
import { Cart } from './cart'

export function Header() {
  return (
    <header>
      <div className="bg-white py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <Link href="/" className="mb-4 md:mb-0">
            <Image 
              src="https://onegas.ng/wp-content/uploads/2021/07/onegas-logo.png" 
              alt="ONEGAS LIMITED" 
              width={150} 
              height={50}
              className="h-12 w-auto"
            />
          </Link>
          <div className="flex flex-col md:flex-row gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Home className="text-orange-500 h-4 w-4" />
              <div>
                <p>ONEGAS refilling plant, Tinapa road,</p>
                <p>Off 8 miles, Calabar</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-orange-500 h-4 w-4" />
              <div>
                <p>Call Us Anytime</p>
                <p>+234 708 833 4008</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-orange-500 h-4 w-4" />
              <div>
                <p>Send us a mail</p>
                <p>info@onegas.ng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-[#1a237e] text-white">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <ul className="flex items-center space-x-8 h-14">
            <li>
              <Link href="/services" className="hover:text-orange-500 transition-colors">
                SERVICES
              </Link>
            </li>
            <li>
              <Link href="/order-a-refill" className="hover:text-orange-500 transition-colors">
                ORDER A REFILL
              </Link>
            </li>
            <li>
              <Link href="/buy-accessories" className="text-orange-500">
                BUY ACCESSORIES
              </Link>
            </li>
          </ul>
          <Cart />
        </div>
      </nav>
    </header>
  )
}
