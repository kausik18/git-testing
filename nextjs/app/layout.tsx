import type { Metadata, Viewport } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { SITE_NAME, SITE_URL } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: 'Ledgerly | Accounting Software for Small Businesses',
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f3d5e',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main" className="container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
