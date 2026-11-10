import { Link, useParams } from 'react-router'
import Breadcrumbs from '../components/Breadcrumbs.tsx'
import Seo from '../components/Seo.tsx'
import { business, posts } from '../data.ts'
import { SITE_URL, absoluteUrl, breadcrumbJsonLd, formatDate } from '../seo.ts'
import NotFound from './NotFound.tsx'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return <NotFound />

  const path = `/blog/${post.slug}`
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post.headline, path },
  ]
  const postJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.headline,
    description: post.description,
    image: absoluteUrl(post.image.src),
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: business.name,
      logo: { '@type': 'ImageObject', url: absoluteUrl(business.logo) },
    },
    mainEntityOfPage: absoluteUrl(path),
  }
  const others = posts.filter((p) => p.slug !== post.slug)

  return (
    <>
      <Seo
        title={post.title}
        description={post.description}
        path={path}
        type="article"
        image={post.image.src}
        jsonLd={[postJsonLd, breadcrumbJsonLd(crumbs)]}
      />
      <Breadcrumbs crumbs={crumbs} />
      <article className="post">
        <h1>{post.headline}</h1>
        <p className="meta">
          By {post.author} on <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
        </p>
        <img {...post.image} />
        <p className="lead">{post.excerpt}</p>
        {post.sections.map((sec) => (
          <section key={sec.heading}>
            <h2>{sec.heading}</h2>
            {sec.paragraphs.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </section>
        ))}
      </article>
      <aside>
        <h2>Keep reading</h2>
        <ul>
          {others.map((p) => (
            <li key={p.slug}>
              <Link to={`/blog/${p.slug}`}>{p.headline}</Link>
            </li>
          ))}
          <li>
            <Link to="/blog">All articles in the design journal</Link>
          </li>
        </ul>
      </aside>
    </>
  )
}
