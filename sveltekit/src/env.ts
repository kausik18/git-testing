import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	SITE_URL: {
		public: true,
		description:
			'Absolute origin used for canonical, Open Graph and sitemap URLs. Defaults to http://localhost:3007.',
		schema: (value) => (value || 'http://localhost:3007').replace(/\/+$/, '')
	}
});
