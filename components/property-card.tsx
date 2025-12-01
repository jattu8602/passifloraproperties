'use client'

import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

interface PropertyCardProps {
  title: string
  shortSummary: string
  highlights: string[]
  imageUrl: string
  link: string
  index: number
}

// Visit Button Component with GSAP Animation
function VisitButton({ href }: { href: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const arrowRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const arrow = arrowRef.current
    if (!wrapper || !arrow) return

    // Only apply on desktop (md and above)
    const checkDesktop = () => window.innerWidth >= 768
    if (!checkDesktop()) return

    const handleMouseEnter = () => {
      if (checkDesktop()) {
        gsap.to(arrow, {
          scale: 1.3,
          duration: 0.3,
          ease: 'power2.out',
        })
      }
    }

    const handleMouseLeave = () => {
      if (checkDesktop()) {
        gsap.to(arrow, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        })
      }
    }

    wrapper.addEventListener('mouseenter', handleMouseEnter)
    wrapper.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      wrapper.removeEventListener('mouseenter', handleMouseEnter)
      wrapper.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div ref={wrapperRef} className="mt-4 md:mt-6">
      <Link href={href} className="block">
        <Button
          variant="default"
          size="lg"
          className="bg-black text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-bold hover:bg-gray-800 transition-all duration-300 text-base lg:text-lg flex items-center gap-2 w-full sm:w-auto shadow-md hover:shadow-lg group"
        >
          <span>Visit Property</span>
          <ArrowUpRight
            ref={arrowRef}
            className="w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Button>
      </Link>
    </div>
  )
}

export function PropertyCard({
  title,
  shortSummary,
  highlights,
  imageUrl,
  link,
  index,
}: PropertyCardProps) {
  const isEven = index % 2 === 1
  const imageFirst = !isEven

  return (
    <div className="w-full overflow-hidden rounded-2xl lg:rounded-3xl border border-border/40 bg-card shadow-lg hover:shadow-xl transition-all duration-500 group/card">
      {/* Mobile Layout - Stacked */}
      <div className="md:hidden">
        <div className="relative w-full h-64 sm:h-72 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-4 left-4 right-4">
             <h2 className="text-2xl font-bold text-white drop-shadow-md">
                {title}
             </h2>
          </div>
        </div>
        <div className="p-6 space-y-4 bg-card">
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {shortSummary}
          </p>
          <div className="space-y-3">
             <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider opacity-80">Highlights</h3>
             <ul className="space-y-2">
                {highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm"
                  >
                    <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground/80">{highlight}</span>
                  </li>
                ))}
              </ul>
          </div>
          <Link href={link} className="block mt-6">
            <Button
              variant="default"
              size="lg"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition w-full text-base flex items-center justify-center gap-2"
            >
              <span>View Details</span>
              <ArrowUpRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Desktop Layout - Alternating */}
      <div
        className={`hidden md:flex min-h-[450px] ${
          imageFirst ? 'flex-row' : 'flex-row-reverse'
        }`}
      >
        {/* Image Section */}
        <div className="relative w-1/2 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover/card:scale-110"
          />
          <div className="absolute inset-0 bg-black/10 group-hover/card:bg-transparent transition-colors duration-500" />
        </div>

        {/* Content Section */}
        <div className="w-1/2 p-8 lg:p-12 xl:p-16 flex flex-col justify-center bg-card relative">
          <div className="space-y-6 relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight tracking-tight">
              {title}
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
              {shortSummary}
            </p>

            <div className="pt-2">
                <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-widest mb-4">Key Highlights</h3>
                <ul className="grid grid-cols-1 gap-3">
                  {highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3"
                    >
                      <span className="text-primary mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-foreground/80 text-base">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
            </div>

            <VisitButton href={link} />
          </div>

          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-tr-full -z-0" />
        </div>
      </div>
    </div>
  )
}
