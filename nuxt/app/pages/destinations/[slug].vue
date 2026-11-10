<script setup lang="ts">
import { getDestination, site } from '#shared/data'

const route = useRoute()
const destination = getDestination(String(route.params.slug))
if (!destination) {
  throw createError({ status: 404, statusText: 'Destination not found', fatal: true })
}

const { absolute } = useSiteUrl()
const path = `/destinations/${destination.slug}`
const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: destination.name, path },
]

usePageSeo({
  title: destination.title,
  description: destination.description,
  path,
  image: destination.image,
  imageAlt: destination.imageAlt,
})

useJsonLd(
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': `${destination.name} travel guide`,
    'serviceType': 'Destination travel guide',
    'description': destination.summary,
    'url': absolute(path),
    'image': absolute(destination.image),
    'areaServed': { '@type': 'Place', 'name': `${destination.name}, ${destination.country}` },
    'provider': { '@type': 'Organization', 'name': site.name, 'url': absolute('/') },
  },
  breadcrumbLd(crumbs, absolute),
)
</script>

<template>
  <div v-if="destination">
    <BreadcrumbNav :items="crumbs" />
    <h1>{{ destination.name }} travel guide</h1>
    <p class="lead">{{ destination.summary }}</p>
    <img :src="destination.image" :alt="destination.imageAlt" width="800" height="450">
    <p v-for="(paragraph, i) in destination.intro" :key="i">{{ paragraph }}</p>

    <h2>Highlights</h2>
    <div v-for="h in destination.highlights" :key="h.name">
      <h3>{{ h.name }}</h3>
      <p>{{ h.text }}</p>
    </div>

    <h2>Planning your trip</h2>
    <h3>Best time to visit</h3>
    <p>{{ destination.bestTime }}</p>
    <h3>Getting around</h3>
    <p>{{ destination.gettingAround }}</p>
    <h3>Daily budget</h3>
    <p>{{ destination.budget }}</p>

    <p>
      Packing for the trip? Read our <NuxtLink to="/blog/carry-on-packing-list">carry-on packing list</NuxtLink> or
      go back to <NuxtLink to="/destinations">all destination guides</NuxtLink>.
    </p>
  </div>
</template>
