<script setup lang="ts">
defineProps<{ items: { name: string, path: string }[] }>()
</script>

<template>
  <nav aria-label="Breadcrumb" class="breadcrumbs">
    <ol>
      <li v-for="(item, i) in items" :key="item.path">
        <NuxtLink v-if="i < items.length - 1" :to="item.path">{{ item.name }}</NuxtLink>
        <span v-else aria-current="page">{{ item.name }}</span>
      </li>
    </ol>
  </nav>
</template>
