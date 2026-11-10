<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { business, products } from './data.ts'

const mainNav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/plants', label: 'Shop Plants' },
  { to: '/blog', label: 'Plant Care Blog' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="container header-inner">
      <RouterLink to="/" class="logo">
        <img src="/favicon.svg" alt="GreenLeaf leaf logo" width="36" height="36" />
        <span>{{ business.shortName }}</span>
      </RouterLink>
      <nav aria-label="Main">
        <ul class="nav-list">
          <li v-for="item in mainNav" :key="item.to">
            <RouterLink :to="item.to">{{ item.label }}</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main id="main" class="container">
    <!-- Keyed by path so each route (including slug changes) remounts and gets fresh head tags. -->
    <RouterView :key="$route.path" />
  </main>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <p class="footer-heading">{{ business.name }}</p>
        <address>
          {{ business.street }}<br />
          {{ business.city }}, {{ business.region }} {{ business.postalCode }}<br />
          <a :href="`mailto:${business.email}`">{{ business.email }}</a>
        </address>
      </div>
      <nav aria-label="Footer">
        <p class="footer-heading">Explore</p>
        <ul>
          <li v-for="item in mainNav" :key="item.to">
            <RouterLink :to="item.to">{{ item.label }}</RouterLink>
          </li>
          <li><RouterLink to="/privacy">Privacy Policy</RouterLink></li>
        </ul>
      </nav>
      <div>
        <p class="footer-heading">Popular plants</p>
        <ul>
          <li v-for="p in products" :key="p.slug">
            <RouterLink :to="`/plants/${p.slug}`">{{ p.name }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <p class="container copyright">&copy; 2026 {{ business.name }}. All rights reserved.</p>
  </footer>
</template>
