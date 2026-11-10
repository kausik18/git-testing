<script lang="ts">
	import Seo from '#lib/Seo.svelte';
	import Breadcrumbs from '#lib/Breadcrumbs.svelte';
	import { formatDate } from '#lib/data.ts';
	import { blogPostingSchema, breadcrumbSchema } from '#lib/schema.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const post = $derived(data.post);
	const crumbs = $derived([
		{ name: 'Home', path: '/' },
		{ name: 'Blog', path: '/blog' },
		{ name: post.title, path: `/blog/${post.slug}` }
	]);
</script>

<Seo
	title={post.metaTitle}
	description={post.description}
	path="/blog/{post.slug}"
	type="article"
	image={post.image}
	jsonLd={[blogPostingSchema(post), breadcrumbSchema(crumbs)]}
/>

<Breadcrumbs items={crumbs} />

<article class="prose">
	<h1>{post.title}</h1>
	<p class="meta">
		By {post.author} · <time datetime={post.datePublished}>{formatDate(post.datePublished)}</time>
	</p>
	<img class="feature-img" src={post.image} alt={post.imageAlt} width="960" height="540" />

	{#each post.sections as section}
		<h2>{section.heading}</h2>
		{#each section.paragraphs as paragraph}
			<p>{paragraph}</p>
		{/each}
	{/each}

	<p>Browse more articles on <a href="/blog">the FitPulse blog</a> or try one of <a href="/classes">our group classes</a>.</p>
</article>
