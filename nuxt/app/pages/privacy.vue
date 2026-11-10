<script setup lang="ts">
import { site } from '#shared/data'

usePageSeo({
  title: 'Privacy Policy and Cookie Information | Wanderlust',
  description:
    'How the Wanderlust travel blog collects, uses and protects personal data, including analytics, contact messages and your privacy rights.',
  path: '/privacy',
})
</script>

<template>
  <div>
    <h1>Privacy policy</h1>
    <p class="meta">Last updated: 1 September 2026</p>
    <p>
      Wanderlust is a personal travel blog run by Maya Lindqvist and Tom Alvarez. This policy explains what personal
      information we collect when you read the blog or contact us, why we collect it and the choices you have. We keep
      data collection to the minimum needed to run the site.
    </p>

    <h2>What we collect</h2>
    <p>
      When you send us a message, we receive your name, email address and whatever you choose to write. We use
      privacy-friendly, cookie-free analytics that count page views without identifying individual readers or tracking
      you across other websites. We do not run advertising networks or social media tracking pixels.
    </p>

    <h2>How we use it</h2>
    <p>
      Messages are used only to reply to you and are deleted after twelve months. Aggregate analytics help us
      understand which guides are most useful so we can keep them up to date. We never sell or share personal data
      with third parties for marketing.
    </p>

    <h2>Your rights</h2>
    <p>
      You can ask us to show, correct or delete any personal information we hold about you by emailing
      <a :href="`mailto:${site.email}`">{{ site.email }}</a>. If you are in the European Union or United Kingdom, you
      also have the right to complain to your local data protection authority.
    </p>
  </div>
</template>
