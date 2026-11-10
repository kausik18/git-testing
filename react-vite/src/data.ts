// Single source of truth for all site content and the route list.
// This file must stay free of imports and non-erasable TS syntax: it is also
// imported directly by Node (scripts/gen-sitemap.mjs) via native type stripping.

export interface ImageInfo {
  src: string
  alt: string
  width: number
  height: number
}

export interface Service {
  slug: string
  name: string
  /** Full <title> text for the page. */
  title: string
  description: string
  summary: string
  image: ImageInfo
  intro: string
  sections: { heading: string; body: string }[]
  deliverables: string[]
  priceFrom: number
}

export interface Post {
  slug: string
  headline: string
  title: string
  description: string
  datePublished: string
  author: string
  image: ImageInfo
  excerpt: string
  sections: { heading: string; paragraphs: string[] }[]
}

export const business = {
  name: 'PixelForge Design Agency',
  shortName: 'PixelForge',
  tagline: 'Brand & Web Design Studio',
  email: 'hello@pixelforge.example',
  phone: '+1-503-555-0142',
  street: '418 NW Flanders Street, Suite 300',
  city: 'Portland',
  region: 'OR',
  postalCode: '97209',
  country: 'US',
  founded: '2014',
  logo: '/favicon.svg',
  ogImage: '/images/og-default.svg',
}

export const pages = {
  home: {
    title: 'Brand & Web Design Studio | PixelForge Design Agency',
    description:
      'PixelForge is a Portland design agency creating brand identities, fast websites and intuitive product interfaces for growing businesses.',
  },
  about: {
    title: 'About Our Studio | PixelForge Design Agency',
    description:
      'Meet the PixelForge team: twelve designers, strategists and developers who have helped more than 140 companies look and work better since 2014.',
  },
  services: {
    title: 'Design Services | PixelForge Design Agency',
    description:
      'Explore PixelForge design services: brand identity systems, website design and development, and UI/UX design for web and mobile products.',
  },
  blog: {
    title: 'Design Journal | PixelForge Design Agency',
    description:
      'Practical articles from the PixelForge studio on branding, web design, accessibility and building digital products people enjoy using.',
  },
  contact: {
    title: 'Contact Us | PixelForge Design Agency',
    description:
      'Start a project with PixelForge. Tell us about your goals, timeline and budget and a senior designer will reply within one business day.',
  },
  faq: {
    title: 'Frequently Asked Questions | PixelForge Design Agency',
    description:
      'Answers to common questions about working with PixelForge: pricing, timelines, our design process, ownership of files and ongoing support.',
  },
  privacy: {
    title: 'Privacy Policy | PixelForge Design Agency',
    description:
      'How PixelForge Design Agency collects, uses and protects the personal information you share through our website and contact forms.',
  },
  notFound: {
    title: 'Page Not Found | PixelForge Design Agency',
    description:
      'The page you were looking for could not be found. Browse our services, read the design journal or get in touch with the PixelForge team.',
  },
}

export const homeContent = {
  heroHeading: 'Design that makes ambitious brands impossible to ignore',
  heroText:
    'PixelForge is an independent design studio in Portland, Oregon. We partner with founders, marketing teams and product leaders to build brands and digital experiences that are clear, memorable and measurably effective.',
  heroImage: {
    src: '/images/hero.svg',
    alt: 'Illustration of a designer arranging colour swatches and website wireframes on a large screen',
    width: 1200,
    height: 630,
  },
  approachHeading: 'How we work',
  approach: [
    {
      heading: 'Discover',
      body: 'Every engagement starts with listening. We interview your customers and stakeholders, audit your current materials and study your competitors so that every design decision is grounded in evidence rather than taste.',
    },
    {
      heading: 'Design',
      body: 'We explore several distinct directions, test them with real users and refine the strongest one. You see work early and often, so there are never surprises at the final presentation.',
    },
    {
      heading: 'Deliver',
      body: 'Finished work ships with documentation, source files and a hand-over session. Our developers build to the same standard as our designers, with performance and accessibility checked before launch.',
    },
  ],
  resultsHeading: 'Recent results',
  results: [
    'Riverbend Coffee grew online orders by 64% in the six months after their rebrand and new storefront launched.',
    'Northwind Analytics cut onboarding drop-off in half after we redesigned their dashboard setup flow.',
    'Cascade Credit Union scored 98 in Lighthouse accessibility audits across their entire redesigned website.',
  ],
}

