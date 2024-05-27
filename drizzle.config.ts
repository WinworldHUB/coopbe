import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema/**/*.{js,ts}',
  out: './src/db/migrations',
  dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
   url: 'postgres://postgres:0000@localhost:5433/coop_db'
  },
  migrations: {
    table: "migrations",
    schema: "public"
}
});