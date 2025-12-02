'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import gsap from 'gsap'
import { headerNav } from '@/lib/menu.config'
import ProjectsMegaMenu from '@/components/projects-mega-menu'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuBtnRef = useRef<HTMLButtonElement | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const backdropRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<Array<HTMLElement | null>>([])
  const tlRef = useRef<gsap.core.Timeline | null>(null)
  const [projectsOpen, setProjectsOpen] = useState(false)
  const projectsTimerRef = useRef<number | null>(null)

  const navLinks = headerNav

  // Helper function to close menu immediately (for navigation links)
  const closeMenuImmediately = () => {
    // Kill any ongoing animations
    if (tlRef.current) {
      tlRef.current.kill()
      tlRef.current = null
    }
    // Reset state immediately
    setMobileMenuOpen(false)
    document.body.style.overflow = ''
  }

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

      const tl = gsap.timeline({ paused: true })
      tl.to(
        overlayRef.current,
        {
          clipPath: 'circle(150% at var(--menu-x) var(--menu-y))',
          duration: 0.25,
          ease: 'cubic-bezier(0.22,1,0.36,1)',
        },
        0
      )
        .to(
          backdropRef.current,
          { opacity: 1, duration: 0.2, ease: 'power2.out' },
          0.05
        )
        .to(
          items,
          {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: 'power2.out',
            stagger: 0.03,
          },
          0.15
        )

      tl.play(0)
      tlRef.current = tl
    })
    return () => ctx.revert()
  }, [mobileMenuOpen])

  return (
    <>
      <header className="bg-white border-b border-gray-200 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-14 relative">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center justify-center  flex-shrink-0"
            >
              <img
                src="/logop.png"
                alt="Passiflora Properties Logo"
                className="h-12 lg:h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => {
                if (link.label === 'Properties') {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => {
                        if (projectsTimerRef.current)
                          window.clearTimeout(projectsTimerRef.current)
                        setProjectsOpen(true)
                      }}
                      onMouseLeave={() => {
                        projectsTimerRef.current = window.setTimeout(
                          () => setProjectsOpen(false),
                          200
                        )
                      }}
                    >
                      <Link
                        href={link.href}
                        className="relative font-bold text-gray-700 hover:text-amber-700 transition-colors duration-200 text-md flex items-center gap-1"
                      >
                        {link.label}
                        <ChevronDown size={16} strokeWidth={3} />
                      </Link>
                      {projectsOpen && (
                        <div className="absolute top-full left-[-200px] z-50">
                          <ProjectsMegaMenu
                            onNavigate={() => setProjectsOpen(false)}
                          />
                        </div>
                      )}
                    </div>
                  )
                }
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="relative font-bold text-gray-700 hover:text-amber-700 transition-colors duration-200 text-md after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-200 hover:after:w-full focus:after:w-full"
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Right side links - Desktop */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Group 1: Manage / Advertise (kept slightly apart) */}
              <div className="flex items-center gap-4">
                {/* <Link
                  href="#"
                  className="relative font-bold text-gray-700 transition-colors duration-200 text-sm px-2 py-1 rounded-md hover:bg-gray-100 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-200 hover:after:w-full focus:after:w-full"
                >
                  Auction Properties
                </Link> */}
                {/* <Link
                  href="#"
                  className="relative font-bold text-gray-700 transition-colors duration-200 text-sm px-2 py-1 rounded-md hover:bg-gray-100 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-200 hover:after:w-full focus:after:w-full"
                >
                  Advertise
                </Link> */}
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
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 text-gray-700 font-bold"
            >
              {mobileMenuOpen ? (
                <X size={24} strokeWidth={2.5} />
              ) : (
                <Menu size={24} strokeWidth={2.5} />
              )}
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
                // Speed up reverse animation for better UX - almost instant
                tlRef.current.timeScale(4.0)
                tlRef.current.reverse()
                tlRef.current.eventCallback('onReverseComplete', () => {
                  setMobileMenuOpen(false)
                  document.body.style.overflow = ''
                  // Reset timeScale for next opening
                  if (tlRef.current) tlRef.current.timeScale(1)
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
                  // Speed up reverse animation for better UX - almost instant
                  tlRef.current.timeScale(4.0)
                  tlRef.current.reverse()
                  tlRef.current.eventCallback('onReverseComplete', () => {
                    setMobileMenuOpen(false)
                    document.body.style.overflow = ''
                    // Reset timeScale for next opening
                    if (tlRef.current) tlRef.current.timeScale(1)
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
            <nav className="flex flex-col gap-3 p-6 pt-20">
              {(() => {
                let idx = 0
                return navLinks.map((link) => {
                  if (link.label === 'Properties') {
                    const startIdx = idx
                    idx += 1
                    return (
                      <div key={link.label} className="w-full">
                        <p
                          className="font-bold text-gray-800 text-lg mb-3"
                          ref={(el) => {
                            itemRefs.current[startIdx] = el
                          }}
                        >
                          Properties
                        </p>
                        <div className="grid grid-cols-3 gap-4 mt-2">
                          {require('@/lib/menu.config').projectsByState.map(
                            (group: any) => (
                              <div
                                key={group.state}
                                ref={(el) => {
                                  itemRefs.current[idx] = el
                                  idx += 1
                                }}
                              >
                                <p className="text-xs font-bold text-gray-900 mb-2">
                                  {group.state}
                                </p>
                                  <div className="space-y-1.5">
                                    {group.projects.map((project: any) => (
                                      <Link
                                        key={`${group.state}-${project.name}`}
                                        href={project.href}
                                        className="text-xs text-gray-700 hover:text-amber-700 block"
                                        onClick={closeMenuImmediately}
                                      >
                                        {project.name}
                                      </Link>
                                    ))}
                                  </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )
                  }
                  const currentIndex = idx
                  idx += 1

                  // Group Services/About and Gallery/Contact in pairs
                  if (link.label === 'Services') {
                    const aboutLink = navLinks.find((l) => l.label === 'About')
                    return (
                      <div
                        key={`${link.label}-${aboutLink?.label}`}
                        className="flex items-center justify-between"
                        ref={(el) => {
                          itemRefs.current[currentIndex] = el
                        }}
                      >
                        <Link
                          href={link.href}
                          className="font-bold text-gray-800 text-base py-2"
                          onClick={closeMenuImmediately}
                        >
                          {link.label}
                        </Link>
                        <Link
                          href={aboutLink?.href || '#'}
                          className="font-bold text-gray-800 text-base py-2"
                          onClick={closeMenuImmediately}
                        >
                          {aboutLink?.label}
                        </Link>
                      </div>
                    )
                  }

                  if (link.label === 'Gallery') {
                    const contactLink = navLinks.find(
                      (l) => l.label === 'Contact'
                    )
                    return (
                      <div
                        key={`${link.label}-${contactLink?.label}`}
                        className="flex items-center justify-between"
                        ref={(el) => {
                          itemRefs.current[currentIndex] = el
                        }}
                      >
                        <Link
                          href={link.href}
                          className="font-bold text-gray-800 text-base py-2"
                          onClick={closeMenuImmediately}
                        >
                          {link.label}
                        </Link>
                        <Link
                          href={contactLink?.href || '#'}
                          className="font-bold text-gray-800 text-base py-2"
                          onClick={closeMenuImmediately}
                        >
                          {contactLink?.label}
                        </Link>
                      </div>
                    )
                  }

                  // Skip About only if Services exists (they're paired)
                  if (link.label === 'About') {
                    const servicesExists = navLinks.some(
                      (l) => l.label === 'Services'
                    )
                    if (servicesExists) {
                      return null
                    }
                  }

                  // Skip Contact only if Gallery exists (they're paired)
                  if (link.label === 'Contact') {
                    const galleryExists = navLinks.some(
                      (l) => l.label === 'Gallery'
                    )
                    if (galleryExists) {
                      return null
                    }
                  }

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="font-bold text-gray-800 text-lg"
                      ref={(el) => {
                        itemRefs.current[currentIndex] = el
                      }}
                      onClick={closeMenuImmediately}
                    >
                      {link.label}
                    </Link>
                  )
                })
              })()}
              <hr className="my-4" />
              <div className="flex items-center justify-between">
                {/* <Link
                  href="#"
                  className="font-bold text-gray-800 text-base"
                  ref={(el) => {
                    itemRefs.current[navLinks.length + 3] = el
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
                  Auction Properties
                </Link> */}
                {/* <Link
                  href="#"
                  className="font-bold text-gray-800 text-base"
                  ref={(el) => {
                    itemRefs.current[navLinks.length + 4] = el
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
                  Advertise
                </Link> */}
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
