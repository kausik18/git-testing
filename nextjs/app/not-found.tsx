import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: 'Page Not Found | Ledgerly' },
  description: 'The page you were looking for could not be found on the Ledgerly website.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <h1>Page not found</h1>
      <p className="lead">Sorry, we could not find the page you were looking for. It may have moved or no longer exist.</p>
      <p>
        Try the <Link href="/">Ledgerly home page</Link>, browse our <Link href="/features">features</Link> or read the
        latest articles on the <Link href="/blog">blog</Link>.
      </p>
    </>
  );
}
