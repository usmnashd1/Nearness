import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const categories = [
  'journal', 'poetry', 'prose', 'books', 'code',
  'computers', 'ai', 'memory', 'fragments',
] as const;

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date(),
    category: z.enum(categories),
    language: z.enum(['en', 'ur', 'mixed']),
    direction: z.enum(['ltr', 'rtl', 'mixed']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    mood: z.string().optional(),
    excerpt: z.string().optional(),
    featured: z.boolean().default(false),
    cover: z.string().optional(),
    quote: z.string().optional(),
  }),
});

export const collections = { posts };
