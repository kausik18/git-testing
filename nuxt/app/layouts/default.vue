<template>
  <div>
    <a class="skip-link" href="#main">Skip to content</a>
    <SiteHeader />
    <main id="main" class="container">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
