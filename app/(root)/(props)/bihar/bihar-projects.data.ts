export type BiharProjectCard = {
  id: number
  title: string
  shortSummary: string
  highlights: string[]
  imageUrl: string
  link: string
}

export const biharProjects: BiharProjectCard[] = [
  {
    id: 6,
    title: 'Gangajal Riverfront Plots – Patna',
    shortSummary:
      "90 Kattha of premium river-touch plots near JP Setu, Digha — Patna's most scenic and high-potential real estate investment zone.",
    highlights: [
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
    imageUrl: '/clientsentimages/GANGAJAL%20RIVERFRONT%20PLOTS.jpeg',
    link: '/bihar/gangajal-riverfront-plots',
  },
  {
    id: 7,
    title: 'Sonepur Green Estate – Premium Residential Plots Near Patna',
    shortSummary:
      'Exclusive 18 Kattha estate near Patna–Chapra Highway — ideal for homes or investment with excellent connectivity and scenic surroundings.',
    highlights: [
      'Total area ~18 Kattha (~24,300 sq. ft)',
      'Plot sizes starting ~1500 sq. ft',
      'Peaceful surroundings with electricity and water access',
      'Ideal for independent homes or a small gated community',
      'Excellent road connectivity to Patna and Hajipur',
      'Clean soil profile; ready for immediate plotting and build-out',
      'Neighbourhood poised for mixed residential–commercial growth',
      'Attractive entry pricing with strong end-user demand',
    ],
    imageUrl: '/clientsentimages/SONEPUR%20GREEN%20ESTATE%201.jpeg',
    link: '/bihar/sonepur-green-estate',
  },
]
