import { Link } from 'react-router'
import Seo from '../components/Seo.tsx'
import { pages, posts } from '../data.ts'
import { absoluteUrl, formatDate } from '../seo.ts'

export default function Blog() {
  return (
    <>
      {/* INTENTIONAL SEO DEFECT: the canonical URL of /blog points to the home page. */}
      <Seo {...pages.blog} path="/blog" canonical={absoluteUrl('/')} />
      <h1>Design journal</h1>
      <p className="lead">
        Notes from the studio on branding, websites, accessibility and product design. We write about what we learn on
        real client projects: the methods that work, the mistakes we have made and the questions clients ask us most
        often. New articles appear roughly once a month.
      </p>
      <div className="post-grid">
        {posts.map((p) => (
          <article className="card" key={p.slug}>
            <img {...p.image} />
            <h2>
              <Link to={`/blog/${p.slug}`}>{p.headline}</Link>
            </h2>
            <p className="meta">
              By {p.author} on <time dateTime={p.datePublished}>{formatDate(p.datePublished)}</time>
            </p>
            <p>{p.excerpt}</p>
            <p>{p.sections[0].paragraphs[0]}</p>
          </article>
        ))}
      </div>
    </>
  )
}
