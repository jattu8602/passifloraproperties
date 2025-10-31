import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/data/projects'

type Props = { project: Project }

export default function ProjectCard({ project }: Props) {
  const cover = project.images[0]
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition bg-white"
    >
      <div className="relative h-44 w-full">
        {cover && (
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
            className="object-cover"
            priority={project.featured}
          />
        )}
        <span className="absolute top-2 left-2 text-xs px-2 py-1 rounded-full bg-white/90 border border-gray-200">
          {project.status === 'active' ? 'Active' : 'Coming Soon'}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          {project.city}, {project.state}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="text-[11px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-gray-100 border border-gray-200 text-gray-700">
            {project.type.replace('_', ' ')}
          </span>
        </div>
        {project.priceFromINR && (
          <p className="text-sm text-gray-900 font-medium mt-2">
            ₹{project.priceFromINR.toLocaleString()} onwards
          </p>
        )}
        <p className="text-sm text-gray-700 mt-2 line-clamp-2">
          {project.shortSummary}
        </p>
      </div>
    </Link>
  )
}
