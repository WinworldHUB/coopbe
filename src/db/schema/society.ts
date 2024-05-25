import { mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";

export const societies = mysqlTable("societies", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  
});

