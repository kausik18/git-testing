import Image from 'next/image';
import Link from 'next/link';
import { features } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Accounting Features for Small Businesses | Ledgerly',
  description:
    'Explore Ledgerly features: online invoicing, expense tracking with receipt capture, and real-time financial reports built for small teams.',
  path: '/features',
});

export default function FeaturesPage() {
  return (
    <>
      <h1>Ledgerly features</h1>
      <p className="lead">
        Three core tools, one set of books. Each Ledgerly feature shares the same data, so an invoice you send, a receipt
        you capture and the report you read all stay in sync automatically.
      </p>
      <p>
        Rather than bolting together separate apps for billing, expenses and reporting, Ledgerly keeps everything in a
        single ledger that follows double-entry accounting rules behind the scenes. You never need to know what a
        journal entry is, but your accountant will be glad that every one is there. Pick a feature below to see how it
        works, who it suits and the results customers typically see in their first few months.
      </p>
      <div className="grid">
        {features.map((feature) => (
          <article className="card" key={feature.slug}>
            <Image src={feature.image} alt={feature.imageAlt} width={800} height={450} unoptimized />
            <h2>{feature.name}</h2>
            <p>{feature.summary}</p>
            <Link href={`/features/${feature.slug}`}>Read more about {feature.name.toLowerCase()}</Link>
          </article>
        ))}
      </div>
      <h2>Included on every plan</h2>
      <p>
        All plans include bank-grade encryption, daily backups, a full audit trail, free accountant access and support
        from a team that understands bookkeeping. See <Link href="/pricing">plans and pricing</Link> for the details of
        what each tier adds.
      </p>
    </>
  );
}
