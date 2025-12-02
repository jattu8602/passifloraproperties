import { maharashtraProjects } from '@/app/(root)/(props)/maharashtra/maharashtra-projects.data'
import { biharProjects } from '@/app/(root)/(props)/bihar/bihar-projects.data'
import { jharkhandProjects } from '@/app/(root)/(props)/jharkhand/jharkhand-projects.data'

export type Project = {
  id: number
  title: string
  shortSummary: string
  highlights: string[]
  imageUrl: string
  link: string
  state: string
  city: string
  priceFrom?: string
}

function getCityFromTitle(title: string): string {
  if (title.includes('Rajgad')) return 'Bhor'
  if (title.includes('Chembur')) return 'Mumbai'
  if (title.includes('Kamshet')) return 'Kamshet'
  if (title.includes('Manchar')) return 'Manchar'
  if (title.includes('Patna') || title.includes('Gangajal')) return 'Patna'
  if (title.includes('Sonepur')) return 'Sonepur'
  if (title.includes('Ranchi')) return 'Ranchi'
  if (title.includes('Pawna')) return 'Pawna'
  return ''
}

export function getAllProjects(): Project[] {
  const allProjects: Project[] = [
    ...maharashtraProjects.map((p) => ({ ...p, state: 'Maharashtra', city: getCityFromTitle(p.title), priceFrom: '₹11 Lakh+' })),
    ...biharProjects.map((p) => ({ ...p, state: 'Bihar', city: getCityFromTitle(p.title), priceFrom: '₹6 Lakh+' })),
    ...jharkhandProjects.map((p) => ({ ...p, state: 'Jharkhand', city: 'Ranchi', priceFrom: '₹5 Lakh+' })),
  ]

  // Note: The priceFrom is hardcoded here based on the featuredProjects data for simplicity.
  // Ideally, it should be in the source data files.
  // I will try to map it more accurately if possible, or just leave it generic.
  // Actually, let's look at the source files again. They don't have price.
  // I will add the prices manually based on the featuredProjects data I saw earlier.

  return allProjects.map(p => {
      let price = 'Price on Request'
      if (p.title.includes('Rajgad Farm Project')) price = '₹11 Lakh+'
      if (p.title.includes('Luxury Farm Villas')) price = '₹70 Lakh+'
      if (p.title.includes('Chembur')) price = '₹1.2 Cr+'
      if (p.title.includes('Gangajal')) price = '₹6 Lakh+'
      if (p.title.includes('Sonepur')) price = '₹8 Lakh+'
      if (p.title.includes('Ranchi Residential')) price = '₹5 Lakh+'
      if (p.title.includes('Kamshet')) price = '₹15 Lakh+'

      return { ...p, priceFrom: price }
  })
}
