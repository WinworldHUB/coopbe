import { defineConfig } from 'drizzle-kit';
const databaseUrl = process.env.DATABASE_URL as string;
export default defineConfig({
  schema: './src/db/schema/**/*.{js,ts}',
  out: './src/db/migrations',
  dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
   url: databaseUrl
  },
  migrations: {
    table: "migrations",
    schema: "public"
}
});