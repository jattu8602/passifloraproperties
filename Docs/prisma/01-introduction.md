# Chapter 1: Introduction to Prisma

- What: Type-safe ORM with schema-as-source-of-truth
- Why: Great DX, migrations, cross-database support
- Components:
  - `schema.prisma` – models & mapping to provider
  - Prisma Client – generated TS client
  - Migrate – schema migration engine (SQL providers)
  - db push – push schema without creating migration history (useful for MongoDB)
- Architecture: App → Prisma Client → Query Engine → Database

Key commands:

```bash
pnpm add -D prisma
pnpm add @prisma/client
pnpm prisma init
pnpm prisma generate
```
