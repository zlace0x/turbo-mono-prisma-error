import {
  __export
} from "./chunk-26DY3I4N.js";

// src/generated/prisma/internal/prismaNamespace.ts
var prismaNamespace_exports = {};
__export(prismaNamespace_exports, {
  AnyNull: () => AnyNull,
  DbNull: () => DbNull,
  Decimal: () => Decimal2,
  JsonNull: () => JsonNull,
  ModelName: () => ModelName,
  NullTypes: () => NullTypes,
  PrismaClientInitializationError: () => PrismaClientInitializationError2,
  PrismaClientKnownRequestError: () => PrismaClientKnownRequestError2,
  PrismaClientRustPanicError: () => PrismaClientRustPanicError2,
  PrismaClientUnknownRequestError: () => PrismaClientUnknownRequestError2,
  PrismaClientValidationError: () => PrismaClientValidationError2,
  QueryMode: () => QueryMode,
  QuotesScalarFieldEnum: () => QuotesScalarFieldEnum,
  SortOrder: () => SortOrder,
  Sql: () => Sql2,
  TransactionIsolationLevel: () => TransactionIsolationLevel,
  defineExtension: () => defineExtension,
  empty: () => empty2,
  getExtensionContext: () => getExtensionContext,
  join: () => join2,
  prismaVersion: () => prismaVersion,
  raw: () => raw2,
  sql: () => sql,
  validator: () => validator
});
import * as runtime from "@prisma/client/runtime/library";
var validator = runtime.Public.validator;
var PrismaClientKnownRequestError2 = runtime.PrismaClientKnownRequestError;
var PrismaClientUnknownRequestError2 = runtime.PrismaClientUnknownRequestError;
var PrismaClientRustPanicError2 = runtime.PrismaClientRustPanicError;
var PrismaClientInitializationError2 = runtime.PrismaClientInitializationError;
var PrismaClientValidationError2 = runtime.PrismaClientValidationError;
var sql = runtime.sqltag;
var empty2 = runtime.empty;
var join2 = runtime.join;
var raw2 = runtime.raw;
var Sql2 = runtime.Sql;
var Decimal2 = runtime.Decimal;
var getExtensionContext = runtime.Extensions.getExtensionContext;
var prismaVersion = {
  client: "6.11.1",
  engine: "f40f79ec31188888a2e33acda0ecc8fd10a853a9"
};
var NullTypes = {
  DbNull: runtime.objectEnumValues.classes.DbNull,
  JsonNull: runtime.objectEnumValues.classes.JsonNull,
  AnyNull: runtime.objectEnumValues.classes.AnyNull
};
var DbNull = runtime.objectEnumValues.instances.DbNull;
var JsonNull = runtime.objectEnumValues.instances.JsonNull;
var AnyNull = runtime.objectEnumValues.instances.AnyNull;
var ModelName = {
  Quotes: "Quotes"
};
var TransactionIsolationLevel = runtime.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});
var QuotesScalarFieldEnum = {
  id: "id",
  quote: "quote",
  kind: "kind",
  createdAt: "createdAt"
};
var SortOrder = {
  asc: "asc",
  desc: "desc"
};
var QueryMode = {
  default: "default",
  insensitive: "insensitive"
};
var defineExtension = runtime.Extensions.defineExtension;

export {
  validator,
  PrismaClientKnownRequestError2 as PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError2 as PrismaClientUnknownRequestError,
  PrismaClientRustPanicError2 as PrismaClientRustPanicError,
  PrismaClientInitializationError2 as PrismaClientInitializationError,
  PrismaClientValidationError2 as PrismaClientValidationError,
  sql,
  empty2 as empty,
  join2 as join,
  raw2 as raw,
  Sql2 as Sql,
  Decimal2 as Decimal,
  getExtensionContext,
  prismaVersion,
  NullTypes,
  DbNull,
  JsonNull,
  AnyNull,
  ModelName,
  TransactionIsolationLevel,
  QuotesScalarFieldEnum,
  SortOrder,
  QueryMode,
  defineExtension,
  prismaNamespace_exports
};
