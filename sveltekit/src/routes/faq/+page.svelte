<script lang="ts">
	import Seo from '#lib/Seo.svelte';
	import { faqs } from '#lib/data.ts';
	import { faqSchema } from '#lib/schema.ts';
</script>

<Seo
	title="Frequently Asked Questions | FitPulse Gym"
	description="Answers to common questions about FitPulse Gym: class bookings, opening hours, membership fees, freezing, parking, showers and personal training."
	path="/faq"
	jsonLd={[faqSchema(faqs)]}
/>

<h1>Frequently asked questions</h1>
<p class="lead">Everything you need to know before your first visit.</p>

<section class="prose">
	<h2>Memberships, classes and facilities</h2>
	{#each faqs as item}
		<details>
			<summary>{item.q}</summary>
			<p>{item.a}</p>
		</details>
	{/each}
	<p>Still have a question? <a href="/contact">Contact our front desk team</a> and we will get back to you within one working day.</p>
</section>
