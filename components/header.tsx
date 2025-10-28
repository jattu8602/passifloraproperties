'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Buy', href: '#' },
    // { label: 'Sell', href: '#' },
    { label: 'Rent', href: '#' },
    { label: 'Mortgage', href: '#' },
    { label: 'Find an Agent', href: '#' },
    { label: 'My Home', href: '#' },
    { label: 'News & Insights', href: '#' },
  ]

  return (
    <>
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <img
                src="/passiflora.svg"
                alt="Passiflora Properties Logo"
                className="h-10 w-auto"
              />
              <span
                className="text-xl text-amber-700 "
                style={{ fontFamily: '"Dancing Script", cursive', fontWeight: 400 }}
              >
                Passiflora Properties
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-bold text-gray-700 hover:text-amber-700 transition-colors duration-200 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side links - Desktop */}
            <div className="hidden lg:flex items-center gap-6">
              <Link
                href="#"
                className="font-bold text-gray-700 hover:text-amber-700 transition-colors duration-200 text-sm"
              >
                Manage rentals
              </Link>
              <Link
                href="#"
                className="font-bold text-gray-700 hover:text-amber-700 transition-colors duration-200 text-sm"
              >
                Advertise
              </Link>
              <Link
                href="#"
                className="font-bold text-gray-700 hover:text-amber-700 transition-colors duration-200 text-sm"
              >
                Log in
              </Link>
              <button className="px-6 py-2 bg-black text-white rounded-full font-bold text-sm hover:bg-gray-800 transition-colors duration-200">
                Sign up
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidenav */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sidenav */}
          <div className="absolute left-0 top-16 bottom-0 w-64 bg-white shadow-lg overflow-y-auto">
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-bold text-gray-700 hover:text-amber-700 hover:bg-amber-50 px-4 py-3 rounded-lg transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2" />
              <Link
                href="#"
                className="font-bold text-gray-700 hover:text-amber-700 hover:bg-amber-50 px-4 py-3 rounded-lg transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Manage rentals
              </Link>
              <Link
                href="#"
                className="font-bold text-gray-700 hover:text-amber-700 hover:bg-amber-50 px-4 py-3 rounded-lg transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Advertise
              </Link>
              <Link
                href="#"
                className="font-bold text-gray-700 hover:text-amber-700 hover:bg-amber-50 px-4 py-3 rounded-lg transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </Link>
              <button className="w-full px-6 py-3 bg-black text-white rounded-lg font-bold text-sm hover:bg-gray-800 transition-colors duration-200 mt-2">
                Sign up
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
