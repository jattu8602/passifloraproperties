'use client'

import Link from 'next/link'
import {
  featuredProjects,
  projectsByState,
  quickLinks,
} from '@/lib/menu.config'

type Props = {
  onNavigate?: () => void
}

export default function ProjectsMegaMenu({ onNavigate }: Props) {
  return (
    <div className="bg-white shadow-xl border border-gray-200 rounded-lg mt-2 p-6 min-w-[600px] max-w-3xl">
      <div className="grid grid-cols-2 gap-6">
        {/* Column 1: States & Cities */}
        <div>
          {/* Quick Links */}
          <div className="mb-6 pb-4 border-b border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2 text-sm">
              Quick Links
            </h3>
            <div className="space-y-1">
              {quickLinks.map((q) => (
                <Link
                  key={q.label}
                  href={q.href}
                  onClick={onNavigate}
                  className="block text-xs text-gray-700 hover:text-amber-700 transition-colors duration-200 py-1"
                >
                  {q.label}
                </Link>
              ))}
            </div>
          </div>

          <h3 className="font-bold text-gray-900 mb-3 text-sm">
            Explore by Location
          </h3>
          <div className="space-y-4">
            {projectsByState.map((group) => (
              <div key={group.state}>
                <h4 className="text-xs font-bold text-gray-900 mb-2">
                  {group.state}
                </h4>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {group.cities.map((city) => (
                    <Link
                      key={city}
                      href={`/projects?state=${encodeURIComponent(
                        group.state
                      )}&city=${encodeURIComponent(city)}`}
                      onClick={onNavigate}
                      className="text-xs text-gray-700 hover:text-amber-700 transition-colors duration-200"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Featured Projects */}
        <div>
          <h3 className="font-bold text-gray-900 mb-3 text-sm">
            Featured Properties
          </h3>
          <div className="space-y-3">
            {featuredProjects.slice(0, 6).map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                onClick={onNavigate}
                className="flex items-start gap-3 group hover:bg-gray-50 p-2 -m-2 rounded-md transition-colors duration-200"
              >
                <img
                  src={p.imageUrl}
                  alt={p.title}
                  className="h-14 w-16 object-cover rounded border border-gray-200 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-gray-900 group-hover:text-amber-700 line-clamp-2 leading-tight">
                    {p.title}
                  </p>
                  <p className="text-[10px] text-gray-600 mt-0.5">
                    {p.city}, {p.state}
                  </p>
                  {p.priceFrom && (
                    <p className="text-[10px] font-semibold text-amber-700 mt-0.5">
                      {p.priceFrom}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
