<script lang="ts">
	import { SITE_URL } from '$app/env/public';
	import { business } from '#lib/data.ts';

	interface Props {
		/** Full <title>. Omit to render no title tag at all. */
		title?: string;
		description: string;
		/** Root-relative path of the page, e.g. `/about` */
		path: string;
		type?: 'website' | 'article';
		image?: string;
		noindex?: boolean;
		jsonLd?: Record<string, unknown>[];
	}

	let {
		title,
		description,
		path,
		type = 'website',
		image = business.defaultImage,
		noindex = false,
		jsonLd = []
	}: Props = $props();

	const canonical = $derived(SITE_URL + (path === '/' ? '/' : path));
	const imageUrl = $derived(SITE_URL + image);
	const socialTitle = $derived(title ?? business.name);

	function ldScript(data: Record<string, unknown>) {
		const json = JSON.stringify(data).replace(/</g, '\\u003c');
		return `<script type="application/ld+json">${json}</` + `script>`;
	}
</script>

<svelte:head>
	{#if title}
		<title>{title}</title>
	{/if}
	<meta name="description" content={description} />
	{#if noindex}
		<meta name="robots" content="noindex, follow" />
	{/if}
	<link rel="canonical" href={canonical} />

	<meta property="og:site_name" content={business.name} />
	<meta property="og:type" content={type} />
	<meta property="og:title" content={socialTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={imageUrl} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={socialTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />

	{#each jsonLd as data}
		{@html ldScript(data)}
	{/each}
</svelte:head>
