import { Link } from 'react-router'
import Seo from '../components/Seo.tsx'
import { pages, services } from '../data.ts'

export default function Services() {
  return (
    <>
      <Seo {...pages.services} path="/services" />
      <h1>Design services</h1>
      <p className="lead">
        PixelForge offers three core services. Most clients start with one and return for another as their company
        grows. Every engagement is led by a senior designer, priced as a fixed fee and delivered by the same small team
        from kickoff to launch.
      </p>
      <div className="card-grid">
        {services.map((s) => (
          <article className="card" key={s.slug}>
            <img {...s.image} />
            <h2>{s.name}</h2>
            <p>{s.summary}</p>
            <p>{s.intro}</p>
            <p className="price">From ${s.priceFrom.toLocaleString('en-US')}</p>
            <Link to={`/services/${s.slug}`}>Learn more about {s.name.toLowerCase()}</Link>
          </article>
        ))}
      </div>
      <section>
        <h2>Not sure where to start?</h2>
        <p>
          Many projects span more than one discipline. If you are launching a new product you may need a brand, a
          marketing site and an app interface all at once. Tell us what you are planning on the{' '}
          <Link to="/contact">contact page</Link> and we will recommend a sensible sequence and budget.
        </p>
      </section>
    </>
  )
}
