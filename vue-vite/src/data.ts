// Single source of truth for all site content and the route list.
// This file must stay free of imports and non-erasable TS syntax: it is also
// imported directly by Node (scripts/gen-sitemap.mjs) via native type stripping.

export interface ImageInfo {
  src: string
  /** Optional only so the intentional missing-alt defect can be expressed in data. */
  alt?: string
  width: number
  height: number
}

export interface Product {
  slug: string
  name: string
  botanicalName: string
  title: string
  description: string
  summary: string
  price: number
  sku: string
  inStock: boolean
  image: ImageInfo & { alt: string }
  gallery: ImageInfo[]
  intro: string
  care: { heading: string; body: string }[]
  facts: { label: string; value: string }[]
}

export interface Post {
  slug: string
  headline: string
  title: string
  description: string
  datePublished: string
  author: string
  image: ImageInfo & { alt: string }
  excerpt: string
  sections: { heading: string; paragraphs: string[] }[]
}

export const business = {
  name: 'GreenLeaf Plant Shop',
  shortName: 'GreenLeaf',
  email: 'hello@greenleaf.example',
  phone: '+1-206-555-0187',
  street: '2210 Fremont Avenue North',
  city: 'Seattle',
  region: 'WA',
  postalCode: '98103',
  country: 'US',
  logo: '/favicon.svg',
  ogImage: '/images/og-default.svg',
  openingHours: ['Mo-Fr 10:00-19:00', 'Sa-Su 09:00-18:00'],
}

export const pages = {
  home: {
    title: 'Houseplants Delivered | GreenLeaf Plant Shop',
    description:
      'GreenLeaf is a Seattle plant shop selling healthy, hand-picked houseplants with free care guides and plant-safe local delivery.',
  },
  about: {
    title: 'About Our Shop | GreenLeaf Plant Shop',
    description:
      'Meet the growers behind GreenLeaf, a family-run Seattle plant shop that has helped thousands of people bring nature indoors since 2017.',
  },
  plants: {
    title: 'Shop Houseplants | GreenLeaf Plant Shop',
    description:
      'Browse our houseplant collection: statement monsteras, elegant fiddle-leaf figs and nearly indestructible snake plants, each with care notes.',
  },
  blog: {
    title: 'Plant Care Blog | GreenLeaf Plant Shop',
    description:
      'Practical plant care advice from the GreenLeaf team: watering, light, repotting and choosing the right houseplant for every room.',
  },
  contact: {
    title: 'Contact Us | GreenLeaf Plant Shop',
    description:
      'Visit the GreenLeaf shop in Fremont, call our plant doctors or send a message about orders, delivery and houseplant care questions.',
  },
  faq: {
    title: 'Frequently Asked Questions | GreenLeaf Plant Shop',
    description:
      'Answers about GreenLeaf orders, local delivery, plant health guarantees, returns, pot sizes and how we pack plants so they arrive safely.',
  },
  privacy: {
    title: 'Privacy Policy | GreenLeaf Plant Shop',
    description:
      'How GreenLeaf Plant Shop collects, uses and protects the personal information you share when you browse, order or contact our team.',
  },
  notFound: {
    title: 'Page Not Found | GreenLeaf Plant Shop',
    description:
      'We could not find that page. Browse our houseplants, read the plant care blog or contact the GreenLeaf team for help finding a plant.',
  },
}

export const homeContent = {
  heroHeading: 'Healthy houseplants, grown with care and delivered to your door',
  heroText:
    'GreenLeaf is a neighbourhood plant shop in Seattle. We source every plant from small regional growers, acclimatise it in our greenhouse for at least two weeks and deliver it in recyclable, plant-safe packaging so it arrives ready to thrive.',
  heroImage: {
    src: '/images/hero.svg',
    alt: 'Sunlit shop shelves filled with potted monstera, ferns and trailing pothos plants',
    width: 1200,
    height: 630,
  },
  whyHeading: 'Why shop with GreenLeaf',
  reasons: [
    {
      heading: 'Greenhouse acclimatised',
      body: 'Plants moving straight from a commercial nursery to a living room often drop leaves. Ours rest in our greenhouse first, so they adjust gradually to indoor light and humidity.',
    },
    {
      heading: '30-day health guarantee',
      body: 'If your plant struggles in its first month, send us a photo. Our plant doctors will diagnose the problem and replace the plant free of charge if it cannot be saved.',
    },
    {
      heading: 'Plant-safe delivery',
      body: 'We deliver across the Seattle area in our own temperature-controlled van, and every plant is wrapped in recycled paper and secured upright in its pot.',
    },
  ],
  careHeading: 'New to plant parenthood?',
  careText:
    'Most houseplant problems come down to watering. Our beginner guide explains how to check soil moisture, how often to water popular species and the warning signs of both thirst and soggy roots.',
  careLinkPost: 'beginner-guide-to-watering-houseplants',
}

