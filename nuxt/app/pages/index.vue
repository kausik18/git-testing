<script setup lang="ts">
import { destinations, posts, site } from '#shared/data'

const { absolute } = useSiteUrl()

usePageSeo({
  title: 'Slow Travel Stories and Destination Guides | Wanderlust',
  description:
    'Wanderlust is an independent travel blog with in-depth destination guides, honest packing advice and slow travel stories from around the world.',
  path: '/',
})

useJsonLd(
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': site.name,
    'url': absolute('/'),
    'logo': absolute('/images/logo.svg'),
    'email': site.email,
    'founder': site.founders.map(name => ({ '@type': 'Person', name })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': site.name,
    'url': absolute('/'),
    'description': site.tagline,
    'publisher': { '@type': 'Organization', 'name': site.name },
  },
)

const latestPosts = [...posts].sort((a, b) => b.datePublished.localeCompare(a.datePublished)).slice(0, 2)
</script>

<template>
  <div>
    <section class="hero">
      <div>
        <h1>Slow travel stories and honest destination guides</h1>
        <p class="lead">
          We are Maya and Tom, two former office workers who swapped commutes for train timetables. Wanderlust is
          where we share the places that changed us and the practical advice we wish we had before we left.
        </p>
        <p><NuxtLink class="button" to="/destinations">Explore our destination guides</NuxtLink></p>
      </div>
      <img
        src="/images/hero-mountains.svg"
        alt="Hiking trail winding towards snow-capped mountains at sunrise"
        width="1200"
        height="675"
      >
    </section>

    <section>
      <h2>Featured destinations</h2>
      <p>
        Every guide on Wanderlust is based on at least two weeks on the ground. We walk the neighbourhoods, eat where
        locals eat and ride the buses, so our advice reflects how a place really feels rather than how it looks in a
        brochure. Start with one of our most-read guides below.
      </p>
      <div class="grid">
        <article v-for="d in destinations" :key="d.slug" class="card">
          <img :src="d.image" :alt="d.imageAlt" width="800" height="450">
          <h3>{{ d.name }}, {{ d.country }}</h3>
          <p>{{ d.summary }}</p>
          <NuxtLink :to="`/destinations/${d.slug}`">Read the {{ d.name }} travel guide</NuxtLink>
        </article>
      </div>
    </section>

    <section>
      <h2>Latest from the blog</h2>
      <p>
        Between longer guides we write shorter pieces on packing, budgeting, rail passes and staying healthy on the
        road. These are the two most recent.
      </p>
      <ul>
        <li v-for="p in latestPosts" :key="p.slug">
          <NuxtLink :to="`/blog/${p.slug}`">{{ p.headline }}</NuxtLink> &mdash; {{ p.excerpt }}
        </li>
      </ul>
    </section>

    <section>
      <h2>Why slow travel?</h2>
      <p>
        Staying longer in fewer places is cheaper, kinder to the communities you visit and far more rewarding. You get
        to know the baker on the corner, find the café that is not in any guidebook and come home rested instead of
        exhausted. Read more <NuxtLink to="/about">about our story</NuxtLink> or send us a question through the
        <NuxtLink to="/contact">contact page</NuxtLink>.
      </p>
    </section>
  </div>
</template>