export const aboutContent = {
  heading: 'About PixelForge',
  secondHeading: 'A small studio with a big portfolio',
  image: {
    src: '/images/team.svg',
    alt: 'The PixelForge team gathered around a table reviewing printed brand concepts',
    width: 960,
    height: 540,
  },
  paragraphs: [
    'PixelForge was founded in 2014 by Maya Okafor and Daniel Reyes, two designers who were tired of watching great companies hide behind forgettable websites. What started as a two-person studio above a bike shop in the Pearl District has grown into a team of twelve designers, strategists and front-end developers.',
    'We deliberately stay small. Every client works directly with senior people, not account managers relaying messages to a junior team. That keeps feedback loops short and lets us take on a limited number of projects each quarter, so each one gets our full attention.',
    'Over the past decade we have helped more than 140 organisations, from venture-backed software start-ups to family-run wineries and regional credit unions. The common thread is a belief that good design is a business tool: it should make things easier to understand, easier to use and easier to choose.',
  ],
  valuesHeading: 'What we believe',
  values: [
    {
      heading: 'Clarity over decoration',
      body: 'A beautiful interface that confuses people has failed. We remove anything that does not help your audience understand or act.',
    },
    {
      heading: 'Accessible by default',
      body: 'We design and build to WCAG 2.2 AA from the very first sketch, because inclusive products reach more customers and age far better.',
    },
    {
      heading: 'Partnership, not hand-offs',
      body: 'Your team is part of ours for the length of a project. We share work in progress, invite critique and teach you how to maintain what we build.',
    },
  ],
}

export const services: Service[] = [
  {
    slug: 'brand-identity',
    name: 'Brand Identity Design',
    title: 'Brand Identity Design | PixelForge Design Agency',
    description:
      'Distinctive brand identity design from PixelForge: strategy, logo, typography, colour and a complete guidelines system your team can use.',
    summary: 'Strategy-led logos, visual systems and guidelines that make your company instantly recognisable.',
    image: {
      src: '/images/service-branding.svg',
      alt: 'Brand identity board showing a logo, colour palette and typography samples',
      width: 960,
      height: 540,
    },
    intro:
      'Your brand is the sum of every impression people form about your company. Our brand identity service gives those impressions a consistent, intentional shape so that customers recognise you instantly and remember why they chose you.',
    sections: [
      {
        heading: 'Strategy first',
        body: 'Before we draw a single shape we run a positioning workshop with your leadership team, interview customers and map the competitive landscape. The result is a concise brand platform describing your audience, your promise and your personality, which becomes the brief for every creative decision that follows.',
      },
      {
        heading: 'A complete visual system',
        body: 'We design a primary logo with responsive variations, a colour palette tested for accessible contrast, a typographic hierarchy, an illustration or photography direction and a library of graphic elements. Each piece is shown in context on packaging, signage, social media and your website so you can judge it in the real world.',
      },
      {
        heading: 'Guidelines your team will use',
        body: 'Identity systems fail when nobody knows how to apply them. We deliver an online brand guidelines site with downloadable assets, clear do and do-not examples and templates for presentations and social posts, then train your team in a live session.',
      },
    ],
    deliverables: [
      'Brand platform and messaging framework',
      'Logo suite in all required formats',
      'Colour, typography and imagery guidelines',
      'Templates for presentations and social media',
    ],
    priceFrom: 18000,
  },
  {
    slug: 'web-design',
    name: 'Website Design & Development',
    // INTENTIONAL SEO DEFECT: this title is longer than 70 characters.
    title:
      'Website Design and Development Services for Growing Businesses and Startups | PixelForge Design Agency',
    description:
      'Custom website design and development by PixelForge: fast, accessible, search-friendly sites built on modern frameworks and easy to update.',
    summary: 'Fast, accessible marketing websites that turn visitors into customers and are easy for your team to update.',
    image: {
      src: '/images/service-web-design.svg',
      alt: 'Responsive website mock-up displayed on a laptop, tablet and phone',
      width: 960,
      height: 540,
    },
    intro:
      'Your website is your hardest-working salesperson. We design and build marketing sites that load quickly, read clearly on every device and guide visitors toward the actions that matter to your business.',
    sections: [
      {
        heading: 'Designed around your customers',
        body: 'We begin with analytics reviews and user interviews to learn what your visitors are trying to accomplish. Information architecture and wireframes come next, so we agree on structure and content before visual design starts. That order prevents expensive rework later in the project.',
      },
      {
        heading: 'Built for speed and search',
        body: 'Our developers build with modern, standards-based tooling and semantic HTML. Every site we launch targets green Core Web Vitals, ships with structured data and an XML sitemap, and passes automated and manual accessibility testing before it goes live.',
      },
      {
        heading: 'Easy to own',
        body: 'We connect your site to a headless content management system that your marketing team can use without touching code. Reusable content blocks let you create new landing pages in minutes while staying on brand, and we document everything in a short owner manual.',
      },
    ],
    deliverables: [
      'Sitemap, wireframes and responsive visual design',
      'Front-end development and CMS integration',
      'Technical SEO setup and analytics configuration',
      'Accessibility audit and 30 days of launch support',
    ],
    priceFrom: 26000,
  },
  {
    slug: 'product-design',
    name: 'UI/UX Product Design',
    title: 'UI/UX Product Design | PixelForge Design Agency',
    description:
      'UI/UX product design from PixelForge: user research, prototyping, usability testing and scalable design systems for web and mobile apps.',
    summary: 'Research-driven interface design and design systems for SaaS platforms and mobile apps.',
    image: {
      src: '/images/service-ui-ux.svg',
      alt: 'Wireframes and high-fidelity screens for a mobile banking application',
      width: 960,
      height: 540,
    },
    intro:
      'Great software feels obvious. Our product design team helps you get there by understanding how people actually work, prototyping quickly and validating ideas with real users before your engineers write a line of production code.',
    sections: [
      {
        heading: 'Research and discovery',
        body: 'We combine stakeholder workshops, contextual interviews and product analytics to identify the moments where users struggle. Findings are summarised in journey maps and a prioritised list of opportunities, giving your roadmap a clear, evidence-based starting point.',
      },
      {
        heading: 'Prototyping and testing',
        body: 'Interactive prototypes let us test flows with five to eight participants per round. We iterate between rounds, measure task success and time on task, and only move forward when the numbers show real improvement over your current experience.',
      },
      {
        heading: 'Design systems that scale',
        body: 'We document every component, pattern and token in a shared design library with matching coded components. Your product and engineering teams get a single source of truth, which speeds up delivery and keeps the interface consistent as it grows.',
      },
    ],
    deliverables: [
      'User research report and journey maps',
      'Interactive prototypes and usability test results',
      'High-fidelity UI for web and mobile',
      'Component library and design tokens',
    ],
    priceFrom: 32000,
  },
]