export const aboutContent = {
  heading: 'About GreenLeaf',
  image: {
    src: '/images/shop.svg',
    alt: 'Owners Priya and Tom Lindqvist potting a large monstera at the GreenLeaf shop counter',
    width: 960,
    height: 540,
  },
  paragraphs: [
    'GreenLeaf began in 2017 as a weekend stall at the Fremont Sunday Market, where Priya and Tom Lindqvist sold cuttings propagated on their apartment windowsills. Demand grew faster than their windowsills, and a year later they opened a small shop on Fremont Avenue with a greenhouse in the back yard.',
    'Today we are a team of nine plant lovers, including two horticulturists who run our free plant doctor service. We still know most of our regular customers by name, and many of them by the names of their plants.',
    'We believe that anyone can keep plants alive with the right plant in the right place and a little honest advice. That is why every plant we sell comes with a printed care card, and why our staff will happily talk you out of a fiddle-leaf fig if your flat faces north.',
  ],
  sustainabilityHeading: 'Growing responsibly',
  sustainability: [
    {
      heading: 'Peat-free potting mix',
      body: 'Peat bogs store vast amounts of carbon, so we blend our own peat-free mix from coir, composted bark and perlite for every plant we repot.',
    },
    {
      heading: 'Local growers first',
      body: 'More than seventy percent of our plants come from growers in Washington and Oregon, which cuts transport emissions and keeps the plants less stressed.',
    },
    {
      heading: 'Pot take-back scheme',
      body: 'Bring back any plastic nursery pot and we will sterilise and reuse it, or recycle it if it is damaged. Last year we kept over eleven thousand pots out of landfill.',
    },
  ],
}

