import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { browserslistToTargets } from "lightningcss";
import browserslist from "browserslist";
// biome-ignore lint/style/noDefaultExport: <should be allowed in config file>
export default defineConfig({
	plugins: [sveltekit(), enhancedImages()],
	css: {
		transformer: "lightningcss",
		lightningcss: {
			targets: browserslistToTargets(browserslist(">= 0.25%")),
			drafts: {
				customMedia: true,



			}
		},
	},
	build: {
		cssMinify: "lightningcss",
	},
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"],
	},
});
