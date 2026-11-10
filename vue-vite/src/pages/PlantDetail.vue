<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import NotFound from './NotFound.vue'
import { business, products } from '../data.ts'
import { SITE_URL, absoluteUrl, breadcrumbJsonLd, usePageSeo } from '../seo.ts'

const props = defineProps<{ slug: string }>()
const product = products.find((p) => p.slug === props.slug)
const path = `/plants/${props.slug}`
const crumbs = product
  ? [
      { name: 'Home', path: '/' },
      { name: 'Plants', path: '/plants' },
      { name: product.name, path },
    ]
  : []

if (product) {
  usePageSeo({
    title: product.title,
    description: product.description,
    path,
    image: product.image.src,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: absoluteUrl(product.image.src),
        sku: product.sku,
        url: absoluteUrl(path),
        brand: { '@type': 'Brand', name: business.name },
        offers: {
          '@type': 'Offer',
          price: product.price.toFixed(2),
          priceCurrency: 'USD',
          availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
          url: absoluteUrl(path),
          seller: { '@type': 'Store', '@id': `${SITE_URL}/#organization`, name: business.name },
        },
      },
      breadcrumbJsonLd(crumbs),
    ],
  })
}
</script>

<template>
  <NotFound v-if="!product" />
  <template v-else>
    <Breadcrumbs :crumbs="crumbs" />
    <article class="product">
      <div class="product-top">
        <img :src="product.image.src" :alt="product.image.alt" :width="product.image.width" :height="product.image.height" />
        <div>
          <h1>{{ product.name }}</h1>
          <p class="botanical">{{ product.botanicalName }}</p>
          <p class="price">${{ product.price }}</p>
          <p class="lead">{{ product.intro }}</p>
          <button type="button" class="button" disabled>Add to basket (demo)</button>
          <dl class="facts">
            <template v-for="f in product.facts" :key="f.label">
              <dt>{{ f.label }}</dt>
              <dd>{{ f.value }}</dd>
            </template>
          </dl>
        </div>
      </div>
      <h2>Caring for your {{ product.name.toLowerCase() }}</h2>
      <section v-for="s in product.care" :key="s.heading">
        <h3>{{ s.heading }}</h3>
        <p>{{ s.body }}</p>
      </section>
      <h2>More photos</h2>
      <div class="gallery">
        <img v-for="g in product.gallery" :key="g.src" :src="g.src" :alt="g.alt" :width="g.width" :height="g.height" />
      </div>
      <p>
        Questions about this plant? <RouterLink to="/contact">Ask our plant doctors</RouterLink> or
        <RouterLink to="/plants">browse all houseplants</RouterLink>.
      </p>
    </article>
  </template>
</template>