export const products: Product[] = [
  {
    slug: 'monstera-deliciosa',
    name: 'Monstera Deliciosa',
    botanicalName: 'Monstera deliciosa',
    title: 'Monstera Deliciosa | GreenLeaf Plant Shop',
    description:
      'Buy a healthy Monstera deliciosa, the Swiss cheese plant, with dramatic split leaves. Easy care, fast growing and greenhouse acclimatised.',
    summary: 'The iconic Swiss cheese plant with glossy, split leaves. Fast growing and forgiving.',
    price: 48,
    sku: 'GL-MON-25',
    inStock: true,
    image: {
      src: '/images/plant-monstera.svg',
      alt: 'Monstera deliciosa with large split leaves in a white ceramic pot',
      width: 800,
      height: 800,
    },
    gallery: [
      {
        src: '/images/plant-monstera-leaf.svg',
        alt: 'Close-up of a mature monstera leaf showing its characteristic holes',
        width: 800,
        height: 600,
      },
    ],
    intro:
      'Few plants make a room feel as lush as a monstera. Its glossy leaves develop their famous splits and holes as the plant matures, and with bright, indirect light it can grow several new leaves every summer.',
    care: [
      {
        heading: 'Light and placement',
        body: 'Place your monstera a metre or two from a bright window, out of harsh afternoon sun. In lower light it will survive but grow slowly and produce smaller leaves without splits.',
      },
      {
        heading: 'Watering and feeding',
        body: 'Water when the top five centimetres of soil feel dry, usually once a week in summer and every two to three weeks in winter. Feed monthly from spring to early autumn with a balanced liquid fertiliser.',
      },
      {
        heading: 'Support and repotting',
        body: 'Monsteras are climbers. Give yours a moss pole and tie aerial roots to it to encourage bigger leaves. Repot every two years in spring, moving up just one pot size.',
      },
    ],
    facts: [
      { label: 'Pot size', value: '25 cm nursery pot' },
      { label: 'Height', value: 'About 70 cm including pot' },
      { label: 'Difficulty', value: 'Easy' },
      { label: 'Pet safe', value: 'No, toxic to cats and dogs' },
    ],
  },
  {
    slug: 'fiddle-leaf-fig',
    name: 'Fiddle-Leaf Fig',
    botanicalName: 'Ficus lyrata',
    title: 'Fiddle-Leaf Fig Tree | GreenLeaf Plant Shop',
    description:
      'Shop a greenhouse-grown fiddle-leaf fig (Ficus lyrata) with large violin-shaped leaves, plus our expert care tips to keep it thriving indoors.',
    summary: 'A sculptural indoor tree with large, violin-shaped leaves for bright rooms.',
    price: 85,
    sku: 'GL-FIC-30',
    inStock: true,
    image: {
      src: '/images/plant-fiddle-leaf.svg',
      alt: 'Tall fiddle-leaf fig tree with broad violin-shaped leaves in a woven basket',
      width: 800,
      height: 800,
    },
    gallery: [
      // INTENTIONAL SEO DEFECT: this image has no alt text (rendered on /plants/fiddle-leaf-fig).
      {
        src: '/images/plant-fiddle-leaf-detail.svg',
        width: 800,
        height: 600,
      },
    ],
    intro:
      'The fiddle-leaf fig is the statement plant of interior design magazines, and for good reason. Its broad, deeply veined leaves bring architectural structure to a room. It is a little particular, but rewarding once it settles in.',
    care: [
      {
        heading: 'Light and placement',
        body: 'Fiddle-leaf figs need plenty of bright light, ideally right beside an east or south-facing window. Choose its spot carefully and then leave it there: these trees dislike being moved and may drop leaves in protest.',
      },
      {
        heading: 'Watering and humidity',
        body: 'Water thoroughly when the top half of the soil is dry, then let the excess drain away completely. Brown patches in the middle of leaves usually mean overwatering, while crispy brown edges point to dry air.',
      },
      {
        heading: 'Shaping your tree',
        body: 'Rotate the pot a quarter turn every few weeks so the tree grows evenly. To encourage branching, pinch out the newest growth at the top in late spring once the plant is established.',
      },
    ],
    facts: [
      { label: 'Pot size', value: '30 cm nursery pot' },
      { label: 'Height', value: 'About 120 cm including pot' },
      { label: 'Difficulty', value: 'Moderate' },
      { label: 'Pet safe', value: 'No, toxic to cats and dogs' },
    ],
  },
  {
    slug: 'snake-plant',
    name: 'Snake Plant',
    botanicalName: 'Dracaena trifasciata',
    title: 'Snake Plant Laurentii | GreenLeaf Plant Shop',
    description:
      'Buy a hardy snake plant (Dracaena trifasciata) with upright, gold-edged leaves. Tolerates low light and missed waterings. Ideal for beginners.',
    summary: 'Upright, architectural leaves and almost unlimited tolerance for neglect.',
    price: 32,
    sku: 'GL-SNK-17',
    inStock: true,
    image: {
      src: '/images/plant-snake.svg',
      alt: 'Snake plant with tall striped leaves edged in yellow in a grey concrete pot',
      width: 800,
      height: 800,
    },
    gallery: [
      {
        src: '/images/plant-snake-pups.svg',
        alt: 'Young snake plant pups emerging from the soil beside the parent plant',
        width: 800,
        height: 600,
      },
    ],
    intro:
      'If you are convinced you kill every plant you touch, start here. The snake plant stores water in its thick leaves, copes with dim corners and dry office air, and still looks crisp and modern on a shelf or floor.',
    care: [
      {
        heading: 'Light and placement',
        body: 'Snake plants grow fastest in bright, indirect light but will happily tolerate a shady hallway or a north-facing bedroom. They are a good choice for spots where other plants have struggled.',
      },
      {
        heading: 'Watering',
        body: 'Let the soil dry out completely between waterings. That might mean every two to three weeks in summer and once a month or less in winter. Too much water is the only reliable way to kill one.',
      },
      {
        heading: 'Dividing and propagating',
        body: 'Mature plants produce pups around their base. In spring you can separate a pup with its own roots and pot it up as a new plant, which makes a lovely gift for a friend.',
      },
    ],
    facts: [
      { label: 'Pot size', value: '17 cm nursery pot' },
      { label: 'Height', value: 'About 55 cm including pot' },
      { label: 'Difficulty', value: 'Very easy' },
      { label: 'Pet safe', value: 'No, mildly toxic to cats and dogs' },
    ],
  },
]

