'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, X } from 'lucide-react'
import { useIsMobile } from '@/hooks/use-mobile'

export default function StickySearch() {
  // Start hidden; we'll decide visibility once the hero bar is found/observed
  const [isVisible, setIsVisible] = useState(false)
  const [canShow, setCanShow] = useState(false)
  const [location, setLocation] = useState('Maharashtra, India')
  const isMobile = useIsMobile()
  const debounceRef = useRef<number | null>(null)
  const lastRatioRef = useRef(1)
  const mountedRef = useRef(false)
  const retryTimeoutRef = useRef<number | null>(null)
  const hasAttachedRef = useRef(false)
  const heroElementFoundRef = useRef(false)
  const initialDelayRef = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const clearRetry = () => {
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current)
        retryTimeoutRef.current = null
      }
    }

    const tryAttachMobile = () => {
      const el = document.getElementById('hero-search-bar')
      if (el && 'IntersectionObserver' in window) {
        heroElementFoundRef.current = true
        // Hysteresis: show when ratio <= 0.02, hide when >= 0.12
        const SHOW_THRESHOLD = 0.02
        const HIDE_THRESHOLD = 0.12
        const observer = new IntersectionObserver(
          (entries) => {
            const entry = entries[0]
            const ratio = entry.intersectionRatio
            lastRatioRef.current = ratio
            if (debounceRef.current) cancelAnimationFrame(debounceRef.current)
            debounceRef.current = requestAnimationFrame(() => {
              // Check if any modal is open before showing
              const hasModal = document.querySelector(
                '[role="dialog"][aria-modal]'
              )
              if (hasModal || !initialDelayRef.current) {
                setIsVisible(false)
                return
              }
              setIsVisible((prev) => {
                if (!entry.isIntersecting || ratio <= SHOW_THRESHOLD)
                  return true
                if (ratio >= HIDE_THRESHOLD) return false
                return prev
              })
            })
          },
          {
            root: null,
            threshold: [0, SHOW_THRESHOLD, HIDE_THRESHOLD, 1],
            rootMargin: '0px 0px 0px 0px',
          }
        )
        observer.observe(el)
        hasAttachedRef.current = true
        return () => observer.disconnect()
      } else {
        // Element not present yet; ensure hidden and retry shortly
        setIsVisible(false)
        retryTimeoutRef.current = window.setTimeout(tryAttachMobile, 120)
      }
      return () => {}
    }

    // Desktop: show when hero search is in its ending phase (mostly gone)
    const tryAttachDesktop = () => {
      const desktopEl = document.getElementById('hero-search-bar')
      if (!isMobile && desktopEl && 'IntersectionObserver' in window) {
        heroElementFoundRef.current = true
        // Hysteresis for desktop: show <= 0.08, hide >= 0.18
        const SHOW_THRESHOLD = 0.08
        const HIDE_THRESHOLD = 0.18
        const observer = new IntersectionObserver(
          (entries) => {
            const entry = entries[0]
            const ratio = entry.intersectionRatio
            lastRatioRef.current = ratio
            if (debounceRef.current) cancelAnimationFrame(debounceRef.current)
            debounceRef.current = requestAnimationFrame(() => {
              // Check if any modal is open before showing
              const hasModal = document.querySelector(
                '[role="dialog"][aria-modal]'
              )
              if (hasModal || !initialDelayRef.current) {
                setIsVisible(false)
                return
              }
              setIsVisible((prev) => {
                if (ratio <= SHOW_THRESHOLD) return true
                if (ratio >= HIDE_THRESHOLD) return false
                return prev
              })
            })
          },
          {
            root: null,
            threshold: [0, SHOW_THRESHOLD, HIDE_THRESHOLD, 1],
            rootMargin: '-4px 0px 0px 0px',
          }
        )
        observer.observe(desktopEl)
        hasAttachedRef.current = true
        return () => observer.disconnect()
      } else if (!isMobile) {
        setIsVisible(false)
        retryTimeoutRef.current = window.setTimeout(tryAttachDesktop, 120)
      }
      return () => {}
    }

    // Prefer IntersectionObserver to follow the hero search bar visibility precisely
    let cleanup: (() => void) | undefined
    if (isMobile) {
      cleanup = tryAttachMobile()
    } else {
      cleanup = tryAttachDesktop()
    }

    // Fallback: scroll threshold based on element position if we never attach
    const handleScroll = () => {
      const target = document.getElementById('hero-search-bar')
      if (!target) return // keep current state until element exists

      // Check if any modal is open or initial delay hasn't passed
      const hasModal = document.querySelector('[role="dialog"][aria-modal]')
      if (hasModal || !initialDelayRef.current) {
        setIsVisible(false)
        return
      }

      const rect = target.getBoundingClientRect()
      // When the bottom of the bar is near the top (ending phase)
      setIsVisible(rect.bottom <= 16)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearRetry()
      if (cleanup) cleanup()
    }
  }, [isMobile])

  // Initial delay - wait 800ms after mount before allowing sticky search
  useEffect(() => {
    const timer = setTimeout(() => {
      initialDelayRef.current = true
      setCanShow(true)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  // Watch for modal opening/closing to hide sticky search
  useEffect(() => {
    if (typeof window === 'undefined') return

    const checkModal = () => {
      const hasModal = document.querySelector('[role="dialog"][aria-modal]')
      if (hasModal) {
        setIsVisible(false)
        setCanShow(false)
      } else if (initialDelayRef.current) {
        // Allow showing again only after initial delay has passed
        setCanShow(true)
      }
    }

    // Check immediately
    checkModal()

    // Watch for modal additions/removals
    const observer = new MutationObserver(checkModal)
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['role', 'aria-modal'],
    })

    return () => observer.disconnect()
  }, [])

  // Avoid initial flash on mount
  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 right-0 ${
        // Ensure overlay above header on mobile
        isMobile ? 'z-[60]' : 'z-40'
      } bg-white border-b border-gray-200 transition-all duration-300 motion-reduce:transition-none motion-reduce:transform-none ${
        isVisible && canShow
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
