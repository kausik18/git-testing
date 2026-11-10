import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-node';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit({ adapter: adapter() })],
	server: { port: 3007, strictPort: true },
	preview: { port: 3007, strictPort: true }
});
