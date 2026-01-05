export type ProjectLink = {
  name: string
  href: string
}

export type StateProjects = {
  state: 'Maharashtra' | 'Bihar' | 'Jharkhand'
  projects: ProjectLink[]
}

export type FeaturedProject = {
  title: string
  slug: string
  state: 'Maharashtra' | 'Bihar' | 'Jharkhand'
  city: string
  imageUrl: string
  priceFrom?: string
  link?: string
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

export const projectsByState: StateProjects[] = [
  {
    state: 'Maharashtra',
    projects: [
      { name: 'Chembur', href: '/maharashtra/chembur' },
      { name: 'Karjat', href: '/maharashtra/karjat' },
      { name: 'Manchar', href: '/maharashtra/manchar' },
      { name: 'Rajgad Phase 1', href: '/maharashtra/rajgadPhase1' },
      { name: 'Rajgad Phase 2', href: '/maharashtra/rajgadPhase2' },
    ],
  },

  {
    state: 'Bihar',
    projects: [
      { name: 'Gangajal Riverfront Plots', href: '/bihar/gangajal-riverfront-plots' },
      { name: 'Sonepur Green Estate', href: '/bihar/sonepur-green-estate' },
    ],
  },
  {
    state: 'Jharkhand',
    projects: [
      { name: 'Ranchi Green Living', href: '/jharkhand/ranchi-green-living' },
      { name: 'Ranchi Pithoria Residential Plots', href: '/jharkhand/ranchi-pithoria-residential-plots' },
    ],
  },
]

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'Rajgad Farm Project — Phase 1',
    slug: 'rajgad-phase-1',
    state: 'Maharashtra',
    city: 'Bhor',
    imageUrl: '/clientsentimages/Rajgad%20Farm%20Plots.jpeg',
    priceFrom: '₹11 Lakh+',
    link: '/maharashtra/rajgadPhase1',
  },
  {
    title: 'Luxury Farm Villas – Phase 2',
    slug: 'rajgad-phase-2',
    state: 'Maharashtra',
    city: 'Bhor',
    imageUrl: '/clientsentimages/Rajgad%20farm%20houses.jpeg',
    priceFrom: '₹70 Lakh+',
    link: '/maharashtra/rajgadPhase2',
  },
  {
    title: 'Chembur Urban Project — Mumbai',
    slug: 'chembur-urban-project',
    state: 'Maharashtra',
    city: 'Mumbai',
    imageUrl: '/clientsentimages/REDEVELOPMENT%20PROJECT,%20CHEMBUR,%20MUMBAI.jpeg',
    priceFrom: '₹1.2 Cr+',
    link: '/maharashtra/chembur',
  },
  {
    title: 'Gangajal Riverfront Plots — Patna',
    slug: 'gangajal-riverfront-plots',
    state: 'Bihar',
    city: 'Patna',
    imageUrl: '/final/3d_renders/project_overview/full_layout_aerial_1.jpg',
    priceFrom: '₹6 Lakh+',
    link: '/bihar/gangajal-riverfront-plots',
  },
  {
    title: 'Sonepur Green Estate',
    slug: 'sonepur-green-estate',
    state: 'Bihar',
    city: 'Sonepur',
    imageUrl: '/clientsentimages/SONEPUR%20GREEN%20ESTATE%201.jpeg',
    priceFrom: '₹8 Lakh+',
    link: '/bihar/sonepur-green-estate',
  },
  {
    title: 'Ranchi Residential Plots',
    slug: 'ranchi-residential-plots',
    state: 'Jharkhand',
    city: 'Ranchi',
    imageUrl: '/clientsentimages/Ranchi%20Residential%20plots%20,%20ITBP.jpeg',
    priceFrom: '₹5 Lakh+',
    link: '/jharkhand/ranchi-green-living',
  },
]

export const quickLinks: QuickLink[] = [
  { label: 'View All Projects', href: '/projects' },
  { label: 'Contact Sales', href: '/contact' },
  { label: 'Book Site Visit', href: '/contact?intent=visit' },
  { label: 'WhatsApp Us', href: 'https://wa.me/9135559596' },
]
