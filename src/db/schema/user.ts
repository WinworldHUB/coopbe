import { mysqlTable, serial, varchar, int } from "drizzle-orm/mysql-core";

export const societies = mysqlTable("societies", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  
});

// Define the user table
export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  email: varchar("email", { length: 256 }).notNull().unique(),
  phone: varchar("phone", { length: 256 }).notNull().unique(),
  address: varchar("address", { length: 256 }).notNull(),
  role: varchar("role", { length: 256 }).notNull(),
});


// define society and user many to many relationship
export const societyUsers = mysqlTable("society_users", {
  id: serial("id").primaryKey(),
  society_id: int("society_id").notNull().references(()=>societies.id),
  user_id: int("user_id").notNull().references(()=>users.id),
});