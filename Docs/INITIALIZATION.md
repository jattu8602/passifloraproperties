# Initialization & Architecture

This document explains the Passiflora Properties project from first principles: the stack, architecture, major features, and how the moving parts fit together.

## Goals

- Modern, responsive real estate UI
- Smooth animations and mobile parity
- Simple, secure authentication
- Maintainable code with strong typing

## Tech Stack

- Next.js 16 (App Router), React 18
- TypeScript
- Tailwind CSS 4 + Radix UI primitives
- NextAuth v5 (Google OAuth, Email magic links via Resend)
- Prisma (MongoDB)
- GSAP (animations)
- Cloudinary (media)

## Architecture Overview

- App Router with `app/` routes and server/client components
- API routes under `app/api/*` (e.g., `app/api/auth/[...nextauth]`)
- Authentication configured in `lib/auth.ts` with Prisma adapter
- Database schema in `prisma/schema.prisma`
- Global UI components in `components/`

### Key Paths

- `lib/auth.ts` — NextAuth config (Google + Resend, JWT sessions)
- `lib/prisma.ts` — Prisma client singleton
- `app/api/auth/[...nextauth]/route.ts` — Auth route handlers
- `components/auth-modal.tsx` — Login/signup modal (GSAP)
- `components/success-modal.tsx` — First‑login success modal (GSAP)
- `components/user-dropdown.tsx` — Profile dropdown menu
- `components/header.tsx` — Header + mobile sidenav (GSAP)
- `components/sticky-search.tsx` — Sticky search with IntersectionObserver

## Database Schema (Prisma/MongoDB)

Models: `User`, `Account`, `Session`, `VerificationToken` (Auth.js defaults)

- `User`: id, name, email, emailVerified, image, timestamps
- `Account`: OAuth provider linkage (Google)
- `Session`: not used with JWT strategy but kept for compatibility
- `VerificationToken`: email sign-in tokens

## Authentication Flow

- Google OAuth: user redirected to Google → returns with `id_token` → user upserted → JWT issued
- Email magic link (Resend): user enters email → NextAuth generates token → email sent → click link → user upserted → JWT issued
- Session strategy: JWT with 30‑day `maxAge` (configurable)

### One‑time Success Modal

- Implemented in `components/auth-handler.tsx`
- Shows only on first login per browser session (tracked via `sessionStorage` key)

## Sticky Search Behavior

- Uses IntersectionObserver watching `#hero-search-bar`
- Hysteresis thresholds + `requestAnimationFrame` debounce prevent flicker
- Wait‑for‑element attach with retry to avoid flashes during reload/logout

## Animations

- GSAP timelines for:
  - Auth modal slide‑down and backdrop fade
  - Mobile sidenav circular reveal (clip‑path)
  - Success modal spring‑like entrance

## Environment Variables

Create `.env.local` with:

```
DATABASE_URL=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
RESEND_API_KEY=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

## Development

```
pnpm install
pnpm prisma generate
pnpm prisma db push
pnpm dev
```

## Known Issues & Notes

- Resend onboarding domain has throttling; use a verified domain in production
- Apple/Facebook can be added later via NextAuth providers
- Ensure `NEXTAUTH_URL` matches current origin (dev/prod)

## Roadmap

- Saved properties with persistence
- Profile page and settings
- Cloudinary image upload for avatars
- More providers (Apple, Facebook)
- E2E testing (Playwright) and unit tests
