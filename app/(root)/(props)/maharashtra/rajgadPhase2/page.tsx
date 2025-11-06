'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
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
  Download,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { MapFrame } from '@/components/MapFrame'
import { VideoPlayer } from '@/components/VideoPlayer'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const RajgadPhase2Page = () => {
  const [liked, setLiked] = useState(false)
  const [mapInteractive, setMapInteractive] = useState(false)
  const { toast } = useToast()
  const heroVideoRef = useRef<HTMLVideoElement>(null)
  const video3dRef = useRef<HTMLVideoElement>(null)

  const projectData = {
    title: 'Luxury Farm Villas – Phase 2 (Rajgad)',
    status: 'coming_soon',
    type: 'villa',
    state: 'Maharashtra',
    city: 'Bhor',
    shortSummary:
      '2 BHK fully furnished villas in 11,000 sq. ft plots with private pool, gardens, and valley views.',
    description:
      'Upcoming 50-acre luxury farmhouse community at Bhor with fully furnished 2BHK villas, private pools, and landscaped gardens. Farm maintenance by FarmProduce Organisation. Starting ₹70 Lakh.',
    projectHighlights: [
      '50-acre master-planned luxury farmhouse community (Phase 2)',
      '2BHK fully furnished villas with private pools',
      'Landscaped gardens and curated community amenities',
      'Managed farming and maintenance support',
      'Valley-view siting with privacy-first plot orientation',
      'Premium interior specifications and turnkey model',
      'Optional rental management and hospitality tie-ups',
      'Eco-conscious design with water harvesting potential',
    ],
    connectivity: [
      'Located in Bhor near Rajgad region',
      'Good road access to Pune and nearby tourism corridors',
      'Access to adventure and wellness destinations within 30–60 mins',
      'Day-trip distance from Pune; weekend access from Mumbai',
    ],
    latitude: 18.2205,
    longitude: 73.6501,
    priceFromINR: 7000000,
    areaSqFtMin: 11000,
  }

  const faqs = [
    {
      question: 'What is the total area of the project?',
      answer:
        'The Rajgad Farm Project spans 18.2 acres in Phase 1, with plans to expand to 50 acres for luxury farmhouse development.',
    },
    {
      question: 'Are the legal titles verified?',
      answer:
        'Yes, all plots come with verified legal titles and complete transparent documentation to ensure a secure investment.',
    },
    {
      question: 'How are the farms managed?',
      answer:
        'The FarmProduce Organisation manages all farming and cultivation activities on your behalf, ensuring sustainable annual returns.',
    },
    {
      question: 'What is the minimum investment required?',
      answer:
        'Plot prices start at ₹11 Lakh for 4,000 sq. ft community farm plots, making it accessible for first-time investors.',
    },
    {
      question: 'What can be grown on these plots?',
      answer:
        'The soil and water assessment indicates suitability for fruit orchards, bamboo cultivation, and other sustainable farming practices.',
    },
  ]

  // Hero images carousel data
  const heroImages = [
    { src: '/bhor/phase2/pooja.jpeg', label: 'Pooja View' },
    { src: '/bhor/phase2/heroimage1.jpeg', label: 'View 1' },
    { src: '/bhor/phase2/heroimage2.jpeg', label: 'View 2' },
    { src: '/bhor/phase2/heroimage3.jpeg', label: 'View 3' },
  ]

  // Vertical media data
  const verticalMedia = [
    { type: 'image', src: '/bhor/phase2/vertical1.jpeg' },
    { type: 'image', src: '/bhor/phase2/vertical2.jpeg' },
    { type: 'image', src: '/bhor/phase2/vertical3.jpeg' },
    { type: 'video', src: '/bhor/phase2/videos/verticalview1.mp4' },
    { type: 'video', src: '/bhor/phase2/videos/verticalview2.mp4' },
  ]

  // Box images
  const boxImages = [
    '/bhor/phase2/boximage1.jpeg',
    '/bhor/phase2/boximage2.jpeg',
  ]

  // Construction videos
  const constructionVideos = [
    '/bhor/phase2/videos/construction1.mp4',
    '/bhor/phase2/videos/construction2.mp4',
  ]

  // Misc videos
  const miscVideos = [
    '/bhor/phase2/videos/misc1.mp4',
    '/bhor/phase2/videos/misc2.mp4',
    '/bhor/phase2/videos/misc3.mp4',
  ]

  // Wellness images
  const wellnessImages = [
    '/bhor/phase2/wellness/activity.jpg',
    '/bhor/phase2/wellness/man.jpg',
    '/bhor/phase2/wellness/nutrition.jpg',
    '/bhor/phase2/wellness/relaxing.jpg',
    '/bhor/phase2/wellness/resorts.jpg',
    '/bhor/phase2/wellness/spa.jpg',
    '/bhor/phase2/wellness/yoga.jpg',
  ]

  // Autoplay plugin configuration - create stable instances for each carousel
  const heroAutoplay = useMemo(
    () =>
      Autoplay({
        delay: 4500,
        stopOnInteraction: false,
      }) as any,
    []
  )
  const verticalAutoplay = useMemo(
    () =>
      Autoplay({
        delay: 4500,
        stopOnInteraction: false,
      }) as any,
    []
  )
  const boxAutoplay = useMemo(
    () =>
      Autoplay({
        delay: 4500,
        stopOnInteraction: false,
      }) as any,
    []
  )
  const constructionAutoplay = useMemo(
    () =>
      Autoplay({
        delay: 4500,
        stopOnInteraction: false,
      }) as any,
    []
  )
  const miscAutoplay = useMemo(
    () =>
      Autoplay({
        delay: 4500,
        stopOnInteraction: false,
      }) as any,
    []
  )
  const wellnessAutoplay = useMemo(
    () =>
      Autoplay({
        delay: 4500,
        stopOnInteraction: false,
      }) as any,
    []
  )

  useEffect(() => {
    // Set hero video playback rate
    const heroVideo = heroVideoRef.current
    if (heroVideo) {
      const setHeroRate = () => {
        heroVideo.playbackRate = 2.0
      }
      heroVideo.addEventListener('loadedmetadata', setHeroRate)
      if (heroVideo.readyState >= 1) {
        setHeroRate()
      }
    }
    // Set 3D video playback rate
    const video3d = video3dRef.current
    if (video3d) {
      const set3dRate = () => {
        video3d.playbackRate = 1.5
      }
      video3d.addEventListener('loadedmetadata', set3dRate)
      if (video3d.readyState >= 1) {
        set3dRate()
      }
    }
  }, [])

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast({
      title: 'Message sent!',
      description: "We'll get back to you shortly.",
    })
  }

  const handleDownloadPDF = () => {
    const link = document.createElement('a')
    link.href = '/bhor/phase2/pdf.pdf'
    link.download = 'Rajgad-Phase-2-Booklet.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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

      {/* Hero Video Section */}
      <section className="relative w-full h-[30vh] md:h-[70vh] overflow-hidden">
        <video
          ref={heroVideoRef}
          src="/bhor/phase2/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 flex items-center justify-center">
          <div className="text-center px-4 text-white">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
              {projectData.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>
                  {projectData.city}, {projectData.state}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize2 className="h-4 w-4" />
                <span>
                  From {projectData.areaSqFtMin.toLocaleString()} sq. ft
                </span>
              </div>
              <div className="flex items-center gap-2">
                <IndianRupee className="h-4 w-4" />
                <span className="font-semibold">
                  {(projectData.priceFromINR / 100000).toFixed(1)} Lakh+
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Video Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <video
              ref={video3dRef}
              src="/bhor/phase2/videos/3d.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Future Look of 3D Model
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience the vision of luxury living with our detailed 3D model
              showcasing the future of Rajgad Phase 2. See how each villa is
              thoughtfully designed to maximize privacy, views, and comfort.
            </p>
            <ul className="space-y-2">
              {projectData.projectHighlights
                .slice(0, 4)
                .map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Hero Images Carousel */}
      <section className="w-full py-8 md:py-12">
        <Carousel
          plugins={[heroAutoplay]}
          className="w-full"
          opts={{
            align: 'start',
            loop: true,
          }}
        >
          <CarouselContent>
            {heroImages.map((item, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className="relative w-full h-[50vh] md:h-[70vh]">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8">
                    <h3 className="text-2xl md:text-4xl font-bold text-white">
                      {item.label}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Vertical Images/Videos Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Explore Our Views
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover the breathtaking valley views and serene landscapes that
              make Rajgad Phase 2 a truly special place to call home. Each villa
              is positioned to maximize natural beauty and privacy.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Valley Views</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Private Gardens</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  Natural Landscapes
                </span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Carousel
              plugins={[verticalAutoplay]}
              className="w-full"
              opts={{
                align: 'start',
                loop: true,
              }}
            >
              <CarouselContent>
                {verticalMedia.map((item, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
                      {item.type === 'image' ? (
                        <Image
                          src={item.src}
                          alt={`View ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <VideoPlayer
                          src={item.src}
                          className="w-full h-full"
                          autoplay={false}
                        />
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Box Images Carousel */}
      <section className="w-full py-8 md:py-12">
        <Carousel
          plugins={[boxAutoplay]}
          className="w-full"
          opts={{
            align: 'start',
            loop: true,
          }}
        >
          <CarouselContent>
            {boxImages.map((src, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className="relative w-full h-[40vh] md:h-[60vh]">
                  <Image
                    src={src}
                    alt={`Box view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Construction Videos Carousel */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
          Construction Progress
        </h2>
        <Carousel
          plugins={[constructionAutoplay]}
          className="w-full"
          opts={{
            align: 'start',
            loop: true,
          }}
        >
          <CarouselContent>
            {constructionVideos.map((src, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/2">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <VideoPlayer
                    src={src}
                    className="w-full h-full"
                    autoplay={false}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Misc Videos Carousel */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
          Project Highlights
        </h2>
        <Carousel
          plugins={[miscAutoplay]}
          className="w-full"
          opts={{
            align: 'start',
            loop: true,
          }}
        >
          <CarouselContent>
            {miscVideos.map((src, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/3">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <VideoPlayer
                    src={src}
                    className="w-full h-full"
                    autoplay={false}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Wellness Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 bg-muted/50 rounded-lg">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Passiflora Wellness Resorts
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            The Place Where Mind, Body and Spirit go on Vacation. Experience
            Ayurveda, Yoga Retreats, Wellness and Spa, Healing in an adult-only
            environment (12+).
          </p>
        </div>

        {/* Wellness Images Carousel */}
        <div className="mb-12">
          <Carousel
            plugins={[wellnessAutoplay]}
            className="w-full"
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent>
              {wellnessImages.map((src, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={src}
                      alt={`Wellness ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Wellness Content */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Wellness
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Wellness is not only a wonderful way of getting well-needed
                relaxation in your stress-filled everyday life, but it also
                replenishes the mind and soul to level your thoughts you might
                have lost long ago.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Activities
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Join our wellness activities every day to stay active, healthy,
                and fit! Your Passiflora Retreat includes daily morning and
                afternoon yoga sessions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Yoga Retreats
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                At the Passiflora Wellness Resorts, we created an atmosphere
                which is inspiring and calming, beautiful and unique. The
                adult-only peace and tranquility of the resort will very quickly
                change your moods.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Ayurveda
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our exclusive Destination Spa is the only venue on Pune that
                adopts ancient Ayurveda Spa techniques. Ayurveda is not just a
                healing system but a way of life aiming to balance the body,
                mind, and spirit.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Nutrition
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Passiflora AyurYoga Programs and Wellness Escapes include daily
                meals that are tasty, whole, healthy and fresh. Every day,
                you'll be enjoying great food served with Life-Drinks.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Resorts
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                At the Passiflora Wellness Resorts we don't just offer you a
                hotel room – we have created your own home away from home,
                hardly comparable with what is known as standard hotel
                accommodation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PDF Booklet Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <Card className="shadow-lg">
          <CardContent className="pt-8 pb-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Project Booklet
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Download our comprehensive project booklet to learn more about
                Rajgad Phase 2, including detailed specifications, floor plans,
                and amenities.
              </p>
              <Button onClick={handleDownloadPDF} size="lg" className="gap-2">
                <Download className="h-5 w-5" />
                Download PDF Booklet
              </Button>
              <div className="pt-4">
                <iframe
                  src="/bhor/phase2/pdf.pdf"
                  className="w-full h-[600px] md:h-[800px] rounded-lg border"
                  title="Project Booklet PDF"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Project Details Section */}
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
        <section className="container mx-auto px-4 py-8">
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-card">
            <MapFrame
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d799.6402267074013!2d73.65903863466374!3d18.22707902009323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDEzJzM3LjkiTiA3M8KwMzknMzMuOSJF!5e1!3m2!1sen!2sin!4v1762070091433!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Satellite View"
            />
          </div>
        </section>

        {/* 3D Map */}
        <section className="w-full h-[70vh] md:h-[70vh] relative">
          <MapFrame
            src="https://www.google.com/maps/embed?pb=!4v1762067067471!6m8!1m7!1sCd_pTV7edB6d1CSLZiRWKg!2m2!1d18.22726755784996!2d73.65935979764579!3f186.6961810325677!4f-9.342022235530507!5f0.4000000000000002"
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
                title: 'Premium Location',
                desc: 'Near UNESCO Heritage Site Rajgad Fort',
                icon: MapPin,
              },
              {
                title: 'Verified Titles',
                desc: 'Complete legal transparency',
                icon: Check,
              },
              {
                title: 'Managed Farming',
                desc: 'FarmProduce Organisation handles everything',
                icon: Check,
              },
              {
                title: 'Low Entry Price',
                desc: 'Starting at just ₹11 Lakh',
                icon: IndianRupee,
              },
              {
                title: 'High ROI Potential',
                desc: 'Strong returns with limited availability',
                icon: Check,
              },
              {
                title: 'Future Expansion',
                desc: '50-acre luxury development planned',
                icon: Maximize2,
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

        {/* Contact Form */}
        <section className="animate-fade-in">
          <Card className="shadow-soft border-border bg-card">
            <CardContent className="pt-8">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Get In Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                Interested in learning more? Fill out the form below and our
                team will reach out to you shortly.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="bg-background border-input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="bg-background border-input"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="bg-background border-input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Budget Range
                    </label>
                    <Input
                      id="budget"
                      name="budget"
                      placeholder="₹10-15 Lakh"
                      className="bg-background border-input"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="bg-background border-input resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto bg-gradient-to-r from-primary to-primary hover:opacity-90 transition-opacity"
                >
                  Submit Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}

export default RajgadPhase2Page
