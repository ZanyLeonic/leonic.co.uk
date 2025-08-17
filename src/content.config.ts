import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	// Load Markdown and MDX files in the `src/content/projects/` directory.
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			thumbnail_url: image(),
			image_urls: z.array(z.string()),
			links: z.array(z.object({ title: z.string(), icon: z.string().optional(), url: z.string() })),
			languages: z.array(z.string()),
			year: z.string(),
			pubDate: z.coerce.date(),
		}),
});

export const collections = { projects };
