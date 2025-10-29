export type SlotKey =
  | 'title'
  | 'slug'
  | 'type'
  | 'status'
  | 'state'
  | 'city'
  | 'shortSummary'
  | 'description'
  | 'priceFromINR'
  | 'areaSqFtMin'
  | 'latitude'
  | 'longitude'
  | 'heroImageUrl'
  | 'galleryImageUrls'
  | 'brochureUrl'
  | 'ctaBrochure'
  | 'ctaBookVisit'
  | 'ctaRegister'
  | 'isFeatured'
  | 'sortOrder'
  | 'publishedAt'

export type Slot = {
  key: SlotKey
  label: string
  required: boolean
  kind:
    | 'text'
    | 'slug'
    | 'enum:type'
    | 'enum:status'
    | 'location:state'
    | 'location:city'
    | 'number'
    | 'lat'
    | 'lng'
    | 'url'
    | 'urls'
    | 'bool'
    | 'date'
  hint?: string
  quickReplies?: string[]
}

export const TYPE_ENUM = [
  'farm_plot',
  'luxury_villa',
  'resort',
  'urban',
] as const
export const STATUS_ENUM = ['active', 'coming_soon', 'sold_out'] as const

export const PROJECT_SLOTS: Slot[] = [
  { key: 'title', label: 'Project title', required: true, kind: 'text' },
  {
    key: 'slug',
    label: 'Slug',
    required: true,
    kind: 'slug',
    hint: 'kebab-case, unique',
  },
  {
    key: 'type',
    label: 'Type',
    required: true,
    kind: 'enum:type',
    quickReplies: [...TYPE_ENUM],
  },
  {
    key: 'status',
    label: 'Status',
    required: true,
    kind: 'enum:status',
    quickReplies: [...STATUS_ENUM],
  },
  { key: 'state', label: 'State', required: true, kind: 'location:state' },
  { key: 'city', label: 'City', required: true, kind: 'location:city' },
  {
    key: 'shortSummary',
    label: 'Short summary',
    required: true,
    kind: 'text',
    hint: '≤160 characters',
  },
  { key: 'description', label: 'Description', required: true, kind: 'text' },
  {
    key: 'priceFromINR',
    label: 'Price from (INR)',
    required: false,
    kind: 'number',
  },
  {
    key: 'areaSqFtMin',
    label: 'Min area (sq ft)',
    required: false,
    kind: 'number',
  },
  { key: 'latitude', label: 'Latitude', required: false, kind: 'lat' },
  { key: 'longitude', label: 'Longitude', required: false, kind: 'lng' },
  { key: 'heroImageUrl', label: 'Hero image URL', required: true, kind: 'url' },
  {
    key: 'galleryImageUrls',
    label: 'Gallery URLs',
    required: false,
    kind: 'urls',
    hint: 'separate with |',
  },
  { key: 'brochureUrl', label: 'Brochure URL', required: false, kind: 'url' },
  {
    key: 'ctaBrochure',
    label: 'Enable brochure CTA',
    required: false,
    kind: 'bool',
  },
  {
    key: 'ctaBookVisit',
    label: 'Enable book visit CTA',
    required: false,
    kind: 'bool',
  },
  {
    key: 'ctaRegister',
    label: 'Enable register CTA',
    required: false,
    kind: 'bool',
  },
  { key: 'isFeatured', label: 'Featured', required: false, kind: 'bool' },
  { key: 'sortOrder', label: 'Sort order', required: false, kind: 'number' },
  {
    key: 'publishedAt',
    label: 'Published date',
    required: false,
    kind: 'date',
  },
]
