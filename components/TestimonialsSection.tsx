'use client'

import { useEffect, useRef, useState } from 'react'
import { Heart, Star } from 'lucide-react'
import gsap from 'gsap'

// Mock testimonial data
const testimonials = [
  {
    id: 1,
    userPhoto: '/testimonials/rajesh.png',
    userName: 'Rajesh Kumar',
    rating: 5,
    title: 'Exceptional Service and Transparency',
    description:
      'Passiflora Properties made our land investment journey seamless. The team was transparent, professional, and helped us find the perfect plot for our future home. Highly recommended!',
    likedBy: ['/testimonials/priya.png', '/testimonials/amit.png', '/testimonials/extra3.png'],
    likeCount: 23,
  },
  {
    id: 2,
    userPhoto: '/testimonials/priya.png',
    userName: 'Priya Sharma',
    rating: 5,
    title: 'Dream Land Investment Realized',
    description:
      'After years of searching, we found our ideal farm plot through Passiflora. Their expertise in legally verified lands gave us confidence in our investment.',
    likedBy: ['/testimonials/rajesh.png', '/testimonials/sunita.png', '/testimonials/extra2.png'],
    likeCount: 18,
  },
  {
    id: 3,
    userPhoto: '/testimonials/amit.png',
    userName: 'Amit Patel',
    rating: 5,
    title: 'Trustworthy and Professional',
    description:
      'The 25+ years of experience shows in their service. They guided us through every step and ensured all documentation was clear and verified.',
    likedBy: ['/testimonials/vikram.png', '/testimonials/extra1.png', '/testimonials/extra3.png'],
    likeCount: 31,
  },
  {
    id: 4,
    userPhoto: '/testimonials/sunita.png',
    userName: 'Sunita Reddy',
    rating: 5,
    title: 'Excellent Property Management Support',
    description:
      'What impressed us most was their ongoing support. They help with property management and even FPO partnerships for generating returns.',
    likedBy: ['/testimonials/priya.png', '/testimonials/rajesh.png', '/testimonials/amit.png'],
    likeCount: 27,
  },
  {
    id: 5,
    userPhoto: '/testimonials/vikram.png',
    userName: 'Vikram Singh',
    rating: 5,
    title: 'Premium Locations at Great Value',
    description:
      'We got a premium plot in a scenic destination at an amazing price. The value for money is exceptional, and the location is perfect for our weekend retreat.',
    likedBy: ['/testimonials/sunita.png', '/testimonials/extra3.png', '/testimonials/rajesh.png'],
    likeCount: 19,
  },
  {
    id: 6,
    userPhoto: '/testimonials/anjali.png',
    userName: 'Anjali Desai',
    rating: 5,
    title: 'Seamless Documentation Process',
    description:
      'I was worried about the legalities, but Passiflora handled everything. Their team is extremely knowledgeable about land regulations and made the process stress-free.',
    likedBy: ['/testimonials/rahul.png', '/testimonials/kavita.png', '/testimonials/extra1.png'],
    likeCount: 42,
  },
  {
    id: 7,
    userPhoto: '/testimonials/rahul.png',
    userName: 'Rahul Verma',
    rating: 5,
    title: 'Perfect Weekend Getaway Investment',
    description:
      'Buying a plot for my weekend villa was the best decision. The location is breathtaking and the appreciation value in this area is already showing great promise.',
    likedBy: ['/testimonials/anjali.png', '/testimonials/suresh.png', '/testimonials/extra2.png'],
    likeCount: 35,
  },
  {
    id: 8,
    userPhoto: '/testimonials/meera.png',
    userName: 'Meera Iyer',
    rating: 5,
    title: 'Secure Future for My Family',
    description:
      'As a retired professional, I wanted a safe investment. Passiflora provided exactly that with their verified plots and professional conduct. Truly a trusted brand.',
    likedBy: ['/testimonials/sunita.png', '/testimonials/vikram.png', '/testimonials/suresh.png'],
    likeCount: 51,
  },
  {
    id: 9,
    userPhoto: '/testimonials/suresh.png',
    userName: 'Suresh Menon',
    rating: 5,
    title: 'Great ROI and Professionalism',
    description:
      'The returns on my first plot were so good that I bought another one. The team is professional and they keep you updated on all site developments regularly.',
    likedBy: ['/testimonials/rahul.png', '/testimonials/meera.png', '/testimonials/extra1.png'],
    likeCount: 28,
  },
  {
    id: 10,
    userPhoto: '/testimonials/kavita.png',
    userName: 'Kavita Malhotra',
    rating: 5,
    title: 'Exceptional Customer Relationship',
    description:
      'The way they treat their clients is commendable. They don\'t just sell land; they build relationships. Their guidance on property maintenance is a huge plus.',
    likedBy: ['/testimonials/anjali.png', '/testimonials/priya.png', '/testimonials/extra3.png'],
    likeCount: 39,
  },
]

