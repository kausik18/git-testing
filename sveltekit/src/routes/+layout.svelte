<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { business, nav } from '#lib/data.ts';

	let { children } = $props();

	const isActive = (href: string) =>
		href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);
</script>

<header class="site-header">
	<div class="container header-inner">
		<a class="logo" href="/">
			<img src="/favicon.svg" alt="FitPulse Gym logo" width="36" height="36" />
			<span>{business.name}</span>
		</a>
		<nav aria-label="Main">
			<ul>
				{#each nav as item}
					<li>
						<a href={item.href} aria-current={isActive(item.href) ? 'page' : undefined}>{item.label}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<main class="container">
	{@render children()}
</main>

<footer class="site-footer">
	<div class="container footer-inner">
		<div>
			<p class="footer-brand">{business.name}</p>
			<p>{business.street}, {business.city}, {business.region} {business.postalCode}</p>
			<p><a href="tel:{business.phone}">{business.phone}</a> · <a href="mailto:{business.email}">{business.email}</a></p>
		</div>
		<nav aria-label="Footer">
			<ul>
				{#each nav as item}
					<li><a href={item.href}>{item.label}</a></li>
				{/each}
				<li><a href="/privacy">Privacy Policy</a></li>
			</ul>
		</nav>
	</div>
	<p class="container copyright">© 2026 {business.name}. All rights reserved.</p>
</footer>
