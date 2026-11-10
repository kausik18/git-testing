// Single source of content for the FitPulse Gym site.

export const business = {
	name: 'FitPulse Gym',
	tagline: 'Strength, conditioning and community in the heart of Riverside',
	phone: '+1-555-0147',
	email: 'hello@fitpulse.example',
	street: '218 Foundry Lane',
	city: 'Riverside',
	region: 'CA',
	postalCode: '92501',
	country: 'US',
	priceRange: '$$',
	openingHours: ['Mo-Fr 05:30-22:00', 'Sa-Su 07:00-19:00'],
	defaultImage: '/images/og-default.svg'
};

export const nav = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/classes', label: 'Classes' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/faq', label: 'FAQ' },
	{ href: '/contact', label: 'Contact' }
];

export interface GymClass {
	slug: string;
	name: string;
	title: string;
	description: string;
	summary: string;
	image: string;
	imageAlt: string;
	duration: string;
	intensity: 'Low' | 'Moderate' | 'High';
	schedule: string[];
	coach: string;
	noindex?: boolean;
	body: string[];
	benefits: string[];
}

export const classes: GymClass[] = [
	{
		slug: 'hiit-blast',
		name: 'HIIT Blast',
		title: 'HIIT Blast Class | FitPulse Gym',
		description:
			'HIIT Blast is a 45-minute interval class at FitPulse Gym that builds fitness and burns calories with short, coached bursts of effort.',
		summary: 'Forty-five minutes of coached intervals that push your heart rate up and your stamina further.',
		image: '/images/class-hiit.svg',
		imageAlt: 'Members doing burpees and kettlebell swings in the HIIT Blast class',
		duration: '45 minutes',
		intensity: 'High',
		schedule: ['Mon 06:00', 'Wed 06:00', 'Fri 18:30', 'Sat 09:00'],
		coach: 'Marcus Reed',
		noindex: true,
		body: [
			'HIIT Blast is our signature high-intensity interval class. Each session is built around short work periods of twenty to forty seconds followed by brief recoveries, so you spend more time training hard and less time watching the clock. Coach Marcus Reed programs a new circuit every week, mixing kettlebell swings, rower sprints, sled pushes, burpee variations and core finishers.',
			'Because intervals are time-based rather than rep-based, the class works for every fitness level. A first-timer and a seasoned athlete can train side by side; the only difference is the load they choose and the pace they hold. Coaches demonstrate a lighter and a harder option for every movement and walk the floor to correct form throughout the session.',
			'Expect a ten-minute dynamic warm-up, three blocks of intervals, and a short cool-down with mobility work. Heart-rate monitors are available at the front desk if you want to track your effort zones on the studio screen. Bring a towel and a water bottle, and arrive five minutes early on your first visit so we can set up your station.'
		],
		benefits: [
			'Improves aerobic and anaerobic capacity',
			'Builds work capacity in under an hour',
			'Scalable for beginners and advanced athletes',
			'New programming every week keeps it fresh'
		]
	},
	{
		slug: 'power-yoga',
		name: 'Power Yoga',
		title: 'Power Yoga Class | FitPulse Gym',
		description:
			'Power Yoga at FitPulse Gym links strength-focused flows with breath work to build mobility, balance and core control in 60 minutes.',
		summary: 'A strong, flowing yoga practice that builds mobility, balance and a calmer mind.',
		image: '/images/class-yoga.svg',
		imageAlt: 'Group holding warrior two pose in the Power Yoga studio',
		duration: '60 minutes',
		intensity: 'Moderate',
		schedule: ['Tue 07:00', 'Thu 19:00', 'Sun 10:00'],
		coach: 'Priya Natarajan',
		body: [
			'Power Yoga is a vigorous, vinyasa-style class that treats yoga as strength training for the whole body. Coach Priya Natarajan sequences each session around a peak pose, building toward it with sun salutations, standing balances and controlled transitions that challenge your shoulders, hips and core.',
			'Unlike a gentle stretch class, Power Yoga keeps you moving. You will hold lunges and planks long enough to feel the burn, then flow through sequences that raise your heart rate. Breath is the anchor throughout: learning to stay calm and steady while working hard is one of the most useful skills you can take back to the weight room or into everyday life.',
			'The class suits lifters looking to improve mobility, runners who want stronger hips and ankles, and anyone who needs an hour to switch off. Mats, blocks and straps are provided, and the studio is heated to a comfortable 26 degrees Celsius. If you have an injury, tell Priya before class so she can suggest modifications for you.'
		],
		benefits: [
			'Increases hip, hamstring and shoulder mobility',
			'Strengthens the core and stabilising muscles',
			'Improves balance and body awareness',
			'Teaches breathing techniques for stress relief'
		]
	},
	{
		slug: 'spin-cycle',
		name: 'Spin Cycle',
		title: 'Spin Cycle Indoor Cycling | FitPulse Gym',
		description:
			'Spin Cycle is an indoor cycling class at FitPulse Gym with music-driven climbs and sprints, powered by smart bikes and live metrics.',
		summary: 'Music-driven indoor cycling with live power metrics on our smart bikes.',
		image: '/images/class-spin.svg',
		imageAlt: 'Row of riders on smart bikes under coloured studio lights',
		duration: '50 minutes',
		intensity: 'High',
		schedule: ['Mon 18:00', 'Tue 06:15', 'Thu 06:15', 'Sat 08:00'],
		coach: 'Lena Fischer',
		body: [
			'Spin Cycle turns our cycling studio into a rolling concert. Coach Lena Fischer builds every ride around a playlist, matching cadence to the beat and using the chorus for sprints and the bridge for long seated climbs. The result is a class that flies by while quietly building serious cardiovascular fitness.',
			'Our twenty-four smart bikes measure cadence, resistance and power output in real time. You can ride with your numbers private, or opt in to the studio leaderboard for a little friendly competition. Over time, your FitPulse app account logs every ride so you can see your functional threshold power improve week after week.',
			'Cycling is low-impact, which makes Spin Cycle a great choice if you are returning from injury or want to train hard without pounding your knees. Clip-in shoes are available to borrow, but trainers work fine with the dual-sided pedals. Arrive ten minutes early for your first ride so a coach can set your saddle height and handlebar position correctly.'
		],
		benefits: [
			'Low-impact cardio that is kind to joints',
			'Live power and cadence data on every bike',
			'Builds leg endurance and threshold power',
			'High-energy music keeps motivation up'
		]
	}
];