type Testimonial = (typeof testimonials)[0]

interface TestimonialCardProps {
  testimonial: Testimonial
  onLike: (id: number) => void
  isLiked: boolean
}

function TestimonialCard({
  testimonial,
  onLike,
  isLiked,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8 flex-shrink-0 w-[320px] md:w-[380px] flex flex-col snap-start">
      {/* User Info */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={testimonial.userPhoto}
          alt={testimonial.userName}
          className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
          onError={(e) => {
            ;(e.target as HTMLImageElement).src =
              'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"%3E%3Cpath d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"%3E%3C/circle cx="12" cy="7" r="4"%3E%3C/svg%3E'
          }}
        />
        <div className="flex-1">
          <h3 className="font-bold text-gray-900">{testimonial.userName}</h3>
          {/* Star Rating */}
          <div className="flex items-center gap-1 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < testimonial.rating
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Highlighted Title */}
      <h4 className="font-bold text-lg text-gray-900 mb-3">
        {testimonial.title}
      </h4>

      {/* Description with Decorative Quote */}
      <div className="relative flex-1 mb-4">
        {/* Decorative Quote Mark */}
        <div className="absolute -top-2 -left-2 text-6xl md:text-7xl font-bold text-gray-200 leading-none">
          "
        </div>
        <p className="text-gray-700 leading-relaxed pl-4 relative z-10">
          {testimonial.description}
        </p>
      </div>

      {/* Like Button and Liked By Section */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
        <button
          onClick={() => onLike(testimonial.id)}
          className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isLiked ? 'fill-red-500 text-red-500' : ''
            }`}
          />
          <span className="text-sm font-medium">
            {testimonial.likeCount + (isLiked ? 1 : 0)}
          </span>
        </button>

        {/* Liked By - Overlapping Images */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Liked by</span>
          <div className="flex items-center -space-x-2">
            {testimonial.likedBy.slice(0, 3).map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Liked by user ${index + 1}`}
                className="w-6 h-6 rounded-full border-2 border-white object-cover"
                style={{ zIndex: 3 - index }}
                onError={(e) => {
                  ;(e.target as HTMLImageElement).src =
                    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"%3E%3Cpath d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"%3E%3C/circle cx="12" cy="7" r="4"%3E%3C/svg%3E'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [likedCards, setLikedCards] = useState<Set<number>>(new Set())
  const animationRef = useRef<gsap.core.Tween | null>(null)
  const isMobileRef = useRef(false)
  const userScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef<number | null>(null)

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  // Handle like toggle
  const handleLike = (id: number) => {
    setLikedCards((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  // Auto-scroll animation (desktop only) - using scrollLeft for compatibility with manual scrolling
  useEffect(() => {
    if (!contentRef.current || !carouselRef.current) return

    // Check if mobile - disable auto-scroll on mobile
    const checkMobile = () => {
      return window.innerWidth < 768
    }

    isMobileRef.current = checkMobile()

    // If mobile, just enable manual scrolling
    if (isMobileRef.current) {
      // Reset any transform for mobile
      gsap.set(contentRef.current, { x: 0 })
      return
    }

    const carousel = carouselRef.current
    const content = contentRef.current
    // Calculate card width (380px card + 24px gap on desktop)
    const cardWidth = 404
    const totalWidth = cardWidth * testimonials.length

    // Set scroll width to accommodate duplicated content
    const contentWidth = cardWidth * duplicatedTestimonials.length
    content.style.width = `${contentWidth}px`

    // Reset to start
    carousel.scrollLeft = 0

    // Create seamless infinite scroll using scrollLeft
    let currentScroll = 0
    const animate = () => {
      if (animationRef.current) {
        animationRef.current.kill()
      }

      // Get current scroll position
      currentScroll = carousel.scrollLeft

      animationRef.current = gsap.to(carousel, {
        scrollLeft: currentScroll + totalWidth,
        duration: 40, // Slow scroll - 40 seconds for full cycle
        ease: 'none',
        onComplete: () => {
          // If we've scrolled through one set, reset to start seamlessly
          if (carousel.scrollLeft >= totalWidth) {
            // Jump back to start without animation (instant reset)
            gsap.set(carousel, { scrollLeft: carousel.scrollLeft - totalWidth })
            currentScroll = carousel.scrollLeft
          }

          // Restart animation only if not hovered
          if (!isHovered && !userScrollingRef.current) {
            requestAnimationFrame(() => {
              animate()
            })
          }
        },
      })
    }

    // Start animation only if not hovered
    if (!isHovered) {
      // Use requestAnimationFrame for smoother start
      requestAnimationFrame(() => {
        animate()
      })
    }

    // Handle window resize
    const handleResize = () => {
      const wasMobile = isMobileRef.current
      isMobileRef.current = checkMobile()

      if (wasMobile !== isMobileRef.current) {
        // Mobile state changed - reset
        if (animationRef.current) {
          animationRef.current.kill()
        }
        carousel.scrollLeft = 0
        if (!isMobileRef.current && !isHovered) {
          // Switched to desktop - start animation
          requestAnimationFrame(() => {
            animate()
          })
        }
      }
    }

    // Handle manual scrolling - pause auto-scroll when user scrolls
    const handleScroll = () => {
      if (isMobileRef.current) return

      userScrollingRef.current = true
      if (animationRef.current) {
        animationRef.current.pause()
      }

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current)
      }

      // Resume auto-scroll after 2 seconds of no manual scrolling
      scrollTimeoutRef.current = window.setTimeout(() => {
        userScrollingRef.current = false
        if (animationRef.current && !isHovered) {
          const currentPos = carousel.scrollLeft
          // Restart animation from current position
          if (animationRef.current) {
            animationRef.current.kill()
          }
          const remainingDistance = totalWidth - (currentPos % totalWidth)
          animationRef.current = gsap.to(carousel, {
            scrollLeft: currentPos + remainingDistance,
            duration: (40 * remainingDistance) / totalWidth,
            ease: 'none',
            onComplete: () => {
              if (carousel.scrollLeft >= totalWidth) {
                gsap.set(carousel, {
                  scrollLeft: carousel.scrollLeft - totalWidth,
                })
              }
              if (!isHovered && !userScrollingRef.current) {
                requestAnimationFrame(() => {
                  animate()
                })
              }
            },
          })
        } else if (!animationRef.current && !isHovered) {
          // Restart animation if it was stopped
          requestAnimationFrame(() => {
            animate()
          })
        }
      }, 2000)
    }

    window.addEventListener('resize', handleResize)
    carousel.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      if (animationRef.current) {
        animationRef.current.kill()
      }
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current)
      }
      window.removeEventListener('resize', handleResize)
      carousel.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Handle hover state changes - smooth pause/resume
  useEffect(() => {
    if (
      isMobileRef.current ||
      !animationRef.current ||
      userScrollingRef.current
    )
      return

    if (isHovered) {
      animationRef.current.pause()
    } else {
      animationRef.current.resume()
    }
  }, [isHovered])

  // Handle hover (desktop only)
  const handleMouseEnter = () => {
    if (isMobileRef.current) return
    setIsHovered(true)
    if (animationRef.current) {
      animationRef.current.pause()
    }
  }

  const handleMouseLeave = () => {
    if (isMobileRef.current) return
    setIsHovered(false)
    if (animationRef.current) {
      animationRef.current.resume()
    }
  }

  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 text-foreground text-center mb-8 md:mb-12">
          What Our Client Say's
        </h2>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="relative overflow-x-auto scroll-smooth snap-x snap-mandatory [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div ref={contentRef} className="flex gap-6 will-change-transform">
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.id}-${index}`}
                testimonial={testimonial}
                onLike={handleLike}
                isLiked={likedCards.has(testimonial.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
