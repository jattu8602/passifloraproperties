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

const MancharPage = () => {
  const [liked, setLiked] = useState(false)
  const [mapInteractive, setMapInteractive] = useState(false)
  const { toast } = useToast()

  const projectData = {
    title: 'Manchar Mountain View Farm Project',
    status: 'active',
    type: 'Farm Plot',
    state: 'Maharashtra',
    city: 'Manchar',
    shortSummary:
      'Scenic 13-acre farm project surrounded by mountains — just 300 meters from the highway. Ideal for weekend homes and long-term investment.',
    description: `A 13-acre, naturally contoured farm development surrounded by mountain ranges, offering panoramic views, clear titles, and accessible approach roads — ideal for farmhouse construction or land banking.`,
    projectHighlights: [
      '13 acres of gated, survey-approved farmland',
      'Scenic mountain views and pleasant year-round climate',
      'Ideal for farmhouse plots and long-term value appreciation',
      'Managed and marketed by Passiflora Properties',
      'Contour-based planning enabling natural water percolation',
      'Suitable for vineyards, herbal gardens, and native forestry',
      'Wide internal access planned for SUV and tractor movement',
      'Low light pollution; excellent stargazing and sky views',
    ],
    connectivity: [
      '300 meters from the main highway',
      'Easy access to Pune, Nashik, and nearby industrial zones',
      'Near Otur and Ghodegaon belt (~55 km from Pune)',
      'Bus connectivity to Manchar town; essential services within 10–15 km',
      'Approx. 90–120 minutes to Pune Airport depending on route',
    ],
    latitude: 19.006,
    longitude: 73.943,
    priceFromINR: undefined,
    areaSqFtMin: undefined,
  }

  const images = [
    {
      src: '/clientsentimages/Rajgad%20Farm%20Plots.jpeg',
      alt: 'Manchar Scenic Farmland',
    },
  ]

  const faqs = [
    {
      question: 'What is the total area of the project?',
      answer:
        'The Manchar Mountain View Farm Project spans 13 acres of gated, survey-approved farmland.',
    },
    {
      question: 'How far is it from the highway?',
      answer:
        'The project is located just 300 meters from the main highway, ensuring excellent accessibility.',
    },
    {
      question: 'What can be developed on these plots?',
      answer:
        'The land is ideal for farmhouse construction, vineyards, herbal gardens, native forestry, or land banking for long-term investment.',
    },
    {
      question: 'What is the connectivity like?',
      answer:
        'The project offers easy access to Pune, Nashik, and nearby industrial zones, approximately 90–120 minutes from Pune Airport.',
    },
    {
      question: 'What makes this location special?',
      answer:
        'The project features scenic mountain views, pleasant year-round climate, low light pollution for excellent stargazing, and contour-based planning for natural water percolation.',
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

  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3771.5!2d${projectData.longitude}!3d${projectData.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDAwJzIxLjYiTiA3M8KwNTYnMzQuOCJF!5e1!3m2!1sen!2sin!4v${Date.now()}!5m2!1sen!2sin`

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.history.back()}
            className="hover:bg-accent"
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

      <main className="container mx-auto px-4 py-12 space-y-16">
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

        <section className="animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Investment Highlights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Mountain Views',
                desc: 'Scenic mountain views and pleasant climate',
                icon: MapPin,
              },
              {
                title: 'Highway Access',
                desc: 'Just 300 meters from main highway',
                icon: MapPin,
              },
              {
                title: 'Versatile Development',
                desc: 'Ideal for farmhouses or land banking',
                icon: Check,
              },
              {
                title: 'Natural Planning',
                desc: 'Contour-based planning for water percolation',
                icon: Check,
              },
              {
                title: 'Stargazing',
                desc: 'Low light pollution for excellent sky views',
                icon: Check,
              },
              {
                title: 'Managed Marketing',
                desc: 'Managed and marketed by Passiflora Properties',
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

export default MancharPage

