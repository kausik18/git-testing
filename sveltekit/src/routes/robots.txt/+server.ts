import { SITE_URL } from '$app/env/public';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = () => {
	const body = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
	return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
