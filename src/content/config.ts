import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional()
  }),
});

export const collections = { 'blog': blog };