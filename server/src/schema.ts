
import { z } from 'zod';

// UI Component schema
export const uiComponentSchema = z.object({
  id: z.string(),
  type: z.string(),
  color: z.string(),
  text: z.string().optional(),
  enabled: z.boolean().default(true)
});

export type UIComponent = z.infer<typeof uiComponentSchema>;

// Page render schema
export const pageRenderInputSchema = z.object({
  pageId: z.string().optional(),
  theme: z.string().optional().default('default')
});

export type PageRenderInput = z.infer<typeof pageRenderInputSchema>;

export const pageRenderOutputSchema = z.object({
  html: z.string(),
  css: z.string(),
  title: z.string()
});

export type PageRenderOutput = z.infer<typeof pageRenderOutputSchema>;
