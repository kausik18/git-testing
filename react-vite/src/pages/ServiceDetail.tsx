import { Link, useParams } from 'react-router'
import Breadcrumbs from '../components/Breadcrumbs.tsx'
import Seo from '../components/Seo.tsx'
import { business, services } from '../data.ts'
import { SITE_URL, absoluteUrl, breadcrumbJsonLd } from '../seo.ts'
import NotFound from './NotFound.tsx'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  if (!service) return <NotFound />

  const path = `/services/${service.slug}`
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.name, path },
  ]
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: absoluteUrl(path),
    image: absoluteUrl(service.image.src),
    serviceType: service.name,
    areaServed: 'Worldwide',
    provider: { '@type': 'ProfessionalService', '@id': `${SITE_URL}/#organization`, name: business.name },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: service.priceFrom,
      description: `Projects from $${service.priceFrom.toLocaleString('en-US')}`,
    },
  }

  return (
    <>
      <Seo
        title={service.title}
        description={service.description}
        path={path}
        image={service.image.src}
        jsonLd={[serviceJsonLd, breadcrumbJsonLd(crumbs)]}
      />
      <Breadcrumbs crumbs={crumbs} />
      <article>
        <h1>{service.name}</h1>
        <p className="lead">{service.intro}</p>
        <img {...service.image} />
        {service.sections.map((sec) => (
          <section key={sec.heading}>
            <h2>{sec.heading}</h2>
            <p>{sec.body}</p>
          </section>
        ))}
        <section>
          <h2>What you receive</h2>
          <ul>
            {service.deliverables.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <p className="price">Projects from ${service.priceFrom.toLocaleString('en-US')}</p>
          <Link className="button" to="/contact">
            Discuss your {service.name.toLowerCase()} project
          </Link>
        </section>
      </article>
    </>
  )
}
