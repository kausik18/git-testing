<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { pages, posts } from '../data.ts'
import { formatDate, usePageSeo } from '../seo.ts'

usePageSeo({ ...pages.blog, path: '/blog' })
</script>

<template>
  <h1>Plant care blog</h1>
  <p class="lead">
    Straightforward advice from the GreenLeaf team on keeping houseplants healthy. We cover the questions customers ask
    us every day in the shop, from watering and light to pests and repotting, and we only recommend techniques we use
    on our own plants.
  </p>
  <div class="card-grid">
    <article v-for="p in posts" :key="p.slug" class="card">
      <img :src="p.image.src" :alt="p.image.alt" :width="p.image.width" :height="p.image.height" />
      <h2>
        <RouterLink :to="`/blog/${p.slug}`">{{ p.headline }}</RouterLink>
      </h2>
      <p class="meta">
        By {{ p.author }} on <time :datetime="p.datePublished">{{ formatDate(p.datePublished) }}</time>
      </p>
      <p>{{ p.excerpt }}</p>
      <p>{{ p.sections[0]!.paragraphs[0] }}</p>
    </article>
  </div>
</template>
