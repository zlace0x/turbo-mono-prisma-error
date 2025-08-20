# Prisma Postgres Example: Next.js 15 Starter (Turborepo, Webpack, Node.js, ESM)

## This is a working example using provider = "prisma-client-js" and default output location

## Error with external extensions which references PrismaClient directly i.e Drizzle

Setup

Run local postgresdb

```
pnpm i
turbo dev
```

Error

```
@repo/web:dev: Module not found: Can't resolve '.prisma/client/default'
@repo/web:dev:   1 | module.exports = {
@repo/web:dev: > 2 |   ...require('.prisma/client/default'),
@repo/web:dev:     | ^
@repo/web:dev:   3 | }
@repo/web:dev:   4 |
```
