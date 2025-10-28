# Chapter 7: SQL Providers (PostgreSQL/MySQL/SQLite)

## Native Types

```prisma
model Invoice {
  id      Int      @id @default(autoincrement())
  amount  Decimal  @db.Decimal(10,2)
  ref     String   @db.VarChar(32)
  issued  DateTime @db.Timestamp(6)
}
```

## Views & Raw SQL

```ts
await prisma.$queryRaw`CREATE VIEW monthly_sales AS SELECT ...`
```

## Migrations

```bash
pnpm prisma migrate dev -n init
pnpm prisma migrate deploy # production
```
