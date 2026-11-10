<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { aboutContent as c, pages } from '../data.ts'
import { usePageSeo } from '../seo.ts'

usePageSeo({ ...pages.about, path: '/about' })
</script>

<template>
  <h1>{{ c.heading }}</h1>
  <img :src="c.image.src" :alt="c.image.alt" :width="c.image.width" :height="c.image.height" />
  <p v-for="p in c.paragraphs" :key="p.slice(0, 24)">{{ p }}</p>
  <section>
    <h2>{{ c.sustainabilityHeading }}</h2>
    <div v-for="s in c.sustainability" :key="s.heading">
      <h3>{{ s.heading }}</h3>
      <p>{{ s.body }}</p>
    </div>
  </section>
  <section>
    <h2>Come and say hello</h2>
    <p>
      Browse our <RouterLink to="/plants">current houseplant collection</RouterLink>, read the
      <RouterLink to="/faq">answers to common questions</RouterLink> or
      <RouterLink to="/contact">find directions to the shop</RouterLink>.
    </p>
  </section>
</template>
