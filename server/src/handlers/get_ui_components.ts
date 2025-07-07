
import { db } from '../db';
import { uiComponentsTable } from '../db/schema';
import { type UIComponent } from '../schema';
import { eq } from 'drizzle-orm';

export async function getUIComponents(): Promise<UIComponent[]> {
  try {
    // Fetch all enabled UI components from the database
    const results = await db.select()
      .from(uiComponentsTable)
      .where(eq(uiComponentsTable.enabled, true))
      .execute();

    // Transform database results to match the schema
    return results.map(component => ({
      id: component.component_id,
      type: component.type,
      color: component.color,
      text: component.text || undefined,
      enabled: component.enabled
    }));
  } catch (error) {
    console.error('Failed to fetch UI components:', error);
    throw error;
  }
}
