# Chapter 3: Prisma Schema Basics

## Model & Fields

```prisma
model User {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId // Mongo
  email     String   @unique
  name      String?
  image     String?
  createdAt DateTime @default(now())
}
```

For SQL (Postgres):

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  image     String?
  createdAt DateTime @default(now())
}
```

## Field Attributes

- `@id`, `@unique`, `@default()`, `@updatedAt`, `@map()`
- Native types: `@db.VarChar(255)`, `@db.Decimal(10,2)`, `@db.ObjectId`

## Model Attributes

- `@@map("users")`, `@@index([email])`, `@@unique([a,b])`
