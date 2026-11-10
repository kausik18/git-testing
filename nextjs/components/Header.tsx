import Image from 'next/image';
import Link from 'next/link';

export const mainNav = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <Image src="/images/logo.svg" alt="Ledgerly logo" width={40} height={40} unoptimized />
          <span>Ledgerly</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
