
import { z } from 'zod';

// UI Component schema
export const buttonSchema = z.object({
  id: z.string(),
  text: z.string(),
  color: z.string(),
  action: z.string().nullable()
});

export type Button = z.infer<typeof buttonSchema>;

// Input schema for getting UI components
export const getUIComponentsInputSchema = z.object({
  page: z.string().optional().default('home')
});

export type GetUIComponentsInput = z.infer<typeof getUIComponentsInputSchema>;
