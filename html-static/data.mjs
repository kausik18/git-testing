// Single source of content for the Brightside Bakery static site.
// `node scripts/build.mjs` renders every HTML page in public/ from this file.

export const business = {
  name: 'Brightside Bakery',
  legalName: 'Brightside Bakery LLC',
  tagline: 'Artisan bread and pastries, baked fresh every morning',
  street: '48 Harbor Lane',
  city: 'Portland',
  region: 'OR',
  postalCode: '97209',
  country: 'US',
  phone: '+1-503-555-0142',
  phoneDisplay: '(503) 555-0142',
  email: 'hello@brightsidebakery.test',
  hours: [
    { days: 'Tuesday to Friday', time: '7:00 am to 5:00 pm', spec: 'Tu-Fr 07:00-17:00' },
    { days: 'Saturday and Sunday', time: '8:00 am to 3:00 pm', spec: 'Sa-Su 08:00-15:00' },
    { days: 'Monday', time: 'Closed', spec: null },
  ],
  founded: '2014',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/menu/', label: 'Menu' },
  { href: '/blog/', label: 'Blog' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/contact/', label: 'Contact' },
];

export const footerLinks = [...nav, { href: '/privacy/', label: 'Privacy Policy' }];

// Placeholder images rendered as local SVG files by the build script.
export const images = {
  'og-default': { label: 'Brightside Bakery', w: 1200, h: 630, bg: '#e07a3f', fg: '#fff8ef' },
  'hero-counter': { label: 'Bakery counter', w: 1200, h: 600, bg: '#f2c48d', fg: '#6b3e26' },
  'team': { label: 'Our bakers', w: 800, h: 500, bg: '#d9a066', fg: '#3d2314' },
  'oven': { label: 'Stone deck oven', w: 800, h: 500, bg: '#8c4f2b', fg: '#fff8ef' },
  'country-sourdough': { label: 'Country sourdough', w: 800, h: 600, bg: '#c98b4f', fg: '#3d2314' },
  'butter-croissant': { label: 'Butter croissant', w: 800, h: 600, bg: '#f0b860', fg: '#3d2314' },
  'cinnamon-swirl-bun': { label: 'Cinnamon swirl bun', w: 800, h: 600, bg: '#b5683a', fg: '#fff8ef' },
  'sourdough-fermentation': { label: 'Sourdough starter', w: 1200, h: 630, bg: '#e8d3b0', fg: '#6b3e26' },
  'bread-storage': { label: 'Bread in a linen bag', w: 1200, h: 630, bg: '#a7c4a0', fg: '#2d3b2a' },
};

export const pages = {
  home: {
    title: 'Artisan Bread & Pastries | Brightside Bakery',
    description:
      'Brightside Bakery in Portland bakes naturally leavened sourdough, flaky croissants and cinnamon buns from scratch every morning. Visit us on Harbor Lane.',
    h1: 'Artisan bread and pastries, baked fresh every morning',
    intro:
      'Brightside Bakery is a neighbourhood bakery on Harbor Lane in Portland. Every loaf, croissant and bun on our counter was shaped by hand the night before and baked in our stone deck oven before sunrise. We use organic flour milled in Oregon, cultured butter from a family dairy in the Willamette Valley and nothing artificial at all.',
    sections: [
      {
        h2: 'Baked from scratch, the slow way',
        paragraphs: [
          'Good bread takes time, so we give it plenty. Our sourdough ferments for up to 48 hours, which builds a deep, slightly tangy flavour and a crust that crackles when you squeeze it. Our laminated pastries are folded over three days so the butter stays in thin, distinct layers. It is not the fastest way to run a bakery, but it is the only way we know how to make food we are proud of.',
          'We bake in small batches through the morning, so the shelves are restocked until early afternoon. If you want something specific, such as a whole sourdough boule for a dinner party, you can call ahead and we will set one aside for you.',
        ],
      },
    ],
    featuredHeading: 'Customer favourites',
    blogHeading: 'From the bakery blog',
    visitHeading: 'Visit the bakery',
    visitText:
      'You will find us at 48 Harbor Lane, two blocks from the riverfront. There is bike parking out front and a few tables inside if you would like to stay for a coffee.',
  },

  about: {
    title: 'About Our Bakery | Brightside Bakery',
    description:
      'Meet the bakers behind Brightside Bakery, a family-run Portland bakery founded in 2014 with a focus on slow fermentation and local, organic flour.',
    h1: 'About Brightside Bakery',
    sections: [
      {
        h2: 'How it started',
        paragraphs: [
          'Brightside Bakery began in 2014 as a weekend stall at the Portland farmers market. Maya Ortiz had spent ten years baking in restaurant kitchens and wanted to make bread for her own neighbourhood. She sold forty loaves on the first Saturday and ran out before ten in the morning. A year later she signed the lease on a former hardware store on Harbor Lane, and the bakery has been there ever since.',
          'Today we are a team of eleven bakers, pastry cooks and counter staff. Most of us live within a few miles of the shop, and many of our regulars have been coming in since the market days.',
        ],
      },
      {
        h2: 'What we believe in',
        paragraphs: [
          'We think bread should be made from a short list of ingredients you can pronounce. Our flour comes from a stone mill in the Willamette Valley, our butter from a family dairy near Salem, and our fruit from farms we visit every summer. We pay fair wages, close on Mondays so the team gets a proper weekend, and donate unsold bread every evening to a local food bank.',
        ],
        subsections: [
          {
            h3: 'Slow fermentation',
            text: 'Long, cool fermentation makes bread easier to digest and gives it more flavour, so we never rush a dough.',
          },
          {
            h3: 'Local ingredients',
            text: 'More than eighty percent of what we buy is grown or produced within two hundred miles of the bakery.',
          },
        ],
      },
      {
        h2: 'Inside the bakehouse',
        paragraphs: [
          'Our stone deck oven was built in Italy and weighs almost four tonnes. It holds heat for hours, which gives our loaves their thick, caramelised crust. Bakers start at two in the morning, and by seven the first trays are cooling on the racks by the window.',
        ],
      },
    ],
  },

  menu: {
    title: 'Bread & Pastry Menu | Brightside Bakery',
    description:
      'Browse the Brightside Bakery menu: country sourdough, all-butter croissants and cinnamon swirl buns, with prices, ingredients and allergen notes.',
    h1: 'Our bread and pastry menu',
    intro: [
      'Everything on our menu is baked on site, in small batches, from morning until early afternoon. The selection below covers the items we make every single day. Alongside them you will find seasonal specials on the counter, such as rhubarb danishes in spring, peach galettes in late summer and spiced pear loaves through the winter months.',
      'Our breads are made with organic flour, filtered water, sea salt and our own wild yeast starter. Our pastries use cultured butter and free-range eggs. We list the main allergens on each product page, but because we bake everything in one kitchen, we cannot guarantee that any item is completely free from wheat, dairy, eggs or nuts.',
      'Prices include tax. Whole loaves can be sliced for free on request, and we are happy to reserve items for you if you call the bakery before nine in the morning.',
    ],
    listHeading: 'Baked every day',
  },

  blog: {
    title: 'Baking Blog | Brightside Bakery',
    description:
      'Stories, tips and techniques from the Brightside Bakery team, from sourdough fermentation science to keeping your bread fresh at home.',
    h1: 'The Brightside baking blog',
    intro: [
      'Our bakers love talking about bread almost as much as they love making it. This blog is where we share what we have learned over more than a decade of early mornings: why we do things the way we do, how you can get better results in your own kitchen, and a few behind-the-scenes stories from the bakehouse.',
      'We publish a new article roughly once a month. If there is a topic you would like us to cover, such as a particular pastry technique or a question about our ingredients, ask us at the counter or send us a message through the contact page. Many of our best posts started as questions from customers.',
    ],
    listHeading: 'Latest articles',
  },

  contact: {
    title: 'Contact & Opening Hours | Brightside Bakery',
    description:
      'Find Brightside Bakery at 48 Harbor Lane, Portland. See our opening hours, call to reserve bread, or send us a message about orders and catering.',
    h1: 'Contact Brightside Bakery',
    intro: [
      'We love hearing from customers. Whether you want to reserve a loaf, ask about an ingredient, plan a catering order for an office breakfast or simply tell us how much you enjoyed your morning bun, there are several ways to reach us. For anything urgent, such as a same-day reservation, calling the bakery is the quickest option because we check email only twice a day.',
      'Catering and large orders need at least 48 hours notice so that we can schedule the extra dough. Wedding and celebration cakes are not something we offer, but we are always happy to recommend other local bakers who specialise in them.',
    ],
    formHeading: 'Send us a message',
    formNote:
      'This form is for general questions. We aim to reply within two working days. Please do not include payment details in your message.',
    hoursHeading: 'Opening hours',
    findHeading: 'How to find us',
    findText:
      'We are on the corner of Harbor Lane and Fifth Street, two blocks from the riverfront path. Street parking is free on weekends, and the number 12 bus stops right outside the door.',
  },

  faq: {
    title: 'Frequently Asked Questions | Brightside Bakery',
    description:
      'Answers to common questions about Brightside Bakery: opening hours, allergens, vegan options, pre-orders, catering and how we store our bread.',
    h1: 'Frequently asked questions',
    intro:
      'Here are answers to the questions we hear most often at the counter. If you cannot find what you are looking for, please get in touch and a member of our team will be glad to help.',
    items: [
      {
        q: 'Do I need to pre-order bread?',
        a: 'No, most days we have plenty of bread on the shelves until early afternoon. If you need a specific loaf or a large quantity, call us before 9 am and we will set it aside for you.',
      },
      {
        q: 'Do you offer vegan options?',
        a: 'Yes. All of our sourdough breads are vegan, as they contain only flour, water, salt and our wild yeast starter. Our pastries contain butter and eggs, so they are not suitable for a vegan diet.',
      },
      {
        q: 'Can you make gluten-free bread?',
        a: 'Unfortunately not. Wheat flour is used throughout our kitchen, so we cannot prevent cross-contact and do not sell any products labelled as gluten-free.',
      },
      {
        q: 'Do you cater events and offices?',
        a: 'We do. We supply pastry platters, sandwich loaves and breakfast boxes for groups of ten or more. Please give us at least 48 hours notice for catering orders.',
      },
      {
        q: 'What happens to bread you do not sell?',
        a: 'Every evening we donate unsold bread to a local food bank, and anything left over is turned into breadcrumbs or croutons for the next day.',
      },
      {
        q: 'How should I store my sourdough?',
        a: 'Keep it cut side down on a wooden board or in a linen bag for up to three days. For longer storage, slice it and freeze it, then toast slices straight from the freezer.',
      },
    ],
  },

  privacy: {
    title: 'Privacy Policy | Brightside Bakery',
    // INTENTIONAL SEO DEFECT: no meta description on /privacy/.
    description: null,
    socialDescription:
      'How Brightside Bakery collects, uses and protects the personal information you share with us through our website and in store.',
    h1: 'Privacy policy',
    updated: '2026-08-01',
    sections: [
      {
        h2: 'Information we collect',
        paragraphs: [
          'This website does not use advertising trackers. When you send us a message through the contact form, we receive your name, email address and the content of your message. When you place a catering order by phone or email, we keep your contact details and order history so that we can prepare and deliver it.',
        ],
      },
      {
        h2: 'How we use your information',
        paragraphs: [
          'We use your details only to reply to your enquiry, fulfil your order and, if you ask us to, send you our monthly newsletter. We never sell or rent your personal information to anyone. Our web host keeps standard server logs, including IP addresses, for up to thirty days to protect the site against abuse.',
        ],
      },
      {
        h2: 'Cookies',
        paragraphs: [
          'The site does not set any cookies of its own. If that changes, we will update this page and ask for your consent before setting any cookie that is not strictly necessary.',
        ],
      },
      {
        h2: 'Your rights',
        paragraphs: [
          'You can ask us at any time to see, correct or delete the personal information we hold about you. Email hello@brightsidebakery.test or write to us at 48 Harbor Lane, Portland, OR 97209, and we will respond within thirty days.',
        ],
      },
    ],
  },

  notFound: {
    title: 'Page Not Found | Brightside Bakery',
    description:
      'Sorry, the page you were looking for could not be found. Browse our menu, read the blog or head back to the Brightside Bakery home page.',
    h1: 'Page not found',
    text: 'Sorry, we could not find that page. It may have moved, or the link may be out of date. Try one of these instead:',
  },
};

export const menuItems = [
  {
    slug: 'country-sourdough',
    name: 'Country Sourdough Loaf',
    title: 'Country Sourdough Loaf | Brightside Bakery',
    description:
      'Our signature country sourdough: a 48-hour naturally leavened loaf with a crackling crust and open, tangy crumb. Made with organic Oregon flour.',
    price: '7.50',
    image: 'country-sourdough',
    summary: 'A 48-hour naturally leavened loaf with a deep golden crust and an open, tangy crumb.',
    allergens: 'Wheat (gluten).',
    sections: [
      {
        h2: 'About this loaf',
        paragraphs: [
          'The country sourdough is the bread that started it all. It is the loaf Maya sold at the farmers market in 2014, and it is still the first thing to sell out on a Saturday morning. Each 900 gram boule is shaped by hand, proofed overnight in a cane basket and baked hard in our stone deck oven until the crust is a deep mahogany colour.',
        ],
      },
      {
        h2: 'How we make it',
        paragraphs: [
          'We start with a stiff levain that has been fed every day since the bakery opened. It is mixed with a blend of organic bread flour, whole wheat and a little rye, then left to ferment slowly in the cool room for up to 48 hours. That long rest develops flavour and makes the bread easier to digest. The high hydration dough gives the crumb its glossy, irregular holes.',
        ],
      },
      {
        h2: 'Ingredients and allergens',
        paragraphs: [
          'Organic wheat flour, water, organic whole wheat flour, organic rye flour, sea salt and wild yeast starter. Contains wheat. Baked in a kitchen that also handles milk, eggs, sesame and tree nuts.',
        ],
      },
      {
        h2: 'Serving suggestions',
        paragraphs: [
          'It is wonderful simply torn and dipped in olive oil, and it makes excellent toast for several days. Try it with salted butter and honey, or grill thick slices for a tomato and garlic bruschetta.',
        ],
      },
    ],
  },
  {
    slug: 'butter-croissant',
    name: 'Butter Croissant',
    title: 'Butter Croissant | Brightside Bakery',
    description:
      'A classic all-butter croissant laminated over three days with cultured butter for crisp, flaky layers and a soft honeycomb centre.',
    price: '3.75',
    image: 'butter-croissant',
    summary: 'A classic French croissant laminated over three days with cultured Oregon butter.',
    allergens: 'Wheat (gluten), milk, eggs.',
    // INTENTIONAL SEO DEFECT: internal link to a page that does not exist.
    legacyLink: { href: '/menu/croissant-old', text: 'our original croissant recipe' },
    sections: [
      {
        h2: 'About this pastry',
        paragraphs: [
          'Our butter croissant is a straightforward, traditional croissant with nothing hidden inside. It should shatter when you bite into it and leave flakes all over your plate. Behind that simple result is one of the most demanding processes in the bakery, and our pastry team is rightly proud of it.',
        ],
      },
      {
        h2: 'Three days in the making',
        paragraphs: [
          'On day one we mix a lightly sweetened dough and let it rest overnight. On day two we fold a sheet of cold cultured butter into the dough and roll it out three times, chilling it between each turn so the layers stay distinct. On day three the dough is cut, rolled into crescents and proofed slowly before baking. The result is a pastry with dozens of crisp layers and a soft, honeycomb centre.',
        ],
      },
      {
        h2: 'Ingredients and allergens',
        paragraphs: [
          'Wheat flour, cultured butter, whole milk, sugar, free-range eggs, sea salt and yeast. Contains wheat, milk and eggs. Baked in a kitchen that also handles sesame and tree nuts.',
        ],
      },
      {
        h2: 'Best enjoyed',
        paragraphs: [
          'Croissants are at their best within a few hours of baking. If you take some home, warm them in a hot oven for four minutes to bring back the crisp exterior.',
        ],
      },
    ],
  },
  {
    slug: 'cinnamon-swirl-bun',
    name: 'Cinnamon Swirl Bun',
    title: 'Cinnamon Swirl Bun | Brightside Bakery',
    description:
      'A soft, cardamom-scented brioche bun rolled with brown sugar and Ceylon cinnamon, finished with a light orange glaze. Baked fresh every morning.',
    price: '4.25',
    image: 'cinnamon-swirl-bun',
    summary: 'Soft cardamom brioche rolled with brown sugar and cinnamon, finished with an orange glaze.',
    allergens: 'Wheat (gluten), milk, eggs.',
    sections: [
      {
        h2: 'About this bun',
        paragraphs: [
          'The cinnamon swirl bun is our take on the Scandinavian cardamom buns our head pastry cook grew up eating in Gothenburg. It is softer and less sweet than an American cinnamon roll, with warm spice in every layer and a sticky, caramelised base where the sugar meets the tin.',
        ],
      },
      {
        h2: 'How we make it',
        paragraphs: [
          'We make an enriched brioche dough with milk, eggs, butter and freshly ground cardamom, and leave it to rise slowly overnight. In the morning it is rolled thin, spread with a paste of butter, dark brown sugar and Ceylon cinnamon, then twisted and knotted by hand. After baking, each bun is brushed with a light glaze of orange juice and sugar.',
        ],
      },
      {
        h2: 'Ingredients and allergens',
        paragraphs: [
          'Wheat flour, butter, whole milk, brown sugar, free-range eggs, sugar, cinnamon, cardamom, orange juice, yeast and sea salt. Contains wheat, milk and eggs.',
        ],
      },
      {
        h2: 'Serving suggestions',
        paragraphs: [
          'Enjoy one warm with a strong coffee. They also freeze well: wrap them individually and reheat in a low oven for ten minutes when the craving strikes.',
        ],
      },
    ],
  },
];

export const posts = [
  {
    slug: 'why-we-ferment-sourdough-for-48-hours',
    title: 'Why We Ferment Sourdough for 48 Hours | Brightside Bakery',
    headline: 'Why we ferment our sourdough for 48 hours',
    description:
      'Why Brightside Bakery lets its sourdough ferment for two full days, and how slow fermentation improves flavour, texture and digestibility.',
    datePublished: '2026-09-14',
    dateDisplay: 'September 14, 2026',
    author: 'Maya Ortiz',
    image: 'sourdough-fermentation',
    excerpt:
      'Slow fermentation is the single biggest reason our sourdough tastes the way it does. Here is what happens inside the dough over those two days.',
    sections: [
      {
        h2: 'Time is an ingredient',
        paragraphs: [
          'People are often surprised when we tell them that a loaf of our country sourdough takes two full days to make. Most of that time the dough is not being worked at all. It is sitting quietly in our cool room at around 5 degrees Celsius while wild yeast and lactic acid bacteria do their work.',
        ],
      },
      {
        h2: 'What happens during fermentation',
        paragraphs: [
          'Our starter is a living culture of wild yeasts and bacteria. The yeasts produce carbon dioxide, which makes the dough rise, while the bacteria produce lactic and acetic acids, which give sourdough its characteristic tang. At low temperatures the yeast slows down more than the bacteria do, so a long, cold fermentation builds more flavour without the dough over-proofing.',
        ],
        subsections: [
          {
            h3: 'Flavour',
            text: 'The acids and aromatic compounds that develop over two days give the bread a complex, slightly sour taste that a quick loaf simply cannot match.',
          },
          {
            h3: 'Texture and keeping quality',
            text: 'The acidity strengthens the gluten network and slows staling, so the loaf stays moist for several days.',
          },
          {
            h3: 'Digestibility',
            text: 'A long fermentation breaks down more of the complex carbohydrates in the flour, which many customers tell us makes our bread easier on the stomach.',
          },
        ],
      },
      {
        h2: 'Trying it at home',
        paragraphs: [
          'You do not need a commercial cool room to experiment with slow fermentation. After shaping your loaf, cover it and leave it in the fridge overnight, then bake it straight from cold the next morning. You will notice a deeper colour, a blistered crust and a fuller flavour.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-keep-bread-fresh',
    title: 'How to Keep Bread Fresh at Home | Brightside Bakery',
    headline: 'How to keep bread fresh at home',
    description:
      'Practical tips from our bakers on storing sourdough and pastries so they stay fresh longer, including the best way to freeze and revive bread.',
    datePublished: '2026-10-20',
    dateDisplay: 'October 20, 2026',
    author: 'Daniel Brooks',
    image: 'bread-storage',
    excerpt:
      'A good loaf deserves to be enjoyed down to the last slice. Our bakers share the storage habits they use in their own kitchens.',
    sections: [
      {
        h2: 'Skip the fridge',
        paragraphs: [
          'The refrigerator is the worst place to keep bread. At fridge temperatures the starch in bread recrystallises quickly, a process called retrogradation, which makes the crumb dry and stale up to three times faster than at room temperature. Unless you live somewhere very hot and humid, keep your loaf on the counter.',
        ],
      },
      {
        h2: 'The best ways to store a loaf',
        paragraphs: [
          'For crusty sourdough, the simplest method is often the best. Stand the loaf cut side down on a wooden board so the crumb is protected and the crust can breathe. After the first day, move it into a linen or cotton bread bag. Plastic bags keep bread soft but make the crust leathery, so we only recommend them for sandwich loaves.',
        ],
      },
      {
        h2: 'Freezing and reviving bread',
        paragraphs: [
          'If you will not finish a loaf within three days, slice it and freeze it in a sealed bag. Frozen slices can go straight into the toaster. To revive a whole loaf that has gone a little firm, run it briefly under the tap, then bake it at 200 degrees Celsius for eight to ten minutes. The steam softens the crumb and the heat crisps the crust again.',
          'Pastries are a different story. Croissants and buns are best on the day they are baked, but you can freeze them on the day of purchase and warm them in a hot oven for five minutes to bring them back to life.',
        ],
      },
    ],
  },
];
