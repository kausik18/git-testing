<script setup lang="ts">
import { posts } from '#shared/data'

usePageSeo({
  title: 'Travel Blog: Packing, Rail Passes and Tips | Wanderlust',
  description:
    'Practical travel advice from the Wanderlust blog: carry-on packing lists, rail pass maths, jet lag tricks and lessons from years on the road.',
  path: '/blog',
})

const sorted = [...posts].sort((a, b) => b.datePublished.localeCompare(a.datePublished))
</script>

<template>
  <div>
    <h1>The Wanderlust travel blog</h1>
    <p class="lead">
      Short, practical stories from the road, published between our longer destination guides.
    </p>
    <p>
      This is where we write about the practical side of travelling: what to pack, how to move between cities cheaply,
      how to stay healthy on long journeys and how to plan a budget that actually lasts. Every post is based on our own
      experience, and we update older articles when prices or rules change. If you would like us to write about a
      specific topic, get in touch and we will add it to our list of ideas for the coming months.
    </p>
    <div class="grid">
      <article v-for="p in sorted" :key="p.slug" class="card">
        <img :src="p.image" :alt="p.imageAlt" width="1200" height="675">
        <h2><NuxtLink :to="`/blog/${p.slug}`">{{ p.headline }}</NuxtLink></h2>
        <p class="meta">
          By {{ p.author }} on <time :datetime="p.datePublished">{{ formatDate(p.datePublished) }}</time>
        </p>
        <p>{{ p.excerpt }}</p>
      </article>
    </div>
    <h2>Older stories</h2>
    <!-- INTENTIONAL SEO DEFECT: broken internal link (this post does not exist and returns 404). -->
    <p>
      Looking for our early adventures? Read the
      <NuxtLink to="/blog/iceland-ring-road-diary">Iceland ring road diary</NuxtLink> from our very first trip.
    </p>
  </div>
</template>
