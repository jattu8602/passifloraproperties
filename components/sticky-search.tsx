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

    // Prefer IntersectionObserver to follow the hero search bar visibility precisely
    if (isMobile) {
      const el = document.getElementById('hero-search-bar')
      if (el && 'IntersectionObserver' in window) {
        const OBS_THRESHOLD = 0 // change to 0.2 if you want to trigger earlier, when partially hidden
        const OBS_ROOT_MARGIN = '0px 0px 0px 0px' // use '-48px 0px 0px 0px' to trigger earlier

        const observer = new IntersectionObserver(
          (entries) => {
            const entry = entries[0]
            setIsVisible(!entry.isIntersecting)
            // or: setIsVisible(entry.intersectionRatio < OBS_THRESHOLD)
          },
          { root: null, threshold: OBS_THRESHOLD, rootMargin: OBS_ROOT_MARGIN }
        )
        observer.observe(el)
        return () => observer.disconnect()
      }
    }

    // Desktop: show when hero search is in its ending phase (mostly gone)
    const desktopEl = document.getElementById('hero-search-bar')
    if (!isMobile && desktopEl && 'IntersectionObserver' in window) {
      // Trigger when <= 10% of the bar remains visible
      const DESKTOP_THRESHOLD = 0.1
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0]
          setIsVisible(entry.intersectionRatio <= DESKTOP_THRESHOLD)
        },
        { root: null, threshold: [DESKTOP_THRESHOLD, 0] }
      )
      observer.observe(desktopEl)
      return () => observer.disconnect()
    }

    // Fallback: scroll threshold based on element position
    const handleScroll = () => {
      const target = document.getElementById('hero-search-bar')
      if (!target) {
        setIsVisible(window.scrollY > 300)
        return
      }
      const rect = target.getBoundingClientRect()
      // When the bottom of the bar is near the top (ending phase)
      setIsVisible(rect.bottom <= 16)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
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
