import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const essays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essays' }),
  schema: z.object({
    entryNumber: z.string(),
    slug: z.string(),
    title: z.string(),
    author: z.string(),
  }),
});

export const collections = { essays };
