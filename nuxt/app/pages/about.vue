<script setup lang="ts">
usePageSeo({
  title: 'About Maya and Tom, the Travel Writers | Wanderlust',
  description:
    'Meet Maya and Tom, the couple behind Wanderlust, and learn why they left office life in 2018 to travel slowly and write honest guides.',
  path: '/about',
  image: '/images/about-authors.svg',
  imageAlt: 'Maya and Tom with backpacks at a mountain viewpoint',
})
</script>

<template>
  <div>
    <h1>About Wanderlust</h1>
    <p class="lead">
      Wanderlust is an independent travel blog written by Maya Lindqvist and Tom Alvarez. No tour operators, no
      press trips we do not disclose, just two people who love being somewhere new.
    </p>
    <img
      src="/images/about-authors.svg"
      alt="Maya and Tom with backpacks at a mountain viewpoint in Patagonia"
      width="1200"
      height="675"
    >

    <h2>How it started</h2>
    <p>
      In 2018 we were both working long hours in Stockholm, Maya as a product designer and Tom as a civil engineer. A
      three-week holiday in Japan turned into a question we could not stop asking: what if we travelled like that all
      the time? Eighteen months later we had sold most of what we owned, packed two carry-on bags and bought one-way
      tickets to Lisbon.
    </p>

    <h2>How we travel</h2>
    <p>
      We travel slowly, usually spending a month or more in each place. We rent apartments rather than hotel rooms,
      cook with ingredients from local markets and take trains and buses whenever we can. That pace gives us time to
      understand a place properly, and it keeps our costs and our carbon footprint lower than fast-paced trips.
    </p>

    <h2>How we write</h2>
    <h3>Independent and honest</h3>
    <p>
      We pay for our own trips. When a hotel or tourism board does cover a cost, we say so at the top of the article,
      and no partner ever sees our writing before it is published.
    </p>
    <h3>Always kept up to date</h3>
    <p>
      Every destination guide is reviewed at least once a year. If you spot something that has changed, please let us
      know through the <NuxtLink to="/contact">contact page</NuxtLink>.
    </p>
  </div>
</template>