export const posts: Post[] = [
  {
    slug: 'beginner-guide-to-watering-houseplants',
    headline: "A Beginner's Guide to Watering Houseplants",
    title: 'How to Water Houseplants | GreenLeaf Plant Shop',
    description:
      'Learn when and how to water houseplants, how to check soil moisture and how to spot the signs of underwatering and overwatering early.',
    datePublished: '2026-09-08',
    author: 'Priya Lindqvist',
    image: {
      src: '/images/blog-watering.svg',
      alt: 'Brass watering can pouring water into a potted pothos on a windowsill',
      width: 960,
      height: 540,
    },
    excerpt: 'Forget watering schedules. Learn to read your plants and soil instead, and most problems disappear.',
    sections: [
      {
        heading: 'Why schedules fail',
        paragraphs: [
          'The most common question we hear in the shop is how often a plant should be watered. The honest answer is that it depends on the plant, the pot, the season and the room. A monstera in a sunny living room in July might need water every five days, while the same plant in December could go three weeks.',
        ],
      },
      {
        heading: 'Check the soil first',
        paragraphs: [
          'Push a finger into the soil up to the second knuckle. If it feels dry at that depth, most tropical foliage plants are ready for a drink. Succulents and snake plants prefer to dry out completely, while ferns and calatheas like to stay lightly moist.',
          'Lifting the pot is another reliable trick. A freshly watered plant feels noticeably heavy; one that needs water feels light. After a few weeks you will be able to tell at a glance.',
        ],
      },
      {
        heading: 'Water thoroughly, then drain',
        paragraphs: [
          'When you do water, water generously until it runs out of the drainage holes, then empty the saucer after fifteen minutes. Small, frequent sips keep the top of the soil wet while the roots below stay dry. Standing water, on the other hand, starves roots of oxygen and leads to rot, which shows up as yellowing lower leaves and a sour smell.',
        ],
      },
    ],
  },
  {
    slug: 'best-low-light-houseplants',
    headline: 'Seven Houseplants That Thrive in Low Light',
    title: 'Best Low-Light Houseplants | GreenLeaf Plant Shop',
    description:
      'Dark flat or north-facing room? These seven tough, good-looking houseplants cope with low light, plus tips to help them grow in the shade.',
    datePublished: '2026-10-14',
    author: 'Tom Lindqvist',
    image: {
      src: '/images/blog-low-light.svg',
      alt: 'Snake plant, ZZ plant and pothos grouped together in a dim corner of a room',
      width: 960,
      height: 540,
    },
    excerpt: 'A dim room does not have to be a plant-free room. These species are our go-to picks for shady spots.',
    sections: [
      {
        heading: 'What low light really means',
        paragraphs: [
          'No houseplant grows in darkness. Low light means a spot where you could comfortably read a book during the day without switching on a lamp, but where the sun never falls directly. Most rooms more than two metres from a window, or facing north, fall into this category.',
        ],
      },
      {
        heading: 'Our seven favourites',
        paragraphs: [
          'The snake plant and the ZZ plant top our list: both store water, grow slowly and keep their good looks in deep shade. Pothos and heartleaf philodendron trail beautifully from shelves and tolerate dim corners. The cast iron plant earns its name, while the parlour palm and Chinese evergreen add softer texture.',
          'All seven are widely available, reasonably priced and forgiving of the occasional missed watering, which makes them perfect for offices and first flats.',
        ],
      },
      {
        heading: 'Helping plants in the shade',
        paragraphs: [
          'Plants in low light use far less water, so reduce watering accordingly. Wipe dust off the leaves every month so they can absorb as much light as possible, and rotate pots occasionally to keep growth even. If a plant stretches and grows pale, it is asking for a brighter spot.',
        ],
      },
    ],
  },
]

