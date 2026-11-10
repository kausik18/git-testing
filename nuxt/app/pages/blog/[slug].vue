<script setup lang="ts">
import { getPost, site } from '#shared/data'

const route = useRoute()
const post = getPost(String(route.params.slug))
if (!post) {
  throw createError({ status: 404, statusText: 'Post not found', fatal: true })
}

const { absolute } = useSiteUrl()
const path = `/blog/${post.slug}`
const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: post.headline, path },
]

usePageSeo({
  title: post.title,
  description: post.description,
  path,
  type: 'article',
  image: post.image,
  imageAlt: post.imageAlt,
  publishedTime: post.datePublished,
  author: post.author,
})

useJsonLd(
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.headline,
    'description': post.description,
    'datePublished': post.datePublished,
    'dateModified': post.datePublished,
    'image': absolute(post.image),
    'url': absolute(path),
    'mainEntityOfPage': absolute(path),
    'author': { '@type': 'Person', 'name': post.author },
    'publisher': {
      '@type': 'Organization',
      'name': site.name,
      'logo': { '@type': 'ImageObject', 'url': absolute('/images/logo.svg') },
    },
  },
  breadcrumbLd(crumbs, absolute),
)
</script>

<template>
  <div v-if="post">
    <BreadcrumbNav :items="crumbs" />
    <article class="prose">
      <h1>{{ post.headline }}</h1>
      <p class="meta">
        By {{ post.author }} on <time :datetime="post.datePublished">{{ formatDate(post.datePublished) }}</time>
      </p>
      <img :src="post.image" :alt="post.imageAlt" width="1200" height="675">
      <p class="lead">{{ post.intro }}</p>
      <section v-for="section in post.body" :key="section.heading">
        <h2>{{ section.heading }}</h2>
        <p v-for="(paragraph, i) in section.paragraphs" :key="i">{{ paragraph }}</p>
      </section>
    </article>
  </div>
</template>
