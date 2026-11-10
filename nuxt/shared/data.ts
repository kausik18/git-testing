// Single source of content for the Wanderlust site (used by pages and server routes).

export interface Destination {
  slug: string
  name: string
  country: string
  title: string
  description: string
  summary: string
  image: string
  imageAlt: string
  intro: string[]
  highlights: { name: string, text: string }[]
  bestTime: string
  gettingAround: string
  budget: string
}

export interface PostSection { heading: string, paragraphs: string[] }

export interface Post {
  slug: string
  title: string
  headline: string
  description: string
  excerpt: string
  author: string
  datePublished: string
  image: string
  imageAlt: string
  body: PostSection[]
  intro: string
}

export interface Faq { question: string, answer: string }

export const site = {
  name: 'Wanderlust',
  tagline: 'Slow travel stories and honest destination guides',
  email: 'hello@wanderlust.example',
  founders: ['Maya Lindqvist', 'Tom Alvarez'],
}

// Shared copy used (intentionally) by two destination pages: duplicate meta description defect.
const SHARED_DESTINATION_DESCRIPTION
  = 'Plan your trip with our complete destination guide: the best time to visit, where to stay, what to eat and the experiences you should not miss.'

export const destinations: Destination[] = [
  {
    slug: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    title: 'Kyoto Travel Guide: Temples, Tea and Gardens | Wanderlust',
    description:
      'Our Kyoto travel guide covers quiet temples, tea houses, moss gardens and seasonal food, plus the best times to visit and how to get around.',
    summary: 'Ancient temples, moss gardens and tea houses in Japan\'s former imperial capital.',
    image: '/images/destination-kyoto.svg',
    imageAlt: 'Vermilion torii gates winding up a forested hillside in Kyoto',
    intro: [
      'Kyoto was the imperial capital of Japan for more than a thousand years, and it still feels like a city that runs on its own gentle schedule. More than 1,600 temples and 400 shrines are spread across its valleys, from world-famous landmarks to tiny neighbourhood sanctuaries where you will be the only visitor.',
      'We have spent three long stays in Kyoto, renting a machiya townhouse in the north of the city and walking almost everywhere. This guide collects what we learned about avoiding the crowds, eating well and finding the quiet corners that make Kyoto unforgettable.',
    ],
    highlights: [
      { name: 'Fushimi Inari at dawn', text: 'Start before 7am and the thousands of torii gates are almost empty. Keep climbing past the first viewpoint for the best light.' },
      { name: 'Moss gardens of Ohara', text: 'A short bus ride north, Sanzen-in and Hosen-in temples feel a world away from the city centre.' },
      { name: 'Nishiki Market', text: 'Graze on pickles, grilled mochi and tamagoyaki, but go mid-morning before the tour groups arrive.' },
    ],
    bestTime: 'Late October to early December brings autumn colour and mild days; late March and early April bring cherry blossom and the biggest crowds of the year.',
    gettingAround: 'Buses cover most sights, but a rented bicycle is the fastest and most pleasant way to explore the flat central districts.',
    budget: 'Expect to spend around 120 to 180 US dollars a day for a mid-range guesthouse, meals and entry fees.',
  },
  {
    slug: 'lisbon',
    name: 'Lisbon',
    country: 'Portugal',
    title: 'Lisbon Travel Guide: Trams, Tiles and Pastéis | Wanderlust',
    description: SHARED_DESTINATION_DESCRIPTION,
    summary: 'Sunlit hills, tiled facades and the best custard tarts in Europe.',
    image: '/images/destination-lisbon.svg',
    imageAlt: 'Yellow tram climbing a narrow cobbled street lined with tiled houses in Lisbon',
    intro: [
      'Lisbon spills down seven hills to the wide Tagus estuary, and every climb is rewarded with a miradouro, a viewpoint where locals gather at sunset with a glass of vinho verde. The city mixes faded grandeur with a young, creative energy that has made it one of Europe\'s most rewarding long-weekend destinations.',
      'We first visited for four days and stayed for a month. This guide covers the neighbourhoods we love most, the food you should seek out and the day trips that are worth leaving the city for.',
    ],
    highlights: [
      { name: 'Alfama on foot', text: 'Lose yourself in the oldest district\'s alleys, then time your visit for an evening of live fado in a small family tavern.' },
      { name: 'Belém and the pastry pilgrimage', text: 'Visit the Jerónimos Monastery, then queue for warm pastéis de nata at the bakery that has made them since 1837.' },
      { name: 'Day trip to Sintra', text: 'Romantic palaces and misty forests are just forty minutes away by train from Rossio station.' },
    ],
    bestTime: 'April to June and September to October offer warm days without the peak summer heat and crowds.',
    gettingAround: 'Walk and use the metro, trams and funiculars with a rechargeable Viva Viagem card; avoid driving in the centre.',
    budget: 'A comfortable mid-range trip costs roughly 100 to 150 US dollars a day including accommodation.',
  },
  {
    slug: 'patagonia',
    name: 'Patagonia',
    country: 'Chile and Argentina',
    title: 'Patagonia Travel Guide: Trekking the W Circuit | Wanderlust',
    description: SHARED_DESTINATION_DESCRIPTION,
    summary: 'Granite towers, glaciers and wind-swept steppe at the end of the world.',
    image: '/images/destination-patagonia.svg',
    imageAlt: 'Granite towers of Torres del Paine rising above a turquoise glacial lake',
    intro: [
      'Patagonia stretches across the southern tip of Chile and Argentina, a vast region of jagged peaks, ice fields and empty roads. It is one of the last great wildernesses that ordinary travellers can reach, and it rewards anyone willing to plan carefully and pack for four seasons in a single day.',
      'We spent six weeks travelling between Torres del Paine, El Chaltén and the Perito Moreno glacier. This guide focuses on the classic routes, how to book the limited campsites and refugios, and how to cope with the famous Patagonian wind.',
    ],
    highlights: [
      { name: 'The W Trek', text: 'Five days through Torres del Paine, ending at sunrise beneath the three granite towers that give the park its name.' },
      { name: 'Laguna de los Tres', text: 'A long day hike from El Chaltén to the foot of Mount Fitz Roy, with a steep final hour that is worth every step.' },
      { name: 'Perito Moreno Glacier', text: 'Watch house-sized blocks of ice calve into Lago Argentino from the walkways near El Calafate.' },
    ],
    bestTime: 'November to March is the trekking season; December and January have the longest days but also the strongest winds.',
    gettingAround: 'Long-distance buses link the main towns; book trekking accommodation months ahead, as numbers are strictly limited.',
    budget: 'Patagonia is expensive: allow 150 to 250 US dollars a day, more if you stay in refugios with meals included.',
  },
]

