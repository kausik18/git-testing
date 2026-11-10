import { SITE_URL, absoluteUrl, type JsonLd } from '../seo.ts'
import { business } from '../data.ts'

interface SeoProps {
  title: string
  description: string
  /** Route path of the page, e.g. "/about". Used for og:url and, by default, the canonical URL. */
  path: string
  /** Override the canonical URL (absolute). Pass `null` to omit the canonical tag. */
  canonical?: string | null
  image?: string
  type?: 'website' | 'article'
  noindex?: boolean
  jsonLd?: JsonLd[]
}

/**
 * Per-route head tags using React 19 native metadata hoisting: the <title>, <meta> and <link>
 * elements rendered here are moved into <head> and removed again when the route unmounts.
 * JSON-LD <script> elements render in place (inside <main>), which search engines support.
 */
export default function Seo({
  title,
  description,
  path,
  canonical,
  image = business.ogImage,
  type = 'website',
  noindex = false,
  jsonLd = [],
}: SeoProps) {
  const url = absoluteUrl(path)
  const canonicalHref = canonical === undefined ? url : canonical
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      {canonicalHref && <link rel="canonical" href={canonicalHref} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={business.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {jsonLd.map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
    </>
  )
}
