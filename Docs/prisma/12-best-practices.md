# Chapter 12: Best Practices

- Keep `schema.prisma` as the single source of truth
- Favor explicit field names and indexes
- Document non-obvious relations and constraints
- Separate read/write models if necessary (DDD)
- For MongoDB, design documents first; use Json for embedded arrays
- For SQL, prefer `migrate` over `db push` in production
- Version and review schema changes via PRs
