import { mysqlTable, serial, varchar, int } from "drizzle-orm/mysql-core";
import { societies } from "./society";


// Define the user table
export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  email: varchar("email", { length: 256 }).notNull().unique(),
  phone: varchar("phone", { length: 256 }).notNull().unique(),
  address: varchar("address", { length: 256 }).notNull(),
  role: varchar("role", { length: 256 }).notNull(),
});

// Define the join table for the many-to-many relationship
export const userSocieties = mysqlTable("user_societies", {
  id: serial("id").primaryKey(),
  userId: int("user_id").notNull().references(() => users.id, { onDelete: 'cascade' }),
  societyId: int("society_id").notNull().references(() => societies.id, { onDelete: 'cascade' }),
});