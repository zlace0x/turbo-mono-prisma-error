import { PrismaClient } from "./generated/prisma/client";
import { drizzle } from "drizzle-orm/prisma/pg";
import { readReplicas } from "@prisma/extension-read-replicas";

export function getDb() {
  const client = new PrismaClient().$extends(drizzle()).$extends(
    readReplicas({
      url: process.env.DATABASE_URL_REPLICA!,
    })
  );

  return client;
}

// This export is needed to avoid the TypeScript error:
// ```
// The inferred type of 'prisma' cannot be named without a reference to '../node_modules/@repo/database/src/generated/prisma/client'.
// This is likely not portable. A type annotation is necessary.ts(2742)
// ```
export type { PrismaClient } from "./generated/prisma/client";
