import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router'
import { business, services } from '../data.ts'

const mainNav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/blog', label: 'Blog' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="logo">
            <img src="/favicon.svg" alt="PixelForge logo" width={36} height={36} />
            <span>{business.shortName}</span>
          </Link>
          <nav aria-label="Main">
            <ul className="nav-list">
              {mainNav.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === '/'}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main id="main" className="container">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-heading">{business.name}</p>
            <address>
              {business.street}
              <br />
              {business.city}, {business.region} {business.postalCode}
              <br />
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </address>
          </div>
          <nav aria-label="Footer">
            <p className="footer-heading">Explore</p>
            <ul>
              {mainNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </nav>
          <div>
            <p className="footer-heading">Services</p>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="container copyright">&copy; 2026 {business.name}. All rights reserved.</p>
      </footer>
    </>
  )
}
