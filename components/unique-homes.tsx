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

      {/* Oval Black Background */}
      {/* Oval Black Background */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[60%] lg:w-[50%] h-[70%] md:h-[60%] rounded-[50%] z-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.72) 55%, rgba(0,0,0,0.30) 76%, rgba(0,0,0,0) 100%), repeating-conic-gradient(from 0deg at 50% 50%, rgba(0,0,0,0.05) 0deg 2deg, rgba(0,0,0,0) 2deg 8deg), repeating-conic-gradient(from 1.5deg at 50% 50%, rgba(0,0,0,0.04) 0deg 1.5deg, rgba(0,0,0,0) 1.5deg 7deg)',
          backgroundBlendMode: 'normal, soft-light, soft-light',
          filter: 'blur(140px)',
          mixBlendMode: 'multiply',
          maskImage:
            'radial-gradient(ellipse at center, rgba(0,0,0,1) 48%, rgba(0,0,0,0.88) 60%, rgba(0,0,0,0.65) 73%, rgba(0,0,0,0.35) 84%, rgba(0,0,0,0.16) 92%, rgba(0,0,0,0.06) 96%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, rgba(0,0,0,1) 48%, rgba(0,0,0,0.88) 60%, rgba(0,0,0,0.65) 73%, rgba(0,0,0,0.35) 84%, rgba(0,0,0,0.16) 92%, rgba(0,0,0,0.06) 96%, rgba(0,0,0,0) 100%)',
        }}
      ></div>

      {/* Outer scattered halo to blend beyond the edge */}
      <div
        className="hidden md:block pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[70%] lg:w-[60%] h-[80%] md:h-[70%] rounded-[50%] z-0"
        style={{
          background:
            'repeating-conic-gradient(from 0deg at 50% 50%, rgba(0,0,0,0.06) 0deg 1deg, rgba(0,0,0,0) 1deg 6deg), repeating-conic-gradient(from .75deg at 50% 50%, rgba(0,0,0,0.04) 0deg 0.8deg, rgba(0,0,0,0) 0.8deg 5deg)',
          backgroundBlendMode: 'multiply, multiply',
          mixBlendMode: 'multiply',
          filter: 'blur(240px)',
          maskImage:
            'radial-gradient(ellipse at center, rgba(0,0,0,0) 0 58%, rgba(0,0,0,1) 68% 100%), radial-gradient(ellipse at center, rgba(0,0,0,1) 0 90%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, rgba(0,0,0,0) 0 58%, rgba(0,0,0,1) 68% 100%), radial-gradient(ellipse at center, rgba(0,0,0,1) 0 90%, rgba(0,0,0,0) 100%)',
        }}
      ></div>

      {/* Content */}

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
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
