export type StateCity = {
  state: 'Maharashtra' | 'Bihar' | 'Jharkhand'
  cities: string[]
}

export type FeaturedProject = {
  title: string
  slug: string
  state: 'Maharashtra' | 'Bihar' | 'Jharkhand'
  city: string
  imageUrl: string
  priceFrom?: string
}

export type QuickLink = {
  label: string
  href: string
}

export const headerNav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Properties', href: '/projects', hasMegaMenu: true },
  { label: 'Auction Properties', href: '#' },
  // { label: 'Services', href: '/services' },

  // { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export const projectsByState: StateCity[] = [
  {
    state: 'Maharashtra',
    cities: ['Pune', 'Pawna', 'Kamshet', 'Karjat', 'Mumbai', 'Manchar'],
  },

  {
    state: 'Bihar',
    cities: ['Patna', 'Sonepur', 'Gaya'],
  },
  {
    state: 'Jharkhand',
    cities: ['Ranchi'],
  },
]

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'Rajgad Valley Farm Plots — Bhor',
    slug: 'rajgad-valley-farm-plots',
    state: 'Maharashtra',
    city: 'Bhor',
    imageUrl: '/modern-house-exterior.jpg',
    priceFrom: '₹11 Lakh+',
  },
  {
    title: 'Luxury Farm Villas — Phase 2',
    slug: 'luxury-farm-villas-phase-2',
    state: 'Maharashtra',
    city: 'Bhor',
    imageUrl: '/modern-new-construction-interior-kitchen.jpg',
    priceFrom: '₹70 Lakh+',
  },
  {
    title: 'Passiflora Resorts — Pawna',
    slug: 'passiflora-resorts-pawna',
    state: 'Maharashtra',
    city: 'Pawna',
    imageUrl: '/new-luxury-property.jpg',
  },
  {
    title: 'Gangajal Riverfront Plots — Patna',
    slug: 'gangajal-riverfront-plots',
    state: 'Bihar',
    city: 'Patna',
    imageUrl: '/land-plot-aerial-view.jpg',
    priceFrom: '₹6 Lakh+',
  },
  {
    title: 'Sonepur Green Estate',
    slug: 'sonepur-green-estate',
    state: 'Bihar',
    city: 'Sonepur',
    imageUrl: '/green-house-garden.jpg',
    priceFrom: '₹8 Lakh+',
  },
  {
    title: 'Ranchi Weekend Farm Plots',
    slug: 'ranchi-weekend-farm-plots',
    state: 'Jharkhand',
    city: 'Ranchi',
    imageUrl: '/foreclosure-property-kitchen.jpg',
    priceFrom: '₹5 Lakh+',
  },
  {
    title: 'Chembur Urban Project — Mumbai',
    slug: 'chembur-urban-project',
    state: 'Maharashtra',
    city: 'Mumbai',
    imageUrl: '/luxury-condo-interior.jpg',
    priceFrom: '₹1.2 Cr+',
  },
  {
    title: 'Kamshet Lake View Plots',
    slug: 'kamshet-lake-view-plots',
    state: 'Maharashtra',
    city: 'Kamshet',
    imageUrl: '/sold-property-house.jpg',
    priceFrom: '₹15 Lakh+',
  },
]

export const quickLinks: QuickLink[] = [
  { label: 'View All Projects', href: '/projects' },
  { label: 'Contact Sales', href: '/contact' },
  { label: 'Book Site Visit', href: '/contact?intent=visit' },
  { label: 'WhatsApp Us', href: 'https://wa.me/' },
]
