import Seo from '../components/Seo.tsx'
import { business, pages, privacyContent } from '../data.ts'
import { formatDate } from '../seo.ts'

export default function Privacy() {
  return (
    <>
      <Seo {...pages.privacy} path="/privacy" />
      <h1>Privacy policy</h1>
      <p className="meta">
        Last updated <time dateTime={privacyContent.updated}>{formatDate(privacyContent.updated)}</time>
      </p>
      <p className="lead">
        {business.name} respects your privacy. This policy explains what personal information we collect through this
        website, why we collect it and the choices you have.
      </p>
      {privacyContent.sections.map((s) => (
        <section key={s.heading}>
          <h2>{s.heading}</h2>
          <p>{s.body}</p>
        </section>
      ))}
    </>
  )
}
