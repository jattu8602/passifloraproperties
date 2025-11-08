'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { biharProjects } from './bihar-projects.data'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

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
    <div ref={wrapperRef} className="mt-4 md:mt-5">
      <Link href={href} className="block">
        <Button
          variant="default"
          size="lg"
          className="bg-black text-white px-6 lg:px-8 xl:px-10 py-3.5 lg:py-4 xl:py-4.5 rounded-full font-bold hover:bg-gray-800 transition-all duration-300 text-base lg:text-lg xl:text-xl flex items-center gap-2.5 w-full sm:w-auto shadow-md hover:shadow-lg"
        >
          <span>Visit</span>
          <ArrowUpRight
            ref={arrowRef}
            className="w-4 h-4 lg:w-5 lg:h-5 xl:w-5 xl:h-5"
          />
        </Button>
      </Link>
    </div>
  )
}

export default function BiharPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.history.back()}
            className="hover:bg-accent"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl md:text-2xl font-semibold">Bihar</h1>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Projects List */}
      <main className="container mx-auto px-4 py-8 md:py-10 lg:py-12 space-y-12 md:space-y-14 lg:space-y-16">
        {biharProjects.map((project, index) => {
          const isEven = index % 2 === 1
          const imageFirst = !isEven

          return (
            <div
              key={project.id}
              className="w-full overflow-hidden rounded-xl lg:rounded-2xl border border-border/50 bg-card shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Mobile Layout - Stacked */}
              <div className="md:hidden">
                <div className="relative w-full h-64 sm:h-80">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {project.shortSummary}
                  </p>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm sm:text-base"
                      >
                        <span className="text-primary mt-1.5">•</span>
                        <span className="text-foreground/90">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={project.link} className="block mt-6">
                    <Button
                      variant="default"
                      size="lg"
                      className="bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-gray-800 transition w-full sm:w-auto text-base sm:text-lg flex items-center gap-2"
                    >
                      <span>Visit</span>
                      <ArrowUpRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Desktop Layout - Alternating */}
              <div
                className={`hidden md:flex ${
                  imageFirst ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Image Section */}
                <div className="relative w-[45%] h-80 lg:h-96 overflow-hidden group">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Section - Wider with more padding */}
                <div className="w-[55%] p-8 lg:p-10 xl:p-12 flex flex-col justify-center space-y-4 lg:space-y-5">
                  <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground leading-tight tracking-tight">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                    {project.shortSummary}
                  </p>
                  <ul className="space-y-2 lg:space-y-2.5">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 lg:gap-3"
                      >
                        <span className="text-primary mt-1 text-base lg:text-lg flex-shrink-0">
                          •
                        </span>
                        <span className="text-foreground/90 text-sm lg:text-base leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <VisitButton href={project.link} />
                </div>
              </div>
            </div>
          )
        })}
      </main>
    </div>
  )
}
