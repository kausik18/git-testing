import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Plants from './pages/Plants.vue'
import PlantDetail from './pages/PlantDetail.vue'
import Blog from './pages/Blog.vue'
import BlogPost from './pages/BlogPost.vue'
import Contact from './pages/Contact.vue'
import Faq from './pages/Faq.vue'
import Privacy from './pages/Privacy.vue'
import NotFound from './pages/NotFound.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/plants', component: Plants },
    { path: '/plants/:slug', component: PlantDetail, props: true },
    { path: '/blog', component: Blog },
    { path: '/blog/:slug', component: BlogPost, props: true },
    { path: '/contact', component: Contact },
    { path: '/faq', component: Faq },
    { path: '/privacy', component: Privacy },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ],
  scrollBehavior: () => ({ top: 0 }),
})
