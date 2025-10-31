'use client'

export default function UniqueHomes() {
  return (
    <section className="relative h-80 md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=600&fit=crop')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <p className="text-white text-lg mb-4 font-semibold">
          About Passiflora Properties
        </p>
        <h2 className="text-2xl md:text-5xl font-bold text-white mb-3 md:mb-4 max-w-3xl leading-tight text-balance">
          Where Trust Takes Root, and Your Land Grows Into Legacy.
        </h2>
        <p className="text-white/90 max-w-3xl mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
          We don’t just sell plots — we create purpose, value, and belonging for
          generations to come.
        </p>
        <a
          href="/about"
          className="px-6 md:px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-200"
        >
          Explore About Passiflora
        </a>
      </div>
    </section>
  )
}
