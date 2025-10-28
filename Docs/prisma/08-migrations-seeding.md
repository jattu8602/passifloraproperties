# Chapter 8: Migrations & Seeding

## Migrations

- `migrate dev`: creates SQL migration from schema changes (SQL providers)
- `db push`: updates database without migration history (good for Mongo, prototyping)

## Seeding

`package.json`:

```json
{
  "prisma": { "seed": "ts-node prisma/seed.ts" }
}
```

`prisma/seed.ts`:

```ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({ data: { email: 'test@example.com' } })
}
main().finally(() => prisma.$disconnect())
```
