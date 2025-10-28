# Passiflora Properties — Documentation

This README provides a high-level overview and the planned structure for business and technical docs.

## Business Overview

- Nature-connected living across India: farm plots, luxury farm villas, eco-wellness communities.
- Presence: Maharashtra, Bihar, Jharkhand (Pune/Bhor–Rajgad, Pawna, Kamshet, Karjat, Manchar, Mumbai/Chembur; Patna/Sonepur/Gaya; Ranchi).
- Differentiators: legally verified land, transparent processes, sustainability-first, turnkey villas, resort integration.
- Featured: Rajgad Valley Farm Plots (from ₹11 Lakh), Luxury Farm Villas Phase 2 (from ₹70 Lakh), Passiflora Resorts Pawna.

Planned docs:

- Business details → `Docs/business/` (to be added)
  - market-research.md
  - competitive-analysis.md
  - website-content-structure.md

## Technical Overview

- Stack: Next.js App Router, TypeScript, Tailwind, Prisma (MongoDB), NextAuth, Resend, Cloudinary.
- APIs (planned): `/api/projects`, `/api/projects/[slug]`, `/api/inquiries`, `/api/posts`.
- Suggested models: `Project`, `Inquiry`, optional `Testimonial`, `NewsPost`.
- Integrations: WhatsApp deep links, Google Maps, SEO (OG + JSON-LD), media gallery.

Planned docs:

- Technical details → `Docs/technical/` (to be added)
  - architecture.md
  - data-models.md
  - api-spec.md
  - implementation-roadmap.md

## Start Here

- Full hybrid document: see `project_idea.md` at repository root.
- Next steps:
  1. Create data models (`Project`, `Inquiry`) in Prisma
  2. Build `/projects` pages (list + detail, filters)
  3. Implement inquiries API + Resend email alerts

---

Owner: Passiflora Properties • Year: 2025
