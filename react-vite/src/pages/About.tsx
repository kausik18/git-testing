import { Link } from 'react-router'
import Seo from '../components/Seo.tsx'
import { aboutContent, pages } from '../data.ts'

export default function About() {
  const c = aboutContent
  return (
    <>
      <Seo {...pages.about} path="/about" />
      <h1>{c.heading}</h1>
      <img {...c.image} />
      {/* INTENTIONAL SEO DEFECT: a second <h1> on the About page. */}
      <h1>{c.secondHeading}</h1>
      {c.paragraphs.map((p) => (
        <p key={p.slice(0, 24)}>{p}</p>
      ))}
      <section>
        <h2>{c.valuesHeading}</h2>
        {c.values.map((v) => (
          <div key={v.heading}>
            <h3>{v.heading}</h3>
            <p>{v.body}</p>
          </div>
        ))}
      </section>
      <section>
        <h2>Work with us</h2>
        <p>
          Curious whether we are the right fit? Browse our <Link to="/services">design services</Link>, read the{' '}
          <Link to="/faq">frequently asked questions</Link> or <Link to="/contact">contact the studio</Link> to book an
          introductory call.
        </p>
      </section>
    </>
  )
}
