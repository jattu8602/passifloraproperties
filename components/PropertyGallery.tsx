'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'

const PropertyGallery = () => {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
  ]

  const thumbnails = [
    { label: 'Kitchen', image: '/placeholder.svg' },
    { label: 'Living room', image: '/placeholder.svg' },
    { label: 'Bathroom', image: '/placeholder.svg' },
  ]

  return (
    <div className="relative flex flex-col lg:flex-row gap-2">
      <div className="flex-1 relative bg-muted rounded-lg overflow-hidden aspect-[16/10] md:aspect-[16/9]">
        <Badge className="absolute top-2 left-2 md:top-4 md:left-4 z-10 bg-blue-600 hover:bg-blue-700 text-xs md:text-sm">
          New
        </Badge>

        <img
          src={images[currentImage]}
          alt="Property"
          className="w-full h-full object-cover"
        />

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background rounded-full h-8 w-8 md:h-10 md:w-10 shadow-md"
          onClick={() => setCurrentImage((prev) => Math.max(0, prev - 1))}
        >
          <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background rounded-full h-8 w-8 md:h-10 md:w-10 shadow-md"
          onClick={() =>
            setCurrentImage((prev) => Math.min(images.length - 1, prev + 1))
          }
        >
          <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
        </Button>

        <Button
          variant="secondary"
          className="absolute bottom-2 left-2 md:bottom-4 md:left-4 rounded-full text-xs md:text-sm h-8 md:h-10 px-3 md:px-4"
        >
          <svg
            className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M3 12h18M3 6h18M3 18h18"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          Fly around
        </Button>

        <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-background/90 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium shadow-sm">
          1/29
        </div>
      </div>

      <div className="hidden lg:flex flex-col gap-2 w-48 xl:w-56">
        {thumbnails.map((thumb, idx) => (
          <div
            key={idx}
            className="relative bg-muted rounded-lg overflow-hidden aspect-[4/3] cursor-pointer hover:opacity-90 transition-opacity"
          >
            <img
              src={thumb.image}
              alt={thumb.label}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-background/90 px-2 py-1 rounded text-xs font-medium shadow-sm">
              {thumb.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PropertyGallery
