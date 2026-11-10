import { Link, useLocation } from 'react-router'
import Seo from '../components/Seo.tsx'
import { pages } from '../data.ts'

/**
 * Client-side 404. As a static SPA the server answers every unknown path with index.html
 * and HTTP 200, so this page marks itself noindex (soft 404) and omits a canonical URL.
 */
export default function NotFound() {
  const { pathname } = useLocation()
  return (
    <>
      <Seo {...pages.notFound} path={pathname} canonical={null} noindex />
      <h1>Page not found</h1>
      <p className="lead">
        Sorry, we could not find <code>{pathname}</code>. The page may have moved or the link may be mistyped.
      </p>
      <h2>Try one of these instead</h2>
      <ul>
        <li>
          <Link to="/">Return to the PixelForge home page</Link>
        </li>
        <li>
          <Link to="/services">Browse our design services</Link>
        </li>
        <li>
          <Link to="/blog">Read the design journal</Link>
        </li>
        <li>
          <Link to="/contact">Contact the studio</Link>
        </li>
      </ul>
    </>
  )
}
