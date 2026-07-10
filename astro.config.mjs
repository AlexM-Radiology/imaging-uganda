// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import remarkContainers from './remark-containers.mjs';
import rehypeContainers from './rehype-containers.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.imaginguganda.com',
	integrations: [
		mdx({
			remarkPlugins: [],
			rehypePlugins: [rehypeContainers],
		}),
		sitemap({
			filter: (page) => {
				// Exclude pagination pages (articles/1/, articles/2/, etc.)
				if (page.match(/\/articles\/\d+\/$/)) return false;
				if (page.match(/\/cases\/\d+\/$/)) return false;
				
				// Exclude search page
				if (page.includes('/search/')) return false;
				
				// Exclude CV/profile pages (if they shouldn't be indexed)
				if (page.includes('/cvs/')) return false;
				
				// Keep all other pages
				return true;
			},
			// Optional: Set custom priorities for your important pages
			// If you want to set specific changefreq/priority, you can add:
			// serialize(item) {
			//   if (item.url === 'https://imaginguganda.com/') {
			//     item.changefreq = 'daily';
			//     item.priority = 1.0;
			//   }
			//   return item;
			// },
		}),
	],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});