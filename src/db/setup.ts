import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
const databaseUrl = process.env.DATABASE_URL || "postgres://postgres:0000@localhost:5433/coop_db";
export const pool = new Pool({
  connectionString: databaseUrl,
});

export const db = drizzle(pool);