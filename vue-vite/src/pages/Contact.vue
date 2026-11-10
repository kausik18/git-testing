<script setup lang="ts">
import { ref } from 'vue'
import { business, contactContent as c, pages } from '../data.ts'
import { usePageSeo } from '../seo.ts'

usePageSeo({ ...pages.contact, path: '/contact' })

// Non-functional demo form: nothing is submitted anywhere.
const sent = ref(false)
</script>

<template>
  <h1>Contact GreenLeaf</h1>
  <p class="lead">{{ c.intro }}</p>
  <div class="two-col">
    <form class="contact-form" @submit.prevent="sent = true">
      <h2>Send us a message</h2>
      <label for="name">Your name</label>
      <input id="name" name="name" type="text" autocomplete="name" required />
      <label for="email">Email address</label>
      <input id="email" name="email" type="email" autocomplete="email" required />
      <label for="topic">Topic</label>
      <select id="topic" name="topic">
        <option>Order or delivery question</option>
        <option>Plant care advice</option>
        <option>Workshops and events</option>
        <option>Something else</option>
      </select>
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="6" required></textarea>
      <button type="submit" class="button">Send message</button>
      <p v-if="sent" role="status" class="notice">Thanks! This is a demo form, so nothing was sent.</p>
    </form>
    <div>
      <h2>Visit the shop</h2>
      <address>
        {{ business.name }}<br />
        {{ business.street }}<br />
        {{ business.city }}, {{ business.region }} {{ business.postalCode }}
      </address>
      <p>
        Email: <a :href="`mailto:${business.email}`">{{ business.email }}</a><br />
        Phone: <a :href="`tel:${business.phone}`">{{ business.phone }}</a>
      </p>
      <p>Opening hours: {{ c.hours }}</p>
      <p>{{ c.visitText }}</p>
      <h3>{{ c.doctorHeading }}</h3>
      <p>{{ c.doctorText }}</p>
    </div>
  </div>
</template>
