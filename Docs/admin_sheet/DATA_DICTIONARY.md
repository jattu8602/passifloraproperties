# Data Dictionary

## Projects.csv
- slug: unique kebab-case id (text)
- title: public name (text)
- status: `active` | `coming_soon` | `sold_out`
- type: `farm_plot` | `luxury_villa` | `resort` | `urban`
- state/city: must exist in `Locations.csv`
- shortSummary: ≤160 chars (text)
- description: plain text rich copy (text)
- priceFromINR: integer (₹, no commas)
- areaSqFtMin: integer (sq ft)
- latitude/longitude: numbers; optional
- heroImageUrl: URL
- galleryImageUrls: pipe-separated URLs (use `|`)
- brochureUrl: URL (Drive allowed)
- ctaBrochure/ctaBookVisit/ctaRegister: TRUE/FALSE
- isFeatured: TRUE/FALSE
- sortOrder: integer for homepage ordering
- publishedAt: YYYY-MM-DD

## Locations.csv
- state: state/province (text)
- city: city/town (text)
- displayName: optional UI label (text)
- regionTag: grouping label for UI (text)
- mapZoom: integer (10–14 typical)

## Amenities.csv
- amenityKey: slug (unique)
- label: display text
- iconName: optional icon key
- description: short help text

## ProjectAmenities.csv
- projectSlug: must exist in Projects.csv
- amenityKey: must exist in Amenities.csv

## Media.csv
- mediaKey: slug (unique)
- url: image/video URL
- type: `image` | `video`
- altText: accessibility text
- credit: attribution (optional)
- width/height: pixels (optional)

## SEO.csv
- entityType: `project` | `page`
- targetSlug: project slug or page route
- metaTitle: ≤60 chars
- metaDescription: ≤160 chars
- ogImageUrl: URL
- canonicalUrl: URL (optional)
- jsonLd: JSON string (optional)

## Contacts.csv
- state/city: routing match
- contactName: label
- phone: E.164 or local
- email: contact email
- whatsappUrl: wa.me link
- priority: lower first

## CTAs.csv
- projectSlug: target project
- brochureLabel/bookVisitLabel/registerLabel: optional overrides
- brochureUrl/bookVisitUrl/registerUrl: optional URLs

## CopyBlocks.csv
- key: slug unique
- title: label
- body: markdown/text
- state/city: optional scoping
