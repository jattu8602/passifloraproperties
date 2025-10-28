# Chapter 10: Transactions & Performance

## Transactions

```ts
await prisma.$transaction([
  prisma.user.create({ data: { email: 'a@b.com' } }),
  prisma.post.create({ data: { title: 'Welcome' } }),
])
```

Interactive:

```ts
await prisma.$transaction(async (tx) => {
  const user = await tx.user.create({ data: { email: 'a@b.com' } })
  await tx.post.create({ data: { title: 'Welcome', authorId: user.id } })
})
```

## Performance Tips

- Use `select`/`include` narrowly
- Batch with `$transaction` when logical
- Add DB indexes (`@@index`, `@@unique`)
- Prefer cursor pagination for deep lists
