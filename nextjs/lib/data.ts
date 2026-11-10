// Single source of content for the Ledgerly site.

export type Feature = {
  slug: string;
  name: string;
  title: string;
  description: string;
  summary: string;
  image: string;
  imageAlt: string;
  intro: string[];
  capabilities: { name: string; text: string }[];
  audience: string;
  outcome: string;
};

export type Plan = {
  name: string;
  price: string;
  period: string;
  blurb: string;
  features: string[];
};

export type BlogSection = { heading: string; paragraphs: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  headline: string;
  description: string;
  excerpt: string;
  author: string;
  datePublished: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: BlogSection[];
  // Heading tag used for the section headings inside the post body.
  sectionHeadingTag?: 'h2' | 'h4';
};

export type Faq = { question: string; answer: string };

export const company = {
  name: 'Ledgerly',
  legalName: 'Ledgerly Software Ltd.',
  tagline: 'Accounting software for small businesses',
  email: 'hello@ledgerly.example',
  phone: '+1-415-555-0142',
  address: {
    street: '210 Market Street, Suite 400',
    city: 'San Francisco',
    region: 'CA',
    postalCode: '94105',
    country: 'US',
  },
  founded: '2017',
};

export const features: Feature[] = [
  {
    slug: 'invoicing',
    name: 'Invoicing',
    title: 'Online Invoicing Software for Small Teams | Ledgerly',
    description:
      'Create branded invoices in seconds, send automatic payment reminders and get paid faster with card and bank transfer support in Ledgerly.',
    summary:
      'Branded invoices, automatic reminders and online payments that cut the average time to get paid by eleven days.',
    image: '/images/feature-invoicing.svg',
    imageAlt: 'Ledgerly invoice editor showing a branded invoice with line items and a pay now button',
    intro: [
      'Late payments are the single biggest cash flow problem for small businesses. Ledgerly invoicing is built to shorten the gap between finishing the work and seeing the money in your account. Every invoice is created from reusable templates that carry your logo, colours, payment terms and tax settings, so a new invoice takes less than a minute.',
      'Clients receive a clean, mobile-friendly invoice with a secure pay now button. They can settle by card, bank transfer or direct debit, and the payment is matched to the invoice automatically. No more chasing remittance emails or reconciling deposits by hand at the end of the month.',
    ],
    capabilities: [
      { name: 'Recurring invoices', text: 'Schedule retainers and subscriptions once and Ledgerly sends them on the right day every month.' },
      { name: 'Smart reminders', text: 'Polite, customisable reminders go out before and after the due date, and stop as soon as the client pays.' },
      { name: 'Multi-currency', text: 'Bill international clients in 40 currencies with exchange rates recorded for clean books.' },
      { name: 'Quotes to invoices', text: 'Turn an accepted quote into an invoice with one click, keeping every line item intact.' },
    ],
    audience:
      'Invoicing suits freelancers, agencies, consultants and trade businesses that send between five and five hundred invoices a month. It works equally well for one-off projects and for recurring retainers.',
    outcome:
      'Customers who switch on reminders and online payments are paid on average eleven days sooner, and spend roughly three fewer hours a month on collections.',
  },
  {
    slug: 'expense-tracking',
    name: 'Expense Tracking',
    title: 'Expense Tracking and Receipt Capture | Ledgerly',
    description:
      'Snap receipts, sync bank and card transactions and categorise business expenses automatically so your books are always ready for tax time.',
    summary:
      'Receipt capture, bank feeds and automatic categorisation that keep every business expense accounted for.',
    image: '/images/feature-expense-tracking.svg',
    imageAlt: 'Ledgerly mobile app capturing a photo of a coffee shop receipt',
    intro: [
      'Shoeboxes of crumpled receipts are a thing of the past. With Ledgerly expense tracking you photograph a receipt on your phone, forward it from your inbox or drag a PDF onto the dashboard. Optical character recognition reads the supplier, date, amount and tax, then matches the receipt to the right bank transaction.',
      'Bank and card feeds from more than 12,000 institutions import transactions every morning. Rules you create once, such as filing every charge from your software suppliers under subscriptions, are applied automatically, so most expenses are categorised before you even open the app.',
    ],
    capabilities: [
      { name: 'Receipt capture', text: 'Photograph, email or upload receipts and Ledgerly extracts the details in seconds.' },
      { name: 'Bank feeds', text: 'Secure, read-only connections import transactions daily from banks and card providers.' },
      { name: 'Mileage logs', text: 'Record business trips with GPS and claim mileage at the current approved rate.' },
      { name: 'Team spending', text: 'Employees submit expenses for approval, and approved claims flow straight into payroll.' },
    ],
    audience:
      'Expense tracking is ideal for owner-operators and growing teams that want accurate, deductible-ready records without hiring a full-time bookkeeper.',
    outcome:
      'The average Ledgerly customer reclaims around 1,400 dollars a year in deductions they previously missed because receipts were lost or never recorded.',
  },
  {
    slug: 'financial-reports',
    name: 'Financial Reports',
    title: 'Real-Time Financial Reports and Dashboards | Ledgerly',
    description:
      'See profit and loss, balance sheet and cash flow reports update in real time, and share accountant-ready statements with a single link.',
    summary:
      'Live profit and loss, balance sheet and cash flow reports that tell you exactly where the business stands.',
    image: '/images/feature-financial-reports.svg',
    imageAlt: 'Ledgerly profit and loss report with a monthly revenue and expenses bar chart',
    intro: [
      'Good decisions need current numbers. Ledgerly financial reports update the moment a transaction is categorised, so the profit and loss statement you look at on Tuesday morning reflects Monday afternoon, not last quarter. Every report can be filtered by date range, project, location or custom tag.',
      'When it is time to talk to your accountant, lender or investors, share a read-only link or export to PDF and spreadsheet formats. Accountants can be invited to your workspace for free, with their own login and full audit trail of every change.',
    ],
    capabilities: [
      { name: 'Core statements', text: 'Profit and loss, balance sheet, cash flow and trial balance are available out of the box.' },
      { name: 'Custom dashboards', text: 'Pin the metrics you care about, from gross margin to days sales outstanding.' },
      { name: 'Budget vs actual', text: 'Set monthly budgets and see variances highlighted before they become problems.' },
      { name: 'Accountant access', text: 'Invite your accountant at no extra cost and collaborate in the same set of books.' },
    ],
    audience:
      'Financial reports are designed for owners and finance leads who want a clear monthly picture without building spreadsheets, and for accountants who serve several small clients.',
    outcome:
      'Teams that review the Ledgerly dashboard weekly close their month-end books in under two days, compared with an industry average of more than a week.',
  },
];

