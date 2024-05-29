import { serial } from "drizzle-orm/pg-core";
import { timestamp } from "drizzle-orm/pg-core";
import { text } from "drizzle-orm/pg-core";
import { pgTable, varchar, integer, bigint } from "drizzle-orm/pg-core";

export const societies = pgTable("societies", {
  id: serial('id').primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  address: text("address").notNull(),
  postcode: varchar("postcode", { length: 10 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});


export const roles = pgTable("roles", {
  id: serial('id').primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  description: varchar("description", { length: 256 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Define the user table
export const users = pgTable("users", {
  id: serial('id').primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 100 }).notNull().unique(),
  phone: varchar("phone", { length: 30 }).notNull().unique(),
  address: text("address").notNull(),
  role: bigint("role", {mode:"number"}).notNull().references(()=>roles.id, {onDelete: "cascade"}),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});


// define society and user many to many relationship
export const societyUsers = pgTable("society_users", {
  id: serial('id').primaryKey(),
  society_id: bigint("society_id", {mode:"number"}).notNull().references(()=>societies.id, {onDelete: "cascade"}),
  user_id: bigint("user_id", {mode:"number"}).notNull().references(()=>users.id, {onDelete: "cascade"}),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});