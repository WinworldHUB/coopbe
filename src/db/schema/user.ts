import { text } from "drizzle-orm/pg-core";
import { pgTable, varchar, integer, bigint } from "drizzle-orm/pg-core";

export const societies = pgTable("societies", {
  id: bigint('id', { mode: 'number' }).primaryKey().unique(),
  name: varchar("name", { length: 100 }).notNull(),
  
});


export const roles = pgTable("roles", {
  id: bigint('id', { mode: 'number' }).primaryKey().unique(),
  name: varchar("name", { length: 100 }).notNull(),
  description: varchar("description", { length: 256 }).notNull(),
});

// Define the user table
export const users = pgTable("users", {
  id: bigint('id', { mode: 'number' }).primaryKey().unique(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 100 }).notNull().unique(),
  phone: varchar("phone", { length: 30 }).notNull().unique(),
  address: text("address").notNull(),
  role: bigint("role", {mode:"number"}).notNull().references(()=>roles.id),
});


// define society and user many to many relationship
export const societyUsers = pgTable("society_users", {
  id: bigint('id', { mode: 'number' }).primaryKey().unique(),
  society_id: bigint("society_id", {mode:"number"}).notNull().references(()=>societies.id),
  user_id: bigint("user_id", {mode:"number"}).notNull().references(()=>users.id),
});