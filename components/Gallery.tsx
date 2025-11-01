'use client'

import { useEffect, useRef, useState } from 'react'

export default function Gallery() {
  const properties = [
    {
      id: 1,
      title: 'New Listings',
      count: 269,
      image: '/gallery/1.jpg',
    },
    {
      id: 2,
      title: 'Price Reduced',
      count: 349,
      image: '/gallery/2.jpg',
    },
    {
      id: 3,
      title: 'Open Houses',
      count: 26,
      image: '/gallery/3.jpg',
    },
    {
      id: 4,
      title: 'Recently Sold',
      count: 4299,
      image: '/gallery/4.jpg',
    },
    {
      id: 5,
      title: 'New Construction',
      count: 52,
      image: '/gallery/5.jpg',
    },
    {
      id: 6,
      title: 'Land',
      count: 59,
      image: '/gallery/6.jpg',
    },
    {
      id: 7,
      title: 'Foreclosures',
      count: 1,
      image: '/gallery/7.jpg',
    },
    {
      id: 8,
      title: 'Condos',
      count: 481,
      image: '/gallery/8.jpg',
    },
  ]

  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const hideTimerRef = useRef<number | null>(null)
  const [showIndicator, setShowIndicator] = useState(false)

  // Show the indicator on first interaction/scroll and hide after 2s of inactivity
  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const handleActivity = () => {
      setShowIndicator(true)
      if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current)
      hideTimerRef.current = window.setTimeout(
        () => setShowIndicator(false),
        2000
      )
    }

    scroller.addEventListener('scroll', handleActivity, { passive: true })
    scroller.addEventListener('touchstart', handleActivity, { passive: true })
    scroller.addEventListener('wheel', handleActivity, { passive: true })
    // Hint briefly on mount on small screens
    handleActivity()
    return () => {
      scroller.removeEventListener('scroll', handleActivity)
      scroller.removeEventListener('touchstart', handleActivity)
      scroller.removeEventListener('wheel', handleActivity)
      if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current)
    }
  }, [])

  return (
    <section className="bg-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
          Where Nature Paints Every Frame
        </h2>

        {/* Property Cards - horizontal scroll on mobile, grid on md+ */}
        <div
          ref={scrollerRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 overflow-x-auto md:overflow-visible scroll-smooth snap-x snap-mandatory [-webkit-overflow-scrolling:touch]"
        >
          {properties.map((property) => (
            <div
              key={property.id}
              className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer group flex-shrink-0 min-w-[260px] w-[260px] sm:min-w-[300px] sm:w-[300px] md:min-w-0 md:w-auto snap-start"
            >
              {/* Image */}
              <div className="relative h-44 sm:h-48 md:h-64 overflow-hidden bg-gray-200">
                <img
                  src={property.image || '/placeholder.svg'}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-between p-4">
                <div></div>
                <div>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      type="button"
                      aria-label="Like"
                      className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-md ring-1 ring-black/20 hover:scale-105 transition"
                    >
                      {/* Heart outline icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                    <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {property.count.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile scroll indicator (small bar, close to cards) */}
        <div className="relative md:hidden h-0">
          <div
            className={`pointer-events-none absolute left-1/2 -translate-x-1/2 -top-2 h-1 w-24 rounded-full bg-black/20 transition-opacity duration-300 ${
              showIndicator ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </div>
    </section>
  )
}
