import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import App from './App.vue'
import { router } from './router.ts'
import './styles.css'

// index.html ships a default <title> and meta description for non-JS crawlers.
// Remove them so the tags set by usePageSeo() for the current route are the only ones in <head>.
document.querySelectorAll('head [data-default-head]').forEach((el) => el.remove())

createApp(App).use(router).use(createHead()).mount('#app')
