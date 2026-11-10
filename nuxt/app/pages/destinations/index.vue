<script setup lang="ts">
import { destinations } from '#shared/data'

usePageSeo({
  title: 'Destination Travel Guides by Region | Wanderlust',
  description:
    'Browse in-depth Wanderlust destination guides to Kyoto, Lisbon and Patagonia, each written after weeks on the ground with practical tips.',
  path: '/destinations',
})
</script>

<template>
  <div>
    <h1>Destination guides</h1>
    <p class="lead">
      Long-form guides to the places we know best, each one written after at least two weeks of living there.
    </p>
    <p>
      Our destination guides go deeper than a top ten list. Each one covers the best time of year to visit, how to get
      around without a car, what a realistic daily budget looks like and the experiences that made us want to stay
      longer. We include the famous sights, but we also point you towards the quieter alternatives that locals
      recommend. Whether you are planning a city break in Europe, a culture-filled fortnight in Japan or a demanding
      trek at the end of the world, start here and then follow the links to our related blog posts for packing and
      transport advice.
    </p>
    <div class="grid">
      <article v-for="d in destinations" :key="d.slug" class="card">
        <img :src="d.image" :alt="d.imageAlt" width="800" height="450">
        <h2>{{ d.name }}</h2>
        <p class="meta">{{ d.country }}</p>
        <p>{{ d.summary }}</p>
        <NuxtLink :to="`/destinations/${d.slug}`">Read our {{ d.name }} guide</NuxtLink>
      </article>
    </div>
  </div>
</template>
