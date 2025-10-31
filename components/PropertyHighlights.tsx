import {
  Leaf,
  Shield,
  Users,
  TrendingUp,
  MapPin,
  FileCheck,
} from 'lucide-react'

type Highlight = { icon: any; title: string; description: string }

const highlights: Highlight[] = [
  {
    icon: Leaf,
    title: 'Eco-Friendly Living',
    description: 'Sustainable community plots in pristine natural surroundings',
  },
  {
    icon: Shield,
    title: 'Legal & Verified',
    description: 'Complete transparency with verified legal titles',
  },
  {
    icon: Users,
    title: 'Premium Community',
    description: 'Join doctors, NRIs, bureaucrats & entrepreneurs',
  },
  {
    icon: TrendingUp,
    title: 'Growth Potential',
    description: 'Participate in eco-friendly development-driven growth',
  },
  {
    icon: MapPin,
    title: 'Prime Locations',
    description: 'Close to heritage, lakes and scenic valleys',
  },
  {
    icon: FileCheck,
    title: 'Managed Farming',
    description: 'Professional cultivation management through FPO partners',
  },
]

export default function PropertyHighlights() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            Why Choose This Project?
          </h2>
          <p className="text-lg text-gray-600">
            Investment you can touch, feel, and grow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center">
                  <h.icon className="w-6 h-6 text-gray-900" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{h.title}</h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                {h.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
