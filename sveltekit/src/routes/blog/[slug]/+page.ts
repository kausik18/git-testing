import { error } from '@sveltejs/kit';
import { getPost } from '#lib/data.ts';
import type { PageLoad } from './$types';

// Rendered on demand by the Node server (SSR), not prerendered.
export const prerender = false;

export const load: PageLoad = ({ params }) => {
	const post = getPost(params.slug);
	if (!post) error(404, 'Post not found');
	return { post };
};
