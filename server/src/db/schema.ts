
import { serial, text, pgTable, timestamp } from 'drizzle-orm/pg-core';

export const uiComponentsTable = pgTable('ui_components', {
  id: serial('id').primaryKey(),
  component_id: text('component_id').notNull(),
  component_type: text('component_type').notNull(),
  text: text('text').notNull(),
  color: text('color').notNull(),
  action: text('action'),
  page: text('page').notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
});

// TypeScript type for the table schema
export type UIComponent = typeof uiComponentsTable.$inferSelect;
export type NewUIComponent = typeof uiComponentsTable.$inferInsert;

// Export all tables for proper query building
export const tables = { uiComponents: uiComponentsTable };
