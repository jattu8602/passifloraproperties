'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useIsMobile } from '@/hooks/use-mobile'

export default function UniqueHomes() {
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    const button = buttonRef.current
    const bg = bgRef.current
    const text = textRef.current

    if (!button || !bg || !text) return

    // On mobile, set default white background and black text, no animation
    if (isMobile) {
      gsap.set(bg, { scaleY: 1 })
      gsap.set(text, { color: '#000000' })
      return
    }

    // Desktop: Set initial state and add hover animations
    gsap.set(bg, {
      scaleY: 0,
      transformOrigin: 'bottom',
    })
    gsap.set(text, { color: '#ffffff' })

    const handleMouseEnter = () => {
      gsap.to(bg, {
        scaleY: 1,
        transformOrigin: 'bottom',
        duration: 0.4,
        ease: 'power2.out',
      })
      gsap.to(text, {
        color: '#000000',
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(bg, {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 0.4,
        ease: 'power2.in',
      })
      gsap.to(text, {
        color: '#ffffff',
        duration: 0.3,
        ease: 'power2.in',
      })
    }

    button.addEventListener('mouseenter', handleMouseEnter)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isMobile])
  return (
    <section className="relative h-80 md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1723489268790-aee936eb6abd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW4lMjB0aGUlMjBtZWRpYSUyMG5ld3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <p className="text-white text-3xl md:text-5xl mb-4 font-[family-name:var(--font-pacifico)] font-normal">
          In The Media
        </p>
        <h2 className="text-1.5xl md:text-3xl font-bold text-white mb-3 md:mb-4 max-w-3xl leading-tight text-balance">
          "Who cares what we think, see what others are saying about us."
        </h2>
        <p className="text-white/90 max-w-3xl mb-6 md:mb-8 text-sm md:text-base leading-relaxed italic">
          We don’t just sell plots — we create purpose, value, and belonging for
          generations to come.
        </p>
        <a
          ref={buttonRef}
          href="/about"
          className="relative px-6 md:px-8 py-3 border-2 border-white text-white font-bold rounded-full overflow-hidden"
        >
          {/* Animated background */}
          <div
            ref={bgRef}
            className="absolute inset-0 bg-white"
            style={{
              transform: 'scaleY(0)',
              transformOrigin: 'bottom',
            }}
          />
          {/* Text */}
          <span ref={textRef} className="relative z-10">
            Catch the coverage
          </span>
        </a>
      </div>
    </section>
  )
}
