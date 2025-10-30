# Prisma config: Loading .env for DATABASE_URL

This guide explains a common error when using `prisma.config.ts` and how to fix it so Prisma CLI can read `DATABASE_URL` from your `.env`.

## Problem
Running Prisma commands (e.g., `pnpm prisma generate`) fails with:

```
PrismaConfigEnvError: Missing required environment variable: DATABASE_URL
```

You might already have `DATABASE_URL` in your `.env`, but Prisma still can’t see it.

## Why this happens
When a Prisma configuration file (e.g., `prisma.config.ts`) is present, Prisma no longer automatically loads `.env`. This is a documented behavior change. You must explicitly load environment variables inside the config file.

## Solution (TL;DR)
1) Install `dotenv` as a dependency used by the config file.

```bash
pnpm add -D dotenv
```

2) Load `.env` at the very top of `prisma.config.ts`:

```ts
import 'dotenv/config'
```

3) Ensure `.env` contains a valid `DATABASE_URL=...` string for your provider.

4) Re-run Prisma:

```bash
pnpm prisma generate
```

## Reference implementation
This is how our `prisma.config.ts` looks after the fix:

```ts
import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  engine: 'classic',
  datasource: {
    url: env('DATABASE_URL'),
  },
})
```

## Verifying the fix
- Run `pnpm prisma generate`
- You should see output similar to:
  - “Loaded Prisma config from prisma.config.ts.”
  - “Prisma config detected, skipping environment variable loading.”
  - “Generated Prisma Client …”

If generation completes without the `DATABASE_URL` error, you’re done.

## Troubleshooting
- pnpm store mismatch errors:
  - Reinstall deps: `CI=true pnpm install --force`
  - If needed, align store-dir: `pnpm config set store-dir /Users/<you>/Library/pnpm/store/v10 --global` (or run `pnpm store prune` then reinstall)
- “Ignored build scripts” warning (CI/sandbox):
  - `pnpm approve-builds` to allow scripts for `prisma` packages when prompted in your local dev environment.
- `.env` not loaded in Next.js runtime:
  - The above change only affects Prisma CLI execution. Next.js loads env via its own mechanism. Keep `.env` at project root.

## FAQ
- Do I have to use `dotenv`? Yes, the Prisma config runs as a Node module; importing `dotenv/config` is the canonical way to hydrate `process.env` before Prisma reads it.
- Where should `.env` live? In the repository root (`/Users/.../passiflora-properties/.env`).
- Will this affect production builds? No; it only ensures Prisma CLI can read env during dev/CI tasks like generate/migrate.

## Related files
- `prisma.config.ts`
- `prisma/schema.prisma`
- `.env` (not committed)

---
Owner: Passiflora Properties • Last updated: 2025-10-30
