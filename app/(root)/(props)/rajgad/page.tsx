'use client'
import { useState } from 'react'
import {
  ArrowLeft,
  Heart,
  Share2,
  MapPin,
  IndianRupee,
  Maximize2,
  Check,
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

const Rajgad = () => {
  const [liked, setLiked] = useState(false)
  const { toast } = useToast()

  const projectData = {
    title: 'Rajgad Farm Project — Phase 1',
    status: 'active',
    type: 'Farm Plot',
    state: 'Maharashtra',
    city: 'Bhor',
    shortSummary:
      'Invest in nature near Rajgad Fort — 4,000 sq. ft community farm plots by Passiflora Properties with limited availability and high growth potential.',
    description: `Discover The Rajgad Farm Project by Passiflora Properties — a serene blend of heritage, investment, and green living near the UNESCO World Heritage Site Rajgad Fort.

Spread across 18.2 acres, these 4,000 sq. ft community farm plots start at just ₹11 Lakh with verified legal titles, complete transparency, and the promise of sustainable annual returns through our FarmProduce Organisation.

Join a vibrant community of investors and families investing in a future rooted in wellness, eco-tourism, and prosperity.`,
    projectHighlights: [
      '18.2-acre gated community of 4,000 sq. ft farm plots',
      'Verified legal titles and transparent documentation',
      'Managed farming via FarmProduce Organisation',
      'Pilot phase with limited availability and strong ROI potential',
      'Low-density masterplan with green buffers and view corridors',
      'Soil and water assessment suitable for fruit orchards and bamboo',
      'Community-focused weekend farming and agro-tourism potential',
      'Contour-friendly plots planned for natural drainage and access',
      'Future-ready upscaling to 50-acre luxury farmhouse community',
      'Ideal for villa + farmland hybrid living',
    ],
    connectivity: [
      'Near Rajgad Fort, Bhor',
      'Well-connected to Pune and nearby wellness destinations',
      'Approx. 1.5–2 hours from Pune City depending on traffic',
      'Direct approach via Bhor–Rajgad corridor with scenic valley drives',
      'Nearby hospitality and wellness retreats within 10–20 km radius',
    ],
    priceFromINR: 1100000,
    areaSqFtMin: 4000,
    latitude: 18.227194,
    longitude: 73.659417,
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

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: projectData.title,
        text: projectData.shortSummary,
        url: window.location.href,
      })
    } else {
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
      {/* heading */}
      {/* <section className='className="container mx-auto px-4 pt-3 space-y-16'>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          {projectData.title}
        </h1>
      </section> */}
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
            <div className="flex items-center gap-2">
              <Maximize2 className="h-4 w-4" />
              <span>
                From {projectData.areaSqFtMin.toLocaleString()} sq. ft
              </span>
            </div>
            <div className="flex items-center gap-2">
              <IndianRupee className="h-4 w-4" />
              <span className="text-xl font-semibold text-foreground">
                {(projectData.priceFromINR / 100000).toFixed(1)} Lakh+
              </span>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {projectData.shortSummary}
          </p>
        </section>
      </main>

      {/* 3D Map */}
      <section className="w-full h-[70vh] md:h-[70vh] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1762067067471!6m8!1m7!1sCd_pTV7edB6d1CSLZiRWKg!2m2!1d18.22726755784996!2d73.65935979764579!3f186.6961810325677!4f-9.342022235530507!5f0.4000000000000002"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Project Location 3D View"
        />
      </section>

      {/* Google Earth Image Placeholder */}
      <section className="container mx-auto px-4 py-8">
        <div className="relative w-full h-96 bg-muted rounded-lg overflow-hidden shadow-card">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/50 to-muted">
            <div className="text-center">
              <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
              <p className="text-muted-foreground">
                Google Earth Satellite View
              </p>
            </div>
          </div>
        </div>
      </section>

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

export default Rajgad
