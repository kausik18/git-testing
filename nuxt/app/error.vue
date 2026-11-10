<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const status = computed(() => props.error.status ?? props.error.statusCode ?? 500)
const isNotFound = computed(() => status.value === 404)

useHead({
  title: isNotFound.value ? 'Page Not Found | Wanderlust' : 'Something Went Wrong | Wanderlust',
  meta: [
    { name: 'description', content: 'The page you were looking for could not be found on the Wanderlust travel blog.' },
    { name: 'robots', content: 'noindex, follow' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <h1>{{ isNotFound ? 'Page not found' : 'Something went wrong' }}</h1>
    <p class="lead">
      <template v-if="isNotFound">
        Sorry, this trail leads nowhere. The page may have moved, or the link you followed may be out of date.
      </template>
      <template v-else>
        An unexpected error occurred. Please try again in a moment.
      </template>
    </p>
    <p>
      Head back to the <NuxtLink to="/">Wanderlust home page</NuxtLink>, browse our
      <NuxtLink to="/destinations">destination guides</NuxtLink> or read the latest stories on the
      <NuxtLink to="/blog">travel blog</NuxtLink>.
    </p>
  </NuxtLayout>
</template>