export const posts: Post[] = [
  {
    slug: 'carry-on-packing-list',
    title: 'The Only Carry-On Packing List You Will Need | Wanderlust',
    headline: 'The Only Carry-On Packing List You Will Need',
    description:
      'Our tried and tested carry-on packing list for two weeks of travel in any climate, with tips on fabrics, packing cubes and toiletries.',
    excerpt: 'After eight years of travelling with only a carry-on, this is the exact list we pack for every trip.',
    author: 'Maya Lindqvist',
    datePublished: '2026-04-12',
    image: '/images/blog-packing-list.svg',
    imageAlt: 'Neatly rolled clothes and packing cubes laid out beside a small carry-on suitcase',
    intro:
      'We have not checked a bag since 2018. Travelling with only a carry-on means no waiting at baggage carousels, no lost luggage and far more freedom to change plans on a whim. The secret is not a magic suitcase but a short, repeatable list of versatile items.',
    body: [
      {
        heading: 'Clothes that work everywhere',
        paragraphs: [
          'Choose a colour palette of two neutrals and one accent so every top matches every bottom. Merino wool and quick-dry synthetics can be washed in a sink and dried overnight, which means you only need clothes for five days, even on a month-long trip.',
        ],
      },
      {
        heading: 'Packing cubes and compression',
        paragraphs: [
          'Two medium cubes for clothes and one small cube for underwear and socks keep everything organised. Roll rather than fold, and wear your bulkiest shoes and jacket on the plane.',
        ],
      },
      {
        heading: 'Toiletries and tech',
        paragraphs: [
          'Solid shampoo bars and toothpaste tablets free up space in your liquids bag. For tech, one universal adapter, a single multi-port charger and a power bank cover almost every situation without a tangle of cables.',
        ],
      },
    ],
  },
  {
    slug: 'japan-rail-pass-guide',
    title: 'Is the Japan Rail Pass Still Worth It? | Wanderlust',
    headline: 'Is the Japan Rail Pass Still Worth It?',
    description:
      'After the latest price rise, we crunch the numbers on the Japan Rail Pass and explain when regional passes or single tickets are cheaper.',
    excerpt: 'The JR Pass price has risen sharply. We compare real itineraries to see when it still pays off.',
    author: 'Tom Alvarez',
    datePublished: '2026-06-02',
    image: '/images/blog-rail-pass.svg',
    imageAlt: 'Shinkansen bullet train passing Mount Fuji on a clear day',
    intro:
      'For years the Japan Rail Pass was an automatic purchase for first-time visitors. After a large price increase, that is no longer true. Whether it saves you money now depends entirely on how far and how fast you plan to travel.',
    body: [
      {
        heading: 'When the national pass pays off',
        paragraphs: [
          'If you are travelling from Tokyo to Hiroshima and back within seven days, with side trips to Kyoto and Osaka, the seven-day pass still comes out slightly ahead. Add a trip north to Sendai or Kanazawa and the savings grow.',
        ],
      },
      {
        heading: 'When regional passes are better',
        paragraphs: [
          'Most itineraries that stay within the Kansai region, or that only travel between Tokyo and Kyoto once in each direction, are cheaper with regional passes or individual tickets. The JR West Kansai pass, for example, covers Kyoto, Osaka, Nara and Himeji for a fraction of the national price.',
        ],
      },
      {
        heading: 'How we decide',
        paragraphs: [
          'Map out your long-distance journeys, price each one with an online fare calculator and compare the total with the pass. If the difference is small, buy single tickets and enjoy the flexibility to change your plans.',
        ],
      },
    ],
  },
  {
    // INTENTIONAL SEO DEFECT: thin content (fewer than 50 words of body copy).
    slug: 'beat-jet-lag',
    title: 'Three Quick Ways to Beat Jet Lag Fast | Wanderlust',
    headline: 'Three Quick Ways to Beat Jet Lag Fast',
    description:
      'Our three favourite tricks for beating jet lag on long-haul flights: light, timing and a little caffeine discipline on arrival day.',
    excerpt: 'Three simple tricks we use after every long-haul flight.',
    author: 'Maya Lindqvist',
    datePublished: '2026-08-21',
    image: '/images/blog-jet-lag.svg',
    imageAlt: 'Sunrise seen through an airplane window over the clouds',
    intro: 'Get outside in daylight, eat on local time and skip coffee after noon.',
    body: [],
  },
]

export const faqs: Faq[] = [
  {
    question: 'Do you accept sponsored trips?',
    answer: 'Occasionally, and we always say so clearly at the top of the article. Sponsors never see or approve our writing before it is published.',
  },
  {
    question: 'How do you choose which destinations to cover?',
    answer: 'We only write full guides about places where we have spent at least two weeks. Shorter visits become blog posts rather than destination guides.',
  },
  {
    question: 'Can I republish your articles or photos?',
    answer: 'Please ask first. We are usually happy to allow non-commercial use with a credit and a link back to the original article.',
  },
  {
    question: 'Do you plan custom itineraries?',
    answer: 'Not at the moment. Our guides are free to read, and we answer reader questions by email whenever we can.',
  },
  {
    question: 'How often are the guides updated?',
    answer: 'Every guide is reviewed at least once a year, and prices, opening hours and transport details are refreshed whenever we revisit a destination.',
  },
]

export const getDestination = (slug: string) => destinations.find(d => d.slug === slug)
export const getPost = (slug: string) => posts.find(p => p.slug === slug)
