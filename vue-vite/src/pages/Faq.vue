<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { faqs, pages } from '../data.ts'
import { usePageSeo } from '../seo.ts'

// INTENTIONAL SEO DEFECT: canonical: null omits the <link rel="canonical"> on /faq.
usePageSeo({
  ...pages.faq,
  path: '/faq',
  canonical: null,
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
})
</script>

<template>
  <h1>Frequently asked questions</h1>
  <p class="lead">
    Everything you need to know about ordering, delivery and caring for plants from GreenLeaf. Cannot find your answer?
    <RouterLink to="/contact">Get in touch with our team</RouterLink>.
  </p>
  <div class="faq-list">
    <section v-for="f in faqs" :key="f.question">
      <h2>{{ f.question }}</h2>
      <p>{{ f.answer }}</p>
    </section>
  </div>
</template>
