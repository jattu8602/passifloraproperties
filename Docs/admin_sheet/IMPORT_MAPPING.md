# Import Mapping

## Project model (Prisma/MongoDB target)
- slug → Project.slug
- title → Project.title
- status → Project.status
- type → Project.type
- state → Project.state
- city → Project.city
- shortSummary → Project.shortSummary
- description → Project.description
- priceFromINR → Project.priceFromINR
- areaSqFtMin → Project.areaSqFtMin
- latitude → Project.latitude
- longitude → Project.longitude
- heroImageUrl → Project.heroImageUrl
- galleryImageUrls (split by `|`) → Project.galleryImageUrls[]
- brochureUrl → Project.brochureUrl
- ctaBrochure/ctaBookVisit/ctaRegister → Project.ctas
- isFeatured → Project.isFeatured
- sortOrder → Project.sortOrder
- publishedAt → Project.publishedAt

## Locations
- state/city/displayName/regionTag/mapZoom → Locations dictionary for filters and maps

## Amenities & ProjectAmenities
- amenityKey/label/iconName/description → Amenity catalog
- Join ProjectAmenities by projectSlug and amenityKey to compute Project.amenities[] on build

## Media
- mediaKey/url/type/altText/credit/dimensions → Media registry (optional; can be resolved at build-time)

## SEO
- entityType/targetSlug/metaTitle/metaDescription/ogImageUrl/canonicalUrl/jsonLd → Per-route metadata map

## Contacts
- state/city/contactName/phone/email/whatsappUrl/priority → Inquiry routing config used by server actions

## CTAs
- projectSlug + label/url overrides → Merge onto Project.ctas for runtime

## CopyBlocks
- key/title/body/(state/city) → UI copy registry for pages
