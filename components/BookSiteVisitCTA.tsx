import Link from 'next/link'

export default function BookSiteVisitCTA() {
  return (
    <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 py-8 md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Text Content */}
          <div className="flex-[2] md:flex-[3] text-center md:text-left">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 md:mb-3">
              Book a Site Visit
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
              Schedule your personalized tour and explore India's most premium
              land opportunities
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-row gap-2.5 md:gap-4 flex-shrink-0">
            <Link
              href="/contact?intent=visit"
              className="px-5 md:px-10 py-2.5 md:py-4 bg-black text-white font-bold rounded-full hover:bg-gray-900 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] text-sm md:text-lg whitespace-nowrap"
            >
              Book a Site Visit
            </Link>
            <a
              href="https://wa.me/919607210333"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 md:px-10 py-2.5 md:py-4 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#20BA5A] transition-all duration-200 hover:shadow-lg hover:scale-[1.02] text-sm md:text-lg whitespace-nowrap"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
