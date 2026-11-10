<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { homeContent as c, pages, products } from '../data.ts'
import { storeJsonLd, usePageSeo, websiteJsonLd } from '../seo.ts'

usePageSeo({ ...pages.home, path: '/', jsonLd: [storeJsonLd, websiteJsonLd] })
</script>

<template>
  <section class="hero">
    <div>
      <h1>{{ c.heroHeading }}</h1>
      <p class="lead">{{ c.heroText }}</p>
      <p class="actions">
        <RouterLink class="button" to="/plants">Shop houseplants</RouterLink>
        <RouterLink class="button button-ghost" to="/about">Meet the growers</RouterLink>
      </p>
    </div>
    <img :src="c.heroImage.src" :alt="c.heroImage.alt" :width="c.heroImage.width" :height="c.heroImage.height" />
  </section>

  <section>
    <h2>Customer favourites</h2>
    <div class="card-grid">
      <article v-for="p in products" :key="p.slug" class="card">
        <img :src="p.image.src" :alt="p.image.alt" :width="p.image.width" :height="p.image.height" />
        <h3>
          <RouterLink :to="`/plants/${p.slug}`">{{ p.name }}</RouterLink>
        </h3>
        <p>{{ p.summary }}</p>
        <p class="price">${{ p.price }}</p>
      </article>
    </div>
  </section>

  <section>
    <h2>{{ c.whyHeading }}</h2>
    <div class="card-grid">
      <div v-for="r in c.reasons" :key="r.heading" class="card">
        <h3>{{ r.heading }}</h3>
        <p>{{ r.body }}</p>
      </div>
    </div>
  </section>

  <section>
    <h2>{{ c.careHeading }}</h2>
    <p>
      {{ c.careText }}
      <!-- INTENTIONAL SEO DEFECT: non-descriptive link text ("click here"). -->
      To read the full watering guide, <RouterLink :to="`/blog/${c.careLinkPost}`">click here</RouterLink>.
    </p>
  </section>
</template>
