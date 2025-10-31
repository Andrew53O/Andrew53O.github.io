import { defineCollection, z } from 'astro:content';

const videosCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string().optional(),
    videoUrl: z.string(),
    tags: z.array(z.string()),
    thumbnail: z.string().optional(),
  }),
});

export const collections = {
  'videos': videosCollection,
};
