import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { features, getFeature } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';
import { absoluteUrl, SITE_NAME } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return features.map((feature) => ({ slug: feature.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeature(slug);
  if (!feature) return {};
  return pageMetadata({
    title: feature.title,
    description: feature.description,
    path: `/features/${feature.slug}`,
    image: feature.image,
    imageAlt: feature.imageAlt,
  });
}

export default async function FeaturePage({ params }: Props) {
  const { slug } = await params;
  const feature = getFeature(slug);
  if (!feature) notFound();

  const path = `/features/${feature.slug}`;
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: feature.name, path },
  ];
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${feature.name} by ${SITE_NAME}`,
    serviceType: feature.name,
    description: feature.description,
    url: absoluteUrl(path),
    image: absoluteUrl(feature.image),
    provider: { '@type': 'Organization', name: SITE_NAME, url: absoluteUrl('/') },
    areaServed: ['US', 'CA', 'GB', 'AU'],
  };

  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <h1>{feature.name}</h1>
      <p className="lead">{feature.summary}</p>
      <Image className="feature-hero" src={feature.image} alt={feature.imageAlt} width={800} height={450} unoptimized />
      {feature.intro.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      <h2>Key capabilities</h2>
      {feature.capabilities.map((cap) => (
        <div key={cap.name}>
          <h3>{cap.name}</h3>
          <p>{cap.text}</p>
        </div>
      ))}
      <h2>Who it is for</h2>
      <p>{feature.audience}</p>
      <h2>Results you can expect</h2>
      <p>{feature.outcome}</p>
      <p>
        <Link className="button" href="/pricing">
          See plans that include {feature.name.toLowerCase()}
        </Link>
      </p>
    </>
  );
}
