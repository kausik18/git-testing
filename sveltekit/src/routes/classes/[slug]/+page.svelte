<script lang="ts">
	import Seo from '#lib/Seo.svelte';
	import Breadcrumbs from '#lib/Breadcrumbs.svelte';
	import { breadcrumbSchema, serviceSchema } from '#lib/schema.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const c = $derived(data.gymClass);
	const crumbs = $derived([
		{ name: 'Home', path: '/' },
		{ name: 'Classes', path: '/classes' },
		{ name: c.name, path: `/classes/${c.slug}` }
	]);
</script>

<Seo
	title={c.title}
	description={c.description}
	path="/classes/{c.slug}"
	image={c.image}
	noindex={c.noindex}
	jsonLd={[serviceSchema(c), breadcrumbSchema(crumbs)]}
/>

<Breadcrumbs items={crumbs} />

<article class="prose">
	<h1>{c.name}</h1>
	<p class="lead">{c.summary}</p>
	<img class="feature-img" src={c.image} alt={c.imageAlt} width="960" height="600" />

	<h2>About the class</h2>
	{#each c.body as paragraph}
		<p>{paragraph}</p>
	{/each}

	<h2>Benefits</h2>
	<ul>
		{#each c.benefits as benefit}
			<li>{benefit}</li>
		{/each}
	</ul>

	<h2>Class details</h2>
	<h3>Weekly schedule</h3>
	<ul>
		{#each c.schedule as slot}
			<li>{slot}</li>
		{/each}
	</ul>
	<h3>At a glance</h3>
	<p>Duration: {c.duration}. Intensity: {c.intensity}. Coach: {c.coach}.</p>

	<p><a class="btn" href="/contact">Book a free trial class</a></p>
</article>
