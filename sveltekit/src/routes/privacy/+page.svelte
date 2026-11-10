<script lang="ts">
	import Seo from '#lib/Seo.svelte';
	import { business } from '#lib/data.ts';
</script>

<!-- Intentional SEO defect: no `title` passed, so this page renders without a <title> tag. -->
<Seo
	description="How FitPulse Gym collects, uses and protects the personal data of members, visitors and website users, and how to exercise your rights."
	path="/privacy"
/>

<h1>Privacy policy</h1>
<p class="meta">Last updated: 1 October 2026</p>

<section class="prose">
	<p>
		This policy explains how {business.name} collects, uses and protects personal information when you
		visit our gym, use our website or book classes through the FitPulse app.
	</p>

	<h2>Information we collect</h2>
	<p>
		When you become a member we collect your name, contact details, date of birth, emergency contact
		and payment information. When you book classes we record your attendance. Our website collects
		basic technical data such as browser type and pages visited to help us improve the site. We do
		not sell personal information to anyone.
	</p>

	<h2>How we use your information</h2>
	<p>
		We use your data to manage your membership, process payments, send booking confirmations and,
		if you opt in, share our newsletter. Health information you choose to share with a coach is used
		only to adapt your training and is never shared outside the coaching team without your consent.
	</p>

	<h2>Retention and security</h2>
	<p>
		Membership records are kept for the duration of your membership plus six years for accounting
		purposes. Data is stored with encrypted providers, and access is limited to staff who need it.
	</p>

	<h2>Your rights</h2>
	<p>
		You may request a copy of your data, ask us to correct or delete it, or withdraw marketing
		consent at any time by emailing <a href="mailto:{business.email}">{business.email}</a> or by
		visiting the front desk. We respond to all requests within thirty days.
	</p>
</section>
