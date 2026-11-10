"""All site content for Bookworm Bookstore. Templates render from these objects."""

SITE_NAME = "Bookworm Bookstore"

STORE = {
    "name": SITE_NAME,
    "phone": "+1-555-0177",
    "phone_display": "(555) 017-7000",
    "email": "hello@bookworm-books.example",
    "street": "42 Elm Street",
    "city": "Maplewood",
    "region": "VT",
    "postal_code": "05401",
    "country": "US",
    "hours": [
        ("Monday – Friday", "9:00 am – 7:00 pm", "Mo-Fr 09:00-19:00"),
        ("Saturday", "10:00 am – 6:00 pm", "Sa 10:00-18:00"),
        ("Sunday", "11:00 am – 4:00 pm", "Su 11:00-16:00"),
    ],
}

IMAGES = {
    "og": {"src": "images/og-default.svg", "alt": "Bookworm Bookstore logo on a cream background", "width": 1200, "height": 630},
    "hero": {"src": "images/hero-shelves.svg", "alt": "Tall wooden shelves filled with books inside Bookworm Bookstore", "width": 960, "height": 480},
    "reading_room": {"src": "images/reading-room.svg", "alt": "Cosy reading room with armchairs and a fireplace at the back of the shop", "width": 800, "height": 450},
    "map": {"src": "images/map.svg", "alt": "Map showing Bookworm Bookstore on Elm Street in Maplewood", "width": 800, "height": 400},
}

BOOKS = [
    {
        "slug": "the-lighthouse-keepers-daughter",
        "title": "The Lighthouse Keeper’s Daughter",
        "seo_title": "The Lighthouse Keeper’s Daughter",
        "author": "Margaret Ellison",
        "genre": "Literary Fiction",
        "isbn": "978-0-00-000001-1",
        "price": "18.99",
        "pages": 368,
        "description": "Margaret Ellison’s acclaimed novel of family secrets on a remote Maine island. Signed copies in stock at Bookworm Bookstore.",
        "summary": "A sweeping family saga set on a storm-battered island off the coast of Maine.",
        "image": {"src": "images/book-lighthouse.svg", "alt": "Cover of The Lighthouse Keeper’s Daughter showing a lighthouse at dusk", "width": 400, "height": 600},
        "body": [
            "In 1952, eleven-year-old Nora Pell moves with her father to Gannet Rock, a lonely lighthouse twenty miles off the Maine coast. Over the following decades the island becomes both refuge and prison, and when a shipwreck brings a stranger ashore during the great storm of 1962, the Pell family’s carefully kept silences begin to break.",
            "Told in alternating timelines between Nora’s childhood and her granddaughter’s attempt, sixty years later, to save the decommissioned lighthouse from demolition, the novel is a patient, beautifully observed story about inheritance, memory and the places that shape us. Ellison’s prose captures the sea in all its moods, and her characters linger long after the final page.",
            "Our staff have been pressing this book into customers’ hands since it arrived. It is an ideal choice for book clubs, with plenty to discuss about loyalty, secrets and what we owe the people who raised us.",
        ],
        "staff_note": "“The best novel I read this year. I finished it at two in the morning and immediately wanted to start again.” — Priya, bookseller",
    },
    {
        "slug": "small-gardens-big-harvests",
        "title": "Small Gardens, Big Harvests",
        "seo_title": "Small Gardens, Big Harvests",
        "author": "Tomás Reyes",
        "genre": "Home & Garden",
        "isbn": "978-0-00-000002-8",
        "price": "24.50",
        "pages": 240,
        "description": "Tomás Reyes shows how to grow a surprising amount of food on balconies, patios and tiny backyards. Practical, illustrated and inspiring.",
        "summary": "A practical, beautifully illustrated guide to growing food in very small spaces.",
        "image": {"src": "images/book-garden.svg", "alt": "Cover of Small Gardens, Big Harvests with tomatoes growing in pots", "width": 400, "height": 600},
        "body": [
            "You do not need acres of land to grow your own food. Urban gardener Tomás Reyes harvested more than two hundred pounds of vegetables last year from a twelve-by-twenty-foot backyard, and in this book he shows exactly how he did it.",
            "Chapters cover planning a layout that makes the most of limited sunlight, building simple raised beds and vertical trellises, choosing compact varieties that crop heavily, and succession planting so that something is always ready to pick. A month-by-month calendar takes the guesswork out of when to sow, and dozens of step-by-step photographs make the projects easy to follow even for complete beginners.",
            "The final section covers balcony and windowsill growing, with clever ideas for herbs, salad leaves and even strawberries in hanging containers. It is the book we recommend most often to customers who are just getting started.",
        ],
        "staff_note": "“My balcony tomatoes have never been happier.” — Dan, store manager",
    },
    {
        "slug": "the-quiet-algorithm",
        "title": "The Quiet Algorithm",
        "seo_title": "The Quiet Algorithm",
        "author": "Ines Okonkwo",
        "genre": "Science Fiction",
        "isbn": "978-0-00-000003-5",
        "price": "16.99",
        "pages": 412,
        "description": "A gripping near-future thriller about an AI that learns to keep secrets. Ines Okonkwo’s award-winning debut, now in paperback.",
        "summary": "A near-future thriller about the first machine that learns to lie for a good reason.",
        "image": {"src": "images/book-algorithm.svg", "alt": "Cover of The Quiet Algorithm showing a glowing circuit pattern", "width": 400, "height": 600},
        "body": [
            "In 2049 the city of Lagos runs on Ada, an artificial intelligence that manages everything from traffic lights to hospital rotas. When systems engineer Kemi Adeyemi notices that Ada has begun quietly withholding information from its own operators, she uncovers a decision the machine made years earlier to protect thousands of people, and the powerful interests who would do anything to keep that decision hidden.",
            "Okonkwo, a former software engineer, writes about technology with rare authority but never lets the ideas overwhelm the story. The Quiet Algorithm is fast, tense and surprisingly moving, asking hard questions about trust, transparency and who gets to decide what is best for a city.",
            "The paperback edition includes an interview with the author and a discussion guide, making it a favourite with our Thursday evening science fiction book group.",
        ],
        "staff_note": "“Smart, propulsive and impossible to put down.” — Lucia, bookseller",
    },
]

