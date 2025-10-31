import Link from 'next/link'

type Service = {
  title: string
  description: string
  bullets?: string[]
  emoji: string
}

const SERVICES: Service[] = [
  {
    title: 'Farm Plot Development',
    description:
      'Legally verified, clear-title farm plots developed with road access, fencing, and amenities.',
    emoji: '🌿',
  },
  {
    title: 'Farmhouse Construction',
    description:
      'End-to-end turnkey solutions for designing and building your dream farmhouse — ready to move in or rent out.',
    emoji: '🏠',
  },
  {
    title: 'Buy, Sell & Rent Land',
    description:
      'Transparent transactions for primary purchase and resale plots across our operating states.',
    emoji: '🏡',
  },
  {
    title: 'Resort Development',
    description:
      'We create and manage boutique wellness resorts like Passiflora Resorts, Pawna — combining hospitality and real estate value.',
    emoji: '🏖',
  },
  {
    title: 'Legal & Investment Advisory',
    description:
      'Expert assistance with due diligence, RERA compliance, and long-term investment planning.',
    emoji: '⚖',
  },
  {
    title: 'Managed Farming (FPO Partnership)',
    description:
      'Your land works for you. We facilitate cultivation and maintenance through our FarmProduce Organisation (FPO) partnership model for predictable, sustainable outcomes.',
    emoji: '🌾',
    // bullets: [
    //   'Crop planning & seasonal ops',
    //   'On-ground supervision',
    //   'Transparent reporting',
    // ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Services
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl">
            We help you invest in land with confidence — from plot development
            and luxury farmhouses to resort projects and expert legal guidance.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block px-5 py-2.5 bg-black text-white rounded-full font-semibold hover:bg-gray-800"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition"
            >
              <div className="text-3xl mb-3" aria-hidden>
                {s.emoji}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {s.title}
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                {s.description}
              </p>
              {s.bullets && (
                <ul className="mt-3 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              <div className="mt-5">
                <Link
                  href={{ pathname: '/contact', query: { service: s.title } }}
                  className="inline-block text-sm px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50 font-semibold"
                >
                  Enquire
                </Link>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-black/5" />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
