import { PrismaClient } from "@prisma/client";
import { drizzle } from "drizzle-orm/prisma/pg";
import { readReplicas } from "@prisma/extension-read-replicas";

export type DBClient = ReturnType<typeof getDb>;

export function getDb() {
  const client = new PrismaClient().$extends(drizzle()).$extends(
    readReplicas({
      url: process.env.DATABASE_URL_REPLICA!,
    })
  );

  return client;
}

export * from "@prisma/client";
