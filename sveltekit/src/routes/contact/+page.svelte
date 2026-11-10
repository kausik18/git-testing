<script lang="ts">
	import Seo from '#lib/Seo.svelte';
	import { business } from '#lib/data.ts';
</script>

<Seo
	title="Contact Us and Book a Tour | FitPulse Gym"
	description="Contact FitPulse Gym on Foundry Lane in Riverside to book a free tour, ask about memberships or arrange a personal training session."
	path="/contact"
/>

<h1>Contact FitPulse Gym</h1>
<p class="lead">Questions about memberships, classes or personal training? We would love to hear from you.</p>

<div class="hero">
	<section>
		<h2>Visit or call us</h2>
		<p>
			You will find us at {business.street}, {business.city}, {business.region} {business.postalCode},
			two minutes from the Riverside Metrolink station. Free member parking is available in the lot
			behind the building, and there are secure bike racks at the main entrance.
		</p>
		<p>
			Phone: <a href="tel:{business.phone}">{business.phone}</a><br />
			Email: <a href="mailto:{business.email}">{business.email}</a>
		</p>
		<h3>Opening hours</h3>
		<p>Monday to Friday 05:30 to 22:00. Saturday and Sunday 07:00 to 19:00.</p>
		<p>
			The front desk is staffed from 06:00 to 21:00 every day. Drop in at any time during those hours
			for a tour of the facility, or use the form to arrange a time that suits you. We reply to every
			message within one working day, and if you are thinking of joining we can set you up with a
			free day pass so you can try a class before deciding.
		</p>
	</section>

	<section>
		<h2>Send us a message</h2>
		<!-- Demo form: intentionally not wired to any backend. -->
		<form action="#" method="post" onsubmit={(e) => e.preventDefault()}>
			<label>Name <input name="name" autocomplete="name" required /></label>
			<label>Email <input type="email" name="email" autocomplete="email" required /></label>
			<label>
				I am interested in
				<select name="topic">
					<option>Membership</option>
					<option>Group classes</option>
					<option>Personal training</option>
					<option>Something else</option>
				</select>
			</label>
			<label>Message <textarea name="message" rows="5"></textarea></label>
			<button class="btn" type="submit">Send message</button>
		</form>
	</section>
</div>
