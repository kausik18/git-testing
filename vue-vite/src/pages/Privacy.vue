<script setup lang="ts">
import { business, pages, privacyContent as c } from '../data.ts'
import { formatDate, usePageSeo } from '../seo.ts'

usePageSeo({ ...pages.privacy, path: '/privacy' })
</script>

<template>
  <h1>Privacy policy</h1>
  <p class="meta">
    Last updated <time :datetime="c.updated">{{ formatDate(c.updated) }}</time>
  </p>
  <p class="lead">
    {{ business.name }} takes your privacy seriously. This policy explains what personal information we collect when
    you visit our website, order plants or contact us, how we use it and the choices you have.
  </p>
  <section v-for="s in c.sections" :key="s.heading">
    <h2>{{ s.heading }}</h2>
    <p>{{ s.body }}</p>
  </section>
</template>
