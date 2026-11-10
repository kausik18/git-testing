import type { MetadataRoute } from 'next';
import { features, posts } from '@/lib/data';
import { absoluteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ['/', '/about', '/features', '/pricing', '/blog', '/contact', '/faq', '/privacy'];
  return [
    ...staticPaths.map((path) => ({
      url: absoluteUrl(path),
      changeFrequency: 'monthly' as const,
      priority: path === '/' ? 1 : 0.7,
    })),
    ...features.map((feature) => ({
      url: absoluteUrl(`/features/${feature.slug}`),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.datePublished,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ];
}
