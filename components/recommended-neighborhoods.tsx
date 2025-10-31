import trustLegacy from '@/assets/trust-legacy.jpg'
import luxurySustainability from '@/assets/luxury-sustainability.jpg'
import relationships from '@/assets/relationships.jpg'
import propertyCare from '@/assets/property-care.jpg'

export default function RecommendedNeighborhoods() {
  const contentCards = [
    {
      title: 'Two Decades of Trust',
      description:
        'For over two decades, Passiflora Properties has redefined what it means to invest in land. We believe that every piece of land carries a story — of roots, growth, and legacy.',
      illustration:
        'https://res.cloudinary.com/doxmvuss9/image/upload/v1761920732/link-generator/ytiff9c2m628xeikc6dg.jpg',
    },
    {
      title: 'Luxury Meets Sustainability',
      description:
        "Founded with a vision to combine luxury, transparency, and sustainability, Passiflora Properties has become one of India's most trusted names in farm plots, second homes, villas, and resort developments.",
      illustration:
        'https://res.cloudinary.com/doxmvuss9/image/upload/v1761920734/link-generator/wo6ce3ncheeev0eftwju.jpg',
    },
    {
      title: 'Beyond Transactions',
      description:
        'At Passiflora, we go beyond transactions — we build lifelong relationships. Every investor, every family, every dream matters to us.',
      illustration:
        'https://res.cloudinary.com/doxmvuss9/image/upload/v1761920735/link-generator/naaw8qr9yuplv3ihlzbt.jpg',
    },
    {
      title: 'Your Land, Our Care',
      description:
        'We handle your property as our own — ensuring legal transparency, consistent appreciation, and even managed cultivation through our FPO partnership model, where your land works for you.',
      illustration:
        'https://res.cloudinary.com/doxmvuss9/image/upload/v1761920736/link-generator/rgsrcbit9apzzwpivcca.jpg',
    },
  ]

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold mb-2 text-foreground">
        Why Choose Passiflora Properties
      </h2>
      <p className="text-muted-foreground mb-8 md:mb-12 text-base md:text-lg">
        Where Trust Takes Root, and Your Land Grows Into Legacy
      </p>

      {/* Desktop Grid - 2x2 Grid */}
      <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
        {contentCards.map((card, index) => (
          <div
            key={index}
            className="bg-card rounded-xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-all-300 duration-300 hover:-translate-y-1 group"
          >
            <div className="w-full h-64 lg:h-80 bg-secondary relative overflow-hidden">
              <img
                src={card.illustration}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6 lg:p-8">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Horizontal Scroll */}
      <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
        <div className="flex gap-4 min-w-max">
          {contentCards.map((card, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden border border-border shadow-sm w-[280px] flex-shrink-0"
            >
              <div className="w-full h-40 bg-secondary relative overflow-hidden">
                <img
                  src={card.illustration}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-card-foreground">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
