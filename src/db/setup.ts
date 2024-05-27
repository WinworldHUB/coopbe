import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
const databaseUrl = process.env.DATABASE_URL;
export const pool = new Pool({
  connectionString: databaseUrl,
});

export const db = drizzle(pool);