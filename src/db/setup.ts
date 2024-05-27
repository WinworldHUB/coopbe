import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

export const pool = new Pool({
  connectionString: "postgres://postgres:0000@localhost:5433/coop_db",
});

export const db = drizzle(pool);