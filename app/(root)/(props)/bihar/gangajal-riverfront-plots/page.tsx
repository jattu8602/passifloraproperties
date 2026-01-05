'use client'

import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react'
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
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Waves,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { useToast } from '@/hooks/use-toast'
import { MapFrame } from '@/components/MapFrame'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { GangajalMediaGallery } from './GangajalMediaGallery'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { GANGAJAL_IMAGES } from './gangajal-media.data'

const GangajalRiverfrontPage = () => {
  const [liked, setLiked] = useState(false)
  const [mapInteractive, setMapInteractive] = useState(false)
  const { toast } = useToast()
  const footerRef = useRef<HTMLDivElement>(null)

  // Carousel setup
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })])

  // All 3D Renders (13 assets)
  const allHighlights = useMemo(() =>
    GANGAJAL_IMAGES.filter(img => img.category === '3D Render'),
  [])

  // Filtered Hero Slider Renders (Excluding 2, 6, 8, 9, 12 as per user request)
  const heroImages = useMemo(() => {
    const excludedIndices = [1, 5, 7, 8, 11] // 0-based indices to remove
    return allHighlights.filter((_, idx) => !excludedIndices.includes(idx))
  }, [allHighlights])

  // Site Landscapes - Real Views (10 assets)
  const propertyViews = useMemo(() =>
    GANGAJAL_IMAGES.filter(img => img.category === 'Scenic'),
  [])

  const [selectedHeroImage, setSelectedHeroImage] = useState<typeof allHighlights[0] | null>(null)
  const [activeCollection, setActiveCollection] = useState<typeof allHighlights | null>(null)

  const navigateModal = useCallback((direction: 'prev' | 'next') => {
    if (!selectedHeroImage || !activeCollection) return
    const currentIndex = activeCollection.findIndex(img => img.url === selectedHeroImage.url)
    if (currentIndex === -1) return

    let nextIndex
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % activeCollection.length
    } else {
      nextIndex = (currentIndex - 1 + activeCollection.length) % activeCollection.length
    }
    setSelectedHeroImage(activeCollection[nextIndex])
  }, [selectedHeroImage, activeCollection])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedHeroImage) return
      if (e.key === 'ArrowRight') navigateModal('next')
      if (e.key === 'ArrowLeft') navigateModal('prev')
      if (e.key === 'Escape') {
        setSelectedHeroImage(null)
        setActiveCollection(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedHeroImage, navigateModal])

  // Register GSAP ScrollTrigger
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // GSAP Scroll to Hide Footer logic
    const showAnim = gsap.from(footerRef.current, {
      yPercent: 100,
      paused: true,
      duration: 0.3,
      ease: "power2.out"
    }).progress(1)

    ScrollTrigger.create({
      start: "top top-100",
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  const projectData = {
    title: 'Gangajal Riverfront Plots',
    subtitle: 'Patna’s Most Coveted River-Touch Investment',
    status: 'active',
    type: 'Luxury Residential Plot',
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
      { location: 'Digha–Patna Main Road', time: '5 mins' },
      { location: 'Patliputra Junction', time: '10 mins' },
      { location: 'Gandhi Maidan', time: '20 mins' },
      { location: 'AIIMS–Patna Road', time: 'Upcoming' },
      { location: 'JP Setu Access', time: 'Direct' },
    ],
    latitude: 25.6365,
    longitude: 85.0665,
  }

  const faqs = [
    {
      question: 'What is the total area of the project?',
      answer:
        'The project spans approximately 90 Kattha (~1,20,000 sq. ft) of premium river-touch land.',
    },
    {
      question: 'What is the location advantage?',
      answer:
        'The project is located near JP Setu and Digha Bridge, just 5 mins from Digha–Patna Main Road and 10 mins from Patliputra Junction.',
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
  ]

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

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Dynamic Header */}
      <header className="fixed top-4 md:top-8 left-0 right-0 z-[100] transition-all duration-300 pointer-events-none">
        <div className="container mx-auto px-4 flex items-center justify-between pointer-events-auto">
          {/* Floating Back Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-background/60 backdrop-blur-xl border border-white/10 rounded-full p-1 shadow-2xl cursor-pointer hover:bg-background/80 transition-colors"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.history.back()}
              className="hover:bg-white/10 text-foreground rounded-full h-11 w-11 md:h-12 md:w-12 cursor-pointer"
            >
              <ArrowLeft className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </motion.div>

          {/* Floating Navigation Pill */}
          <div className="hidden lg:flex items-center gap-2 bg-background/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2 shadow-2xl">
            <Link href="#overview" className="text-[10px] uppercase tracking-widest font-bold hover:text-primary transition-colors px-3 py-1 cursor-pointer">Overview</Link>
            <div className="w-[1px] h-4 bg-white/10" />
            <Link href="#highlights" className="text-[10px] uppercase tracking-widest font-bold hover:text-primary transition-colors px-3 py-1 cursor-pointer">Highlights</Link>
            <div className="w-[1px] h-4 bg-white/10" />
            <Link href="#location" className="text-[10px] uppercase tracking-widest font-bold hover:text-primary transition-colors px-3 py-1 cursor-pointer">Location</Link>
          </div>

          {/* Floating Action Pill */}
          <div className="flex items-center gap-1 md:gap-2 bg-background/60 backdrop-blur-xl border border-white/10 rounded-full p-1 shadow-2xl">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setLiked(!liked)}
                className={`hover:bg-white/10 rounded-full h-10 w-10 md:h-11 md:w-11 cursor-pointer ${liked ? 'text-primary' : 'text-foreground'}`}
              >
                <Heart className={`h-4 w-4 md:h-5 md:w-5 ${liked ? 'fill-current' : ''}`} />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleShare}
                className="hover:bg-white/10 text-foreground rounded-full h-10 w-10 md:h-11 md:w-11 cursor-pointer"
              >
                <Share2 className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </motion.div>

            <Button
                className="rounded-full px-4 md:px-6 h-10 md:h-11 text-[10px] md:text-sm font-bold uppercase tracking-widest shadow-lg shadow-primary/25 cursor-pointer hover:scale-105 transition-transform"
                asChild
            >
                <a
                    href="https://wa.me/9135559596?text=Hello!%20I%20want%20to%20enquire%20about%20the%20Gangajal%20Riverfront%20Plots%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Enquire
                </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Cinematic Hero Slider */}
      <section className="relative h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 select-none overflow-hidden w-full" ref={emblaRef}>
          <div className="flex h-full w-full">
            {heroImages.map((img, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 relative h-full w-full">
                <Image
                  src={img.url}
                  alt={img.title}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30 pointer-events-none" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-2xl pt-20 md:pt-0"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md mb-6 md:mb-8">
              <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-primary" />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white uppercase text-nowrap">Ultra-Premium Investment</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-4 md:mb-6 leading-[1.1] tracking-tighter">
              {projectData.title}
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-xl font-light leading-relaxed">
              {projectData.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Hero Decorative Elements */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Scroll to Explore</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Project Highlights - Selection Grid */}
      <section className="py-24 bg-accent/5 border-b border-border relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Project Highlights</h2>
            <p className="text-muted-foreground text-lg">A curated selection of the finest views from Gangajal Riverfront.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {allHighlights.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-border"
                onClick={() => {
                  setSelectedHeroImage(img)
                  setActiveCollection(allHighlights)
                }}
              >
                <Image
                  src={img.url}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="h-8 w-8 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-[10px] font-bold uppercase tracking-wider truncate">{img.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real view of property - Landscape Grid */}
      <section className="py-24 bg-background border-b border-border relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Real view of property</h2>
            <p className="text-muted-foreground text-lg">Actual site photographs showcasing the current status and surroundings.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {propertyViews.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-border"
                onClick={() => {
                  setSelectedHeroImage(img)
                  setActiveCollection(propertyViews)
                }}
              >
                <Image
                  src={img.url}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="h-8 w-8 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-[10px] font-bold uppercase tracking-wider truncate">{img.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Cards */}
      <section id="overview" className="relative z-10 pb-12 md:pb-20 pt-24">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {[
                    { icon: Waves, label: 'Asset Type', value: 'River-Touch Plots', desc: 'Direct access to Ganga' },
                    { icon: ShieldCheck, label: 'Legal Status', value: 'Verified Freehold', desc: '100% Secure Titles' },
                    { icon: TrendingUp, label: 'Growth Potential', value: 'High Appreciation', desc: 'Premium Corridor' }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-card/80 backdrop-blur-2xl border-white/10 shadow-2xl overflow-hidden group">
                           <CardContent className="p-6 md:p-8 text-center md:text-left">
                                <item.icon className="h-8 w-8 md:h-10 md:w-10 text-primary mb-4 md:mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform" />
                                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1 md:mb-2">{item.label}</p>
                                <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 tracking-tight">{item.value}</h3>
                                <p className="text-sm md:text-base text-muted-foreground">{item.desc}</p>
                           </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Experience Gallery */}
      <section id="experience">
        <GangajalMediaGallery />
      </section>

      {/* Highlights & Details */}
      <section id="highlights" className="py-16 md:py-24 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-8 tracking-tight">
                Crafted for <br /> <span className="text-primary italic">Distinction</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 leading-relaxed">
                {projectData.description}
              </p>

              <div className="space-y-3 md:space-y-4">
                {projectData.projectHighlights.slice(0, 5).map((h, i) => (
                    <div key={i} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-background shadow-sm border border-border">
                        <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                            <Check className="h-4 w-4 md:h-5 md:w-5" />
                        </div>
                        <span className="font-medium text-sm md:text-lg">{h}</span>
                    </div>
                ))}
              </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-background"
            >
              <Image
                src="/final/3d_renders/project_overview/front_amenities_aerial_1.jpg"
                alt="Project Overview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Connectivity & Location */}
      <section id="location" className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 italic md:not-italic">Strategic Connectivity</h2>
            <p className="text-muted-foreground text-base md:text-lg italic">Perfectly positioned between nature and the urban pulse.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2 space-y-8">
               {/* 3D Map View */}
               <div className="relative h-[400px] md:h-[600px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl border border-border">
                  <MapFrame
                    src={`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3597.5517!2d${projectData.longitude}!3d${projectData.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDM4JzExLjQiTiA4NcKwMDMnNTkuNCJF!5e1!3m2!1sen!2sin!4v${Date.now()}!5m2!1sen!2sin&maptype=satellite`}
                    className="w-full h-full"
                    style={{
                        border: 0,
                        pointerEvents: mapInteractive ? 'auto' : 'none',
                    }}
                    allowFullScreen
                    loading="lazy"
                    title="Project Satellite View"
                  />
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10 flex flex-col gap-2">
                    <div className="px-3 md:px-4 py-1.5 md:py-2 bg-background/90 backdrop-blur-md rounded-full shadow-lg border border-border flex items-center gap-2">
                        <MapPin className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">High-Res Satellite View</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10">
                    <Button
                    onClick={() => setMapInteractive(!mapInteractive)}
                    variant={mapInteractive ? 'default' : 'secondary'}
                    className="rounded-full h-10 md:h-12 px-4 md:px-6 shadow-xl gap-2 font-bold text-xs md:text-sm"
                    >
                    {mapInteractive ? <MousePointerClick className="h-4 w-4 md:h-5 md:w-5" /> : <Hand className="h-4 w-4 md:h-5 md:w-5" />}
                    {mapInteractive ? 'Active View' : 'Interact with Map'}
                    </Button>
                  </div>
               </div>
            </div>

            <div className="space-y-6">
                <Card className="h-full border-border bg-accent/5 backdrop-blur-sm shadow-none p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Access Points</h3>
                    <div className="space-y-6 md:space-y-8">
                        {projectData.connectivity.map((item, i) => (
                            <div key={i} className="flex justify-between items-center group">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-primary group-hover:scale-[2] transition-transform" />
                                    <span className="text-sm md:text-base text-muted-foreground font-medium">{item.location}</span>
                                </div>
                                <span className="text-sm md:text-base font-bold text-primary">{item.time}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border">
                        <Button variant="outline" className="w-full h-12 md:h-14 rounded-xl font-bold gap-2 text-sm md:text-base" asChild>
                            <a
                                href={`https://www.google.com/maps/dir/?api=1&destination=${projectData.latitude},${projectData.longitude}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Share2 className="h-4 w-4" /> Get Directions
                            </a>
                        </Button>
                    </div>
                </Card>
            </div>
          </div>
        </div>
      </section>



      {/* Hero Image Modal */}
      <AnimatePresence>
        {selectedHeroImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedHeroImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full flex flex-col items-center justify-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[70vh] md:h-[80vh] rounded-2xl overflow-hidden border border-white/10 transition-all">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedHeroImage.url}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={selectedHeroImage.url}
                      alt={selectedHeroImage.title}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="text-center">
                <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight">{selectedHeroImage.title}</h3>
                {activeCollection && (
                  <p className="text-white/40 text-sm mt-2 font-mono">
                    {activeCollection.findIndex(img => img.url === selectedHeroImage.url) + 1} / {activeCollection.length}
                  </p>
                )}
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            {activeCollection && activeCollection.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 rounded-full h-14 w-14 z-[210] bg-black/20 backdrop-blur-md"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateModal('prev')
                  }}
                >
                  <ChevronLeft className="h-8 w-8 md:h-10 md:w-10" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 rounded-full h-14 w-14 z-[210] bg-black/20 backdrop-blur-md"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateModal('next')
                  }}
                >
                  <ChevronRight className="h-8 w-8 md:h-10 md:w-10" />
                </Button>
              </>
            )}

            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="fixed top-4 right-4 md:top-8 md:right-8 text-white hover:bg-white/10 rounded-full h-14 w-14 z-[210] bg-black/20 backdrop-blur-md"
              onClick={() => {
                setSelectedHeroImage(null)
                setActiveCollection(null)
              }}
            >
              <X className="h-8 w-8 md:h-10 md:w-10" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10 md:mb-16">
             <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4 italic">Common Queries</h2>
             <p className="text-sm md:text-base text-muted-foreground">Everything you need to know about your investment.</p>
          </div>
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-border rounded-xl md:rounded-2xl px-6 md:px-8 py-1 md:py-2 shadow-sm bg-card transition-all data-[state=open]:shadow-md data-[state=open]:border-primary/20"
              >
                <AccordionTrigger className="text-base md:text-lg font-bold hover:no-underline hover:text-primary py-3 md:py-4 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pt-1 md:pt-2 pb-4 md:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Fixed Sticky Footer CTA */}
      <div
        ref={footerRef}
        className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
      >
        <div className="container mx-auto px-0 md:px-4">
            <div className="bg-primary rounded-[2rem] md:rounded-3xl p-6 md:p-8 shadow-[0_20px_60px_-15px_rgba(var(--primary-rgb),0.5)] flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
                <div className="text-center lg:text-left">
                    <h2 className="text-xl md:text-3xl font-black text-white leading-tight mb-2">Secure Your Riverfront Plot Selection</h2>
                    <p className="text-sm md:text-base text-white/80 font-medium">Limited parcels available in Phase 1 starting from 90 Kattha.</p>
                </div>
                <div className="flex flex-row gap-3 md:gap-4 w-full md:w-auto">
                    <Button variant="secondary" className="flex-1 md:flex-none h-14 md:h-16 px-4 md:px-10 rounded-xl md:rounded-2xl text-base md:text-lg font-black shadow-xl shrink-0" asChild>
                        <a
                            href="https://wa.me/9135559596?text=Hello!%20I%20am%20interested%20in%20scheduling%20a%20site%20visit%20for%20Gangajal%20Riverfront%20Plots.%20Please%20let%20me%20know%20the%20available%20slots."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="hidden sm:inline">Schedule Site Visit</span>
                            <span className="sm:hidden">Site Visit</span>
                        </a>
                    </Button>
                    <Button variant="outline" className="flex-1 md:flex-none h-14 md:h-16 px-4 md:px-6 rounded-xl md:rounded-2xl border-white/20 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 shrink-0" asChild>
                        <a
                            href="https://wa.me/9135559596?text=Hello!%20I%20would%20like%20to%20receive%20the%20brochure%20for%20Gangajal%20Riverfront%20Plots.%20Please%20share%20it%20with%20me."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Brochure
                        </a>
                    </Button>
                </div>
            </div>
        </div>
      </div>

      {/* Footer Spacer */}
      <div className="h-32 md:h-40" />
    </div>
  )
}

export default GangajalRiverfrontPage
