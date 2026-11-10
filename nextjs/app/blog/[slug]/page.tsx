import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { getPost, posts } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';
import { absoluteUrl, SITE_NAME } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: 'article',
    image: post.image,
    imageAlt: post.imageAlt,
    publishedTime: post.datePublished,
    authors: [post.author],
  });
}

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post.headline, path },
  ];
  const postLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.headline,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    image: absoluteUrl(post.image),
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: absoluteUrl('/images/logo.svg') },
    },
  };
  // One post intentionally renders its section headings as <h4> (heading skip defect).
  const SectionHeading = post.sectionHeadingTag ?? 'h2';

  return (
    <>
      <JsonLd data={postLd} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <article className="prose">
        <h1>{post.headline}</h1>
        <p className="post-meta">
          By {post.author} on <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
        </p>
        <Image className="post-image" src={post.image} alt={post.imageAlt} width={1200} height={675} unoptimized />
        <p className="lead">{post.intro}</p>
        {post.sections.map((section) => (
          <section key={section.heading}>
            <SectionHeading>{section.heading}</SectionHeading>
            {section.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </section>
        ))}
        <p>
          Want to put this into practice? <Link href="/features/financial-reports">See how Ledgerly reports work</Link>{' '}
          or browse more articles on the <Link href="/blog">Ledgerly blog</Link>.
        </p>
      </article>
    </>
  );
}
