'use client'
import { useState, useMemo } from 'react'
import {
  ArrowLeft,
  Heart,
  Share2,
  MapPin,
  IndianRupee,
  Maximize2,
  Check,
  Hand,
  MousePointerClick,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useToast } from '@/hooks/use-toast'
import { MapFrame } from '@/components/MapFrame'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const ChemburPage = () => {
  const [liked, setLiked] = useState(false)
  const [mapInteractive, setMapInteractive] = useState(false)
  const { toast } = useToast()

  const projectData = {
    title: 'Chembur Redevelopment Project — Lokhande Marg',
    status: 'active',
    type: 'Urban',
    state: 'Maharashtra',
    city: 'Mumbai',
    shortSummary:
      'Premium redevelopment project near Chembur West Station — offering 1BHK apartments for sale in a new residential tower by Passiflora Properties.',
    description: `A landmark urban redevelopment near Lokhande Marg, Chembur West, transforming an existing housing society into a modern residential tower with legal transparency and efficient layouts.

30 premium 1BHK flats are available for sale, designed for comfort, safety, and proximity to key city hubs.`,
    projectHighlights: [
      '6,000 sq. ft land parcel redevelopment',
      'Ground + 9 storeys with efficient 1BHK layouts (~375 sq. ft)',
      'Resident-friendly policy: doubling existing resident area',
      'Compliance with Government redevelopment norms',
      'Modern facade, fire safety, and lift access planned',
      'Optimized ventilation and daylight for compact homes',
      'Quality-first construction with phased handovers',
      'Low-maintenance design; budget-friendly operations for societies',
    ],
    connectivity: [
      'Near Lokhande Marg, Chembur West, Mumbai',
      'Close to Chembur West Railway Station and Eastern Freeway',
      'Proximity to Eastern Express Highway and Monorail',
      'Easy reach to BKC, Sion, Wadala business hubs',
      'Well-served by schools, markets, and healthcare in 2–3 km radius',
    ],
    latitude: 19.0623,
    longitude: 72.9009,
    priceFromINR: undefined,
    areaSqFtMin: undefined,
  }

  const images = [
    {
      src: '/clientsentimages/REDEVELOPMENT%20PROJECT,%20CHEMBUR,%20MUMBAI.jpeg',
      alt: 'Chembur Redevelopment',
    },
  ]

  const faqs = [
    {
      question: 'What is the project location?',
      answer:
        'The project is located near Lokhande Marg, Chembur West, Mumbai, close to Chembur West Railway Station and Eastern Freeway.',
    },
    {
      question: 'What type of apartments are available?',
      answer:
        '30 premium 1BHK flats are available for sale with efficient layouts of approximately 375 sq. ft each.',
    },
    {
      question: 'What are the building specifications?',
      answer:
        'The project features Ground + 9 storeys with modern facade, fire safety systems, lift access, and optimized ventilation and daylight.',
    },
    {
      question: 'Is the project compliant with regulations?',
      answer:
        'Yes, the project complies with all Government redevelopment norms and includes resident-friendly policies.',
    },
    {
      question: 'What amenities are nearby?',
      answer:
        'The location is well-served by schools, markets, and healthcare facilities within 2–3 km radius, with easy access to business hubs like BKC, Sion, and Wadala.',
    },
  ]

  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
      }) as any,
    []
  )

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: projectData.title,
        text: projectData.shortSummary,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast({
        title: 'Link copied!',
        description: 'Project link copied to clipboard',
      })
    }
  }

  // Generate Google Maps embed URL
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3771.5!2d${projectData.longitude}!3d${projectData.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDAzJzQ0LjMiTiA3MsKwNTQnMDMuMiJF!5e1!3m2!1sen!2sin!4v${Date.now()}!5m2!1sen!2sin`

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.history.back()}
            className="hover:bg-accent cursor-pointer"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLiked(!liked)}
              className="hover:bg-accent"
            >
              <Heart
                className={`h-5 w-5 ${
                  liked ? 'fill-primary text-primary' : ''
                }`}
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleShare}
              className="hover:bg-accent"
            >
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Project Header */}
        <section className="animate-fade-in">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
              {projectData.status === 'active'
                ? 'Available Now'
                : 'Coming Soon'}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
              {projectData.type}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {projectData.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>
                {projectData.city}, {projectData.state}
              </span>
            </div>
            {projectData.areaSqFtMin && (
              <div className="flex items-center gap-2">
                <Maximize2 className="h-4 w-4" />
                <span>From {projectData.areaSqFtMin.toLocaleString()} sq. ft</span>
              </div>
            )}
            {projectData.priceFromINR && (
              <div className="flex items-center gap-2">
                <IndianRupee className="h-4 w-4" />
                <span className="text-xl font-semibold text-foreground">
                  {(projectData.priceFromINR / 100000).toFixed(1)} Lakh+
                </span>
              </div>
            )}
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {projectData.shortSummary}
          </p>
        </section>
      </main>

      {/* Image Carousel */}
      <section className="w-full py-8">
        {images.length > 1 ? (
          <Carousel
            plugins={[autoplay]}
            className="w-full"
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="relative w-full h-[50vh] md:h-[70vh]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        ) : (
          <div className="relative w-full h-[50vh] md:h-[70vh]">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </section>

      {/* 3D Map */}
      {projectData.latitude && projectData.longitude && (
        <section className="w-full h-[70vh] md:h-[70vh] relative">
          <MapFrame
            src={`https://www.google.com/maps/embed?pb=!4v${Date.now()}!6m8!1m7!1s${projectData.latitude},${projectData.longitude}!2m2!1d${projectData.latitude}!2d${projectData.longitude}!3f186.6961810325677!4f-9.342022235530507!5f0.4000000000000002`}
            className="w-full h-full"
            style={{ border: 0, pointerEvents: mapInteractive ? 'auto' : 'none' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Project Location 3D View"
          />
          <div className="absolute bottom-4 left-4 z-10">
            <Button
              onClick={() => setMapInteractive(!mapInteractive)}
              variant={mapInteractive ? 'default' : 'secondary'}
              className="gap-2 shadow-lg"
            >
              {mapInteractive ? (
                <>
                  <MousePointerClick className="h-4 w-4" />
                  <span className="hidden sm:inline">Map Active</span>
                </>
              ) : (
                <>
                  <Hand className="h-4 w-4" />
                  <span className="hidden sm:inline">Click to Interact</span>
                </>
              )}
            </Button>
          </div>
        </section>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Description */}
        <section className="animate-fade-in">
          <Card className="shadow-card border-border">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                About This Project
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground whitespace-pre-line">
                {projectData.description}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Google Maps Satellite View */}
        {projectData.latitude && projectData.longitude && (
          <section className="container mx-auto px-4 py-8">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-card">
              <MapFrame
                src={mapEmbedUrl}
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Satellite View"
              />
            </div>
          </section>
        )}

        {/* Collapsible Details */}
        <section className="animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Project Details
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="highlights"
              className="border border-border rounded-lg px-6 shadow-card bg-card"
            >
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Project Highlights
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 mt-4">
                  {projectData.projectHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="connectivity"
              className="border border-border rounded-lg px-6 shadow-card bg-card"
            >
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Connectivity & Location
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 mt-4">
                  {projectData.connectivity.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Feature Cards */}
        <section className="animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Investment Highlights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Prime Location',
                desc: 'Near Chembur West Station and Eastern Freeway',
                icon: MapPin,
              },
              {
                title: 'Modern Design',
                desc: 'Efficient 1BHK layouts with optimized space',
                icon: Check,
              },
              {
                title: 'Compliant Development',
                desc: 'Full compliance with Government redevelopment norms',
                icon: Check,
              },
              {
                title: 'Quality Construction',
                desc: 'Quality-first approach with phased handovers',
                icon: Check,
              },
              {
                title: 'Excellent Connectivity',
                desc: 'Easy access to BKC, Sion, and business hubs',
                icon: MapPin,
              },
              {
                title: 'Resident-Friendly',
                desc: 'Policy of doubling existing resident area',
                icon: Check,
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="shadow-card border-border hover:shadow-soft transition-all duration-300 hover:scale-105 bg-card"
              >
                <CardContent className="pt-6">
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-border rounded-lg px-6 shadow-card bg-card"
              >
                <AccordionTrigger className="text-lg font-medium hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mt-2">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
    </div>
  )
}

export default ChemburPage

