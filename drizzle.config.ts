import { defineConfig } from "drizzle-kit";
const databaseUrl =
  "postgresql://admin:7F808jv0WO658c5LnQxzTQ9V@loosely-living-redbird.a1.pgedge.io/coop_db?sslmode=require"
export default defineConfig({
  schema: "./src/db/schema/**/*.{js,ts}",
  out: "./src/db/migrations",
  dialect: "postgresql", // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    url: databaseUrl,
  },
  migrations: {
    table: "migrations",
    schema: "public",
  },
});
