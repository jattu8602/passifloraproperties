'use client'

import { useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLHeadingElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const paragraph1Ref = useRef<HTMLParagraphElement>(null)
  const paragraph2Ref = useRef<HTMLParagraphElement>(null)
  const linkRef = useRef<HTMLDivElement>(null)

  // Set up scroll animations
  useLayoutEffect(() => {
    if (!sectionRef.current) return

    // Wait for all refs to be available
    const elements = {
      tagline: taglineRef.current,
      image: imageRef.current,
      heading: headingRef.current,
      paragraph1: paragraph1Ref.current,
      paragraph2: paragraph2Ref.current,
      link: linkRef.current,
    }

    // Check if all elements exist
    if (!Object.values(elements).every((el) => el !== null)) return

    // Configure ScrollTrigger for mobile
    ScrollTrigger.config({
      autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
      ignoreMobileResize: true,
    })

    const ctx = gsap.context(() => {
      // Set initial states for all elements
      gsap.set(elements.tagline, {
        opacity: 0,
        y: 40,
      })
      gsap.set(elements.image, {
        opacity: 0,
        scale: 0.9,
      })
      gsap.set(
        [
          elements.heading,
          elements.paragraph1,
          elements.paragraph2,
          elements.link,
        ],
        {
          opacity: 0,
          y: 40,
        }
      )

      // Common ScrollTrigger settings for mobile optimization
      const mobileStart = 'top 95%'
      const desktopStart = 'top 90%'
      const isMobile = window.innerWidth < 768

      // Animate tagline first (top heading)
      gsap.to(elements.tagline, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: elements.tagline,
          start: isMobile ? mobileStart : desktopStart,
          end: 'top 70%',
          toggleActions: 'play none none reverse',
          markers: false,
          refreshPriority: 0,
        },
      })

      // Animate image
      gsap.to(elements.image, {
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: elements.image,
          start: isMobile ? mobileStart : 'top 85%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
          markers: false,
          refreshPriority: 0,
        },
      })

      // Animate heading
      gsap.to(elements.heading, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: elements.heading,
          start: isMobile ? mobileStart : desktopStart,
          end: 'top 60%',
          toggleActions: 'play none none reverse',
          markers: false,
          refreshPriority: 0,
        },
      })

      // Animate paragraph 1
      gsap.to(elements.paragraph1, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: elements.paragraph1,
          start: isMobile ? mobileStart : desktopStart,
          end: 'top 60%',
          toggleActions: 'play none none reverse',
          markers: false,
          refreshPriority: 0,
        },
      })

      // Animate paragraph 2
      gsap.to(elements.paragraph2, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: elements.paragraph2,
          start: isMobile ? mobileStart : desktopStart,
          end: 'top 60%',
          toggleActions: 'play none none reverse',
          markers: false,
          refreshPriority: 0,
        },
      })

      // Animate link
      gsap.to(elements.link, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: elements.link,
          start: isMobile ? mobileStart : desktopStart,
          end: 'top 60%',
          toggleActions: 'play none none reverse',
          markers: false,
          refreshPriority: 0,
        },
      })

      // Refresh ScrollTrigger on resize for better mobile support
      const handleResize = () => {
        ScrollTrigger.refresh()
      }

      window.addEventListener('resize', handleResize)
      // Also refresh after a short delay to ensure everything is loaded
      const refreshTimeout = setTimeout(() => {
        ScrollTrigger.refresh()
      }, 100)

      // Store timeout reference for cleanup
      ctx.add(() => {
        window.removeEventListener('resize', handleResize)
        clearTimeout(refreshTimeout)
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white scroll-smooth"
    >
      <div className="max-w-7xl mx-auto">
        {/* Tagline Heading - Top of Section */}
        <h1
          ref={taglineRef}
          className="text-2xl font-bold italic text-foreground mb-8 md:mb-12 text-center"
        >
          Passiflora Properties – where your land works for you, not the other
          way around.
        </h1>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Side - Left on Desktop */}
          <div ref={imageRef} className="order-1 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/logo.png"
                alt="Passiflora Properties - Premium land developments"
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Text Content Side - Right on Desktop */}
          <div className="order-2 md:order-2 space-y-6">
            {/* Heading */}
            <h2
              ref={headingRef}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground"
            >
              About Passiflora Properties
            </h2>

            {/* Paragraph 1 */}
            <p
              ref={paragraph1Ref}
              className="text-base md:text-lg text-foreground/80 leading-relaxed"
            >
              A trusted luxury real estate brand with 25+ years of expertise,
              specialising in premium, legally verified land developments across
              India's most scenic destinations.
            </p>

            {/* Paragraph 2 */}
            <p
              ref={paragraph2Ref}
              className="text-base md:text-lg text-foreground/80 leading-relaxed"
            >
              We curate farm plots, villas, and second-home projects designed
              for peace, prosperity, and sustainable long-term returns —
              blending nature, value, and transparency in every investment.
            </p>

            {/* Read Our Story Link */}
            <div ref={linkRef} className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors duration-200 group"
              >
                Read Our Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
