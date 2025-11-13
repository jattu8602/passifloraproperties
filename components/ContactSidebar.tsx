import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ContactInfo {
  region: string
  phone: string
  email: string
  role: string
}

const regionalContacts: ContactInfo[] = [
  {
    region: 'Maharashtra, Bhor',
    role: 'Sales Team + Pune',
    phone: '+91 9607210333',
    email: 'passiflorapune@gmail.com',
  },
  {
    region: 'Maharashtra, Pawna',
    role: 'Resort Bookings',
    phone: '+91 9999999999',
    email: 'bookings@passifloraproperties.com',
  },
  {
    region: 'Maharashtra, Mumbai',
    role: 'City Office',
    phone: '+91 2212345678',
    email: 'chembur@passifloraproperties.com',
  },
  {
    region: 'Bihar, Patna',
    role: 'State Lead',
    phone: '+91 9888888888',
    email: 'patna@passifloraproperties.com',
  },
]

export const ContactSidebar = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919607210333', '_blank')
  }

  return (
    <aside className="space-y-6">
      {/* Primary Contact Card */}
      <Card className="overflow-hidden border-primary/30 shadow-medium transition-all duration-300 hover:shadow-large hover:border-primary/50">
        <div className="relative h-48 overflow-hidden">
          <Image
            src="/assets/contact-support.jpg"
            alt="Contact Support"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/40 to-transparent" />
        </div>
        <CardHeader className="bg-gradient-to-br from-card to-accent/5">
          <CardTitle className="text-xl text-primary">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <Phone className="mt-1 h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">Call Us</p>
              <a
                href="tel:+919607210333"
                className="text-sm text-primary hover:text-accent-foreground transition-colors font-medium"
              >
                +91 9607210333
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="mt-1 h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">Email</p>
              <a
                href="mailto:info.passifloraproperties@gmail.com"
                className="text-sm text-primary hover:text-accent-foreground transition-colors break-all font-medium"
              >
                info.passifloraproperties@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">Address</p>
              <p className="text-sm text-muted-foreground">
                202, Nawu Imperio, Adjacent to Lodha Belmondo, Gahunje,
                Pimpri-Chinchwad, Pune, Maharashtra, 412101
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="mt-1 h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Business Hours
              </p>
              <p className="text-sm text-muted-foreground">
                Mon - Sat: 9:00 AM - 7:00 PM
              </p>
              <p className="text-sm text-muted-foreground">
                Sunday: 10:00 AM - 5:00 PM
              </p>
            </div>
          </div>

          <Button
            onClick={handleWhatsAppClick}
            className="w-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-semibold shadow-medium transition-all duration-300 hover:shadow-large hover:scale-[1.02] hover:from-primary/90 hover:to-primary"
          >
            WhatsApp Us
          </Button>
        </CardContent>
      </Card>

      {/* Regional Contacts Card */}
      <Card className="border-primary/30 shadow-medium hover:border-primary/50 transition-all duration-300">
        <CardHeader className="bg-gradient-to-br from-card to-accent/5">
          <CardTitle className="text-xl text-primary">
            Regional Contacts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {regionalContacts.map((contact, index) => (
            <div
              key={index}
              className="rounded-lg border border-primary/20 bg-gradient-to-br from-accent/20 to-accent/5 p-4 transition-all duration-300 hover:bg-gradient-to-br hover:from-accent/30 hover:to-accent/10 hover:shadow-medium hover:border-primary/40"
            >
              <h4 className="font-semibold text-primary mb-1">
                {contact.region}
              </h4>
              <p className="text-xs text-muted-foreground mb-2">
                {contact.role}
              </p>
              <div className="space-y-1">
                <a
                  href={`tel:${contact.phone}`}
                  className="block text-sm text-primary hover:text-accent-foreground transition-colors font-medium"
                >
                  {contact.phone}
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="block text-sm text-primary hover:text-accent-foreground transition-colors break-all font-medium"
                >
                  {contact.email}
                </a>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Decorative Image Card */}
      <Card className="overflow-hidden border-primary/30 shadow-medium hover:border-primary/50 transition-all duration-300">
        <div className="relative h-64 overflow-hidden">
          <Image
            src="/assets/landscape-sidebar.jpg"
            alt="Property Landscape"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </Card>

      {/* Passiflora Brand Image */}
      <Card className="overflow-hidden border-primary/30 shadow-medium hover:border-primary/50 transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <Image
            src="/assets/passiflora-decoration.jpg"
            alt="Passiflora Flower"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardContent className="p-4 bg-gradient-to-br from-card to-accent/5">
          <p className="text-sm text-primary text-center italic font-medium">
            "Rooted in nature, growing with you"
          </p>
        </CardContent>
      </Card>
    </aside>
  )
}
