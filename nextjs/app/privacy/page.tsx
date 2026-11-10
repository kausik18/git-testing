import Link from 'next/link';
import { company } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Privacy Policy and Data Protection | Ledgerly',
  description:
    'Read how Ledgerly collects, uses, stores and protects your personal and financial data, and how to exercise your privacy rights.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy policy</h1>
      <p className="post-meta">Last updated: 1 October 2026</p>
      <p>
        This policy explains how {company.legalName} (&ldquo;Ledgerly&rdquo;, &ldquo;we&rdquo;) collects and uses
        personal information when you visit our website or use our accounting software. We take the trust you place in us
        seriously, because the information you store in Ledgerly is some of the most sensitive data your business holds.
      </p>

      <h2>Information we collect</h2>
      <p>
        We collect the details you give us when you create an account, such as your name, email address and company
        name, along with the financial records you add to your workspace. When you connect a bank, we receive read-only
        transaction data through our regulated banking partners. We also collect basic usage data, such as pages visited
        and features used, to improve the product.
      </p>

      <h2>How we use your information</h2>
      <p>
        We use your information to provide and secure the service, to process payments, to respond to support requests
        and, where you have agreed, to send product news. We never sell personal data, and we never use your financial
        records for advertising.
      </p>

      <h2>Storage and security</h2>
      <p>
        Data is encrypted in transit and at rest and stored in certified data centres in the United States and the
        European Union. Access by our staff is limited, logged and reviewed. We complete an independent SOC 2 Type II
        audit every year.
      </p>

      <h2>Your rights</h2>
      <p>
        You can access, correct, export or delete your personal data at any time from your account settings, or by
        emailing <a href={`mailto:${company.email}`}>{company.email}</a>. If you have a concern we cannot resolve, you
        may contact your local data protection authority. For anything else, visit our{' '}
        <Link href="/contact">contact page</Link>.
      </p>
    </>
  );
}
