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

const projectsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    longDescription: z.string().optional(),
    technologies: z.array(z.string()),
    githubUrl: z.string().optional(),
    liveUrl: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    status: z.enum(['completed', 'in-progress', 'planned']).default('completed'),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
  }),
});

export const collections = {
  'videos': videosCollection,
  'projects': projectsCollection,
};
