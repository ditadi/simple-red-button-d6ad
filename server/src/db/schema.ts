
import { serial, text, pgTable, timestamp, boolean } from 'drizzle-orm/pg-core';

export const uiComponentsTable = pgTable('ui_components', {
  id: serial('id').primaryKey(),
  component_id: text('component_id').notNull(),
  type: text('type').notNull(),
  color: text('color').notNull(),
  text: text('text'),
  enabled: boolean('enabled').notNull().default(true),
  created_at: timestamp('created_at').defaultNow().notNull(),
});

export const pagesTable = pgTable('pages', {
  id: serial('id').primaryKey(),
  page_id: text('page_id').notNull(),
  title: text('title').notNull(),
  theme: text('theme').notNull().default('default'),
  created_at: timestamp('created_at').defaultNow().notNull(),
});

// TypeScript types for the table schemas
export type UIComponent = typeof uiComponentsTable.$inferSelect;
export type NewUIComponent = typeof uiComponentsTable.$inferInsert;
export type Page = typeof pagesTable.$inferSelect;
export type NewPage = typeof pagesTable.$inferInsert;

// Export all tables for proper query building
export const tables = { 
  uiComponents: uiComponentsTable,
  pages: pagesTable
};