export const plans: Plan[] = [
  {
    name: 'Starter',
    price: '$15',
    period: 'per month',
    blurb: 'For freelancers and sole traders who need simple, reliable books.',
    features: ['Unlimited invoices and quotes', 'One bank feed', 'Receipt capture', 'Basic reports', 'Email support'],
  },
  {
    name: 'Growth',
    price: '$39',
    period: 'per month',
    blurb: 'For small teams that want automation and deeper reporting.',
    features: ['Everything in Starter', 'Unlimited bank feeds', 'Recurring invoices and reminders', 'Budgets and custom dashboards', 'Up to 5 users'],
  },
  {
    name: 'Scale',
    price: '$79',
    period: 'per month',
    blurb: 'For established businesses with payroll and multiple entities.',
    features: ['Everything in Growth', 'Payroll for up to 25 employees', 'Multi-currency and multi-entity', 'Priority phone support', 'Unlimited users'],
  },
];

export const posts: BlogPost[] = [
  {
    slug: 'prepare-for-tax-season',
    title: 'How to Prepare Your Small Business for Tax Season | Ledgerly',
    headline: 'How to Prepare Your Small Business for Tax Season',
    description:
      'A practical tax season checklist for small business owners: reconcile accounts, gather receipts, review deductions and avoid last-minute stress.',
    excerpt:
      'Tax season does not have to mean late nights and missing receipts. Here is the checklist our accountants use with every client.',
    author: 'Priya Raman',
    datePublished: '2026-02-03',
    image: '/images/blog-tax-season.svg',
    imageAlt: 'Checklist of tax documents next to a laptop showing Ledgerly reports',
    intro:
      'Every year thousands of small business owners spend the final week before the filing deadline hunting for receipts and guessing at categories. It does not have to be that way. With a little preparation spread across a few weeks, tax season becomes a routine review rather than a scramble.',
    sections: [
      {
        heading: 'Reconcile every account',
        paragraphs: [
          'Start by reconciling your bank, credit card and payment processor accounts up to the last day of the tax year. Reconciliation confirms that every transaction in your books matches a real movement of money, and it is the step most often skipped. In Ledgerly, the reconciliation screen highlights unmatched items so you can resolve them in minutes.',
        ],
      },
      {
        heading: 'Gather receipts and supporting documents',
        paragraphs: [
          'Tax authorities expect evidence for every deduction you claim. Make sure each significant expense has a receipt or invoice attached. Pay special attention to equipment purchases, travel and home office costs, which are the categories most likely to be questioned.',
        ],
      },
      {
        heading: 'Review deductions and credits',
        paragraphs: [
          'Look beyond the obvious. Software subscriptions, professional development, mileage and a share of your phone bill can all be deductible. Run a profit and loss report by category and compare it with last year to spot anything missing.',
        ],
      },
      {
        heading: 'Share your books with your accountant early',
        paragraphs: [
          'Finally, invite your accountant into your books before the busy season starts. Giving them read access in January rather than March means questions get answered while you still remember the details, and you avoid paying rush fees.',
        ],
      },
    ],
  },
  {
    slug: 'cash-flow-forecasting-basics',
    title: 'Cash Flow Forecasting Basics for Small Business | Ledgerly',
    headline: 'Cash Flow Forecasting Basics for Small Business',
    description:
      'Learn how to build a simple 13-week cash flow forecast, spot shortfalls before they happen and make confident decisions about hiring and spending.',
    excerpt:
      'Profitable businesses still run out of cash. A simple 13-week forecast is the best early warning system you can build.',
    author: 'Daniel Okafor',
    datePublished: '2026-03-17',
    image: '/images/blog-cash-flow.svg',
    imageAlt: 'Line chart of a thirteen week cash flow forecast with a highlighted dip in week six',
    intro:
      'Profit and cash are not the same thing. A business can be profitable on paper and still miss payroll because customers pay late or a large supplier bill lands at the wrong moment. A cash flow forecast shows you those moments weeks in advance, while you still have options.',
    sections: [
      {
        heading: 'Start with a 13-week view',
        paragraphs: [
          'Thirteen weeks covers a full quarter and is short enough to forecast with reasonable accuracy. List your opening bank balance, then estimate the money coming in and going out for each week. Use real invoice due dates and scheduled bills rather than monthly averages.',
        ],
      },
      {
        heading: 'Be conservative about receipts',
        paragraphs: [
          'Most forecasts fail because they assume customers pay on time. Look at how many days your customers actually take to pay, and shift expected receipts accordingly. Ledgerly calculates this for you from your invoice history.',
        ],
      },
      {
        heading: 'Plan for the low points',
        paragraphs: [
          'Once the forecast is built, find the week with the lowest projected balance. If it dips below a comfortable buffer, act now: chase overdue invoices, negotiate supplier terms or arrange a line of credit before you need it. Update the forecast every Monday and it becomes a habit that takes ten minutes.',
        ],
      },
    ],
    // INTENTIONAL SEO DEFECT: heading skip (h1 -> h4) on this post.
    sectionHeadingTag: 'h4',
  },
];

