import { Link } from 'react-router'
import Seo from '../components/Seo.tsx'
import { homeContent, pages, posts, services } from '../data.ts'
import { organizationJsonLd, websiteJsonLd } from '../seo.ts'

export default function Home() {
  const c = homeContent
  return (
    <>
      <Seo {...pages.home} path="/" jsonLd={[organizationJsonLd, websiteJsonLd]} />
      <section className="hero">
        <div>
          <h1>{c.heroHeading}</h1>
          <p className="lead">{c.heroText}</p>
          <p className="actions">
            <Link className="button" to="/contact">
              Start a project
            </Link>
            <Link className="button button-ghost" to="/services">
              See our services
            </Link>
          </p>
        </div>
        <img {...c.heroImage} />
      </section>

      <section>
        <h2>What we do</h2>
        <div className="card-grid">
          {services.map((s) => (
            <article className="card" key={s.slug}>
              <h3>
                <Link to={`/services/${s.slug}`}>{s.name}</Link>
              </h3>
              <p>{s.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>{c.approachHeading}</h2>
        <div className="card-grid">
          {c.approach.map((step) => (
            <div className="card" key={step.heading}>
              <h3>{step.heading}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>{c.resultsHeading}</h2>
        <ul className="results">
          {c.results.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>From the design journal</h2>
        <ul className="post-list">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link to={`/blog/${p.slug}`}>{p.headline}</Link>
              <span> - {p.excerpt}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
