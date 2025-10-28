# Chapter 9: Prisma Client Queries

## CRUD

```ts
// Create
await prisma.user.create({ data: { email: 'a@b.com' } })

// Read
await prisma.user.findUnique({ where: { email: 'a@b.com' } })
await prisma.user.findMany({
  where: { name: { contains: 'ann', mode: 'insensitive' } },
})

// Update
await prisma.user.update({ where: { id }, data: { name: 'New' } })

// Delete
await prisma.user.delete({ where: { id } })
```

## Select / Include

```ts
await prisma.post.findMany({ select: { id: true, title: true } })
await prisma.post.findMany({ include: { author: true, tags: true } })
```

## Pagination

```ts
await prisma.post.findMany({
  skip: 20,
  take: 10,
  orderBy: { createdAt: 'desc' },
})
```

## Nested Writes

```ts
await prisma.user.create({
  data: {
    email: 'a@b.com',
    posts: { create: [{ title: 'Hello' }] },
  },
})
```
