# Chapter 11: Testing & Tooling

- Spin up ephemeral DBs (Docker) for integration tests
- Use `prisma migrate dev` to set schema before tests
- Reset DB between tests with `prisma.$executeRaw` or transactions
- Mocking: prefer real DB for critical paths; mock only where needed
- Telemetry/Logging: enable query logging during dev
