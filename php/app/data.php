<?php

declare(strict_types=1);

/*
 * All content for the Summit Hiking Gear site. Views render pages from this array.
 * Note: copy avoids ASCII apostrophes so every string can stay single-quoted.
 */

return [
    'business' => [
        'name' => 'Summit Hiking Gear',
        'legal_name' => 'Summit Hiking Gear Co.',
        'street' => '1200 Canyon Road',
        'city' => 'Boulder',
        'region' => 'CO',
        'postal_code' => '80302',
        'country' => 'US',
        'phone' => '+1-303-555-0187',
        'phone_display' => '(303) 555-0187',
        'email' => 'support@summithikinggear.test',
        'hours' => [
            ['days' => 'Monday to Friday', 'time' => '10:00 am to 7:00 pm', 'spec' => 'Mo-Fr 10:00-19:00'],
            ['days' => 'Saturday', 'time' => '9:00 am to 6:00 pm', 'spec' => 'Sa 09:00-18:00'],
            ['days' => 'Sunday', 'time' => '10:00 am to 4:00 pm', 'spec' => 'Su 10:00-16:00'],
        ],
        'founded' => '2011',
    ],

    'nav' => [
        ['path' => '/', 'label' => 'Home'],
        ['path' => '/about', 'label' => 'About'],
        ['path' => '/products', 'label' => 'Shop'],
        ['path' => '/blog', 'label' => 'Trail Journal'],
        ['path' => '/faq', 'label' => 'FAQ'],
        ['path' => '/contact', 'label' => 'Contact'],
    ],

    // Local SVG placeholders in public/images/<key>.svg
    'images' => [
        'og-default' => ['w' => 1200, 'h' => 630],
        'hero-mountains' => ['w' => 1200, 'h' => 600],
        'store-front' => ['w' => 800, 'h' => 500],
        'gear-testing' => ['w' => 800, 'h' => 500],
        'summit-40l-backpack' => ['w' => 800, 'h' => 800],
        'ridgeline-hiking-boots' => ['w' => 800, 'h' => 800],
        'alpine-trekking-poles' => ['w' => 800, 'h' => 800],
        'choosing-hiking-boots' => ['w' => 1200, 'h' => 630],
        'ten-essentials' => ['w' => 1200, 'h' => 630],
    ],

    'pages' => [
        'home' => [
            'title' => 'Outdoor & Hiking Equipment | Summit Hiking Gear',
            'description' => 'Shop trail-tested backpacks, hiking boots and trekking poles at Summit Hiking Gear in Boulder, with expert fitting and free returns.',
            'h1' => 'Trail-tested gear for every summit',
            'intro' => 'Summit Hiking Gear is an independent outdoor shop at the foot of the Flatirons in Boulder, Colorado. Since 2011 we have helped hikers, backpackers and peak baggers find equipment that fits well, lasts for years and earns its place in the pack. Every product we sell has been carried on real trails by our own staff before it reaches the shelf.',
            'sections' => [
                [
                    'h2' => 'Why hikers shop with us',
                    'paragraphs' => [
                        'We are a small team of guides, thru-hikers and gear nerds, and we only stock equipment we would trust on a long day above treeline. That means fewer products than a big-box store, but each one has been chosen for comfort, durability and repairability rather than marketing claims.',
                        'Come into the shop for a free boot fitting or backpack adjustment, or order online and enjoy free shipping on orders over 75 dollars. If something does not work out on the trail, you have 60 days to return it, even if it is muddy.',
                    ],
                ],
            ],
            'featured_heading' => 'Best-selling gear',
            'blog_heading' => 'From the trail journal',
            'visit_heading' => 'Visit the Boulder store',
            'visit_text' => 'Our shop is at 1200 Canyon Road, a short walk from the Boulder Creek Path. Bring your current boots or pack and we will help you work out what to keep and what to upgrade.',
        ],

        'about' => [
            'title' => 'About Our Outdoor Shop | Summit Hiking Gear',
            'description' => 'Learn how Summit Hiking Gear grew from a garage rental business into an independent Boulder outdoor shop run by guides and thru-hikers.',
            'h1' => 'About Summit Hiking Gear',
            'sections' => [
                [
                    'h2' => 'From a garage to Canyon Road',
                    'paragraphs' => [
                        'Summit Hiking Gear started in 2011 when two mountain guides, Elena Vasquez and Tom Becker, began renting out spare tents and packs from a garage in north Boulder. Visitors kept asking where they could buy the same equipment, so in 2013 they opened a small shop on Canyon Road. The store has doubled in size twice since then, but it is still independently owned and run by people who spend their weekends in the mountains.',
                    ],
                ],
                [
                    'h2' => 'How we choose our gear',
                    'paragraphs' => [
                        'Before any product goes on sale, at least two members of our team test it on real trips. We look at comfort over long days, how it holds up after a season of use, and whether it can be repaired instead of thrown away. Roughly half of the products we test never make it onto our shelves.',
                    ],
                    'subsections' => [
                        ['h3' => 'Field testing', 'text' => 'Our staff log more than 3,000 trail miles a year testing packs, boots, poles and shelters across the Rockies.'],
                        ['h3' => 'Repair first', 'text' => 'We run an in-house repair bench for zippers, buckles and seams, and we favour brands that sell spare parts.'],
                    ],
                ],
                [
                    'h2' => 'Giving back to the trails',
                    'paragraphs' => [
                        'One percent of every sale goes to local trail maintenance groups, and our team spends several days each summer rebuilding eroded switchbacks in the Indian Peaks Wilderness. We also host free monthly clinics on navigation, Leave No Trace principles and backcountry first aid.',
                    ],
                ],
            ],
        ],

        'products' => [
            'title' => 'Shop Hiking Gear | Summit Hiking Gear',
            'description' => 'Browse our hand-picked range of hiking backpacks, waterproof boots and carbon trekking poles, all field tested by the Summit Hiking Gear team.',
            'h1' => 'Shop hiking gear',
            'intro' => [
                'Our range is deliberately small. Instead of filling the shelves with hundreds of near-identical products, we stock a short list of gear that our staff have carried, worn and occasionally abused on trails across Colorado and beyond. Each item below has passed our field testing for comfort, durability and value.',
                'Every product page lists the specifications that matter on the trail, such as weight, capacity and materials, along with notes from the team member who tested it. If you are unsure which size or model is right for you, book a free fitting in the store or call us and we will talk it through.',
                'All prices are in US dollars. Orders over 75 dollars ship free within the contiguous United States, and every purchase comes with our 60-day trail guarantee.',
            ],
            'list_heading' => 'Staff favourites',
        ],

        'blog' => [
            'title' => 'Trail Journal: Hiking Tips | Summit Hiking Gear',
            'description' => 'Hiking advice, gear guides and trail safety tips from the guides and thru-hikers who work at Summit Hiking Gear in Boulder, Colorado.',
            'h1' => 'The Trail Journal',
            'intro' => [
                'The Trail Journal is where our staff share what they have learned from thousands of miles on foot. You will find practical gear advice, safety checklists and honest notes from the field, written by people who actually use the equipment we sell.',
                'We focus on information that helps you hike more comfortably and safely, whether you are planning your first day hike or preparing for a multi-week trek. If there is a subject you would like us to write about, let us know through the contact page or ask at the counter next time you are in the store.',
            ],
            'list_heading' => 'Latest articles',
        ],

        'contact' => [
            'title' => 'Contact Our Boulder Store | Summit Hiking Gear',
            'description' => 'Contact Summit Hiking Gear in Boulder by phone, email or the online form. Find store hours, directions and how to book a free boot fitting.',
            'h1' => 'Contact Summit Hiking Gear',
            'intro' => [
                'Questions about sizing, an order or an upcoming trip? Our team is happy to help. The quickest way to reach us during opening hours is by phone, and we answer emails within one working day. For boot fittings and pack adjustments, booking ahead guarantees that a fitter will be free when you arrive, although walk-ins are always welcome.',
                'If you are contacting us about an online order, please include your order number so we can find it quickly. For repairs, bring the item to the store and our repair bench will give you a quote on the spot.',
            ],
            'form_heading' => 'Send us a message',
            'form_note' => 'This form is for general enquiries. Please do not include card details in your message.',
            'hours_heading' => 'Store hours',
            'find_heading' => 'Getting here',
            'find_text' => 'We are on Canyon Road between 12th and 13th Street, five minutes from the Boulder Creek Path. There is free customer parking behind the store and bike racks out front.',
        ],

        'faq' => [
            'title' => 'Hiking Gear FAQ | Summit Hiking Gear',
            'description' => 'Answers to common questions about shipping, returns, boot fittings, repairs and our 60-day trail guarantee at Summit Hiking Gear.',
            // INTENTIONAL SEO DEFECT: the FAQ page heading is rendered as <h2>, so /faq has no <h1>.
            'heading' => 'Frequently asked questions',
            'intro' => 'Here are the questions our customers ask most often. If yours is not covered, contact us and a member of the team will get back to you within one working day.',
            'items' => [
                ['q' => 'How long does shipping take?', 'a' => 'Orders placed before 2 pm Mountain Time ship the same day. Standard shipping takes three to five working days within the contiguous United States, and express delivery takes one to two working days.'],
                ['q' => 'What is the 60-day trail guarantee?', 'a' => 'If a product does not work for you, return it within 60 days for a full refund or exchange, even if it has been used outdoors. We only ask that it is clean and dry.'],
                ['q' => 'Do I need an appointment for a boot fitting?', 'a' => 'No, but booking ahead guarantees a fitter is available. A full fitting takes about 45 minutes, so bring the socks you plan to hike in.'],
                ['q' => 'Do you repair gear bought elsewhere?', 'a' => 'Yes. Our repair bench fixes zippers, buckles, seams and trekking pole locks on most brands. Bring the item to the store for a free quote.'],
                ['q' => 'Do you ship internationally?', 'a' => 'We currently ship to the United States and Canada only. International customers are welcome to visit the Boulder store in person.'],
                ['q' => 'Can I rent gear before buying?', 'a' => 'We rent tents, backpacks and trekking poles by the day or week. If you buy the same item within 30 days, we deduct the rental fee from the price.'],
            ],
        ],

        'privacy' => [
            'title' => 'Privacy Policy | Summit Hiking Gear',
            'description' => 'How Summit Hiking Gear collects, uses and protects your personal information when you shop online, visit the store or contact our team.',
            // INTENTIONAL SEO DEFECT: noindex on /privacy, while /privacy is still listed in sitemap.xml.
            'robots' => 'noindex, follow',
            'h1' => 'Privacy policy',
            'updated' => '2026-07-15',
            'updated_display' => 'July 15, 2026',
            'sections' => [
                ['h2' => 'Information we collect', 'paragraphs' => ['When you place an order we collect your name, shipping address, email address and phone number. Payments are processed by our payment provider, and we never see or store your full card number. When you use our contact form we receive the details you enter so that we can reply.']],
                ['h2' => 'How we use it', 'paragraphs' => ['We use your information to process orders, provide customer support and, only if you opt in, send our monthly newsletter. We do not sell or rent your personal data. Our hosting provider keeps standard server logs, including IP addresses, for up to 30 days for security purposes.']],
                ['h2' => 'Cookies', 'paragraphs' => ['This website uses a single, strictly necessary session cookie to remember the contents of your basket. We do not use advertising or cross-site tracking cookies.']],
                ['h2' => 'Your choices and rights', 'paragraphs' => ['You may request a copy of the personal information we hold about you, ask us to correct it, or ask us to delete it at any time. Email support@summithikinggear.test or write to 1200 Canyon Road, Boulder, CO 80302, and we will respond within 30 days.']],
            ],
        ],

        'not_found' => [
            'title' => 'Page Not Found | Summit Hiking Gear',
            'description' => 'The page you were looking for could not be found. Browse our hiking gear, read the Trail Journal or return to the Summit Hiking Gear home page.',
            'h1' => 'Page not found',
            'text' => 'Sorry, that trail does not go anywhere. The page may have moved or the link may be out of date. Try one of these instead:',
        ],
    ],

    'products' => [
        [
            'slug' => 'summit-40l-backpack',
            'name' => 'Summit 40L Backpack',
            'title' => 'Summit 40L Backpack | Summit Hiking Gear',
            'description' => 'A lightweight 40 litre hiking backpack with an adjustable torso, ventilated back panel and hipbelt pockets. Ideal for long day hikes and overnights.',
            'price' => '189.00',
            'sku' => 'SHG-PACK-40',
            'image' => 'summit-40l-backpack',
            'summary' => 'A 1.2 kg, 40 litre pack with an adjustable torso and ventilated back panel.',
            'specs' => ['Weight: 1.2 kg', 'Capacity: 40 litres', 'Torso range: 40 to 53 cm', 'Material: recycled 210D ripstop nylon'],
            'sections' => [
                ['h2' => 'Built for big days and quick overnights', 'paragraphs' => ['The Summit 40L is the pack our staff reach for most often. It is large enough for an overnight trip with a compact tent and quilt, yet light and narrow enough for a fast day on a fourteener. The frame transfers weight to your hips so your shoulders stay fresh, even with a full load of water and layers.']],
                ['h2' => 'Fit and comfort', 'paragraphs' => ['The torso length adjusts in seconds with a sliding harness, so one pack can fit most hikers. A suspended mesh back panel keeps air moving between you and the pack on hot climbs, and the padded hipbelt has two zippered pockets that are big enough for a phone and snacks.']],
                ['h2' => 'Field notes from our team', 'paragraphs' => ['Our tester carried this pack for 400 miles on the Colorado Trail. After a full season, the fabric showed only minor scuffs and every buckle still worked perfectly. The side pockets are easy to reach while walking, which makes staying hydrated much simpler.']],
            ],
        ],
        [
            'slug' => 'ridgeline-hiking-boots',
            'name' => 'Ridgeline Waterproof Hiking Boots',
            // INTENTIONAL SEO DEFECT: copy-paste error, this product reuses the backpack page title.
            'title' => 'Summit 40L Backpack | Summit Hiking Gear',
            'description' => 'Waterproof mid-height leather hiking boots with a grippy Vibram outsole and a resoleable build. Comfortable from the first mile to the last.',
            'price' => '229.00',
            'sku' => 'SHG-BOOT-RIDGE',
            'image' => 'ridgeline-hiking-boots',
            'summary' => 'Waterproof full-grain leather boots with a Vibram outsole and resoleable construction.',
            'specs' => ['Weight: 1.1 kg per pair (size 9)', 'Upper: full-grain leather', 'Membrane: waterproof and breathable', 'Outsole: Vibram, resoleable'],
            'sections' => [
                ['h2' => 'Made for rough, wet trails', 'paragraphs' => ['The Ridgeline boot combines a supportive mid-height leather upper with a waterproof, breathable membrane, so your feet stay dry crossing streams and snowfields. The aggressive Vibram outsole grips confidently on wet granite, loose scree and muddy forest paths alike.']],
                ['h2' => 'Comfort out of the box', 'paragraphs' => ['Unlike many leather boots, the Ridgeline needs very little breaking in. A cushioned midsole absorbs impact on long descents, and the roomy toe box leaves space for your feet to swell on hot afternoons. We recommend a professional fitting to find the right size and lacing pattern for your feet.']],
                ['h2' => 'Built to be repaired', 'paragraphs' => ['When the tread finally wears down, the Ridgeline can be resoled rather than replaced. Our repair partners can fit a new outsole for a fraction of the cost of new boots, adding years of life and keeping old footwear out of landfill.']],
            ],
        ],
        [
            'slug' => 'alpine-trekking-poles',
            'name' => 'Alpine Carbon Trekking Poles',
            'title' => 'Alpine Carbon Trekking Poles | Summit Hiking Gear',
            'description' => 'Ultralight carbon fibre trekking poles with cork grips and fast flick locks. They fold small for scrambling and weigh just 390 grams per pair.',
            'price' => '149.00',
            'sku' => 'SHG-POLE-ALP',
            'image' => 'alpine-trekking-poles',
            'summary' => 'Three-section carbon poles with cork grips that weigh only 390 grams per pair.',
            'specs' => ['Weight: 390 g per pair', 'Length: 105 to 135 cm', 'Shaft: carbon fibre', 'Grip: natural cork with foam extension'],
            'sections' => [
                ['h2' => 'Light, stiff and adjustable', 'paragraphs' => ['The Alpine poles use a carbon fibre shaft that is stiff enough to support you on steep descents yet light enough that you will forget you are carrying them. Aluminium flick locks make adjusting the length quick and reliable, even with gloves on.']],
                ['h2' => 'Comfortable grips for long days', 'paragraphs' => ['Natural cork grips mould to your hands over time and stay comfortable when your palms are sweaty. A foam extension below the main grip lets you choke down on steep traverses without adjusting the pole length.']],
                ['h2' => 'Field notes from our team', 'paragraphs' => ['We used these poles on a two-week trek in the San Juan Mountains. They saved our knees on every descent, packed down small enough to strap to the side of a pack while scrambling, and survived several falls on rocky ground without bending.']],
            ],
        ],
    ],

    'posts' => [
        [
            'slug' => 'how-to-choose-hiking-boots',
            'headline' => 'How to choose the right hiking boots',
            'title' => 'How to Choose the Right Hiking Boots | Summit Hiking Gear',
            'description' => 'Our boot fitters explain how to pick hiking boots that fit properly, from choosing the right height and materials to the best time of day to try them on.',
            'date' => '2026-08-22',
            'date_display' => 'August 22, 2026',
            'author' => 'Jordan Lee',
            'image' => 'choosing-hiking-boots',
            'excerpt' => 'Badly fitting boots can ruin a great hike. Our fitters share the questions they ask every customer before recommending a pair.',
            'sections' => [
                ['h2' => 'Start with the terrain', 'paragraphs' => ['The right boot depends on where you hike. Light trail shoes are perfect for well-maintained paths and fast day hikes. Mid-height boots add ankle support and protection for rocky trails, while stiffer, high boots are best for heavy loads, off-trail travel and snow.']],
                [
                    'h2' => 'Getting the fit right',
                    'paragraphs' => ['Fit matters more than any feature. A boot that pinches in the store will feel much worse after ten miles.'],
                    'subsections' => [
                        ['h3' => 'Try boots on in the afternoon', 'text' => 'Feet swell during the day, so trying boots on later gives a more realistic fit for a long hike.'],
                        ['h3' => 'Bring your hiking socks', 'text' => 'Sock thickness can change the fit by half a size, so always try boots on with the socks you plan to wear.'],
                        ['h3' => 'Test the descent', 'text' => 'Walk down a ramp. If your toes touch the front of the boot, go up half a size or adjust the lacing.'],
                    ],
                ],
                ['h2' => 'Leather or synthetic?', 'paragraphs' => ['Full-grain leather boots are durable, supportive and can often be resoled, but they are heavier and take longer to dry. Synthetic boots are lighter and need little breaking in, though they usually wear out sooner. Many hikers own one of each and choose based on the trip.']],
            ],
        ],
        [
            'slug' => 'ten-essentials-day-hike-checklist',
            'headline' => 'The ten essentials: a day hike checklist',
            'title' => 'The Ten Essentials Day Hike Checklist | Summit Hiking Gear',
            'description' => 'A practical guide to the ten essentials every hiker should carry, with tips from our guides on packing light without leaving safety behind.',
            'date' => '2026-10-05',
            'date_display' => 'October 5, 2026',
            'author' => 'Priya Raman',
            'image' => 'ten-essentials',
            'excerpt' => 'Even on a short hike, the weather can turn quickly. Here is the safety kit our guides never leave the trailhead without.',
            'sections' => [
                ['h2' => 'Why the ten essentials matter', 'paragraphs' => ['The ten essentials are a list of gear that helps you prevent emergencies and survive one if it happens. The list was first published by a Seattle climbing club in the 1930s, and it is still the foundation of every pack our guides carry, whether they are out for two hours or two weeks.']],
                ['h2' => 'The checklist', 'paragraphs' => ['Navigation, such as a map, compass and charged phone. A headlamp with spare batteries. Sun protection, including sunglasses and sunscreen. A first aid kit. A knife or multitool. Fire starter. An emergency shelter such as a bivy bag. Extra food. Extra water or a way to treat it. Extra clothes, including a warm layer and a rain jacket.']],
                ['h2' => 'Packing light without cutting corners', 'paragraphs' => ['Carrying the essentials does not have to mean a heavy pack. A small first aid kit, a lightweight emergency bivy and a compact headlamp together weigh less than a full water bottle. Review your kit before each season, replace anything that has expired, and adjust quantities of food, water and clothing to suit the length of the hike and the forecast.']],
            ],
        ],
    ],
];
