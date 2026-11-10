import { Link } from 'react-router'
import Seo from '../components/Seo.tsx'
import { faqs, pages } from '../data.ts'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

export default function Faq() {
  return (
    <>
      <Seo {...pages.faq} path="/faq" jsonLd={[faqJsonLd]} />
      <h1>Frequently asked questions</h1>
      <p className="lead">
        Straight answers to the questions we hear most often from new clients. If yours is not covered here,{' '}
        <Link to="/contact">send us a message</Link> and we will get back to you.
      </p>
      <div className="faq-list">
        {faqs.map((f) => (
          <section key={f.question}>
            <h2>{f.question}</h2>
            <p>{f.answer}</p>
          </section>
        ))}
      </div>
    </>
  )
}
