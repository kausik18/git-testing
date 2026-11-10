import Link from 'next/link';
import { company } from '@/lib/data';
import { mainNav } from './Header';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-brand">
          <strong>Ledgerly</strong> &mdash; {company.tagline}.
        </p>
        <nav aria-label="Footer navigation">
          <ul className="footer-links">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </nav>
        <p className="footer-meta">
          &copy; 2026 {company.legalName}, {company.address.street}, {company.address.city}, {company.address.region}{' '}
          {company.address.postalCode}
        </p>
      </div>
    </footer>
  );
}
