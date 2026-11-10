import Image from 'next/image';
import Link from 'next/link';
import { posts } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Small Business Accounting Blog and Guides | Ledgerly',
  description:
    'Practical guides on bookkeeping, tax preparation and cash flow from the accountants and product team behind Ledgerly.',
  path: '/blog',
});

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

export default function BlogIndexPage() {
  return (
    <>
      <h1>The Ledgerly blog</h1>
      <p className="lead">
        Plain-English advice on bookkeeping, tax and cash flow, written by the accountants on our team and reviewed by
        practising advisers.
      </p>
      <p>
        Running a small business means wearing every hat at once, and the finance hat is often the least comfortable.
        Our blog is here to help. Each guide focuses on one practical task, explains why it matters and walks through the
        steps in order, whether or not you use Ledgerly. New articles are published twice a month, and we update older
        guides whenever tax rules or deadlines change, so the advice stays accurate. If there is a topic you would like
        us to cover, send a note through the <Link href="/contact">contact page</Link> and our editors will add it to
        the list.
      </p>
      <div className="grid">
        {posts.map((post) => (
          <article className="card" key={post.slug}>
            <Image src={post.image} alt={post.imageAlt} width={1200} height={675} unoptimized />
            <h2>
              <Link href={`/blog/${post.slug}`}>{post.headline}</Link>
            </h2>
            <p className="post-meta">
              By {post.author} on <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
            </p>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </>
  );
}
