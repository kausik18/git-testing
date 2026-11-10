<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import NotFound from './NotFound.vue'
import { business, posts } from '../data.ts'
import { SITE_URL, absoluteUrl, breadcrumbJsonLd, formatDate, usePageSeo } from '../seo.ts'

const props = defineProps<{ slug: string }>()
const post = posts.find((p) => p.slug === props.slug)
const path = `/blog/${props.slug}`
const others = posts.filter((p) => p.slug !== props.slug)
const crumbs = post
  ? [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: post.headline, path },
    ]
  : []

if (post) {
  usePageSeo({
    title: post.title,
    description: post.description,
    path,
    type: 'article',
    image: post.image.src,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.headline,
        description: post.description,
        image: absoluteUrl(post.image.src),
        datePublished: post.datePublished,
        dateModified: post.datePublished,
        author: { '@type': 'Person', name: post.author },
        publisher: {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: business.name,
          logo: { '@type': 'ImageObject', url: absoluteUrl(business.logo) },
        },
        mainEntityOfPage: absoluteUrl(path),
      },
      breadcrumbJsonLd(crumbs),
    ],
  })
}
</script>

<template>
  <NotFound v-if="!post" />
  <template v-else>
    <Breadcrumbs :crumbs="crumbs" />
    <article class="post">
      <h1>{{ post.headline }}</h1>
      <p class="meta">
        By {{ post.author }} on <time :datetime="post.datePublished">{{ formatDate(post.datePublished) }}</time>
      </p>
      <img :src="post.image.src" :alt="post.image.alt" :width="post.image.width" :height="post.image.height" />
      <p class="lead">{{ post.excerpt }}</p>
      <section v-for="s in post.sections" :key="s.heading">
        <h2>{{ s.heading }}</h2>
        <p v-for="para in s.paragraphs" :key="para.slice(0, 24)">{{ para }}</p>
      </section>
    </article>
    <aside>
      <h2>Keep reading</h2>
      <ul>
        <li v-for="p in others" :key="p.slug">
          <RouterLink :to="`/blog/${p.slug}`">{{ p.headline }}</RouterLink>
        </li>
        <li><RouterLink to="/blog">All plant care articles</RouterLink></li>
      </ul>
    </aside>
  </template>
</template>
