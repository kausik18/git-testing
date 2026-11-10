// @ts-check
import { defineConfig } from 'astro/config';

// Canonical, Open Graph and sitemap URLs are built from SITE_URL.
const SITE_URL = (process.env.SITE_URL || 'http://localhost:3008').replace(/\/+$/, '');

export default defineConfig({
	site: SITE_URL,
	output: 'static',
	trailingSlash: 'never',
	build: { format: 'file' },
	server: { port: 3008 }
});
