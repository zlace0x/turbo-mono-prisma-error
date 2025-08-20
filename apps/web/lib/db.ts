import { getDb, type DBClient } from "@repo/database";

const prisma: DBClient = getDb();
export default prisma;
