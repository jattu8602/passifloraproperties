'use client'

import Image from 'next/image'

export default function RecommendedNeighborhoods() {
  const neighborhoods = [
    {
      name: 'Linden Hills',
      listings: 45,
      medianPrice: '$837,400',
      image: '/map_images/map1.png',
      mapEmbed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.5!2d-93.3!3d44.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d!2m2!1d-93.3!2d44.9!5e0!3m2!1sen!2sus!4v1234567890',
    },
    {
      name: 'Fulton',
      listings: 36,
      medianPrice: '$780,000',
      image: '/map_images/map2.png',
      mapEmbed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.5!2d-93.3!3d44.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d!2m2!1d-93.3!2d44.95!5e0!3m2!1sen!2sus!4v1234567890',
    },
    {
      name: 'Waite Park',
      listings: 9,
      medianPrice: '$342,500',
      image: '/map_images/map3.png',
      mapEmbed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.5!2d-93.25!3d44.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d!2m2!1d-93.25!2d44.92!5e0!3m2!1sen!2sus!4v1234567890',
    },
    {
      name: 'Whittier',
      listings: 43,
      medianPrice: '$144,900',
      image: '/map_images/map4.png',
      mapEmbed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.5!2d-93.28!3d44.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d!2m2!1d-93.28!2d44.88!5e0!3m2!1sen!2sus!4v1234567890',
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-2">Recommended neighborhoods</h2>
      <p className="text-gray-600 mb-12 text-lg">
        Based on your previous search
      </p>

      {/* Neighborhoods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {neighborhoods.map((neighborhood, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            {/* Map Image */}
            <div className="w-full h-48 bg-gray-200 relative overflow-hidden">
              <Image
                src={neighborhood.image}
                alt={`${neighborhood.name} map`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                priority={false}
              />
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{neighborhood.name}</h3>
              <p className="text-gray-600 mb-1">
                <span className="font-bold">{neighborhood.listings}</span>{' '}
                Listings for sale
              </p>
              <p className="text-gray-600">
                <span className="font-bold">{neighborhood.medianPrice}</span>{' '}
                Median Listing Home Price
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
