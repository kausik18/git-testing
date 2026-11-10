import { SITE_URL } from '$app/env/public';
import { classes, posts } from '#lib/data.ts';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = () => {
	const paths = [
		'/',
		'/about',
		'/classes',
		// noindex class pages are deliberately left out of the sitemap
		...classes.filter((c) => !c.noindex).map((c) => `/classes/${c.slug}`),
		'/blog',
		...posts.map((p) => `/blog/${p.slug}`),
		'/contact',
		'/faq',
		'/privacy'
	];

	const urls = paths
		.map((path) => `  <url>\n    <loc>${SITE_URL}${path}</loc>\n  </url>`)
		.join('\n');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

	return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
