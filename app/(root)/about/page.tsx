'use client'

import { ArrowLeft, MapPin, Heart, Target, Shield } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/about/1.jpg"
            alt="Passiflora Properties - Lush farmland landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between py-8">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="self-start text-white hover:bg-white/20 hover:text-white transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </Button>

          <div className="text-white space-y-6 pb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              About Passiflora Properties
            </h1>
            <p className="text-lg md:text-xl max-w-3xl text-white/95 leading-relaxed">
              For over two decades, we've redefined what it means to invest in
              land — building legacies that grow in both value and emotion.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/90 text-lg leading-relaxed animate-fade-in">
              We believe that every piece of land carries a story — of roots,
              growth, and legacy. Our purpose is to help people not just buy
              land, but own a meaningful part of nature that grows in both value
              and emotion over time.
            </p>

            <p
              className="text-foreground/90 text-lg leading-relaxed animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              Founded with a vision to combine luxury, transparency, and
              sustainability, Passiflora Properties has become one of India's
              most trusted names in farm plots, second homes, villas, and resort
              developments. From the calm valleys of Rajgad and Pawna to the
              emerging real estate corridors of Bihar and Jharkhand, our
              projects are designed to balance peaceful living with profitable
              growth.
            </p>

            <p
              className="text-foreground/90 text-lg leading-relaxed animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              At Passiflora, we go beyond transactions — we build lifelong
              relationships. Every investor, every family, every dream matters
              to us. Whether you're looking for a serene weekend home, a
              farmland that earns returns, or a long-term legacy for your next
              generation — we stand with you at every step.
            </p>

            <p
              className="text-foreground/90 text-lg leading-relaxed animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              We handle your property as our own — ensuring legal transparency,
              consistent appreciation, and even managed cultivation through our
              FPO partnership model, where your land works for you.
            </p>

            <div
              className="mt-8 p-8 bg-primary/5 rounded-2xl border border-primary/10 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <p className="text-xl md:text-2xl font-semibold text-primary text-center">
                Because when you invest with Passiflora, you don't just buy land
                —
                <br className="hidden md:inline" />
                you plant your legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6 animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Mission
                </h2>
              </div>
              <p className="text-foreground/80 text-lg leading-relaxed">
                Our mission is to make land investment transparent, sustainable,
                and rewarding for every individual. We aim to deliver legally
                verified, nature-integrated properties that grow in both value
                and purpose — empowering people to turn their land into an
                ever-growing source of pride, peace, and prosperity.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                By offering complete property management and resale support, we
                ensure that every investor's journey with Passiflora remains
                seamless and profitable.
              </p>
            </div>
            <div
              className="order-1 md:order-2 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/about/2.jpg"
                  alt="Sustainable farmland development"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/about/3.jpg"
                  alt="Premium villa development in nature"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div
              className="space-y-6 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Vision
                </h2>
              </div>
              <p className="text-foreground/80 text-lg leading-relaxed">
                To become India's most trusted name in premium land development,
                creating spaces where nature, wellness, and prosperity come
                together. We envision a future where every Passiflora project
                stands as a living legacy — inspiring people to invest wisely,
                live meaningfully, and stay connected to the land they own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Core Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Trust',
                description:
                  'We build relationships that last longer than transactions.',
              },
              {
                title: 'Transparency',
                description:
                  'Every project is legally verified, every process is clear.',
              },
              {
                title: 'Integrity',
                description:
                  'We deliver what we promise, with honesty and consistency.',
              },
              {
                title: 'Sustainability',
                description:
                  "Our developments respect and preserve nature's balance.",
              },
              {
                title: 'Growth',
                description:
                  'We help our investors and communities prosper, together.',
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presence Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-lg mb-6 animate-fade-in">
            <MapPin className="h-8 w-8 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 animate-fade-in">
            Our Presence
          </h2>

          <div
            className="space-y-4 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex flex-wrap justify-center gap-3 text-lg">
              {['Maharashtra', 'Bihar', 'Jharkhand'].map((state) => (
                <span
                  key={state}
                  className="px-6 py-3 bg-primary/10 text-primary font-semibold rounded-full"
                >
                  {state}
                </span>
              ))}
            </div>

            <p className="text-xl md:text-2xl text-foreground/80 mt-8">
              Pune • Bhor • Pawna • Kamshet • Karjat • Mumbai • Patna • Sonepur
              • Gaya • Ranchi
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