export const faqs: Faq[] = [
  {
    question: 'Is there a free trial?',
    answer: 'Yes. Every plan includes a 30-day free trial with full access to all features. No credit card is required to start.',
  },
  {
    question: 'Can I import data from my current accounting software?',
    answer: 'Ledgerly imports contacts, chart of accounts, open invoices and historical transactions from most popular accounting tools and from CSV files. Our onboarding team can help at no extra cost.',
  },
  {
    question: 'Is my financial data secure?',
    answer: 'All data is encrypted in transit and at rest, bank connections are read-only, and we complete an independent SOC 2 Type II audit every year.',
  },
  {
    question: 'Can my accountant access my books?',
    answer: 'Yes. You can invite your accountant or bookkeeper for free. They get their own login, and every change they make is recorded in the audit trail.',
  },
  {
    question: 'Can I change or cancel my plan at any time?',
    answer: 'You can upgrade, downgrade or cancel at any time from the billing settings. Changes take effect at the start of your next billing period, and you can export your data whenever you like.',
  },
  {
    question: 'Do you support sales tax and VAT?',
    answer: 'Ledgerly supports sales tax, GST and VAT with configurable rates, and produces the summary reports you need to file returns in the United States, Canada, the United Kingdom and Australia.',
  },
];

export const team = [
  { name: 'Hannah Lee', role: 'Co-founder and CEO', bio: 'Former small business accountant who spent ten years watching clients struggle with spreadsheets.' },
  { name: 'Marcus Webb', role: 'Co-founder and CTO', bio: 'Built payment infrastructure at two fintech start-ups before co-founding Ledgerly.' },
  { name: 'Priya Raman', role: 'Head of Accounting', bio: 'Chartered accountant who makes sure every feature matches how real books are kept.' },
];

export const getFeature = (slug: string) => features.find((f) => f.slug === slug);
export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
