import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { faqs } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Frequently Asked Questions About Ledgerly | Ledgerly',
  description:
    'Answers to common questions about Ledgerly free trials, data security, importing your books, accountant access, plans and sales tax support.',
  path: '/faq',
});

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqLd} />
      <h1>Frequently asked questions</h1>
      <p className="lead">
        Everything you need to know before you start your free trial. If your question is not answered here, our team is
        one message away.
      </p>
      <h2>Getting started and billing</h2>
      {faqs.map((faq) => (
        <div className="faq-item" key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
      <h2>Still have questions?</h2>
      <p>
        Visit our <Link href="/contact">contact page</Link> to reach sales or support, or compare what each tier
        includes on the <Link href="/pricing">pricing page</Link>.
      </p>
    </>
  );
}
