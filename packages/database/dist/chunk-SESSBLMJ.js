import {
  PrismaClient
} from "./chunk-Y4JZPMA4.js";

// src/index.ts
function getDb() {
  const prisma = new PrismaClient();
  return prisma;
}

export {
  getDb
};
