<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { pages } from '../data.ts'
import { usePageSeo } from '../seo.ts'

/*
 * Client-side 404. As a static SPA the server answers every unknown path with index.html
 * and HTTP 200, so this page marks itself noindex (soft 404) and omits a canonical URL.
 */
const route = useRoute()
usePageSeo({ ...pages.notFound, path: route.path, canonical: null, noindex: true })
</script>

<template>
  <h1>Page not found</h1>
  <p class="lead">
    Sorry, we could not find <code>{{ route.path }}</code>. The page may have moved or the link may be mistyped.
  </p>
  <h2>Try one of these instead</h2>
  <ul>
    <li><RouterLink to="/">Return to the GreenLeaf home page</RouterLink></li>
    <li><RouterLink to="/plants">Browse our houseplants</RouterLink></li>
    <li><RouterLink to="/blog">Read the plant care blog</RouterLink></li>
    <li><RouterLink to="/contact">Contact the shop</RouterLink></li>
  </ul>
</template>
