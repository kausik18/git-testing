import type { Metadata } from 'next';
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_NAME } from './site';

type PageMetaInput = {
  /** Full title, already in the form "Page Name | Ledgerly". */
  title: string;
  description: string;
  /** Path relative to the site root, e.g. "/about". Resolved against metadataBase. */
  path: string;
  type?: 'website' | 'article';
  image?: string;
  imageAlt?: string;
  publishedTime?: string;
  authors?: string[];
  /** When true, no og:image is emitted (used for an intentional defect). */
  omitOgImage?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  type = 'website',
  image = DEFAULT_OG_IMAGE,
  imageAlt = `${SITE_NAME} accounting software`,
  publishedTime,
  authors,
  omitOgImage = false,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const ogImages = omitOgImage ? undefined : [{ url: image, width: 1200, height: 630, alt: imageAlt }];
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph:
      type === 'article'
        ? { type, title, description, url, siteName: SITE_NAME, locale: 'en_US', images: ogImages, publishedTime, authors }
        : { type, title, description, url, siteName: SITE_NAME, locale: 'en_US', images: ogImages },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: image, alt: imageAlt }],
    },
  };
}
