import { pgSchema, serial, timestamp, varchar } from "drizzle-orm/pg-core";

const schema = pgSchema("dev");

export const emailSubscriber = schema.table("email_subscriber", {
  id: serial("id").primaryKey(),
  email: varchar("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});
