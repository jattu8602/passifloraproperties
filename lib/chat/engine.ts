import { PROJECT_SLOTS, SlotKey, Slot } from './slots'
import {
  normalizeBoolean,
  normalizeNumber,
  validateUrl,
  isValidStatus,
  isValidType,
} from './validators'

export type RowState = Record<string, any>

export type EngineResult = {
  done: boolean
  nextSlot?: Slot
  missing: Slot[]
}

export function computeNext(row: RowState): EngineResult {
  const missing = PROJECT_SLOTS.filter((s) => s.required && isEmpty(row[s.key]))
  if (missing.length === 0) {
    // All required filled; allow optional follow-ups? For now we stop.
    return { done: true, missing: [] }
  }
  return { done: false, nextSlot: missing[0], missing }
}

export function applyAnswer(
  row: RowState,
  slot: Slot,
  input: string
): RowState {
  const value = (input ?? '').trim()
  const out: RowState = { ...row }

  switch (slot.kind) {
    case 'enum:type':
      out[slot.key] = isValidType(value) ? value : value.toLowerCase()
      break
    case 'enum:status':
      out[slot.key] = isValidStatus(value) ? value : value.toLowerCase()
      break
    case 'number':
      out[slot.key] = normalizeNumber(value)
      break
    case 'lat':
    case 'lng':
      out[slot.key] = value ? Number(value) : ''
      break
    case 'bool':
      out[slot.key] = normalizeBoolean(value)
      break
    case 'url':
      out[slot.key] = value
      break
    case 'urls':
      // Accept comma/space/pipe separated and normalize to pipe joined
      out[slot.key] = value
        .split(/\s*[,|\n]\s*/)
        .map((s) => s.trim())
        .filter(Boolean)
        .join('|')
      break
    case 'slug':
      out[slot.key] = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      break
    default:
      out[slot.key] = value
  }

  return out
}

function isEmpty(v: any) {
  return v === undefined || v === null || v === ''
}
