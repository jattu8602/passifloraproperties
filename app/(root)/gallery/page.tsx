import Image from 'next/image'
import { projects } from '@/data/projects'

const categories: {
  key: string
  label: string
  match: (t: string) => boolean
}[] = [
  { key: 'farm', label: 'Farm Plots', match: (t) => t === 'farm_plot' },
  { key: 'villa', label: 'Luxury Farm Villas', match: (t) => t === 'villa' },
  { key: 'resort', label: 'Passiflora Resorts', match: (t) => t === 'resort' },
  { key: 'urban', label: 'Urban / Redevelopment', match: (t) => t === 'urban' },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Gallery
        </h1>
        <p className="text-gray-600 mt-1">
          Explore images from our projects and developments.
        </p>

        {categories.map((cat) => {
          const images = projects
            .filter((p) => cat.match(p.type))
            .flatMap((p) =>
              p.images.map((img) => ({
                ...img,
                alt: `${p.title} — ${img.alt}`,
              }))
            )

          if (images.length === 0) return null

          return (
            <div key={cat.key} className="mt-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                {cat.label}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {images.map((img) => (
                  <div
                    key={img.src}
                    className="relative h-28 sm:h-40 bg-gray-100 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </section>
    </main>
  )
}
