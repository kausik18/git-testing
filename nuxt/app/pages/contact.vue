<script setup lang="ts">
import { site } from '#shared/data'

usePageSeo({
  title: 'Contact Us: Questions and Story Ideas | Wanderlust',
  description:
    'Send Maya and Tom a question about a destination, suggest a story or ask about partnerships. We read every message and reply within a week.',
  path: '/contact',
})
</script>

<template>
  <div>
    <h1>Contact us</h1>
    <p class="lead">
      Questions about a destination, a correction to one of our guides or an idea for a story? We would love to hear
      from you.
    </p>
    <p>
      We are a two-person team and often travelling through places with patchy internet, so please allow up to a week
      for a reply. We read every message ourselves. We are not able to plan personal itineraries, but we are always
      happy to point you towards the right guide or share a recommendation for somewhere we have stayed. If you are a
      tourism board or brand, include as much detail as you can about what you have in mind.
    </p>

    <h2>Send a message</h2>
    <form class="contact-form" aria-describedby="form-note" @submit.prevent>
      <label>
        Your name
        <input type="text" name="name" autocomplete="name" required>
      </label>
      <label>
        Email address
        <input type="email" name="email" autocomplete="email" required>
      </label>
      <label>
        What is it about?
        <select name="topic">
          <option value="question">A question about a destination</option>
          <option value="correction">A correction to a guide</option>
          <option value="partnership">Partnerships and press</option>
        </select>
      </label>
      <label>
        Message
        <textarea name="message" rows="6" required />
      </label>
      <button class="button" type="submit">Send message</button>
      <p id="form-note" class="meta">This demo form is not connected to a server, so nothing will be sent.</p>
    </form>

    <h2>Other ways to reach us</h2>
    <p>
      Email us directly at <a :href="`mailto:${site.email}`">{{ site.email }}</a>. Before writing, you might find your
      answer on our <NuxtLink to="/faq">frequently asked questions</NuxtLink> page.
    </p>
  </div>
</template>
