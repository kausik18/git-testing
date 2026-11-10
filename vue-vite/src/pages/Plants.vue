<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { pages, products } from '../data.ts'
import { usePageSeo } from '../seo.ts'

usePageSeo({ ...pages.plants, path: '/plants' })
</script>

<template>
  <h1>Shop houseplants</h1>
  <p class="lead">
    Every plant in our collection is grown by small regional nurseries and rested in our Seattle greenhouse before it
    goes home with you. Prices include a printed care card and our 30-day health guarantee. Not sure which plant suits
    your space? Each listing below explains the light and care it needs.
  </p>
  <div class="card-grid">
    <article v-for="p in products" :key="p.slug" class="card">
      <img :src="p.image.src" :alt="p.image.alt" :width="p.image.width" :height="p.image.height" />
      <h2>{{ p.name }}</h2>
      <p class="botanical">{{ p.botanicalName }}</p>
      <p>{{ p.summary }}</p>
      <p>{{ p.intro }}</p>
      <p class="price">${{ p.price }}</p>
      <RouterLink :to="`/plants/${p.slug}`">View {{ p.name }} details and care</RouterLink>
    </article>
  </div>
  <section>
    <h2>Pots, soil and accessories</h2>
    <p>
      We also stock glazed ceramic pots, peat-free potting mix, moss poles and self-watering inserts in the shop. Ask
      at the counter and we will repot any plant you buy for free while you browse.
    </p>
  </section>
</template>
