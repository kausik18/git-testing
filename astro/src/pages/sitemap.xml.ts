import type { APIRoute } from 'astro';
import { guides, posts } from '../data';

export const GET: APIRoute = ({ site }) => {
	const paths = [
		'/',
		'/about',
		'/docs',
		...guides.map((g) => `/docs/${g.slug}`),
		'/blog',
		...posts.map((p) => `/blog/${p.slug}`),
		'/contact',
		'/faq',
		'/privacy'
	];

	const urls = paths
		.map((path) => `  <url>\n    <loc>${new URL(path, site).href}</loc>\n  </url>`)
		.join('\n');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

	return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
