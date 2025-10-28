# Chapter 4: Relations

## One-to-Many (SQL)

```prisma
model User {
  id    String  @id @default(cuid())
  posts Post[]
}

model Post {
  id       String @id @default(cuid())
  title    String
  author   User   @relation(fields: [authorId], references: [id])
  authorId String
}
```

## Many-to-Many (Implicit)

```prisma
model Post {
  id      String   @id @default(cuid())
  title   String
  tags    Tag[]
}

model Tag {
  id    String @id @default(cuid())
  name  String @unique
  posts Post[]
}
```

## MongoDB Relations

- No foreign keys at DB level; Prisma manages refs via IDs
- Use `String @db.ObjectId` for id fields
