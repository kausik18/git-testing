<script lang="ts">
	import Seo from '#lib/Seo.svelte';
	import { posts, formatDate } from '#lib/data.ts';
</script>

<Seo
	title="Training and Recovery Blog | FitPulse Gym"
	description="Practical training, nutrition and recovery advice from the FitPulse Gym coaching team, written for beginners and experienced athletes alike."
	path="/blog"
/>

<h1>The FitPulse blog</h1>
<p class="lead">Straightforward advice from coaches who spend every day on the gym floor.</p>
<p class="prose">
	Fitness information online is often confusing, contradictory or designed to sell you something.
	Our blog is different: every article is written by a FitPulse coach and based on what we see work
	for real members week after week. We cover strength training fundamentals, conditioning, mobility,
	recovery, nutrition basics and the habits that help you stay consistent when motivation dips. New
	articles are published every few weeks, and we announce them in the members newsletter and on the
	noticeboard by reception. Have a question you would like us to answer? Ask any coach after class,
	or send us a message through the contact page and it might become our next post.
</p>

<div class="grid">
	{#each posts as p}
		<article class="card">
			<img src={p.image} alt={p.imageAlt} width="480" height="300" />
			<h2><a href="/blog/{p.slug}">{p.title}</a></h2>
			<p class="meta">By {p.author} · <time datetime={p.datePublished}>{formatDate(p.datePublished)}</time></p>
			<p>{p.excerpt}</p>
		</article>
	{/each}
</div>
