<script lang="ts">
	import Seo from '#lib/Seo.svelte';
	import { classes, posts, formatDate } from '#lib/data.ts';
	import { gymSchema, websiteSchema } from '#lib/schema.ts';
</script>

<Seo
	title="Group Fitness Classes in Riverside | FitPulse Gym"
	description="FitPulse Gym in Riverside offers coached HIIT, Power Yoga and indoor cycling classes, open gym access and personal training for every level."
	path="/"
	jsonLd={[gymSchema(), websiteSchema()]}
/>

<section class="hero">
	<div>
		<h1>Train harder, recover smarter, feel stronger</h1>
		<p class="lead">
			FitPulse Gym is a community-driven training space in Riverside with coached group classes,
			a fully equipped strength floor and a dedicated recovery zone.
		</p>
		<p><a class="btn" href="/classes">Explore our classes</a></p>
	</div>
	<!-- Intentional SEO defect: this image has no width/height attributes. -->
	<img src="/images/hero.svg" alt="Athletes training with kettlebells on the FitPulse gym floor" />
</section>

<section>
	<h2>Why members choose FitPulse</h2>
	<p>
		We opened FitPulse in 2019 with a simple idea: great coaching should not be reserved for elite
		athletes. Every class is led by a certified coach who knows your name, watches your technique
		and adjusts the workout to suit you. Whether you are lifting your first kettlebell or preparing
		for a marathon, you will find a session that challenges you without leaving you sidelined by
		injury.
	</p>
	<p>
		Our 900-square-metre facility on Foundry Lane includes a strength floor with eight squat racks,
		a cycling studio with twenty-four smart bikes, a heated yoga room and a recovery zone stocked
		with foam rollers and massage guns. Members can book classes through the FitPulse app, track
		their progress and join monthly community challenges.
	</p>
</section>

<section>
	<h2>Popular classes</h2>
	<div class="grid">
		{#each classes as c}
			<article class="card">
				<img src={c.image} alt={c.imageAlt} width="480" height="300" />
				<h3><a href="/classes/{c.slug}">{c.name}</a></h3>
				<p>{c.summary}</p>
				<p class="meta">{c.duration} · {c.intensity} intensity</p>
			</article>
		{/each}
	</div>
</section>

<section>
	<h2>Latest from the blog</h2>
	<ul>
		{#each posts as p}
			<li>
				<a href="/blog/{p.slug}">{p.title}</a>
				<span class="meta"> · {formatDate(p.datePublished)}</span>
			</li>
		{/each}
	</ul>
	<p>
		Ready to start? Claim a free day pass at the front desk or <a href="/contact">get in touch with
		our team</a> to arrange a tour.
	</p>
</section>
