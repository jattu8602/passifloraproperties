# Chapter 6: MongoDB Modeling with Prisma

## ObjectId & Collections

```prisma
model User {
  id    String @id @default(auto()) @map("_id") @db.ObjectId
  email String @unique
}
```

## Embedded Documents (via Json)

```prisma
model Order {
  id     String @id @default(auto()) @map("_id") @db.ObjectId
  items  Json   // store array of embedded docs
}
```

## Indexes

```prisma
model Event {
  id   String  @id @default(auto()) @map("_id") @db.ObjectId
  kind String
  time DateTime
  @@index([kind, time])
}
```

## Pushing Schema

```bash
pnpm prisma db push
```

Notes:

- No SQL migrations; rely on db push and manual migration strategy
