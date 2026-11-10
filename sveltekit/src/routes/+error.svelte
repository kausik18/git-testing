<script lang="ts">
	import { page } from '$app/state';
	import { business } from '#lib/data.ts';

	const notFound = $derived(page.status === 404);
</script>

<svelte:head>
	<title>{notFound ? 'Page Not Found' : 'Something Went Wrong'} | {business.name}</title>
	<meta
		name="description"
		content="The page you were looking for could not be found at FitPulse Gym. Explore our classes, blog and contact details instead."
	/>
</svelte:head>

<section class="prose">
	<h1>{notFound ? 'Page not found' : 'Something went wrong'}</h1>
	<p class="lead">
		{#if notFound}
			Sorry, we could not find that page. It may have moved, or the link may be out of date.
		{:else}
			{page.error?.message}
		{/if}
	</p>
	<h2>Where to next?</h2>
	<ul>
		<li><a href="/">Go to the home page</a></li>
		<li><a href="/classes">Browse our classes</a></li>
		<li><a href="/blog">Read the blog</a></li>
		<li><a href="/contact">Contact us</a></li>
	</ul>
</section>
