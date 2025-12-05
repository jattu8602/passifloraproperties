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

const GangajalRiverfrontPage = () => {
  const [liked, setLiked] = useState(false)
  const [mapInteractive, setMapInteractive] = useState(false)
  const { toast } = useToast()

  const projectData: {
    title: string
    status: string
    type: string
    state: string
    city: string
    shortSummary: string
    description: string
    projectHighlights: string[]
    connectivity: string[]
    latitude: number
    longitude: number
    priceFromINR?: number
    areaSqFtMin?: number
  } = {
    title: 'Gangajal Riverfront Plots – Patna',
    status: 'active',
    type: 'Residential Plot',
    state: 'Bihar',
    city: 'Patna',
    shortSummary:
      "90 Kattha of premium river-touch plots near JP Setu, Digha — Patna's most scenic and high-potential real estate investment zone.",
    description: `Exceptional riverside land development near JP Setu, Digha, offering river-facing plots with legal clarity, wide internal roads, and strong infrastructure — balancing natural tranquility with urban convenience.`,
    projectHighlights: [
      'Total area ~90 Kattha (~1,20,000 sq. ft)',
      'River-touch location near JP Setu and Digha Bridge',
      'Freehold property with verified titles',
      'Electricity, road access, and water connection ready',
      'Panoramic Ganga riverfront views',
      'Low flood-risk zones identified; well-elevated pockets',
      'Scope for riverfront promenade and landscape features',
      'Ideal for premium residences, boutique resort, or club-house',
      'Robust long-term appreciation outlook in growth corridor',
    ],
    connectivity: [
      '5 mins from Digha–Patna Main Road',
      '10 mins from Patliputra Station',
      '20 mins from Gandhi Maidan',
      'Close to AIIMS–Patna Road and upcoming smart city zones',
      'Direct approach to JP Setu and Digha Bridge',
      'Good access to schools, hospitals, and retail in 15–20 mins',
    ],
    latitude: 25.6365,
    longitude: 85.0665,
    priceFromINR: undefined,
    areaSqFtMin: undefined,
  }

  const images = [
    {
      src: '/clientsentimages/GANGAJAL%20RIVERFRONT%20PLOTS.jpeg',
      alt: 'Gangajal Riverfront Plots',
    },
  ]

  const faqs = [
    {
      question: 'What is the total area of the project?',
      answer:
        'The project spans approximately 90 Kattha (~1,20,000 sq. ft) of premium river-touch land.',
    },
    {
      question: 'What is the location advantage?',
      answer:
        'The project is located near JP Setu and Digha Bridge, just 5 mins from Digha–Patna Main Road and 10 mins from Patliputra Station.',
    },
    {
      question: 'Are the titles verified?',
      answer:
        'Yes, all plots come with freehold property status and verified titles, ensuring complete legal clarity.',
    },
    {
      question: 'What infrastructure is available?',
      answer:
        'The project has electricity, road access, and water connection ready, with wide internal roads planned.',
    },
    {
      question: 'What can be developed on these plots?',
      answer:
        'The plots are ideal for premium residences, boutique resorts, or club-houses, with scope for riverfront promenade and landscape features.',
    },
    {
      question: 'Is there flood risk?',
      answer:
        'Low flood-risk zones have been identified with well-elevated pockets, ensuring safety and security.',
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

  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3771.5!2d${
    projectData.longitude
  }!3d${
    projectData.latitude
  }!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDM4JzExLjQiTiA4NcKwMDMnNTkuNCJF!5e1!3m2!1sen!2sin!4v${Date.now()}!5m2!1sen!2sin`

  return (
    <div className="min-h-screen bg-background">
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
                <span>
                  From {projectData.areaSqFtMin.toLocaleString()} sq. ft
                </span>
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
            src={`https://www.google.com/maps/embed?pb=!4v${Date.now()}!6m8!1m7!1s${
              projectData.latitude
            },${projectData.longitude}!2m2!1d${projectData.latitude}!2d${
              projectData.longitude
            }!3f186.6961810325677!4f-9.342022235530507!5f0.4000000000000002`}
            className="w-full h-full"
            style={{
              border: 0,
              pointerEvents: mapInteractive ? 'auto' : 'none',
            }}
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
                title: 'Riverfront Location',
                desc: 'Panoramic Ganga riverfront views',
                icon: MapPin,
              },
              {
                title: 'Prime Location',
                desc: 'Near JP Setu and Digha Bridge',
                icon: MapPin,
              },
              {
                title: 'Freehold Property',
                desc: 'Verified titles with legal clarity',
                icon: Check,
              },
              {
                title: 'Ready Infrastructure',
                desc: 'Electricity, roads, and water ready',
                icon: Check,
              },
              {
                title: 'Low Flood Risk',
                desc: 'Well-elevated pockets identified',
                icon: Check,
              },
              {
                title: 'High Appreciation',
                desc: 'Strong long-term growth potential',
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

export default GangajalRiverfrontPage
