<script lang="ts">
	import Seo from '#lib/Seo.svelte';
	import { team } from '#lib/data.ts';
</script>

<Seo
	title="About Our Gym and Coaches | FitPulse Gym"
	description="Meet the coaches behind FitPulse Gym and learn how a small Riverside training studio grew into a welcoming fitness community since 2019."
	path="/about"
/>

<h1>About FitPulse Gym</h1>
<p class="lead">A neighbourhood gym built on coaching, consistency and community.</p>

<img
	class="feature-img"
	src="/images/about-team.svg"
	alt="The FitPulse coaching team standing in front of the squat racks"
	width="960"
	height="420"
/>

<section class="prose">
	<h2>Our story</h2>
	<p>
		FitPulse started in 2019 as a two-coach studio in a converted print workshop on Foundry Lane.
		Marcus Reed and Priya Natarajan had spent a decade working in big-box gyms and noticed the same
		pattern again and again: new members signed up with enthusiasm, felt lost on the gym floor and
		quietly stopped coming within three months. They wanted to build the opposite, a place where
		every visit starts with a hello and every workout comes with a plan.
	</p>
	<p>
		Seven years later the studio has expanded into the neighbouring warehouse, added a cycling
		studio and a recovery zone, and grown to more than 1,200 members. The founding principle has not
		changed. Classes stay small, coaches stay on the floor, and progress is measured in strength,
		energy and confidence rather than in how sore you feel the next day.
	</p>

	<h2>What we believe</h2>
	<h3>Coaching beats equipment</h3>
	<p>
		Fancy machines are nice, but a coach who corrects your squat is worth more. Every class and open
		gym session has a qualified coach available to help.
	</p>
	<h3>Consistency beats intensity</h3>
	<p>
		The best programme is the one you can stick to. We design training that leaves you wanting to
		come back tomorrow, with sensible progressions and built-in recovery.
	</p>
	<h3>Everyone belongs</h3>
	<p>
		Our members range from teenagers training for school sport to retirees rebuilding strength after
		surgery. We celebrate every milestone, from a first pull-up to a first 5K.
	</p>

	<h2>Meet the coaches</h2>
	<ul>
		{#each team as person}
			<li><strong>{person.name}</strong>, {person.role}</li>
		{/each}
	</ul>
	<p>Want to train with us? <a href="/contact">Book a free tour</a> or browse <a href="/classes">our class timetable</a>.</p>
</section>
