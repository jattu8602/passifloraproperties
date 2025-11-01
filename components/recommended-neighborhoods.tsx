'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FeatureCard from '@/components/FeatureCard'
import trustIcon from '../public/assets/trust-icon.png'
import legalIcon from '../public/assets/legal-icon.png'
import valueIcon from '../public/assets/value-icon.png'
import supportIcon from '../public/assets/support-icon.png'
import profitIcon from '../public/assets/profit-icon.png'
import professionalsIcon from '../public/assets/professionals-icon.png'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function RecommendedNeighborhoods() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const features = [
    {
      illustration: trustIcon,
      text: '25+ Years of Trust – Backed by decades of real estate experience and expertise.',
    },
    {
      illustration: legalIcon,
      text: '100% Legal & Verified Lands – Transparent documentation and clear titles.',
    },
    {
      illustration: valueIcon,
      text: 'Value-for-Money Locations – Premium plots handpicked for growth and accessibility.',
    },
    {
      illustration: supportIcon,
      text: 'Property Management Support – Buy, hold, or resell — we assist you at every step.',
    },
    {
      illustration: profitIcon,
      text: 'Earn from Your Land – Through FPO partnerships, your farmland generates real profit.',
    },
    {
      illustration: professionalsIcon,
      text: 'Trusted by Professionals – Preferred by doctors, defense personnel & celebrities.',
    },
  ]

  // Set up scroll animations
  useLayoutEffect(() => {
    if (!sectionRef.current) return

    const cards = cardsRef.current.filter(Boolean)

    const ctx = gsap.context(() => {
      // Set initial state for all cards
      gsap.set(cards, {
        opacity: 0,
        y: 60,
        scale: 0.9,
      })

      // Animate each card on scroll
      cards.forEach((card, index) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.1, // Stagger effect
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-2 text-foreground">
        Why Choose Passiflora Properties
      </h2>
      <p className="text-muted-foreground mb-8 md:mb-12 text-base md:text-lg">
        Where Trust Takes Root, and Your Land Grows Into Legacy
      </p>

      {/* Desktop Grid - 2x2 Grid */}
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el
            }}
          >
            <FeatureCard
              illustration={feature.illustration.src}
              text={feature.text}
            />
          </div>
        ))}
      </div>

      {/* Mobile Horizontal Scroll */}
      {/* <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
        <div className="flex gap-4 min-w-max">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden border border-border shadow-sm w-[280px] flex-shrink-0"
            >
              <div className="w-full h-40 bg-secondary relative overflow-hidden">
                <img
                  src={feature.illustration.src}
                  alt={feature.text}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-card-foreground">
                  {feature.text}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  )
}
