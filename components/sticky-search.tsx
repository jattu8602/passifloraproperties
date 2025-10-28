'use client'

import { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { useIsMobile } from '@/hooks/use-mobile'

export default function StickySearch() {
  const [isVisible, setIsVisible] = useState(false)
  const [location, setLocation] = useState('Maharashtra, India')
  const isMobile = useIsMobile()

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Desktop: keep existing scrollY threshold behavior
    if (!isMobile) {
      const handleScroll = () => {
        setIsVisible(window.scrollY > 300)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }

    // Mobile: use IntersectionObserver with hero sentinel
    const sentinel = document.getElementById('hero-sentinel')
    if (!sentinel) {
      // Fallback to threshold if sentinel missing
      const handleScroll = () => setIsVisible(window.scrollY > 300)
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0]
          // When sentinel is NOT intersecting, hero is out of view → show sticky
          setIsVisible(!entry.isIntersecting)
        },
        {
          root: null,
          threshold: 0,
        }
      )
      observer.observe(sentinel)
      return () => observer.disconnect()
    } else {
      const handleScroll = () => setIsVisible(window.scrollY > 300)
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobile])

  return (
    <div
      className={`fixed top-0 left-0 right-0 ${
        // Ensure overlay above header on mobile
        isMobile ? 'z-[60]' : 'z-40'
      } bg-white border-b border-gray-200 transition-all duration-300 motion-reduce:transition-none motion-reduce:transform-none ${
        isVisible
          ? 'opacity-100 translate-y-0 shadow-md'
          : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
      style={{
        paddingTop: isMobile
          ? 'CSS' in window &&
            (window as any).CSS.supports &&
            (window as any).CSS.supports('padding: env(safe-area-inset-top)')
            ? 'env(safe-area-inset-top)'
            : undefined
          : undefined,
      }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 md:py-3">
        <div className="flex items-center justify-center">
          <div className="bg-white rounded-full p-1.5 md:p-2 flex items-center gap-2 shadow-lg max-w-full sm:max-w-2xl w-full border border-gray-300">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City, address, or ZIP"
              className="flex-1 px-3 md:px-4 py-2 outline-none text-gray-800 placeholder-gray-500 text-sm md:text-base"
            />
            <button className="text-gray-400 hover:text-gray-600 transition p-2 hidden md:inline-flex">
              <X size={18} />
            </button>
            <button className="bg-black text-white p-2 md:p-2.5 rounded-full hover:bg-gray-800 transition shrink-0">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
