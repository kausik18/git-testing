<script setup lang="ts">
import { faqs } from '#shared/data'

usePageSeo({
  title: 'Frequently Asked Questions from Readers | Wanderlust',
  description:
    'Answers to common reader questions about Wanderlust: sponsored trips, how we choose destinations, republishing content and guide updates.',
  path: '/faq',
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqs.map(f => ({
    '@type': 'Question',
    'name': f.question,
    'acceptedAnswer': { '@type': 'Answer', 'text': f.answer },
  })),
})
</script>

<template>
  <div>
    <h1>Frequently asked questions</h1>
    <p class="lead">
      The questions readers ask us most often, answered in one place.
    </p>
    <h2>About the blog</h2>
    <div v-for="f in faqs" :key="f.question" class="faq-item">
      <h3>{{ f.question }}</h3>
      <p>{{ f.answer }}</p>
    </div>
    <h2>Still curious?</h2>
    <p>
      If your question is not covered here, send it to us through the <NuxtLink to="/contact">contact page</NuxtLink>
      and we will do our best to help. You can also learn more <NuxtLink to="/about">about who we are</NuxtLink>.
    </p>
  </div>
</template>
