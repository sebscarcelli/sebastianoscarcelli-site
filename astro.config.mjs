// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
	site: 'https://www.sebastianoscarcelli.it',
	integrations: [mdx(), sitemap()],
	i18n: {
		defaultLocale: 'it',
		locales: ['it', 'en', 'fr'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{ src: ['./src/assets/fonts/atkinson-regular.woff'], weight: 400, style: 'normal', display: 'swap' },
					{ src: ['./src/assets/fonts/atkinson-bold.woff'], weight: 700, style: 'normal', display: 'swap' },
				],
			},
		},
	],
});
