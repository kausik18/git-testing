<script lang="ts">
	import Seo from '#lib/Seo.svelte';
	import { classes } from '#lib/data.ts';
</script>

<Seo
	title="Group Fitness Class Timetable | FitPulse Gym"
	description="Browse FitPulse Gym group classes: HIIT Blast intervals, Power Yoga flows and Spin Cycle indoor rides, with weekly times and intensity levels."
	path="/classes"
/>

<h1>Group fitness classes</h1>
<p class="lead">
	Coached sessions for every goal, from building raw conditioning to improving mobility and
	endurance.
</p>
<p class="prose">
	All FitPulse classes are included in every membership and capped at sixteen people, so your coach
	can give you real attention. Each session offers a lighter and a harder version of every movement,
	which means you can join on your first day and keep progressing for years. Book through the
	FitPulse app up to seven days in advance; spaces open at 06:00 each morning. If you are unsure where
	to start, Power Yoga is a great introduction to how we coach, while HIIT Blast and Spin Cycle are
	ideal once you want to push your conditioning. Our coaches are always happy to recommend a weekly
	mix that balances hard training days with recovery.
</p>

<div class="grid">
	{#each classes as c}
		<article class="card">
			<img src={c.image} alt={c.imageAlt} width="480" height="300" />
			<h2><a href="/classes/{c.slug}">{c.name}</a></h2>
			<p>{c.summary}</p>
			<p class="meta">
				<span class="tag">{c.intensity}</span> {c.duration} with {c.coach}
			</p>
			<p class="meta">{c.schedule.join(' · ')}</p>
		</article>
	{/each}
</div>
