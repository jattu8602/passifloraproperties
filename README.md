# Passiflora Properties

Modern, mobile-first real estate platform built with Next.js App Router, TypeScript, Tailwind CSS, Prisma (MongoDB), NextAuth, GSAP, and Resend.

## ✨ Features

- Responsive UI with App Router and Tailwind
- Sticky search with IntersectionObserver hysteresis (no flicker)
- Polished header with GSAP-animated mobile sidenav
- Auth modal (Google OAuth + Email magic links via Resend)
- Success modal animation (shows once on first login)
- Profile dropdown with avatar and logout
- Prisma + MongoDB user/session storage
- Cloudinary-ready for profile media

## 🧱 Tech Stack

| Layer      | Tech                                     |
| ---------- | ---------------------------------------- |
| Framework  | Next.js 16 (App Router), React 18        |
| Language   | TypeScript                               |
| Styling    | Tailwind CSS 4, Radix UI primitives      |
| Auth       | NextAuth v5 (Google, Resend magic links) |
| DB/ORM     | MongoDB + Prisma                         |
| Email      | Resend                                   |
| Animations | GSAP                                     |
| Media      | Cloudinary                               |

## 🚀 Quick Start

1. Install dependencies

```bash
pnpm install
```

2. Create `.env.local` with your secrets (example):

```env
DATABASE_URL="<your-mongodb-connection>"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="<long-random-string>"
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
RESEND_API_KEY="..."
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="..."
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."
```

3. Generate Prisma client and sync schema

```bash
pnpm prisma generate
pnpm prisma db push
```

4. Run the app

```bash
pnpm dev
```

Visit `http://localhost:3000`.

## 🔐 Authentication

- Google OAuth: redirects to Google consent, returns a session (JWT strategy)
- Email magic link: Resend delivers a one-time sign-in link
- Sessions persist for 30 days by default (configurable in `lib/auth.ts`)

## 📁 Project Structure

```
app/                 # App Router routes and layout
components/          # UI components (header, modals, sticky search, ui/*)
hooks/               # Custom hooks
lib/                 # auth.ts (NextAuth), prisma.ts (Prisma client)
prisma/              # schema.prisma
public/              # static assets (images, svg)
styles/              # global styles
Docs/                # project documentation
```

## 🛠️ Developer Scripts

```json
{
  "dev": "next dev",
  "build": "pnpm prisma generate && next build",
  "start": "next start",
  "lint": "eslint ."
}
```

## 📚 Documentation

- Getting started and full architecture details are in `Docs/INITIALIZATION.md`.
- Contribution guidelines are in `Docs/CONTRIBUTING.md`.

## 📦 Deployment Notes

- Set all environment variables in your hosting provider (Vercel recommended)
- Ensure `NEXTAUTH_URL` matches your deployed domain
- Add Google OAuth redirect URIs for dev and prod
- Consider verifying a Resend custom domain for better deliverability

## 📝 License

MIT © Passiflora Properties
