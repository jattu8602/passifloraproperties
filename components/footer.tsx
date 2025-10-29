'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  Facebook,
  Instagram,
  Linkedin,
  Pin,
  X as XIcon,
  Youtube,
  Download,
  Check,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react'
import { usePWAInstall } from '@/hooks/use-pwa-install'

export default function Footer() {
  const { installState, canInstall, isInstalled, isSupported, install } =
    usePWAInstall()

  const handleInstall = async () => {
    if (canInstall) {
      await install()
    }
  }

  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: Social icons + partner badges */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 sm:py-8 border-b border-white/10">
          <div className="flex items-center gap-3 md:gap-4">
            {[
              {
                Icon: Facebook,
                href: 'https://facebook.com',
                label: 'Facebook',
              },
              { Icon: XIcon, href: 'https://x.com', label: 'X (Twitter)' },
              {
                Icon: Linkedin,
                href: 'https://linkedin.com',
                label: 'LinkedIn',
              },
              {
                Icon: Instagram,
                href: 'https://instagram.com',
                label: 'Instagram',
              },
              { Icon: Pin, href: 'https://pinterest.com', label: 'Pinterest' },
              { Icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="group inline-flex h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/10 hover:bg-white/15 items-center justify-center transition transform will-change-transform md:hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
              >
                <Icon
                  className="text-white/90 group-hover:text-white"
                  size={20}
                />
              </a>
            ))}
          </div>

          <div className="flex items-center justify-center hidden md:block">
            <Image
              src="/passiflora.svg"
              alt="Passiflora Properties"
              width={260}
              height={90}
              className="h-16 w-auto sm:h-20 rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="py-8 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Phone className="text-yellow-400 mt-1" size={20} />
              <div>
                <p className="text-white font-semibold mb-1">Phone</p>
                <a
                  href="tel:+919607210333"
                  className="text-gray-300 hover:text-white transition"
                >
                  +91 9607210333
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-yellow-400 mt-1" size={20} />
              <div>
                <p className="text-white font-semibold mb-1">Email</p>
                <a
                  href="mailto:passiflorapune@gmail.com"
                  className="text-gray-300 hover:text-white transition"
                >
                  info.passifloraproperties@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-yellow-400 mt-1" size={20} />
              <div>
                <p className="text-white font-semibold mb-1">Address</p>
                <p className="text-gray-300 text-sm">
                  202, Nawu Imperio, Adjacent to Lodha Belmondo,
                  <br />
                  Gahunje, Pimpri-Chinchwad, Pune, Maharashtra, 412101
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle: Link groups */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 py-8 sm:py-10">
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/directors" className="hover:text-white transition">
                  Directors
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4">
              Properties
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <Link
                  href="/projects?state=maharashtra"
                  className="hover:text-white transition"
                >
                  Maharashtra
                </Link>
              </li>
              <li>
                <Link
                  href="/projects?state=bihar"
                  className="hover:text-white transition"
                >
                  Bihar
                </Link>
              </li>
              <li>
                <Link
                  href="/projects?state=jharkhand"
                  className="hover:text-white transition"
                >
                  Jharkhand
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition">
                  All Projects
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <Link
                  href="/services#farm-plots"
                  className="hover:text-white transition"
                >
                  Farm Plot Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#farmhouse"
                  className="hover:text-white transition"
                >
                  Farmhouse Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services#buy-sell"
                  className="hover:text-white transition"
                >
                  Buy/Sell/Rent Land
                </Link>
              </li>
              <li>
                <Link
                  href="/services#resort"
                  className="hover:text-white transition"
                >
                  Resort Development
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4">
              Legal & Support
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/advisory" className="hover:text-white transition">
                  Investment Advisory
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Presence Strip */}
        <div className="py-4 border-t border-white/10">
          <div className="text-center">
            <p className="text-gray-300 text-sm">
              <span className="text-yellow-400 font-semibold">Presence:</span>{' '}
              Maharashtra • Bihar • Jharkhand
            </p>
          </div>
        </div>

        {/* Web App Download + tagline */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between gap-4 md:gap-6">
            <div className="text-base sm:text-lg font-semibold text-white">
              Get the web app
            </div>
            {isSupported && (
              <div className="flex flex-col xs:flex-row sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                {isInstalled ? (
                  <div className="inline-flex justify-center items-center gap-3 rounded-lg bg-green-600 text-white px-4 py-2 shadow w-full sm:w-auto">
                    <Check size={20} />
                    <span className="text-sm font-semibold">
                      Web App Installed
                    </span>
                  </div>
                ) : canInstall ? (
                  <button
                    onClick={handleInstall}
                    className="inline-flex justify-center items-center gap-3 rounded-lg bg-white text-black px-4 py-2 shadow hover:shadow-md transition w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    aria-label="Download Web App"
                  >
                    <Download size={20} />
                    <span className="text-sm font-semibold">
                      Download Web App
                    </span>
                  </button>
                ) : (
                  <div className="inline-flex justify-center items-center gap-3 rounded-lg bg-gray-600 text-gray-300 px-4 py-2 shadow w-full sm:w-auto">
                    <span className="text-sm font-semibold">
                      Installation not available
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bottom legal strip */}
        <div className="py-6 sm:py-8 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms & Conditions
            </Link>
          </div>
          <p className="text-center md:text-right">
            © 2025 Passiflora Properties. Building Nature-Connected Living
            Spaces Across India.
          </p>
        </div>
      </div>
    </footer>
  )
}
