import { error } from '@sveltejs/kit';
import { getClass } from '#lib/data.ts';
import type { PageLoad } from './$types';

// Rendered on demand by the Node server (SSR), not prerendered.
export const prerender = false;

export const load: PageLoad = ({ params }) => {
	const gymClass = getClass(params.slug);
	if (!gymClass) error(404, 'Class not found');
	return { gymClass };
};
