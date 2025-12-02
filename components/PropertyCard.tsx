import { Heart } from 'lucide-react'
import { useState } from 'react'

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
}: PropertyCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false)

  const formatPrice = (price: number) => {
    return `$${price.toLocaleString()}`
  }

  const formatNumber = (num: number) => {
    return num.toLocaleString()
  }

  return (
    <div className="bg-card rounded-[1rem] overflow-hidden transition-all duration-300 shadow-lg h-[260px] flex flex-col group">
      <div className="relative h-full">
        <img
          src={image}
          alt={`${propertyType} at ${address}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-sm font-medium">
            New - {newHours} hours ago
          </span>
        </div> */}
        {/* <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
          aria-label="Add to favorites"
        >
          <Heart
            className="w-5 h-5 transition-colors"
            color={isFavorited ? '#ef4444' : '#4b5563'}
            fill={isFavorited ? '#ef4444' : 'none'}
          />
        </button> */}
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
  )
}
