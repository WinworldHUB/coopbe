import { createConnection as mysqlCreateConnection, Connection } from 'mysql2/promise';
import { drizzle, MySql2Database } from 'drizzle-orm/mysql2';
import { migrate } from 'drizzle-orm/mysql2/migrator';


let db: MySql2Database | null = null;

const initializeConnection = async (): Promise<Connection> => {
  const connection = await mysqlCreateConnection({
    host: "localhost",
    user: "root", 
    password: "12345678",
    database: "coop_db",
  });

  return connection;
};

const initDb = async (): Promise<void> => {
  const connection = await initializeConnection();
  db = drizzle(connection);
  await migrate(db, { migrationsFolder: "drizzle" });
};

// Immediately invoke initDb to initialize the connection
initDb().catch((error) => {
  console.error('Failed to initialize the database:', error);
});

export { db };