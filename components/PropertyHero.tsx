'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Home, TrendingUp } from 'lucide-react'
import type { Project } from '@/data/projects'

type Props = { project: Project }

export default function PropertyHero({ project }: Props) {
  const cover = project.images[0] || {
    src: '/placeholder.svg',
    alt: project.title,
  }

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs md:text-sm">
          {project.status === 'active' ? 'Phase Open' : 'Coming Soon'}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mt-4">
          {project.title}
        </h1>
        <p className="text-white/90 text-base md:text-xl max-w-2xl mx-auto mt-4">
          {project.shortSummary}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 text-white/85 mt-6">
          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-white/15 border border-white/30 text-white">
              {project.type.replace('_', ' ')}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-medium">
              {project.city}, {project.state}
            </span>
          </div>
          {project.areaSqFtMin && (
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              <span className="text-sm font-medium">
                {project.areaSqFtMin.toLocaleString()}+ sq. ft
              </span>
            </div>
          )}
          {project.priceFromINR && (
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-medium">
                From ₹{project.priceFromINR.toLocaleString()}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            href={{ pathname: '/contact', query: { project: project.slug } }}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100"
          >
            Schedule a Visit
          </Link>
          <Link
            href={{ pathname: '/contact', query: { project: project.slug } }}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white/10"
          >
            Download Brochure
          </Link>
        </div>
      </div>
    </section>
  )
}
