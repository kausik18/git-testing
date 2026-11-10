import { Routes } from '@angular/router';
import { AboutPage } from './pages/about';
import { BlogIndexPage } from './pages/blog-index';
import { BlogPostPage } from './pages/blog-post';
import { CareersPage } from './pages/careers';
import { ContactPage } from './pages/contact';
import { FaqPage } from './pages/faq';
import { HomePage } from './pages/home';
import { NotFoundPage } from './pages/not-found';
import { PrivacyPage } from './pages/privacy';
import { ServiceDetailPage } from './pages/service-detail';
import { ServicesPage } from './pages/services';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: AboutPage },
  { path: 'services', component: ServicesPage },
  { path: 'services/:slug', component: ServiceDetailPage },
  { path: 'blog', component: BlogIndexPage },
  { path: 'blog/:slug', component: BlogPostPage },
  { path: 'contact', component: ContactPage },
  { path: 'faq', component: FaqPage },
  { path: 'privacy', component: PrivacyPage },
  { path: 'careers', component: CareersPage },
  { path: '**', component: NotFoundPage },
];