export const posts: Post[] = [
  {
    slug: 'signs-your-brand-needs-a-refresh',
    headline: 'Five Signs Your Brand Needs a Refresh',
    title: 'Signs Your Brand Needs a Refresh | PixelForge Design Agency',
    description:
      'Outgrown your logo? Learn five clear warning signs that your brand identity is holding your business back, and what a refresh involves.',
    datePublished: '2026-09-15',
    author: 'Maya Okafor',
    image: {
      src: '/images/blog-brand-refresh.svg',
      alt: 'Old and new versions of a company logo shown side by side',
      width: 960,
      height: 540,
    },
    excerpt: 'Brands drift. Here are the five warning signs we see most often, and how to tell a refresh from a full rebrand.',
    sections: [
      {
        heading: 'Why brands drift',
        paragraphs: [
          'No brand is designed to last forever without care. Companies grow, launch new products, enter new markets and hire people who never saw the original guidelines. Over time small inconsistencies pile up until your materials no longer feel like they belong to the same company.',
        ],
      },
      {
        heading: 'The five warning signs',
        paragraphs: [
          'First, you are embarrassed to hand out your business card or share your website link. Second, your sales team has started making their own slides because the official templates do not fit what they need to say. Third, your logo breaks down at small sizes, such as app icons or social avatars.',
          'Fourth, customers regularly confuse you with a competitor. Fifth, your business has changed direction and your visual identity still describes the company you were five years ago. If two or more of these sound familiar, it is time for a serious conversation.',
        ],
      },
      {
        heading: 'Refresh or rebrand?',
        paragraphs: [
          'A refresh keeps the recognisable core of your brand and modernises the details: tightening the logo, updating colours for accessible contrast and building better templates. A full rebrand revisits strategy, naming and positioning. Most companies need a refresh, and it costs a fraction of a rebrand while protecting the recognition you have already earned.',
        ],
      },
    ],
  },
  {
    slug: 'designing-for-web-accessibility',
    headline: 'Designing for Web Accessibility from Day One',
    title: 'Designing for Web Accessibility | PixelForge Design Agency',
    description:
      'Accessibility is cheaper to design in than to bolt on. Our practical checklist for colour, typography, focus states and content structure.',
    datePublished: '2026-10-21',
    author: 'Daniel Reyes',
    image: {
      src: '/images/blog-accessibility.svg',
      alt: 'Website layout annotated with focus order numbers and colour contrast ratios',
      width: 960,
      height: 540,
    },
    excerpt: 'Treating accessibility as a final QA step is expensive. Here is how we build it into every stage of design.',
    sections: [
      {
        heading: 'Start with the foundations',
        paragraphs: [
          'Around one in four adults lives with some form of disability, and everyone experiences temporary limitations such as bright sunlight on a phone screen or a broken wrist. Designing accessibly is not a niche concern; it is simply designing for the people who actually use your product.',
          'We start every project by choosing a colour palette that meets WCAG contrast ratios, setting body text at a comfortable size and line length, and defining clear, visible focus styles before any page layouts are drawn.',
        ],
      },
      {
        heading: 'Structure content for everyone',
        paragraphs: [
          'Screen reader users navigate by headings, landmarks and links. A page with one clear main heading, logical subheadings and descriptive link text is easier for them and for everyone skimming on a small screen. The same structure also helps search engines understand your content.',
        ],
      },
      {
        heading: 'Test with real people',
        paragraphs: [
          'Automated tools catch roughly a third of accessibility problems. We pair them with keyboard-only walkthroughs, screen reader testing and, whenever budgets allow, sessions with disabled participants. Fixing an issue found in a prototype takes minutes; fixing it after launch can take weeks of engineering time.',
        ],
      },
    ],
  },
]

