import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { company, features } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';
import { absoluteUrl, SITE_NAME } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Accounting Software for Small Businesses | Ledgerly',
  description:
    'Ledgerly is simple online accounting software for small businesses: invoicing, expense tracking and real-time reports in one place.',
  path: '/',
});

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  legalName: company.legalName,
  url: absoluteUrl('/'),
  logo: absoluteUrl('/images/logo.svg'),
  email: company.email,
  telephone: company.phone,
  foundingDate: company.founded,
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressRegion: company.address.region,
    postalCode: company.address.postalCode,
    addressCountry: company.address.country,
  },
};

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: absoluteUrl('/'),
  description: company.tagline,
  publisher: { '@type': 'Organization', name: SITE_NAME },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationLd} />
      <JsonLd data={websiteLd} />
      <section className="hero">
        <div>
          <h1>Accounting software that keeps your small business audit-ready</h1>
          <p className="lead">
            Ledgerly brings invoicing, expenses, bank reconciliation and reporting into one calm, focused workspace.
            Spend less time on bookkeeping and more time running the business you started.
          </p>
          <p>
            <Link className="button" href="/pricing">
              Compare plans and pricing
            </Link>
          </p>
        </div>
        <Image
          src="/images/hero-dashboard.svg"
          alt="Ledgerly dashboard showing cash balance, unpaid invoices and monthly profit"
          width={1200}
          height={675}
          priority
          unoptimized
        />
      </section>

      <section>
        <h2>Everything you need to close the books</h2>
        <p>
          Most small business owners did not start a company to become bookkeepers. Ledgerly automates the repetitive
          parts of accounting, from importing bank transactions to sending payment reminders, and leaves you with a clear
          picture of how the business is really doing. Every feature is designed with practising accountants, so your
          books stay compliant while the software does the heavy lifting.
        </p>
        <div className="grid">
          {features.map((feature) => (
            <div className="card" key={feature.slug}>
              <h3>{feature.name}</h3>
              <p>{feature.summary}</p>
              <Link href={`/features/${feature.slug}`}>Explore {feature.name.toLowerCase()} features</Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Trusted by more than 12,000 small businesses</h2>
        <p>
          Bakeries, design studios, plumbing companies and software consultancies across North America, the United
          Kingdom and Australia use Ledgerly every day. On average, customers tell us they save six hours a month on
          bookkeeping and get paid eleven days faster after their first quarter.
        </p>
        <figure className="card">
          <blockquote>
            <p>
              &ldquo;We switched from spreadsheets in a single afternoon. Month-end used to take a week; now it takes a
              morning, and our accountant actually thanks us.&rdquo;
            </p>
          </blockquote>
          <figcaption>Lena Fischer, owner of Northside Coffee Roasters</figcaption>
        </figure>
      </section>

      <section>
        <h2>Start free, upgrade when you grow</h2>
        <p>
          Every plan comes with a 30-day free trial, unlimited invoices and free accountant access. Read our{' '}
          <Link href="/faq">frequently asked questions</Link> or <Link href="/contact">talk to our team</Link> if you
          want help moving your books across.
        </p>
      </section>
    </>
  );
}