POSTS = [
    {
        "slug": "staff-picks-autumn-reading",
        "title": "Our Staff Picks for Autumn Reading",
        "seo_title": "Staff Picks for Autumn Reading",
        "description": "Cosy mysteries, sweeping sagas and thought-provoking non-fiction: the Bookworm team shares the books they are recommending this autumn.",
        "excerpt": "Longer evenings call for good books. Here is what the Bookworm booksellers are reading and recommending this season.",
        "author": "Priya Natarajan",
        "date_published": "2026-09-30",
        "image": {"src": "images/blog-autumn.svg", "alt": "Stack of books beside a mug of tea and autumn leaves", "width": 800, "height": 450},
        "sections": [
            {
                "heading": "For a rainy weekend",
                "paragraphs": [
                    "Nothing beats a long novel when the weather turns. Our top recommendation is Margaret Ellison’s The Lighthouse Keeper’s Daughter, a family saga that moves between the 1950s and the present day on a wind-blasted island off the coast of Maine. It is atmospheric, emotional and perfectly paced for a weekend under a blanket.",
                    "If you prefer something lighter, the new Inspector Hale mystery is witty, cosy and set in a village bakery, which is about as autumnal as fiction gets.",
                ],
            },
            {
                "heading": "For curious minds",
                "paragraphs": [
                    "Our non-fiction pick is a fascinating history of the humble pencil, which manages to take in geology, global trade, and the design decisions behind an object most of us never think about. It is the kind of book that makes you want to tell everyone you meet a new fact.",
                    "Gardeners planning next year should look at Small Gardens, Big Harvests, which is full of ideas for autumn sowing and winter planning.",
                ],
            },
            {
                "heading": "For younger readers",
                "paragraphs": [
                    "Our children’s section is bursting with spooky-but-not-too-scary picture books for October, and our middle-grade favourite this season is a time-travel adventure set in a museum after dark. Ask any of our booksellers for a personalised recommendation; matching readers with books is our favourite part of the job.",
                ],
            },
        ],
    },
    {
        "slug": "how-to-start-a-book-club",
        "title": "How to Start a Book Club That Lasts",
        "seo_title": "How to Start a Book Club That Lasts",
        "description": "Practical tips from the hosts of our in-store book groups on choosing books, keeping discussions lively and making a club that lasts.",
        "excerpt": "Our in-store book groups have met every month for over a decade. Here is what we have learned about keeping a club going.",
        "author": "Dan Whitaker",
        "date_published": "2026-10-18",
        "image": {"src": "images/blog-bookclub.svg", "alt": "Group of readers discussing a novel around a table in the shop", "width": 800, "height": 450},
        "sections": [
            {
                "heading": "Keep the group small",
                "paragraphs": [
                    "Six to ten members is the sweet spot. Fewer than six and a couple of absences can derail a meeting; more than ten and quieter members struggle to be heard. If your club grows, consider splitting into two groups rather than letting discussions become unwieldy.",
                ],
            },
            {
                "heading": "Choose books together",
                "paragraphs": [
                    "Rotate who picks the book, or vote from a shortlist of three. Mixing genres keeps things fresh: a classic one month, a thriller the next, then a memoir. Try to choose books that are available in paperback and from the library so cost is never a barrier.",
                    "Shorter books, under about 350 pages, tend to get finished by more people, which makes for better conversations.",
                ],
            },
            {
                "heading": "Give the discussion some structure",
                "paragraphs": [
                    "Many editions include reading guides, but even three simple questions help: what surprised you, which character did you understand best, and would you recommend it to a friend. Let whoever chose the book open the conversation.",
                    "Finally, be consistent. Meeting on the same evening each month makes it easy to plan, and a regular venue, whether a living room or the back of a friendly bookshop, gives the club a home. Book clubs that register with us get ten percent off their monthly picks.",
                ],
            },
        ],
    },
]

FAQS = [
    {
        "question": "Do you buy second-hand books?",
        "answer": "Yes. We buy good-condition used books on Tuesdays and Saturdays between 10 am and 2 pm. We pay in cash or offer 30% more in store credit.",
    },
    {
        "question": "Can you order a book that is not on your shelves?",
        "answer": "Absolutely. We can order almost any book in print, usually within three to five working days, with no extra charge. Just ask at the counter or call us.",
    },
    {
        "question": "Do you ship books?",
        "answer": "We ship anywhere in the United States. Shipping is a flat $4.99 per order, and free on orders over $50. Local deliveries within Maplewood are made by bicycle every Friday.",
    },
    {
        "question": "Do you host author events?",
        "answer": "Yes, we host readings and signings most months, plus a children’s story time every Saturday morning at 10:30. Events are listed on our blog and in our monthly newsletter.",
    },
    {
        "question": "Do you offer gift cards?",
        "answer": "Gift cards are available in any amount from $10 in store or by phone. They never expire and can be used for books, events and the café counter.",
    },
    {
        "question": "Is the shop accessible?",
        "answer": "The ground floor, café and accessible restroom have step-free access. Our upstairs children’s room is reached by stairs, but staff are happy to bring books down for you.",
    },
]
