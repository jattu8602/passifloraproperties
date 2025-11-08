export type JharkhandProjectCard = {
  id: number
  title: string
  shortSummary: string
  highlights: string[]
  imageUrl: string
  link: string
}

export const jharkhandProjects: JharkhandProjectCard[] = [
  {
    id: 8,
    title: 'Ranchi Residential Plots – ITBP Zone',
    shortSummary:
      'Premium residential plots near Central University, Ranchi – peaceful surroundings, excellent connectivity, and high investment growth potential.',
    highlights: [
      '3 acres of residential freehold land',
      'Plot sizes starting from ~2000 sq. ft',
      'Wide internal roads and planned utilities',
      'High ROI potential in a rapidly developing corridor',
      'Planned drainage and electrification for reliable living',
      'Calm, low-density environment with green buffers',
      'Strong end-user demand from education and health sector staff',
    ],
    imageUrl: '/clientsentimages/Ranchi%20Residential%20plots%20,%20ITBP.jpeg',
    link: '/jharkhand/ranchi-green-living',
  },
  {
    id: 9,
    title: 'Ranchi Pithoria Residential Plots – Nature Living Near City',
    shortSummary:
      'Premium 66 Dismil residential land in Pithoria, Ranchi — ideal for villas or investment with scenic surroundings and easy city access.',
    highlights: [
      'Total area ~66 Dismil (~2.6 acres)',
      'Plot sizes starting ~2000 sq. ft',
      'Freehold land with clear title and documentation',
      'Beautiful hilly backdrop and clean air',
      'Ideal for villas or a small residential community',
      'Gentle gradient enabling attractive site planning',
      'All-weather access roads; utilities available nearby',
      'Emerging destination with promising long-term appreciation',
    ],
    imageUrl: '/clientsentimages/Ranchi%20Residential%20plots%20,%20ITBP.jpeg',
    link: '/jharkhand/ranchi-pithoria-residential-plots',
  },
]
