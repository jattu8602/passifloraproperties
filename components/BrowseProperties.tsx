'use client'

import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/projects'
import { PropertyCard } from './PropertyCard'

export default function BrowseProperties() {
  // Select 8 projects: prioritize active
  const actives = projects.filter((p) => p.status === 'active')
  const rest = projects.filter((p) => p.status !== 'active')
  const selected = [...actives, ...rest].slice(0, 8)

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
          Featured Properties
        </h2>

        {/* Property Cards - horizontal scroll on mobile, grid on md+ */}
        <div
          ref={scrollerRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 overflow-x-auto md:overflow-visible scroll-smooth snap-x snap-mandatory [-webkit-overflow-scrolling:touch]"
        >
          {selected.map((p) => {
            const image = p.images?.[0]?.src || '/placeholder.svg'
            const toCardType = (
              t: typeof p.type
            ): 'Single-Family Home' | 'Condo' => {
              return t === 'urban' ? 'Condo' : 'Single-Family Home'
            }
            return (
              <div
                key={p.id}
                className="flex-shrink-0 min-w-[260px] w-[260px] sm:min-w-[300px] sm:w-[300px] md:min-w-0 md:w-auto snap-start"
              >
                <PropertyCard
                  image={image}
                  newHours={0}
                  propertyType={toCardType(p.type)}
                  price={p.priceFromINR ?? 0}
                  beds={0}
                  baths={0}
                  sqft={p.areaSqFtMin ?? 0}
                  address={p.title}
                  city={p.city}
                  state={p.state}
                  zip={''}
                />
              </div>
            )
          })}
        </div>

        {/* Mobile scroll indicator (small bar, close to cards) */}
        <div className="relative md:hidden h-0">
          <div
            className={`pointer-events-none absolute left-1/2 -translate-x-1/2 -top-2 h-1 w-24 rounded-full bg-black/20 transition-opacity duration-300 ${
              showIndicator ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
        {/*
        <div className="bg-gray-100 rounded-2xl p-4 sm:p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-start gap-4">
            <div className="text-3xl sm:text-4xl">🏠</div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                Exploring Properties? Let Nature Guide You.
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Find nature-rich plots and sustainable communities across India.
              </p>
            </div>
          </div>
          <a
            href="/properties"
            className="bg-black text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:bg-gray-800 transition whitespace-nowrap w-full sm:w-auto text-center"
          >
            See more properties
          </a>
        </div> */}

        <div className="bg-gray-100 rounded-2xl p-4 sm:p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-start gap-4">
            <div className="text-3xl sm:text-4xl">🏠</div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                Exploring Properties? Let Nature Guide You.
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Find nature-rich plots and sustainable communities across India.
              </p>
            </div>
          </div>
          <button className="bg-black text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:bg-gray-800 transition whitespace-nowrap w-full sm:w-auto">
            Start now
          </button>
        </div>
      </div>
    </section>
  )
}
