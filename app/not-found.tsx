import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <main
      className="h-screen min-h-[100svh] px-4 py-16 sm:py-20 flex items-center justify-center bg-black text-white"
      aria-labelledby="not-found-heading"
    >
      <div className="w-full max-w-4xl mx-auto text-center">
        <p className="text-yellow-400 font-semibold tracking-wider">404</p>
        <h1
          id="not-found-heading"
          className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold"
        >
          Under Maintenance
        </h1>
        <p className="mt-3 sm:mt-4 text-gray-300 max-w-2xl mx-auto">
          We are currently under maintenance for this page. Explore our projects, or
          head back home to continue discovering nature-connected living.
        </p>

        <div className="mt-8 sm:mt-10 flex justify-center">
          <Image
            src="/404.svg"
            alt="404 illustration showing a person working at a computer desk surrounded by books"
            width={612}
            height={362}
            priority
            className="w-[240px] sm:w-[320px] md:w-[420px] h-auto opacity-95"
          />
        </div>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-yellow-400 text-black px-5 py-2.5 font-semibold hover:bg-yellow-300 transition"
          >
            Go Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md bg-white/10 text-white px-5 py-2.5 hover:bg-white/15 transition"
          >
            Browse Properties
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white/10 text-white px-5 py-2.5 hover:bg-white/15 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}
