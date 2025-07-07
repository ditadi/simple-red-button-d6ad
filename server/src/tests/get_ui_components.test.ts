
import { afterEach, beforeEach, describe, expect, it } from 'bun:test';
import { resetDB, createDB } from '../helpers';
import { db } from '../db';
import { uiComponentsTable } from '../db/schema';
import { getUIComponents } from '../handlers/get_ui_components';

describe('getUIComponents', () => {
  beforeEach(createDB);
  afterEach(resetDB);

  it('should return empty array when no components exist', async () => {
    const result = await getUIComponents();
    
    expect(result).toEqual([]);
  });

  it('should return UI components from database', async () => {
    // Create test components
    await db.insert(uiComponentsTable)
      .values([
        {
          component_id: 'button-1',
          type: 'button',
          color: 'green',
          text: 'Primary Button',
          enabled: true
        },
        {
          component_id: 'input-1',
          type: 'input',
          color: 'blue',
          text: 'Text Input',
          enabled: true
        }
      ])
      .execute();

    const result = await getUIComponents();

    expect(result).toHaveLength(2);
    expect(result[0].id).toEqual('button-1');
    expect(result[0].type).toEqual('button');
    expect(result[0].color).toEqual('green');
    expect(result[0].text).toEqual('Primary Button');
    expect(result[0].enabled).toBe(true);
    
    expect(result[1].id).toEqual('input-1');
    expect(result[1].type).toEqual('input');
    expect(result[1].color).toEqual('blue');
    expect(result[1].text).toEqual('Text Input');
    expect(result[1].enabled).toBe(true);
  });

  it('should only return enabled components', async () => {
    // Create test components - some enabled, some disabled
    await db.insert(uiComponentsTable)
      .values([
        {
          component_id: 'button-1',
          type: 'button',
          color: 'green',
          text: 'Enabled Button',
          enabled: true
        },
        {
          component_id: 'button-2',
          type: 'button',
          color: 'red',
          text: 'Disabled Button',
          enabled: false
        },
        {
          component_id: 'input-1',
          type: 'input',
          color: 'blue',
          text: 'Enabled Input',
          enabled: true
        }
      ])
      .execute();

    const result = await getUIComponents();

    expect(result).toHaveLength(2);
    
    // Should only contain enabled components
    const componentIds = result.map(c => c.id);
    expect(componentIds).toContain('button-1');
    expect(componentIds).toContain('input-1');
    expect(componentIds).not.toContain('button-2');
    
    // Verify all returned components are enabled
    result.forEach(component => {
      expect(component.enabled).toBe(true);
    });
  });

  it('should handle components with no text', async () => {
    // Create component without text
    await db.insert(uiComponentsTable)
      .values({
        component_id: 'icon-1',
        type: 'icon',
        color: 'purple',
        text: null,
        enabled: true
      })
      .execute();

    const result = await getUIComponents();

    expect(result).toHaveLength(1);
    expect(result[0].id).toEqual('icon-1');
    expect(result[0].type).toEqual('icon');
    expect(result[0].color).toEqual('purple');
    expect(result[0].text).toBeUndefined();
    expect(result[0].enabled).toBe(true);
  });
});
