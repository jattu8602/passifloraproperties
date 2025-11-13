'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'
import Image from 'next/image'
import { ContactForm } from '@/components/ContactFormm'
import { ContactSidebar } from '@/components/ContactSidebar'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'

const ContactContent = () => {
  const searchParams = useSearchParams()
  const projectSlug = searchParams.get('project')
  const [api, setApi] = useState<CarouselApi>()

  const carouselImages = [
    {
      src: '/assets/carousel-farmhouse.jpg',
      alt: 'Luxury Farmhouse Estate',
      title: 'Premium Estates',
    },
    {
      src: '/assets/carousel-agricultural.jpg',
      alt: 'Agricultural Land',
      title: 'Fertile Farmland',
    },
    {
      src: '/assets/carousel-modern-farm.jpg',
      alt: 'Modern Farmhouse',
      title: 'Contemporary Living',
    },
    {
      src: '/assets/carousel-vineyard.jpg',
      alt: 'Vineyard Estate',
      title: 'Vineyard Properties',
    },
    {
      src: '/assets/carousel-lakeside.jpg',
      alt: 'Lakeside Property',
      title: 'Waterfront Living',
    },
  ]

  // Auto-slide functionality
  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 4000) // Slide every 4 seconds

    return () => clearInterval(interval)
  }, [api])

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/hero-contact.jpg"
            alt="Contact Passiflora Properties"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/40" />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
          <div className="animate-fade-in space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl drop-shadow-2xl">
              Let's Connect
            </h1>
            <p className="text-lg text-white/95 sm:text-xl md:text-2xl drop-shadow-lg">
              We'd love to help you explore your next land or farmhouse
              investment
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-card via-card to-accent/5 p-6 shadow-large sm:p-8 lg:p-10 animate-fade-in">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2 text-foreground">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will get back to you
                  within 24 hours
                </p>
              </div>
              <ContactForm projectSlug={projectSlug || undefined} />
            </div>

            {/* Additional Images Section */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="group relative overflow-hidden rounded-2xl shadow-medium transition-all duration-500 hover:shadow-large">
                <div className="relative h-64 w-full">
                  <Image
                    src="/assets/office-space.jpg"
                    alt="Our Office"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-1">
                      Visit Our Office
                    </h3>
                    <p className="text-sm text-white/95">
                      Experience luxury property planning
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-medium transition-all duration-500 hover:shadow-large">
                <div className="relative h-64 w-full">
                  <Image
                    src="/assets/property-showcase.jpg"
                    alt="Property Showcase"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-1">
                      Premium Properties
                    </h3>
                    <p className="text-sm text-white/95">
                      Explore our exclusive collection
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Auto-sliding Carousel Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Our Property Portfolio
              </h3>
              <Carousel
                setApi={setApi}
                opts={{
                  align: 'start',
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {carouselImages.map((image, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="group relative overflow-hidden rounded-2xl shadow-medium transition-all duration-500 hover:shadow-large">
                        <div className="relative h-80 w-full">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="text-white">
                            <h4 className="text-lg font-semibold">
                              {image.title}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden lg:flex" />
                <CarouselNext className="hidden lg:flex" />
              </Carousel>
            </div>
          </div>

          {/* Sidebar - Takes 1 column */}
          <div className="lg:col-span-1">
            <ContactSidebar />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-b from-accent/20 via-accent/10 to-background py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Why Choose Passiflora Properties?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {[
              {
                title: 'Expert Guidance',
                description:
                  '20+ years of experience in land and farmhouse investments',
              },
              {
                title: 'Prime Locations',
                description:
                  'Carefully curated properties in Maharashtra and Bihar',
              },
              {
                title: 'Transparent Process',
                description: 'Clear documentation and hassle-free transactions',
              },
              {
                title: 'After-Sales Support',
                description: 'Continued assistance even after your purchase',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="rounded-xl bg-gradient-to-br from-card to-accent/5 border border-primary/30 p-6 shadow-medium text-center transition-all duration-300 hover:shadow-large hover:-translate-y-1 hover:border-primary/50"
              >
                <h3 className="font-semibold text-lg mb-2 text-primary">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const Contact = () => {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-subtle" />}>
      <ContactContent />
    </Suspense>
  )
}

export default Contact
