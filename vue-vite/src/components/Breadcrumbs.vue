<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Crumb } from '../seo.ts'

defineProps<{ crumbs: Crumb[] }>()
</script>

<template>
  <nav aria-label="Breadcrumb" class="breadcrumbs">
    <ol>
      <li v-for="(c, i) in crumbs" :key="c.path">
        <RouterLink v-if="i < crumbs.length - 1" :to="c.path">{{ c.name }}</RouterLink>
        <span v-else aria-current="page">{{ c.name }}</span>
      </li>
    </ol>
  </nav>
</template>
