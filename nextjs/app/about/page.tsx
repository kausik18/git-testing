import Image from 'next/image';
import { company, team } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'About Us: Our Story, Mission and Team | Ledgerly',
  description:
    'Ledgerly was founded in 2017 by an accountant and an engineer to make bookkeeping calm and simple for small businesses everywhere.',
  path: '/about',
  image: '/images/about-team.svg',
  imageAlt: 'The Ledgerly team gathered around a whiteboard',
});

export default function AboutPage() {
  return (
    <>
      <h1>About Ledgerly</h1>
      <p className="lead">
        We build accounting software for the people who keep small businesses running: owners, office managers and the
        accountants who support them.
      </p>
      <Image
        src="/images/about-team.svg"
        alt="The Ledgerly team gathered around a whiteboard in the San Francisco office"
        width={1200}
        height={675}
        unoptimized
      />

      <h2>Our story</h2>
      <p>
        Ledgerly started in {company.founded} when Hannah Lee, an accountant with a decade of small business clients,
        met Marcus Webb, an engineer who had built payment systems for two fintech start-ups. Hannah had watched
        talented founders lose entire weekends to spreadsheets and shoeboxes of receipts. Marcus knew that most of that
        work could be automated safely. They built the first version of Ledgerly in a shared office above a bakery in
        the Mission District, and the bakery became customer number one.
      </p>

      <h2>Our mission</h2>
      <p>
        Our mission is to make accurate bookkeeping the default for every small business. That means software that is
        simple enough to use without training, rigorous enough that accountants trust it, and priced so that a sole
        trader can afford it from day one. We measure success by the hours our customers get back and by how few
        surprises they face at tax time.
      </p>

      <h2>The team</h2>
      <p>
        Today Ledgerly is a remote-first team of 140 people across six countries, with offices in San Francisco and
        Toronto. Around a third of the team are qualified accountants or bookkeepers.
      </p>
      {team.map((member) => (
        <div key={member.name}>
          <h3>
            {member.name}, {member.role}
          </h3>
          <p>{member.bio}</p>
        </div>
      ))}
    </>
  );
}
