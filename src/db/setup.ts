import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
const databaseUrl =
  process.env.DATABASE_URL ||
  "postgresql://admin:6K88lpN1R414jxNqnHi3f98g@steadily-immense-bedbug.a1.pgedge.io/coop_db?sslmode=require";
export const pool = new Pool({
  connectionString: databaseUrl,
});

export const db = drizzle(pool);