export interface BlogPost {
	slug: string;
	title: string;
	metaTitle: string;
	description: string;
	excerpt: string;
	author: string;
	datePublished: string;
	image: string;
	imageAlt: string;
	sections: { heading: string; paragraphs: string[] }[];
}

export const posts: BlogPost[] = [
	{
		slug: 'beginners-guide-to-strength-training',
		title: "A Beginner's Guide to Strength Training",
		metaTitle: 'Beginner Strength Training Guide | FitPulse Gym',
		description:
			'New to lifting? Our coaches explain the five movement patterns, how to pick your starting weights and how often to train each week.',
		excerpt:
			'The five movement patterns, how to choose starting weights and how often to train when you are new to lifting.',
		author: 'Marcus Reed',
		datePublished: '2026-09-14',
		image: '/images/blog-strength.svg',
		imageAlt: 'Coach spotting a member during a barbell back squat',
		sections: [
			{
				heading: 'Start with movement patterns, not muscles',
				paragraphs: [
					'Walking into a weight room for the first time can feel overwhelming, but almost every exercise falls into one of five patterns: squat, hinge, push, pull and carry. If your weekly plan includes at least one exercise from each pattern, you are training your whole body without needing to memorise a list of muscles.',
					'A goblet squat, a Romanian deadlift, a dumbbell bench press, a seated cable row and a farmer carry make an excellent first program. Each movement is easy to learn, simple to load and safe to fail on.'
				]
			},
			{
				heading: 'Choose weights you can control',
				paragraphs: [
					'For your first month, pick a weight you could lift for about twelve repetitions but stop at eight to ten. Leaving a couple of reps in reserve lets you focus on technique and recover quickly between sessions.',
					'Add a small amount of weight when every set feels smooth. Progress should be gradual: two kilograms on a squat each week adds up to a remarkable change over a year.'
				]
			},
			{
				heading: 'How often should beginners train?',
				paragraphs: [
					'Two or three full-body sessions a week, with a rest day in between, is plenty. Your muscles grow while you recover, not while you train, so sleep and protein matter just as much as the time you spend in the gym.',
					'If you want a coach to check your form, book a free induction at the front desk. Every FitPulse membership includes one personal technique session in your first month.'
				]
			}
		]
	},
	{
		slug: 'how-to-recover-after-a-hard-workout',
		title: 'How to Recover After a Hard Workout',
		metaTitle: 'Workout Recovery Tips From Our Coaches | FitPulse Gym',
		description:
			'Sleep, nutrition, hydration and active recovery: practical tips from FitPulse coaches to help you bounce back faster after tough sessions.',
		excerpt:
			'Sleep, food, water and gentle movement: the four pillars of bouncing back after a tough session.',
		author: 'Priya Natarajan',
		datePublished: '2026-10-02',
		image: '/images/blog-recovery.svg',
		imageAlt: 'Member stretching on a foam roller in the recovery zone',
		sections: [
			{
				heading: 'Sleep is the best recovery tool',
				paragraphs: [
					'No supplement or gadget comes close to a full night of sleep. During deep sleep your body releases growth hormone and repairs the tiny muscle fibre damage caused by training. Aim for seven to nine hours, keep your bedroom cool and dark, and try to go to bed at a consistent time.',
					'If you trained late in the evening, a short wind-down routine of light stretching and a screen-free half hour can help your nervous system settle.'
				]
			},
			{
				heading: 'Refuel with protein and carbohydrates',
				paragraphs: [
					'After a demanding session, eat a meal containing protein and carbohydrates within a couple of hours. Protein supplies the amino acids that rebuild muscle, while carbohydrates refill the glycogen stores you burned through during intervals or heavy lifting.',
					'Rehydrate steadily throughout the day rather than drinking a litre at once. If you sweat heavily in Spin Cycle or HIIT Blast, an electrolyte drink can help.'
				]
			},
			{
				heading: 'Keep moving on rest days',
				paragraphs: [
					'Complete rest is not always the fastest route to feeling fresh. Light activity such as walking, easy cycling or a Power Yoga class increases blood flow and reduces stiffness without adding fatigue.',
					'Our recovery zone has foam rollers, massage guns and a mobility rig. Ten minutes there after each session is a habit that pays off for years.'
				]
			}
		]
	}
];

