import {
  getPrismaClientClass
} from "./chunk-YBUNKVKT.js";
import {
  QuoteKind
} from "./chunk-3L7FRKNQ.js";

// src/generated/prisma/client.ts
import * as process from "process";
import * as path from "path";
import { fileURLToPath } from "url";
import "@prisma/client/runtime/library";
var __dirname = path.dirname(fileURLToPath(import.meta.url));
var PrismaClient = getPrismaClientClass(__dirname);
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "src/generated/prisma/libquery_engine-darwin-arm64.dylib.node");
var QuoteKind2 = QuoteKind;

export {
  PrismaClient,
  QuoteKind2 as QuoteKind
};
