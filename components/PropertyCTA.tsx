import Link from 'next/link'
import type { Project } from '@/data/projects'

type Props = { project: Project }

export default function PropertyCTA({ project }: Props) {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto p-8 md:p-12 text-center bg-white border border-gray-200 rounded-2xl shadow-sm">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Be a Neighbour to History
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Invest in nature, community, and a greener tomorrow. Limited plots
            available.
          </p>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-10">
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                {project.priceFromINR
                  ? `₹${project.priceFromINR.toLocaleString()}+`
                  : '—'}
              </div>
              <div className="text-sm text-gray-600">Starting Price</div>
            </div>
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                {project.areaSqFtMin
                  ? project.areaSqFtMin.toLocaleString()
                  : '—'}
              </div>
              <div className="text-sm text-gray-600">Sq. Ft per Plot</div>
            </div>
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                {project.city}
              </div>
              <div className="text-sm text-gray-600">{project.state}</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href={{ pathname: '/contact', query: { project: project.slug } }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800"
            >
              Book Site Visit
            </Link>
            <a
              href={`tel:+91XXXXXXXXXX`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-300 font-semibold hover:bg-gray-50"
            >
              Call Now
            </a>
          </div>
          <div className="text-gray-600 text-sm">
            Or email us for detailed information
          </div>
        </div>
      </div>
    </section>
  )
}
