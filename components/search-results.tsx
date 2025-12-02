import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Project } from '@/lib/projects'

type Props = {
  results: Project[]
  onSelect?: () => void
  className?: string
}

export default function SearchResults({ results, onSelect, className = 'top-full mt-2' }: Props) {
  if (results.length === 0) return null

  return (
    <div className={`absolute left-0 right-0 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 max-h-[400px] overflow-y-auto ${className}`}>
      {results.map((project) => (
        <Link
          key={`${project.state}-${project.id}`}
          href={project.link}
          onClick={onSelect}
          className="flex items-center gap-3 md:gap-4 p-2 md:p-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0 group"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-lg flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-gray-900 text-xs md:text-sm truncate group-hover:text-amber-700 transition-colors">
              {project.title}
            </h4>
            <p className="text-[10px] md:text-xs text-gray-500 truncate mt-0.5">
              {project.shortSummary}
            </p>
            <div className="flex items-center gap-2 md:gap-3 mt-1.5">
              <span className="text-[10px] md:text-xs font-semibold text-gray-900 bg-gray-100 px-2 py-0.5 rounded-full">
                {project.city}, {project.state}
              </span>
              {project.priceFrom && (
                <span className="text-[10px] md:text-xs font-bold text-amber-700">
                  {project.priceFrom}
                </span>
              )}
            </div>
          </div>
          <div className="pr-1 md:pr-2">
            <ArrowRight size={14} className="text-gray-400 group-hover:text-amber-700 group-hover:translate-x-1 transition-all md:w-4 md:h-4" />
          </div>
        </Link>
      ))}
    </div>
  )
}
