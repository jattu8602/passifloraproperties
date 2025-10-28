# Chapter 5: Advanced Types & Constraints

## Enums

```prisma
enum Role { USER ADMIN }

model User {
  id   String @id @default(cuid())
  role Role   @default(USER)
}
```

## JSON & Decimal

```prisma
model Product {
  id      String  @id @default(cuid())
  price   Decimal @db.Decimal(10,2)
  meta    Json
}
```

## Mapping & Defaults

- `@map("db_col")` to map TS field to DB column
- `@default(uuid())`, `@default(autoincrement())` (SQL)