export const faqs: { question: string; answer: string }[] = [
  {
    question: 'How much does a typical project cost?',
    answer:
      'Brand identity projects start at $18,000, marketing websites at $26,000 and product design engagements at $32,000. After an initial call we send a fixed-price proposal so you know the full cost before any work begins.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'Most brand identity projects take eight to ten weeks. Websites usually take twelve to sixteen weeks from kickoff to launch, depending on the amount of content and the integrations required.',
  },
  {
    question: 'Do you work with clients outside Portland?',
    answer:
      'Yes. About two thirds of our clients are elsewhere in North America and Europe. We run workshops over video and visit in person for key milestones when it is useful.',
  },
  {
    question: 'Who owns the final designs and code?',
    answer:
      'You do. Once the final invoice is paid, full ownership of all deliverables, source files and code transfers to you. We only ask to show the work in our portfolio.',
  },
  {
    question: 'Can you help after launch?',
    answer:
      'We offer monthly support retainers covering design updates, new landing pages, performance monitoring and accessibility checks. Many clients stay with us for years after their first project.',
  },
  {
    question: 'What do you need from us to get started?',
    answer:
      'A named project owner who can make decisions, access to any existing brand materials and analytics, and two to three hours a week from your team during the discovery phase.',
  },
]

export const contactContent = {
  intro:
    'Have a project in mind? We would love to hear about it. Share a few details about your goals, timeline and budget using the form below and a senior designer will reply within one business day. If you prefer, you can email or call the studio directly.',
  hours: 'Monday to Friday, 9:00 am to 5:30 pm Pacific Time',
  visitText:
    'Our studio is a short walk from the Pearl District streetcar stop. Visitors are always welcome for a coffee and a chat, but please book ahead so the right people are in the room. We are on the third floor, and the building has step-free access and an elevator.',
  expectHeading: 'What happens next',
  expect:
    'After you get in touch we schedule a thirty-minute discovery call to understand your goals. If it looks like a good fit, we send a short proposal with scope, timeline and a fixed price within a week. There is no obligation and no cost for the initial conversation.',
}

export const privacyContent = {
  updated: '2026-08-01',
  sections: [
    {
      heading: 'Information we collect',
      body: 'When you use our contact form we collect your name, email address, company name and the details you choose to share about your project. Our website also uses privacy-friendly, cookie-less analytics that records aggregated information such as pages visited, referring websites and approximate country. We do not collect precise location or build advertising profiles.',
    },
    {
      heading: 'How we use your information',
      body: 'We use the information you send us only to respond to your enquiry, prepare proposals and deliver the services you request. Aggregated analytics help us understand which content is useful so we can improve the website. We never sell or rent personal information to anyone.',
    },
    {
      heading: 'Sharing and storage',
      body: 'Enquiries are stored in our email and project management tools, which are hosted by reputable providers in the United States under contracts that require them to protect your data. We keep enquiry records for up to three years and project records for as long as the law requires.',
    },
    {
      heading: 'Your rights',
      body: 'You can ask us to access, correct or delete the personal information we hold about you at any time by emailing privacy@pixelforge.example. We will respond within thirty days. If you are not satisfied with our response you may contact your local data protection authority.',
    },
  ],
}

/** Every indexable route; scripts/gen-sitemap.mjs builds sitemap.xml from this list. */
export const sitemapRoutes: { path: string; lastmod?: string }[] = [
  { path: '/' },
  { path: '/about' },
  { path: '/services' },
  ...services.map((s) => ({ path: `/services/${s.slug}` })),
  { path: '/blog' },
  ...posts.map((p) => ({ path: `/blog/${p.slug}`, lastmod: p.datePublished })),
  { path: '/contact' },
  { path: '/faq' },
  { path: '/privacy' },
]
