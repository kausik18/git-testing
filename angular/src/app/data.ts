/**
 * All site content for CityCare Dental Clinic lives in this single file.
 * Pages render from these objects.
 */

export interface Img {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Service {
  slug: string;
  name: string;
  /** Used for <title>: "<seoTitle> | CityCare Dental Clinic" */
  seoTitle: string;
  description: string;
  /**
   * INTENTIONAL SEO DEFECT: when true, the <meta name="description"> tag is
   * not rendered for this page (Open Graph / Twitter descriptions still are).
   */
  omitMetaDescription?: boolean;
  summary: string;
  price: string;
  duration: string;
  image: Img;
  intro: string[];
  steps: string[];
  aftercare: string[];
}

export interface PostSection {
  heading: string;
  paragraphs: string[];
}

export interface Post {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  author: string;
  datePublished: string;
  image: Img;
  sections: PostSection[];
}

export interface Faq {
  question: string;
  answer: string;
}

export const clinic = {
  name: 'CityCare Dental Clinic',
  phone: '+1-555-0142',
  phoneDisplay: '(555) 014-2000',
  email: 'hello@citycare-dental.example',
  street: '218 Harbor Avenue, Suite 3',
  city: 'Riverton',
  region: 'OR',
  postalCode: '97035',
  country: 'US',
  hours: [
    { days: 'Monday – Thursday', time: '8:00 am – 6:00 pm', schema: 'Mo-Th 08:00-18:00' },
    { days: 'Friday', time: '8:00 am – 3:00 pm', schema: 'Fr 08:00-15:00' },
    { days: 'Saturday', time: '9:00 am – 1:00 pm (alternate weeks)', schema: 'Sa 09:00-13:00' },
  ],
};

export const images = {
  og: { src: '/images/og-default.svg', alt: 'CityCare Dental Clinic logo on a teal background', width: 1200, height: 630 },
  hero: { src: '/images/hero-clinic.svg', alt: 'Bright CityCare treatment room with a modern dental chair', width: 960, height: 480 },
  team: { src: '/images/team.svg', alt: 'The CityCare dentists and hygienists standing in the reception area', width: 800, height: 450 },
  contact: { src: '/images/map.svg', alt: 'Map showing CityCare Dental Clinic on Harbor Avenue in Riverton', width: 800, height: 400 },
} satisfies Record<string, Img>;

export const services: Service[] = [
  {
    slug: 'teeth-cleaning',
    name: 'Teeth Cleaning & Exams',
    seoTitle: 'Teeth Cleaning & Dental Exams',
    description:
      'Gentle professional teeth cleaning and check-ups in Riverton: plaque removal, polishing, digital X-rays and a full oral health exam.',
    summary: 'Twice-yearly hygiene visits that keep gums healthy and catch problems early.',
    price: 'From $95 (most insurance plans cover 100%)',
    duration: '45–60 minutes',
    image: {
      src: '/images/service-cleaning.svg',
      alt: 'Hygienist polishing a patient’s teeth during a routine cleaning',
      width: 800,
      height: 450,
    },
    intro: [
      'A professional cleaning is the single most effective thing you can do for your teeth besides brushing and flossing at home. Even the most careful brushers miss spots, and once plaque hardens into tartar it can only be removed with professional instruments.',
      'At CityCare our registered hygienists take their time. We use ultrasonic scalers that are quieter and gentler than traditional hand tools, warm water to reduce sensitivity, and a choice of polishing flavours. Every cleaning is paired with an exam by one of our dentists so that small issues such as early decay, cracked fillings or gum recession are found long before they become painful or expensive.',
      'We follow the American Dental Association recommendation of a cleaning every six months for most adults. Patients with a history of gum disease may benefit from shorter intervals, and we will tailor a schedule to you.',
    ],
    steps: [
      'Medical history review and a quick chat about any concerns',
      'Low-dose digital X-rays when they are due (usually once a year)',
      'Ultrasonic scaling to remove tartar above and below the gum line',
      'Polishing and flossing, followed by an optional fluoride varnish',
      'Dentist exam, oral cancer screening and a clear written treatment plan',
    ],
    aftercare: [
      'You can eat and drink straight away unless fluoride varnish was applied, in which case wait 30 minutes.',
      'Mild gum tenderness for a day is normal if there was a lot of tartar build-up.',
      'Book your next visit before you leave so you never fall behind.',
    ],
  },
  {
    slug: 'dental-implants',
    name: 'Dental Implants',
    seoTitle: 'Dental Implants in Riverton',
    description:
      'Replace missing teeth with natural-looking dental implants. 3D-guided placement, in-house crowns and flexible payment plans at CityCare.',
    summary: 'Permanent, natural-looking replacements for one tooth or a full arch.',
    price: 'From $3,200 per implant including crown',
    duration: '2–3 visits over 3–6 months',
    image: {
      src: '/images/service-implants.svg',
      alt: 'Illustration of a titanium dental implant supporting a porcelain crown',
      width: 800,
      height: 450,
    },
    intro: [
      'A dental implant is a small titanium post that replaces the root of a missing tooth. Once it has fused with the jawbone it supports a custom crown that looks, feels and functions like a natural tooth. Unlike a bridge, an implant does not require grinding down healthy neighbouring teeth, and unlike a removable denture it never slips when you eat or speak.',
      'Dr. Amara Okafor has placed more than 1,500 implants and uses cone-beam CT scans with 3D surgical guides for precise, minimally invasive placement. Most patients tell us the procedure was easier than having a tooth extracted.',
      'Implants are also the only tooth replacement that helps preserve the jawbone. When a tooth is lost the bone around it gradually shrinks, which can change the shape of the face over time. An implant stimulates the bone just like a natural root.',
    ],
    steps: [
      'Consultation with a 3D scan to check bone volume and plan the ideal position',
      'Implant placement under local anaesthetic, with optional oral sedation',
      'A healing period of eight to twelve weeks while the implant integrates',
      'Digital impressions and fitting of your custom porcelain crown',
    ],
    aftercare: [
      'Stick to soft foods for the first week and avoid chewing directly on the site.',
      'Brush and floss around the implant exactly as you would a natural tooth.',
      'Keep your regular hygiene visits; implants can last a lifetime with good care.',
    ],
  },
  {
    slug: 'teeth-whitening',
    name: 'Teeth Whitening',
    seoTitle: 'Professional Teeth Whitening',
    description:
      'Brighten your smile by up to eight shades with in-chair or take-home professional teeth whitening, supervised by CityCare dentists.',
    // INTENTIONAL SEO DEFECT: this page has no <meta name="description">.
    omitMetaDescription: true,
    summary: 'Safe, dentist-supervised whitening in a single visit or at home.',
    price: 'In-chair $450 · Take-home kit $295',
    duration: '90 minutes in-chair, or 2 weeks at home',
    image: {
      src: '/images/service-whitening.svg',
      alt: 'Before and after comparison of a smile following professional whitening',
      width: 800,
      height: 450,
    },
    intro: [
      'Coffee, tea, red wine and simple ageing all leave their mark on tooth enamel. Professional whitening lifts those stains far more effectively than over-the-counter strips because we can safely use a stronger gel while fully protecting your gums.',
      'We offer two options. In-chair whitening takes about ninety minutes and typically brightens teeth by six to eight shades in one appointment, which is ideal before a wedding or a big event. Our take-home kits use custom trays made from a scan of your teeth, so the gel stays exactly where it should; most patients see comparable results after two weeks of wearing them for an hour a day.',
      'Before any whitening we check that your teeth and gums are healthy, because whitening over untreated decay can cause sensitivity. Existing crowns and fillings do not change colour, so we will talk you through how they will match your new shade.',
    ],
    steps: [
      'Shade assessment and a quick exam to confirm whitening is right for you',
      'Gum protection and application of professional-strength whitening gel',
      'Three 15-minute gel cycles, or fitting of your custom take-home trays',
      'Final shade check and a desensitising treatment',
    ],
    aftercare: [
      'Avoid strongly coloured food and drink for 48 hours after treatment.',
      'Use a toothpaste for sensitive teeth for a few days if needed.',
      'A short top-up with your trays once or twice a year keeps results fresh.',
    ],
  },
];

export const posts: Post[] = [
  {
    slug: 'how-often-should-you-floss',
    title: 'How Often Should You Really Floss?',
    seoTitle: 'How Often Should You Floss?',
    description:
      'Our hygienists explain how often to floss, the right technique, and whether water flossers or interdental brushes are a good alternative.',
    excerpt: 'Daily flossing matters more than most people think. Here is how to do it properly and what to use if string floss is not for you.',
    author: 'Lena Fischer, RDH',
    datePublished: '2026-08-14',
    image: {
      src: '/images/blog-floss.svg',
      alt: 'Close-up of dental floss being used between two front teeth',
      width: 800,
      height: 450,
    },
    sections: [
      {
        heading: 'Once a day is the goal',
        paragraphs: [
          'Your toothbrush cleans roughly sixty percent of each tooth’s surface. The remaining forty percent sits between the teeth, exactly where cavities and gum disease most often begin. Flossing once a day disrupts the bacterial film before it can mature and harden into tartar.',
          'It does not matter much whether you floss in the morning or at night. What matters is consistency, so pick the time you are most likely to stick with. Many of our patients keep floss next to the TV remote and do it in the evening.',
        ],
      },
      {
        heading: 'Technique beats frequency',
        paragraphs: [
          'Snapping floss down between the teeth and pulling it straight back out does little good. Instead, curve the floss into a C shape around each tooth and gently slide it just below the gum line, then move it up and down two or three times. Use a fresh section of floss for each gap.',
          'A little bleeding during the first week is common and usually a sign of inflamed gums that will settle once you floss regularly. If bleeding continues beyond two weeks, mention it at your next visit.',
        ],
      },
      {
        heading: 'Alternatives that work',
        paragraphs: [
          'If you find string floss fiddly, interdental brushes are excellent for larger gaps and around braces or bridges, and research shows they remove plaque at least as well as floss. Water flossers are a good option for people with limited dexterity or implants. Our hygienists are always happy to help you find the tool you will actually use.',
        ],
      },
    ],
  },
  {
    slug: 'first-dental-visit-for-kids',
    title: 'Your Child’s First Dental Visit: What to Expect',
    seoTitle: 'Your Child’s First Dental Visit',
    description:
      'When should children first see a dentist and how can parents prepare them? A practical guide from the CityCare family dentistry team.',
    excerpt: 'A positive first visit sets the tone for a lifetime of healthy teeth. Here is how to make it easy for your little one.',
    author: 'Dr. Marcus Bell, DDS',
    datePublished: '2026-09-22',
    image: {
      src: '/images/blog-kids.svg',
      alt: 'Smiling young child sitting in a dental chair holding a toothbrush',
      width: 800,
      height: 450,
    },
    sections: [
      {
        heading: 'When to book the first appointment',
        paragraphs: [
          'The American Academy of Pediatric Dentistry recommends a first visit by your child’s first birthday, or within six months of the first tooth appearing. That might sound early, but baby teeth can develop decay as soon as they erupt, and early visits are mostly about getting comfortable rather than treatment.',
        ],
      },
      {
        heading: 'How to prepare your child',
        paragraphs: [
          'Keep the language simple and positive. Explain that the dentist will count their teeth and check that they are strong. Avoid words like hurt, needle or drill, even in reassurance, because they introduce ideas your child may not have had.',
          'Reading a picture book about visiting the dentist or playing pretend with a toothbrush and a favourite toy helps a lot. Schedule the appointment in the morning when younger children are usually rested and cooperative.',
        ],
      },
      {
        heading: 'What happens at CityCare',
        paragraphs: [
          'For toddlers we often use a knee-to-knee exam, where your child lies back on your lap so they can see you the whole time. We take a gentle look at the teeth and gums, check the bite, and talk with you about brushing, fluoride and diet. The whole visit usually takes less than thirty minutes.',
          'Older children get a ride in the big chair, a tour of the tools, and of course a sticker on the way out. Our goal is simple: a child who leaves smiling and is happy to come back in six months.',
        ],
      },
    ],
  },
];

export const faqs: Faq[] = [
  {
    question: 'Are you accepting new patients?',
    answer:
      'Yes. We welcome new patients of all ages, and most new-patient exams can be booked within two weeks. Emergency appointments are usually available the same day.',
  },
  {
    question: 'Which insurance plans do you accept?',
    answer:
      'We are in-network with Delta Dental, Cigna, MetLife, Aetna and Guardian, and we will submit claims to most other PPO plans on your behalf. Uninsured patients can join our CityCare Membership Plan for discounted care.',
  },
  {
    question: 'What should I do in a dental emergency?',
    answer:
      'Call us straight away on (555) 014-2000. During opening hours we keep emergency slots free every day. Outside of hours, our voicemail will give you the on-call dentist’s number for urgent problems such as a knocked-out tooth or severe swelling.',
  },
  {
    question: 'Do you offer sedation for nervous patients?',
    answer:
      'Yes. We offer nitrous oxide (laughing gas) and oral conscious sedation for longer procedures. Many anxious patients also find that noise-cancelling headphones and a clear explanation of each step make a big difference.',
  },
  {
    question: 'How much does a check-up cost without insurance?',
    answer:
      'A new-patient exam with X-rays and a standard cleaning costs $195. Members of our in-house plan receive two cleanings and exams per year plus 15% off other treatments for $299 annually.',
  },
  {
    question: 'Is there parking at the clinic?',
    answer:
      'Free patient parking is available in the Harbor Plaza garage directly behind the building. Bring your ticket to reception and we will validate it. The clinic is also two minutes from the Riverton Central bus stop.',
  },
];

export const team = [
  { name: 'Dr. Amara Okafor, DDS', role: 'Founder and implant dentist' },
  { name: 'Dr. Marcus Bell, DDS', role: 'Family and paediatric dentist' },
  { name: 'Lena Fischer, RDH', role: 'Lead dental hygienist' },
  { name: 'Sofia Ramirez', role: 'Patient coordinator' },
];

export const openings = [
  {
    title: 'Registered Dental Hygienist',
    type: 'Full-time',
    summary: 'Four-day week, no Saturdays required, continuing-education budget of $2,000 per year.',
  },
  {
    title: 'Dental Assistant',
    type: 'Full-time',
    summary: 'Chairside assisting for general and implant dentistry. Radiography certification preferred.',
  },
  {
    title: 'Front Desk Coordinator',
    type: 'Part-time',
    summary: 'Welcoming patients, managing schedules and helping families understand their insurance benefits.',
  },
];
