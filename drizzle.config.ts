import { defineConfig } from "drizzle-kit";
const databaseUrl =
  "postgresql://admin:6K88lpN1R414jxNqnHi3f98g@steadily-immense-bedbug.a1.pgedge.io/coop_db?sslmode=require";
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
