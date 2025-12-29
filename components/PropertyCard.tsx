import { Heart } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

interface PropertyCardProps {
  image: string
  newHours: number
  propertyType: 'Single-Family Home' | 'Condo'
  price: number
  beds: number
  baths: number
  sqft: number
  address: string
  city: string
  state: string
  zip: string
  href?: string
}

export const PropertyCard = ({
  image,
  newHours,
  propertyType,
  price,
  beds,
  baths,
  sqft,
  address,
  city,
  state,
  zip,
  href = '#',
}: PropertyCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false)

  const formatPrice = (price: number) => {
    return `$${price.toLocaleString()}`
  }

  const formatNumber = (num: number) => {
    return num.toLocaleString()
  }

  return (
    <Link href={href} className="block cursor-pointer group">
      <div className="bg-card rounded-[1rem] overflow-hidden transition-all duration-300 shadow-lg h-[260px] flex flex-col">
        <div className="relative h-full">
          <img
            src={image}
            alt={`${propertyType} at ${address}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Address overlay */}
          <div className="absolute inset-0 flex items-end pointer-events-none">
            <div className="w-full p-3 bg-gradient-to-t from-black/60 to-transparent">
              <div className="text-white text-sm font-semibold leading-snug">
                {address}
              </div>
              <div className="text-white/80 text-xs">
                {city}, {state} {zip}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
