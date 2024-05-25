import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema/**/*.{js,ts}',
  out: './drizzle',
  dialect: 'mysql', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    host: "localhost",
    user: "root", 
    password: "12345678",
    database: "test_db",
  },
  migrations: {
    table: "migrations",
    schema: "public"
}
});