export const faqs: { question: string; answer: string }[] = [
  {
    question: 'Where do you deliver?',
    answer:
      'We deliver to Seattle, Shoreline, Bellevue, Kirkland and Redmond in our own van, Tuesday to Saturday. Delivery is free on orders over $75 and $9 otherwise. We do not currently ship plants by courier.',
  },
  {
    question: 'What is your plant health guarantee?',
    answer:
      'Every plant is covered for 30 days. If it struggles, email a photo to our plant doctors. We will help diagnose the issue and replace the plant free of charge if it cannot be saved.',
  },
  {
    question: 'Can I return a plant?',
    answer:
      'Unused pots and accessories can be returned within 30 days for a full refund. Because plants are living things we cannot accept them back, but they are covered by our health guarantee.',
  },
  {
    question: 'Do plants come in decorative pots?',
    answer:
      'Plants arrive in recyclable nursery pots with drainage holes. You can add a decorative ceramic pot at checkout or in the shop, and we will pot the plant up for you at no extra cost.',
  },
  {
    question: 'Which plants are safe for cats and dogs?',
    answer:
      'Calatheas, parlour palms, spider plants and Boston ferns are all non-toxic to pets. Every product page lists pet safety, and staff in the shop can point out pet-friendly options.',
  },
  {
    question: 'Do you offer plant care workshops?',
    answer:
      'Yes. We run repotting and propagation workshops on the first Saturday of each month. Places are limited to twelve people and include all materials and a plant to take home.',
  },
]

export const contactContent = {
  intro:
    'Questions about an order, a sick plant or the perfect plant for a tricky corner? Our team is happy to help. Send us a message using the form below and we will reply within one working day, or pop into the shop to speak to a plant doctor in person.',
  hours: 'Monday to Friday 10 am to 7 pm, Saturday and Sunday 9 am to 6 pm',
  visitText:
    'The shop is on Fremont Avenue North, two blocks from the Fremont Troll, with free two-hour street parking nearby and bus routes 5 and 62 stopping right outside. Bring a photo of your space and we will help you choose plants that will thrive there.',
  doctorHeading: 'Plant doctor appointments',
  doctorText:
    'Worried about a struggling plant? Bring it in or send photos for a free consultation with one of our horticulturists. They can check for pests, root rot and light problems and recommend a recovery plan.',
}

export const privacyContent = {
  updated: '2026-07-15',
  sections: [
    {
      heading: 'Information we collect',
      body: 'When you place an order or contact us we collect your name, email address, phone number and delivery address. Payments are processed by our payment provider, so we never see or store your full card details. We also use cookie-less analytics to understand which pages are visited, without tracking individuals.',
    },
    {
      heading: 'How we use it',
      body: 'We use your information to process and deliver orders, answer questions, honour our plant health guarantee and, only if you opt in, send our monthly plant care newsletter. You can unsubscribe from the newsletter at any time with one click.',
    },
    {
      heading: 'Sharing and retention',
      body: 'We share delivery details only with the staff who deliver your order. Order records are kept for seven years for tax purposes; contact form messages are deleted after two years. We never sell or rent customer information.',
    },
    {
      heading: 'Your choices',
      body: 'You can request a copy of your data, ask us to correct it or ask us to delete it by emailing privacy@greenleaf.example. We will respond within thirty days.',
    },
  ],
}

/** Every indexable route; scripts/gen-sitemap.mjs builds sitemap.xml from this list. */
export const sitemapRoutes: { path: string; lastmod?: string }[] = [
  { path: '/' },
  { path: '/about' },
  { path: '/plants' },
  ...products.map((p) => ({ path: `/plants/${p.slug}` })),
  { path: '/blog' },
  ...posts.map((p) => ({ path: `/blog/${p.slug}`, lastmod: p.datePublished })),
  { path: '/contact' },
  { path: '/faq' },
  { path: '/privacy' },
]
