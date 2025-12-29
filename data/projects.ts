export type Project = {
  id: number
  slug: string
  title: string
  status: 'active' | 'coming_soon'
  type:
    | 'farm_plot'
    | 'urban'
    | 'resort'
    | 'villa'
    | 'residential_plot'
    | 'other'
  state: 'Maharashtra' | 'Bihar' | 'Jharkhand'
  city: string
  shortSummary: string
  description: string
  projectHighlights: string[]
  connectivity: string[]
  priceFromINR?: number
  areaSqFtMin?: number
  latitude?: number
  longitude?: number
  featured?: boolean
  images: { src: string; alt: string }[]
  link?: string
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'rajgad-valley-farm-plots',
    title: 'Rajgad Farm Project — Phase 1',
    status: 'active',
    type: 'farm_plot',
    state: 'Maharashtra',
    city: 'Bhor',
    shortSummary:
      'Invest in nature near Rajgad Fort — 4,000 sq. ft community farm plots by Passiflora Properties with limited availability and high growth potential.',
    description: `Discover The Rajgad Farm Project by Passiflora Properties — a serene blend of heritage, investment, and green living near the UNESCO World Heritage Site Rajgad Fort.

Spread across 18.2 acres, these 4,000 sq. ft community farm plots start at just ₹11 Lakh with verified legal titles, complete transparency, and sustainable annual returns through our FarmProduce Organisation.

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
    featured: true,
    link: '/maharashtra/rajgadPhase1',
    images: [
      {
        src: '/clientsentimages/Rajgad%20Farm%20Plots.jpeg',
        alt: 'Rajgad Farm Plots',
      },
      {
        src: '/clientsentimages/Rajgad%20Fam%20plots.jpeg',
        alt: 'Rajgad Valley',
      },
    ],
  },
  {
    id: 2,
    slug: 'chembur-redevelopment',
    title: 'Chembur Redevelopment Project — Lokhande Marg',
    status: 'active',
    type: 'urban',
    state: 'Maharashtra',
    city: 'Mumbai',
    shortSummary:
      'Premium redevelopment project near Chembur West Station — offering 1BHK apartments for sale in a new residential tower by Passiflora Properties.',
    description: `A landmark urban redevelopment near Lokhande Marg, Chembur West, transforming an existing housing society into a modern residential tower with legal transparency and efficient layouts.

30 premium 1BHK flats are available for sale, designed for comfort, safety, and proximity to key city hubs.`,
    projectHighlights: [
      '6,000 sq. ft land parcel redevelopment',
      'Ground + 9 storeys with efficient 1BHK layouts (~375 sq. ft)',
      'Resident-friendly policy: doubling existing resident area',
      'Compliance with Government redevelopment norms',
      'Modern facade, fire safety, and lift access planned',
      'Optimized ventilation and daylight for compact homes',
      'Quality-first construction with phased handovers',
      'Low-maintenance design; budget-friendly operations for societies',
    ],
    connectivity: [
      'Near Lokhande Marg, Chembur West, Mumbai',
      'Close to Chembur West Railway Station and Eastern Freeway',
      'Proximity to Eastern Express Highway and Monorail',
      'Easy reach to BKC, Sion, Wadala business hubs',
      'Well-served by schools, markets, and healthcare in 2–3 km radius',
    ],
    latitude: 19.0623,
    longitude: 72.9009,
    priceFromINR: undefined,
    areaSqFtMin: undefined,
    featured: false,
    link: '/maharashtra/chembur',
    images: [
      {
        src: '/clientsentimages/REDEVELOPMENT%20PROJECT,%20CHEMBUR,%20MUMBAI.jpeg',
        alt: 'Chembur Redevelopment',
      },
    ],
  },
  {
    id: 3,
    slug: 'manchar-mountain-view',
    title: 'Manchar Mountain View Farm Project',
    status: 'active',
    type: 'farm_plot',
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
    featured: false,
    link: '/maharashtra/manchar',
    images: [
      {
        src: '/clientsentimages/Rajgad%20Farm%20Plots.jpeg',
        alt: 'Manchar Scenic Farmland',
      },
    ],
  },
  {
    id: 4,
    slug: 'karjat-green-valley',
    title: 'Karjat Green Valley Farm Plots',
    status: 'active',
    type: 'farm_plot',
    state: 'Maharashtra',
    city: 'Karjat',
    shortSummary:
      '9-acre NA farmhouse plot project in scenic Karjat — surrounded by hills, rivers, and greenery. Perfect for investment or your private weekend retreat.',
    description: `A serene 9-acre NA farmhouse plotting project with clear-title plots, scenic hill and valley views, internal roads, and transparent processes — ideal for private farmhouses or wellness retreats.`,
    projectHighlights: [
      '9 acres of NA-approved land',
      'Clear-title plots with scenic hill and valley views',
      'Internal road network and easy highway approach',
      'Suitable for wellness retreats or land investment',
      'Potential for boutique homestays and weekend villas',
      'All-season access; monsoon-friendly site orientation',
      'Surrounded by rivers and Sahyadri vistas',
      'Transparent documentation and investor-focused process',
    ],
    connectivity: [
      'Near Karjat–Murbad Road',
      'Close to Bhivpuri and Neral',
      'Approximately 1.5 hours from Mumbai and 2 hours from Pune',
      'About 80 km from Mumbai',
      'Access to Karjat railway network and upcoming growth corridors',
      'Convenient drive to Matheran–Neral leisure belt',
    ],
    latitude: 18.9108,
    longitude: 73.3237,
    priceFromINR: undefined,
    areaSqFtMin: undefined,
    featured: false,
    link: '/maharashtra/karjat',
    images: [
      {
        src: '/clientsentimages/KARJAT%20NA%20PLOTS.jpeg',
        alt: 'Karjat NA Plots',
      },
    ],
  },
  {
    id: 5,
    slug: 'luxuryfarmvillas',
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
    priceFromINR: undefined,
    areaSqFtMin: undefined,
    featured: false,
    link: '/maharashtra/rajgadPhase2',
    images: [
      {
        src: '/clientsentimages/Rajgad%20farm%20houses.jpeg',
        alt: 'Rajgad Luxury Farm Villas',
      },
    ],
  },
  {
    id: 6,
    slug: 'gangajal-riverfront-plots',
    title: 'Gangajal Riverfront Plots – Patna',
    status: 'active',
    type: 'residential_plot',
    state: 'Bihar',
    city: 'Patna',
    shortSummary:
      '90 Kattha of premium river-touch plots near JP Setu, Digha — Patna’s most scenic and high-potential real estate investment zone.',
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
    featured: false,
    link: '/bihar/gangajal-riverfront-plots',
    images: [
      {
        src: '/final/3d_renders/project_overview/full_layout_aerial_1.jpg',
        alt: 'Gangajal Riverfront Plots',
      },
    ],
  },
  {
    id: 7,
    slug: 'sonepur-green-estate',
    title: 'Sonepur Green Estate – Premium Residential Plots Near Patna',
    status: 'active',
    type: 'residential_plot',
    state: 'Bihar',
    city: 'Sonepur',
    shortSummary:
      'Exclusive 18 Kattha estate near Patna–Chapra Highway — ideal for homes or investment with excellent connectivity and scenic surroundings.',
    description: `A serene and strategic residential land development near the Patna–Chapra National Highway — fertile, levelled land with freehold titles and excellent potential for homes or investment.`,
    projectHighlights: [
      'Total area ~18 Kattha (~24,300 sq. ft)',
      'Plot sizes starting ~1500 sq. ft',
      'Peaceful surroundings with electricity and water access',
      'Ideal for independent homes or a small gated community',
      'Excellent road connectivity to Patna and Hajipur',
      'Clean soil profile; ready for immediate plotting and build-out',
      'Neighbourhood poised for mixed residential–commercial growth',
      'Attractive entry pricing with strong end-user demand',
    ],
    connectivity: [
      '2 minutes from Patna–Chapra National Highway',
      '20 mins to Patna City',
      '15 mins to Hajipur',
      '10 mins to Sonepur Junction',
      'Easy access to schools, markets, and hospitals',
      'Well-linked to bridges connecting Patna–Hajipur urban cluster',
    ],
    latitude: 25.705,
    longitude: 85.17,
    priceFromINR: undefined,
    areaSqFtMin: undefined,
    featured: false,
    link: '/bihar/sonepur-green-estate',
    images: [
      {
        src: '/clientsentimages/SONEPUR%20GREEN%20ESTATE%201.jpeg',
        alt: 'Sonepur Green Estate 1',
      },
      {
        src: '/clientsentimages/SONEPUR%20GREEN%20ESTATE%202.jpeg',
        alt: 'Sonepur Green Estate 2',
      },
    ],
  },
  {
    id: 8,
    slug: 'ranchi-green-living',
    title: 'Ranchi Residential Plots – ITBP Zone',
    status: 'active',
    type: 'residential_plot',
    state: 'Jharkhand',
    city: 'Ranchi',
    shortSummary:
      'Premium residential plots near Central University, Ranchi – peaceful surroundings, excellent connectivity, and high investment growth potential.',
    description: `A 3-acre residential freehold land parcel near ITBP and Central University — peaceful, green environment with planned infrastructure and strong long-term value potential.`,
    projectHighlights: [
      '3 acres of residential freehold land',
      'Plot sizes starting from ~2000 sq. ft',
      'Wide internal roads and planned utilities',
      'High ROI potential in a rapidly developing corridor',
      'Planned drainage and electrification for reliable living',
      'Calm, low-density environment with green buffers',
      'Strong end-user demand from education and health sector staff',
    ],
    connectivity: [
      '10 mins from Central University of Jharkhand',
      '25 mins from Ranchi Airport',
      'Close to Ring Road and government facilities',
      'Good access to Ring Road spine for city-wide reach',
      'Essential markets, schools, and clinics within short drive',
    ],
    latitude: 23.42,
    longitude: 85.305,
    priceFromINR: undefined,
    areaSqFtMin: undefined,
    featured: false,
    link: '/jharkhand/ranchi-green-living',
    images: [
      {
        src: '/clientsentimages/Ranchi%20Residential%20plots%20,%20ITBP.jpeg',
        alt: 'Ranchi Residential Plots',
      },
    ],
  },
  {
    id: 9,
    slug: 'ranchi-pithoria-residential-plots',
    title: 'Ranchi Pithoria Residential Plots – Nature Living Near City',
    status: 'active',
    type: 'residential_plot',
    state: 'Jharkhand',
    city: 'Ranchi',
    shortSummary:
      'Premium 66 Dismil residential land in Pithoria, Ranchi — ideal for villas or investment with scenic surroundings and easy city access.',
    description: `A 66 Dismil (~2.6 acres) residential freehold land in Pithoria — scenic, pollution-free surroundings with accessible roads and utilities; ideal for villas or small communities.`,
    projectHighlights: [
      'Total area ~66 Dismil (~2.6 acres)',
      'Plot sizes starting ~2000 sq. ft',
      'Freehold land with clear title and documentation',
      'Beautiful hilly backdrop and clean air',
      'Ideal for villas or a small residential community',
      'Gentle gradient enabling attractive site planning',
      'All-weather access roads; utilities available nearby',
      'Emerging destination with promising long-term appreciation',
    ],
    connectivity: [
      '25 mins to Ranchi Main City',
      '15 mins to Ring Road',
      '30 mins to Ranchi Airport',
      'Near markets, schools, and government facilities',
      'Direct approach from Pithoria with minimal traffic bottlenecks',
    ],
    latitude: 23.5145,
    longitude: 85.339,
    priceFromINR: undefined,
    areaSqFtMin: undefined,
    featured: false,
    link: '/jharkhand/ranchi-pithoria-residential-plots',
    images: [
      {
        src: '/clientsentimages/Ranchi%20Residential%20plots%20,%20ITBP.jpeg',
        alt: 'Ranchi Pithoria Plots',
      },
    ],
  },
]
