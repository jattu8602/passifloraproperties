import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { maharashtraProjects } from '@/app/(root)/(props)/maharashtra/maharashtra-projects.data'
import { biharProjects } from '@/app/(root)/(props)/bihar/bihar-projects.data'
import { jharkhandProjects } from '@/app/(root)/(props)/jharkhand/jharkhand-projects.data'

export default function ProjectsPage() {
  const allProjects = [
    ...maharashtraProjects.map((p) => ({ ...p, state: 'Maharashtra' })),
    ...biharProjects.map((p) => ({ ...p, state: 'Bihar' })),
    ...jharkhandProjects.map((p) => ({ ...p, state: 'Jharkhand' })),
  ]

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft size={16} className="mr-1" />
            Back
          </Link>
        </div>
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Projects
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our premium properties across Maharashtra, Bihar, and
            Jharkhand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <Link
              key={`${project.state}-${project.id}`}
              href={project.link}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                  {project.state}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {project.shortSummary}
                </p>
                <div className="space-y-2 mb-6">
                  {project.highlights.slice(0, 2).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-500">
                      <span className="mt-1 block h-1 w-1 rounded-full bg-amber-500 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-sm font-semibold text-amber-700">
                  <span>View Details</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
