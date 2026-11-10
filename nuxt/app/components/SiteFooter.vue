<script setup lang="ts">
import { site } from '#shared/data'
import { mainNav } from '~/utils/nav'
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <p><strong>{{ site.name }}</strong> &mdash; {{ site.tagline }}.</p>
      <nav aria-label="Footer navigation">
        <ul class="footer-links">
          <li v-for="item in mainNav" :key="item.to">
            <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
          </li>
          <li><NuxtLink to="/privacy">Privacy Policy</NuxtLink></li>
        </ul>
      </nav>
      <p class="footer-meta">&copy; 2026 Wanderlust. Written and photographed by {{ site.founders.join(' and ') }}.</p>
    </div>
  </footer>
</template>
