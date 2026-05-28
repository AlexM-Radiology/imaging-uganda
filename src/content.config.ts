// src/content.config.ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  // Load Markdown and MDX files in the `src/content/articles/` directory.
  loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.optional(image()),
      category: z.string().optional(),
    }),
});

const cases = defineCollection({
  // Load Markdown and MDX files in the `src/content/cases/` directory.
  loader: glob({ base: './src/content/cases', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.optional(image()),
      category: z.string().optional(),
    }),
});

const equipment = defineCollection({
  loader: glob({ base: './src/content/equipment', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      price: z.number(),
      currency: z.string().default('USD'),
      images: z.array(image()).default([]), 
      category: z.string().optional(),
      inStock: z.boolean().default(true),
      phoneNumber: z.string(), // Your WhatsApp number with country code (e.g., "+256786467098")
    }),
});

export const collections = { articles, cases, equipment };