import Link from 'next/link';
import { plans } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';

// INTENTIONAL SEO DEFECT: meta description is longer than 200 characters.
export const metadata = pageMetadata({
  title: 'Pricing Plans for Every Stage of Growth | Ledgerly',
  description:
    'Compare Ledgerly pricing plans for freelancers, small teams and growing companies, including Starter, Growth and Scale tiers with unlimited invoices, bank feeds, receipt capture, payroll, multi-currency support, free accountant access and a 30-day free trial on every plan.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <>
      <h1>Simple, transparent pricing</h1>
      <p className="lead">
        Pick the plan that fits your business today and switch whenever you need to. Every plan includes a 30-day free
        trial, with no credit card required.
      </p>
      <div className="grid">
        {plans.map((plan) => (
          <section className="card" key={plan.name}>
            <h2>{plan.name}</h2>
            <p className="price">
              {plan.price} <small>{plan.period}</small>
            </p>
            <p>{plan.blurb}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <h2>What every plan includes</h2>
      <p>
        No matter which plan you choose, you get unlimited invoices and quotes, bank-grade encryption, daily backups, a
        full audit trail and free access for your accountant or bookkeeper. Prices are shown in US dollars and exclude
        applicable sales tax. Annual billing saves two months compared with paying monthly.
      </p>

      <h2>Choosing the right plan</h2>
      <h3>Freelancers and sole traders</h3>
      <p>
        Starter covers everything a one-person business needs: professional invoices, receipt capture and the reports
        your accountant asks for at year end. Most freelancers stay on Starter for years.
      </p>
      <h3>Small teams</h3>
      <p>
        Growth adds automation that pays for itself quickly. Recurring invoices and payment reminders reduce late
        payments, while unlimited bank feeds and budgets give you a reliable view of cash across every account.
      </p>
      <h3>Established businesses</h3>
      <p>
        Scale is built for companies with employees, international customers or more than one legal entity. Payroll,
        multi-currency accounting and priority phone support are all included.
      </p>
      <p>
        Still unsure? Read the <Link href="/faq">pricing FAQ</Link> or <Link href="/contact">contact our sales team</Link>{' '}
        for a personalised recommendation.
      </p>
    </>
  );
}
