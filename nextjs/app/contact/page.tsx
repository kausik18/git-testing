import { company } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';

// INTENTIONAL SEO DEFECT: this page has no og:image (omitOgImage).
export const metadata = pageMetadata({
  title: 'Contact Sales and Support Teams | Ledgerly',
  description:
    'Get in touch with the Ledgerly sales and support teams by form, email or phone. We reply to every message within one business day.',
  path: '/contact',
  omitOgImage: true,
});

export default function ContactPage() {
  return (
    <>
      <h1>Contact Ledgerly</h1>
      <p className="lead">
        Questions about plans, migrating your books or a tricky reconciliation? Our team of product specialists and
        qualified accountants is happy to help.
      </p>
      <p>
        We answer every message within one business day, and most within a couple of hours during our support window of
        6am to 6pm Pacific time, Monday to Friday. If you are already a customer, include the email address you use to
        sign in so we can find your workspace quickly. Never send passwords or full bank account numbers by email or
        through this form.
      </p>

      <h2>Send us a message</h2>
      <form className="contact-form" aria-describedby="form-note">
        <label>
          Full name
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label>
          Work email
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label>
          Topic
          <select name="topic" defaultValue="sales">
            <option value="sales">Sales and pricing</option>
            <option value="support">Product support</option>
            <option value="migration">Migrating from another tool</option>
            <option value="partners">Accountant partner programme</option>
          </select>
        </label>
        <label>
          Message
          <textarea name="message" rows={6} required />
        </label>
        <button className="button" type="submit">
          Send message
        </button>
        <p id="form-note" className="post-meta">
          This demo form is not connected to a server, so nothing will be sent.
        </p>
      </form>

      <h2>Other ways to reach us</h2>
      <h3>Email and phone</h3>
      <p>
        Email <a href={`mailto:${company.email}`}>{company.email}</a> or call{' '}
        <a href={`tel:${company.phone.replace(/-/g, '')}`}>{company.phone}</a>.
      </p>
      <h3>Head office</h3>
      <address>
        {company.legalName}
        <br />
        {company.address.street}
        <br />
        {company.address.city}, {company.address.region} {company.address.postalCode}
      </address>
      <h3>Accountants and bookkeepers</h3>
      <p>
        If you look after several small business clients, ask about our partner programme. Partners get a free
        practice workspace, bulk client onboarding and a dedicated account manager.
      </p>
    </>
  );
}