export const faqs = [
	{
		q: 'Do I need to book classes in advance?',
		a: 'Yes. Classes are capped to keep coaching quality high, so book through the FitPulse app or at the front desk up to seven days ahead. Unused bookings can be cancelled free of charge until two hours before the start time.'
	},
	{
		q: 'Is there a joining fee?',
		a: 'There is no joining fee on monthly or annual memberships. You can also try any class with a free day pass before committing to a membership.'
	},
	{
		q: 'What are your opening hours?',
		a: 'We are open from 05:30 to 22:00 on weekdays and from 07:00 to 19:00 on weekends. Staffed reception hours are 06:00 to 21:00 every day.'
	},
	{
		q: 'Can beginners join HIIT Blast or Spin Cycle?',
		a: 'Absolutely. Every class offers lighter and harder options, and coaches will help you find the right intensity. We recommend arriving ten minutes early for your first session so we can set up your equipment.'
	},
	{
		q: 'Do you offer personal training?',
		a: 'Yes. All of our coaches offer one-to-one and small-group personal training. Every new member also receives a free technique session in their first month.'
	},
	{
		q: 'Is there parking and are showers available?',
		a: 'There is free parking for members in the Foundry Lane lot behind the gym, plus secure bike racks by the entrance. Changing rooms have showers, lockers, towels and hair dryers.'
	},
	{
		q: 'Can I freeze or cancel my membership?',
		a: 'Monthly memberships can be cancelled with thirty days notice, and any membership can be frozen for up to three months per year for travel, injury or illness at no cost.'
	}
];

export const team = [
	{ name: 'Marcus Reed', role: 'Head Coach, HIIT & Strength' },
	{ name: 'Priya Natarajan', role: 'Yoga & Mobility Lead' },
	{ name: 'Lena Fischer', role: 'Cycling & Endurance Coach' }
];

export function getClass(slug: string) {
	return classes.find((c) => c.slug === slug);
}

export function getPost(slug: string) {
	return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
	return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'UTC'
	});
}
