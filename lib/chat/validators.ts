import { z } from 'zod'
import { TYPE_ENUM, STATUS_ENUM } from './slots'

export const urlRegex = /^(https?:\/\/)[^\s]+$/i

export function normalizeBoolean(input: string): boolean {
  return /^(true|1|yes|y)$/i.test(String(input).trim())
}

export function normalizeNumber(input: string): number | '' {
  const t = String(input).trim().toLowerCase()
  if (!t) return ''
  // handle lakh/crore
  if (t.includes('lakh')) {
    const n = parseFloat(t.replace(/[^0-9.]/g, ''))
    return Math.round(n * 100000)
  }
  if (t.includes('crore')) {
    const n = parseFloat(t.replace(/[^0-9.]/g, ''))
    return Math.round(n * 10000000)
  }
  const n = Number(t.replace(/[,\s]/g, ''))
  return Number.isFinite(n) ? n : ''
}

export function validateUrl(s: string): boolean {
  return urlRegex.test(String(s).trim())
}

export const typeSchema = z.enum([
  'farm_plot',
  'luxury_villa',
  'resort',
  'urban',
])
export const statusSchema = z.enum(['active', 'coming_soon', 'sold_out'])

export function isValidType(v: string) {
  return TYPE_ENUM.includes(v as any)
}
export function isValidStatus(v: string) {
  return STATUS_ENUM.includes(v as any)
}
