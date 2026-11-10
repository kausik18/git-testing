// Base URL used for canonical, Open Graph and sitemap URLs.
// Pages are statically generated, so set SITE_URL at build time to override (e.g. SITE_URL=https://ledgerly.example).
export const SITE_URL = (process.env.SITE_URL || 'http://localhost:3004').replace(/\/+$/, '');
export const SITE_NAME = 'Ledgerly';
export const DEFAULT_OG_IMAGE = '/images/og-default.svg';

// The root URL has no trailing slash, matching how Next.js renders the home canonical.
export const absoluteUrl = (path: string) => (path === '/' ? SITE_URL : `${SITE_URL}${path}`);
