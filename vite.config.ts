import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { enhancedImages } from '@sveltejs/enhanced-img';
// biome-ignore lint/style/noDefaultExport: <should be allowed in config file>
export default defineConfig({
	plugins: [sveltekit(), enhancedImages()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
