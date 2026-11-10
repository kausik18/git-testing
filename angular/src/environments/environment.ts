/**
 * Site-wide configuration.
 *
 * SITE_URL is used to build absolute canonical, Open Graph and JSON-LD URLs.
 * Angular has no runtime env vars in a CSR bundle, so it is a constant here.
 * Change it (and the hard-coded URLs in public/robots.txt and public/sitemap.xml)
 * when deploying somewhere other than http://localhost:3009.
 */
export const environment = {
  siteUrl: 'http://localhost:3009',
};

export const SITE_URL = environment.siteUrl.replace(/\/$/, '');
export const SITE_NAME = 'CityCare Dental Clinic';
