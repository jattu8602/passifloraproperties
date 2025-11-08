export type MaharashtraProjectCard = {
  id: number
  title: string
  shortSummary: string
  highlights: string[]
  imageUrl: string
  link: string
}

export const maharashtraProjects: MaharashtraProjectCard[] = [
  {
    id: 1,
    title: 'Rajgad Farm Project — Phase 1',
    shortSummary:
      'Invest in nature near Rajgad Fort — 4,000 sq. ft community farm plots by Passiflora Properties with limited availability and high growth potential.',
    highlights: [
      '18.2-acre gated community of 4,000 sq. ft farm plots',
      'Verified legal titles and transparent documentation',
      'Managed farming via FarmProduce Organisation',
      'Pilot phase with limited availability and strong ROI potential',
      'Low-density masterplan with green buffers and view corridors',
    ],
    imageUrl: '/clientsentimages/Rajgad%20Farm%20Plots.jpeg',
    link: '/maharashtra/rajgadPhase1',
  },
  {
    id: 2,
    title: 'Luxury Farm Villas – Phase 2 (Rajgad)',
    shortSummary:
      '2 BHK fully furnished villas in 11,000 sq. ft plots with private pool, gardens, and valley views.',
    highlights: [
      '50-acre master-planned luxury farmhouse community (Phase 2)',
      '2BHK fully furnished villas with private pools',
      'Landscaped gardens and curated community amenities',
      'Managed farming and maintenance support',
      'Valley-view siting with privacy-first plot orientation',
    ],
    imageUrl: '/clientsentimages/Rajgad%20farm%20houses.jpeg',
    link: '/maharashtra/rajgadPhase2',
  },
  {
    id: 3,
    title: 'Chembur Redevelopment Project — Lokhande Marg',
    shortSummary:
      'Premium redevelopment project near Chembur West Station — offering 1BHK apartments for sale in a new residential tower by Passiflora Properties.',
    highlights: [
      '6,000 sq. ft land parcel redevelopment',
      'Ground + 9 storeys with efficient 1BHK layouts (~375 sq. ft)',
      'Resident-friendly policy: doubling existing resident area',
      'Compliance with Government redevelopment norms',
      'Modern facade, fire safety, and lift access planned',
    ],
    imageUrl:
      '/clientsentimages/REDEVELOPMENT%20PROJECT,%20CHEMBUR,%20MUMBAI.jpeg',
    link: '/maharashtra/chembur',
  },
  {
    id: 4,
    title: 'Kamshet Lake View Plots',
    shortSummary:
      'Scenic lake-view farmland community in Kamshet — ideal for weekend homes and long-term investment with excellent connectivity.',
    highlights: [
      'Premium lake-view location in Kamshet',
      'Scenic surroundings with excellent connectivity',
      'Ideal for weekend homes and investment',
      'Well-planned plots with clear titles',
      'Growing destination with strong appreciation potential',
    ],
    imageUrl: '/clientsentimages/KARJAT%20NA%20PLOTS.jpeg',
    link: '/maharashtra/kamshet',
  },
  {
    id: 5,
    title: 'Manchar Mountain View Farm Project',
    shortSummary:
      'Scenic 13-acre farm project surrounded by mountains — just 300 meters from the highway. Ideal for weekend homes and long-term investment.',
    highlights: [
      '13 acres of gated, survey-approved farmland',
      'Scenic mountain views and pleasant year-round climate',
      'Ideal for farmhouse plots and long-term value appreciation',
      'Managed and marketed by Passiflora Properties',
      'Contour-based planning enabling natural water percolation',
      'Suitable for vineyards, herbal gardens, and native forestry',
      'Wide internal access planned for SUV and tractor movement',
      'Low light pollution; excellent stargazing and sky views',
    ],
    imageUrl: '/clientsentimages/Rajgad%20Farm%20Plots.jpeg',
    link: '/maharashtra/manchar',
  },
]
