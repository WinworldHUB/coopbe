import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
const databaseUrl =
  process.env.DATABASE_URL ||
  "postgresql://admin:7F808jv0WO658c5LnQxzTQ9V@loosely-living-redbird.a1.pgedge.io/coop_db?sslmode=require"
export const pool = new Pool({
  connectionString: databaseUrl,
});

export const db = drizzle(pool);
