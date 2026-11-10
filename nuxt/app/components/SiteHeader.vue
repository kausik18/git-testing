<script setup lang="ts">
import { mainNav } from '~/utils/nav'
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <NuxtLink to="/" class="brand">
        <img src="/images/logo.svg" alt="Wanderlust logo" width="40" height="40">
        <span>Wanderlust</span>
      </NuxtLink>
      <nav aria-label="Main navigation">
        <ul class="nav-list">
          <li v-for="item in mainNav" :key="item.to">
            <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
