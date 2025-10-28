'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import gsap from 'gsap'
import AuthModal from '@/components/auth-modal'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuBtnRef = useRef<HTMLButtonElement | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const backdropRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([])
  const signupBtnRef = useRef<HTMLButtonElement | null>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)
  const [authOpen, setAuthOpen] = useState(false)

  const navLinks = [
    { label: 'Buy', href: '#' },
    // { label: 'Sell', href: '#' },
    // { label: 'Rent', href: '#' },
    { label: 'Mortgage', href: '#' },
    { label: 'Find an Agent', href: '#' },
    { label: 'My Home', href: '#' },
    { label: 'News & Insights', href: '#' },
  ]

  // Build GSAP timeline when menu opens
  useLayoutEffect(() => {
    if (!mobileMenuOpen) return
    if (!overlayRef.current || !backdropRef.current) return
    const items = itemRefs.current.filter(Boolean)
    const ctx = gsap.context(() => {
      gsap.set(backdropRef.current, { opacity: 0 })
      gsap.set(overlayRef.current, {
        clipPath: 'circle(0px at var(--menu-x) var(--menu-y))',
      })
      gsap.set(items, { opacity: 0, y: -8 })
      gsap.set(signupBtnRef.current, { opacity: 0, y: -8 })

      const tl = gsap.timeline({ paused: true })
      tl.to(
        overlayRef.current,
        {
          clipPath: 'circle(150% at var(--menu-x) var(--menu-y))',
          duration: 0.42,
          ease: 'cubic-bezier(0.22,1,0.36,1)',
        },
        0
      )
        .to(
          backdropRef.current,
          { opacity: 1, duration: 0.3, ease: 'power2.out' },
          0.05
        )
        .to(
          items,
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: 'power2.out',
            stagger: 0.04,
          },
          0.15
        )
        .to(
          signupBtnRef.current,
          { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' },
          0.3
        )

      tl.play(0)
      tlRef.current = tl
    })
    return () => ctx.revert()
  }, [mobileMenuOpen])

  return (
    <>
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <img
                src="/passiflora.svg"
                alt="Passiflora Properties Logo"
                className="h-10 lg:h-8 w-auto"
              />
              <span
                className="text-xl text-amber-700 "
                style={{
                  fontFamily: '"Dancing Script", cursive',
                  fontWeight: 400,
                }}
              >
                Passiflora Properties
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative font-bold text-gray-700 hover:text-amber-700 transition-colors duration-200 text-sm after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-200 hover:after:w-full focus:after:w-full"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side links - Desktop */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Group 1: Manage / Advertise (kept slightly apart) */}
              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className="relative font-bold text-gray-700 transition-colors duration-200 text-sm px-2 py-1 rounded-md hover:bg-gray-100 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-200 hover:after:w-full focus:after:w-full"
                >
                  Manage rentals
                </Link>
                <Link
                  href="#"
                  className="relative font-bold text-gray-700 transition-colors duration-200 text-sm px-2 py-1 rounded-md hover:bg-gray-100 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-200 hover:after:w-full focus:after:w-full"
                >
                  Advertise
                </Link>
              </div>
              {/* Divider to separate stacks */}
              <div className="hidden lg:block h-6 w-px bg-gray-200" />
              {/* Group 2: Log in / Sign up (tighter) */}
              <div className="flex items-center gap-2">
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setAuthOpen(true)
                  }}
                  className="relative font-bold text-gray-700 transition-colors duration-200 text-sm px-2 py-1 rounded-md hover:bg-gray-100 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-200 hover:after:w-full focus:after:w-full"
                >
                  Log in
                </Link>
                <button
                  onClick={() => setAuthOpen(true)}
                  className="px-5 py-2 bg-black text-white rounded-full font-bold text-sm transition-all duration-200 hover:bg-gray-900 hover:shadow-md hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
                >
                  Sign up
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              ref={menuBtnRef}
              onClick={() => {
                const rect = menuBtnRef.current?.getBoundingClientRect()
                const x = (rect?.left ?? 16) + (rect?.width ?? 24) / 2
                const y = (rect?.top ?? 16) + (rect?.height ?? 24) / 2
                document.documentElement.style.setProperty('--menu-x', `${x}px`)
                document.documentElement.style.setProperty('--menu-y', `${y}px`)
                document.body.style.overflow = 'hidden'
                setMobileMenuOpen(true)
              }}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidenav */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" aria-modal role="dialog">
          {/* Backdrop */}
          <div
            ref={backdropRef}
            className="absolute inset-0 bg-black/50"
            onClick={() => {
              if (tlRef.current) {
                tlRef.current.reverse()
                tlRef.current.eventCallback('onReverseComplete', () => {
                  setMobileMenuOpen(false)
                  document.body.style.overflow = ''
                })
              } else {
                setMobileMenuOpen(false)
                document.body.style.overflow = ''
              }
            }}
          />

          {/* Morphing full-screen panel */}
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-white will-change-transform overflow-y-auto"
            style={{ clipPath: `circle(0px at var(--menu-x) var(--menu-y))` }}
          >
            {/* Close button */}
            <button
              aria-label="Close menu"
              onClick={() => {
                if (tlRef.current) {
                  tlRef.current.reverse()
                  tlRef.current.eventCallback('onReverseComplete', () => {
                    setMobileMenuOpen(false)
                    document.body.style.overflow = ''
                  })
                } else {
                  setMobileMenuOpen(false)
                  document.body.style.overflow = ''
                }
              }}
              className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black text-white grid place-items-center shadow-md"
            >
              <span className="relative block h-4 w-4 before:content-[''] before:absolute before:inset-0 before:bg-current before:h-0.5 before:w-full before:rotate-45 before:top-1/2 before:-translate-y-1/2 after:content-[''] after:absolute after:inset-0 after:bg-current after:h-0.5 after:w-full after:-rotate-45 after:top-1/2 after:-translate-y-1/2" />
            </button>

            {/* Content */}
            <nav className="flex flex-col gap-2 p-6 pt-20">
              {navLinks.map((link, i) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-bold text-gray-800 text-lg"
                  ref={(el) => {
                    itemRefs.current[i] = el
                  }}
                  onClick={() => {
                    if (tlRef.current) {
                      tlRef.current.reverse()
                      tlRef.current.eventCallback('onReverseComplete', () => {
                        setMobileMenuOpen(false)
                        document.body.style.overflow = ''
                      })
                    } else {
                      setMobileMenuOpen(false)
                      document.body.style.overflow = ''
                    }
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-4" />
              {['Manage rentals', 'Advertise', 'Log in'].map((label, i) => (
                <Link
                  key={label}
                  href="#"
                  className="font-bold text-gray-800 text-lg"
                  ref={(el) => {
                    itemRefs.current[navLinks.length + i] = el
                  }}
                  onClick={(e) => {
                    e.preventDefault()
                    if (label === 'Log in') setAuthOpen(true)
                    if (tlRef.current) {
                      tlRef.current.reverse()
                      tlRef.current.eventCallback('onReverseComplete', () => {
                        setMobileMenuOpen(false)
                        document.body.style.overflow = ''
                      })
                    } else {
                      setMobileMenuOpen(false)
                      document.body.style.overflow = ''
                    }
                  }}
                >
                  {label}
                </Link>
              ))}
              <button
                ref={signupBtnRef}
                className="mt-4 w-full px-6 py-3 bg-black text-white rounded-lg font-bold text-base hover:bg-gray-800 transition-colors duration-200"
                onClick={() => {
                  setAuthOpen(true)
                  if (tlRef.current) {
                    tlRef.current.reverse()
                    tlRef.current.eventCallback('onReverseComplete', () => {
                      setMobileMenuOpen(false)
                      document.body.style.overflow = ''
                    })
                  } else {
                    setMobileMenuOpen(false)
                    document.body.style.overflow = ''
                  }
                }}
              >
                Sign up
              </button>
            </nav>
          </div>
        </div>
      )}
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  )

  // Build GSAP timeline when menu opens
  useLayoutEffect(() => {
    if (!mobileMenuOpen) return
    if (!overlayRef.current || !backdropRef.current) return
    const items = itemRefs.current.filter(Boolean)
    const ctx = gsap.context(() => {
      gsap.set(backdropRef.current, { opacity: 0 })
      gsap.set(overlayRef.current, {
        clipPath: 'circle(0px at var(--menu-x) var(--menu-y))',
      })
      gsap.set(items, { opacity: 0, y: -8 })
      gsap.set(signupBtnRef.current, { opacity: 0, y: -8 })

      const tl = gsap.timeline({ paused: true })
      tl.to(
        overlayRef.current,
        {
          clipPath: 'circle(150% at var(--menu-x) var(--menu-y))',
          duration: 0.42,
          ease: 'cubic-bezier(0.22,1,0.36,1)',
        },
        0
      )
        .to(
          backdropRef.current,
          { opacity: 1, duration: 0.3, ease: 'power2.out' },
          0.05
        )
        .to(
          items,
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: 'power2.out',
            stagger: 0.04,
          },
          0.15
        )
        .to(
          signupBtnRef.current,
          { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' },
          0.3
        )

      tl.play(0)
      tlRef.current = tl
    })
    return () => ctx.revert()
  }, [mobileMenuOpen])

  // GSAP timeline will be set up below, then we render after
}
