# Chapter 2: Installation & Setup

## Install

```bash
pnpm add -D prisma
pnpm add @prisma/client
pnpm prisma init
```

`prisma/schema.prisma` and `prisma.config.ts` will be created.

## Datasource & Generator

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql" // or mysql | sqlite | mongodb | sqlserver | cockroachdb
  url      = env("DATABASE_URL")
}
```

## Environment

`.env.local`:

```
DATABASE_URL="postgresql://user:pass@localhost:5432/mydb"
```

## Generate Client

```bash
pnpm prisma generate
```

## Create/Sync DB

- SQL providers (dev): `pnpm prisma migrate dev`
- MongoDB or quick prototyping: `pnpm prisma db push`
