import { sveltekit } from '@sveltejs/kit/vite';
import adapterNode from '@sveltejs/adapter-node';
import adapterVercel from '@sveltejs/adapter-vercel';
import { defineConfig } from 'vite';

// Vercel sets VERCEL=1 during its builds; everywhere else build a standalone Node server.
const adapter = process.env.VERCEL ? adapterVercel() : adapterNode();

export default defineConfig({
	plugins: [sveltekit({ adapter })],
	server: { port: 3007, strictPort: true },
	preview: { port: 3007, strictPort: true }
});
