// Single source of content for the DevNotes site.

export const site = {
	name: 'DevNotes',
	tagline: 'Practical guides and articles for working web developers',
	email: 'editors@devnotes.example',
	defaultImage: '/images/og-default.svg',
	founded: '2021'
};

export const nav = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/docs', label: 'Docs' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/faq', label: 'FAQ' },
	{ href: '/contact', label: 'Contact' }
];

export interface Section {
	heading: string;
	paragraphs: string[];
	code?: string;
}

export interface Guide {
	slug: string;
	name: string;
	title: string;
	description: string;
	summary: string;
	level: 'Beginner' | 'Intermediate' | 'Advanced';
	readingTime: string;
	updated: string;
	image: string;
	imageAlt: string;
	sections: Section[];
}

export const guides: Guide[] = [
	{
		slug: 'getting-started-with-git',
		name: 'Getting Started with Git',
		title: 'Getting Started with Git | DevNotes',
		description:
			'Learn the Git basics every developer needs: initialising a repository, staging and committing changes, branching and pushing to a remote.',
		summary: 'Repositories, commits, branches and remotes explained from first principles.',
		level: 'Beginner',
		readingTime: '9 min read',
		updated: '2026-08-21',
		image: '/images/guide-git.svg',
		imageAlt: 'Diagram of a Git commit graph with a feature branch merging into main',
		sections: [
			{
				heading: 'What Git actually stores',
				paragraphs: [
					'Git is a content-addressed database of snapshots. Every commit records the full state of your project at a moment in time, along with a pointer to its parent commit. Branches are nothing more than movable labels that point at a commit, which is why creating one is instant and cheap.',
					'Understanding this model makes the rest of Git far less mysterious. When you merge, Git creates a commit with two parents. When you rebase, it replays your commits on top of a new base, producing new snapshots with new identifiers.'
				]
			},
			{
				heading: 'Your first repository',
				paragraphs: [
					'Create a folder, run git init, and Git creates a hidden directory that holds the entire history. Add files to the staging area with git add, then record a snapshot with git commit. The staging area lets you build a commit carefully, including only the changes that belong together.'
				],
				code: 'git init\ngit add README.md\ngit commit -m "Add project readme"'
			},
			{
				heading: 'Branching and sharing work',
				paragraphs: [
					'Create a branch for each feature or fix with git switch -c, commit your work there, and merge it back when it is ready. Connect a remote such as a hosted repository with git remote add, then publish your branch with git push. Teammates can fetch your branch, review it and merge it through a pull request.',
					'Commit little and often, write messages that explain why a change was made, and pull before you start new work. These three habits prevent most of the merge conflicts beginners run into.'
				]
			}
		]
	},
	{
		slug: 'css-grid-layout',
		name: 'CSS Grid Layout',
		title: 'CSS Grid Layout Explained | DevNotes',
		description:
			'A practical guide to CSS Grid: defining tracks, placing items, named areas, auto-fit responsive grids and when to choose Grid over Flexbox.',
		summary: 'Tracks, areas and responsive patterns for two-dimensional layouts.',
		level: 'Intermediate',
		readingTime: '11 min read',
		updated: '2026-09-03',
		image: '/images/guide-grid.svg',
		imageAlt: 'Illustration of a twelve-column CSS grid with header, sidebar and content areas',
		sections: [
			{
				heading: 'Thinking in two dimensions',
				paragraphs: [
					'Flexbox arranges items along a single axis, while CSS Grid controls rows and columns at the same time. That makes Grid the natural choice for page layouts, card galleries and any design where items need to line up both horizontally and vertically.',
					'A grid is defined on the container. Children become grid items automatically and flow into the tracks you declare, so most layouts need very little CSS on the items themselves.'
				]
			},
			{
				heading: 'Responsive grids without media queries',
				paragraphs: [
					'The repeat function combined with auto-fit and minmax creates a grid that adds or removes columns based on the available space. Each column is at least the minimum size and grows to share any leftover room equally.'
				],
				code: '.cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));\n  gap: 1.5rem;\n}'
			},
			{
				heading: 'Named template areas',
				paragraphs: [
					'For whole-page layouts, grid-template-areas lets you draw the layout in ASCII art. Assign each child a grid-area name and the browser places it for you. Changing the layout at a breakpoint becomes a matter of redrawing the template rather than repositioning every element.',
					'Use Grid for the overall structure and Flexbox for the small, one-dimensional pieces inside it, such as navigation bars and button groups. The two systems complement each other well.'
				]
			}
		]
	},
	{
		slug: 'typescript-generics',
		name: 'TypeScript Generics',
		title: 'TypeScript Generics in Practice | DevNotes',
		description:
			'Understand TypeScript generics with real examples: generic functions, constraints, default type parameters and building reusable typed utilities.',
		summary: 'Write reusable, type-safe functions and components with generics.',
		level: 'Advanced',
		readingTime: '13 min read',
		updated: '2026-10-11',
		image: '/images/guide-ts.svg',
		imageAlt: 'Code editor showing a generic TypeScript function with a type parameter',
		sections: [
			{
				heading: 'Why generics exist',
				paragraphs: [
					'Without generics, a reusable function either accepts any, losing all type information, or is duplicated for each type it supports. Generics let a function declare a type parameter that the caller fills in, so the return type stays connected to the input type.',
					'Most of the time you never write the type argument yourself. TypeScript infers it from the values you pass, which keeps call sites clean while preserving full type safety.'
				]
			},
			{
				heading: 'Constraints and defaults',
				paragraphs: [
					'A constraint limits which types a parameter accepts. Writing T extends object, or K extends keyof T, lets you safely access properties inside the function body while still keeping it generic.'
				],
				code: 'function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {\n  return items.map((item) => item[key]);\n}'
			},
			{
				heading: 'Building reusable utilities',
				paragraphs: [
					'Generics shine in shared code: API clients that return typed responses, form helpers that know the shape of their fields, and collection utilities like groupBy or uniqueBy. Start with a concrete implementation, notice the duplication, then extract a type parameter.',
					'Keep type parameters few and well named. If a signature needs more than three, it is often a sign the function is doing too much and should be split.'
				]
			}
		]
	}
];

export interface Post {
	slug: string;
	title: string;
	metaTitle: string;
	description: string;
	excerpt: string;
	author: string;
	datePublished: string;
	image: string;
	imageAlt: string;
	/** Intentional SEO defect switch: render the post without any JSON-LD. */
	omitJsonLd?: boolean;
	sections: Section[];
	/** Optional "further reading" links rendered at the end of the post. */
	links?: { href: string; label: string }[];
}

export const posts: Post[] = [
	{
		slug: 'why-we-moved-to-static-site-generation',
		title: 'Why We Moved DevNotes to Static Site Generation',
		metaTitle: 'Why We Moved to Static Site Generation | DevNotes',
		description:
			'How switching DevNotes from a server-rendered CMS to static site generation cut our page load times in half and simplified hosting.',
		excerpt: 'Faster pages, cheaper hosting and fewer moving parts: lessons from our migration.',
		author: 'Ana Kowalski',
		datePublished: '2026-07-30',
		image: '/images/blog-ssg.svg',
		imageAlt: 'Chart comparing page load times before and after the static site migration',
		sections: [
			{
				heading: 'The problem with our old stack',
				paragraphs: [
					'For three years DevNotes ran on a traditional CMS that rendered every page on request. It worked, but each visit triggered database queries for content that changed perhaps once a week. During traffic spikes from social media the server struggled, and we spent more time tuning caches than writing articles.'
				]
			},
			{
				heading: 'What static generation changed',
				paragraphs: [
					'Moving to a static site generator meant every page is built once at deploy time and served as plain HTML from a CDN. Our median time to first byte dropped from 420 milliseconds to under 60, and the largest contentful paint improved by almost half on mobile connections.',
					'Hosting costs fell too. Static files need no application server, so we replaced two virtual machines with a free static hosting tier. Deploys became atomic: a build either succeeds and goes live or fails and changes nothing.'
				]
			},
			{
				heading: 'Trade-offs we accepted',
				paragraphs: [
					'Static sites are not free of compromise. Search and comments now rely on small client-side widgets, and a full rebuild takes about forty seconds. For a content site that publishes a few articles a week, that is a trade we would make again without hesitation.',
					'If you are considering a similar move, start by auditing which pages genuinely need per-request data. In our case the answer was none of them.'
				]
			}
		],
		links: [
			// Intentional SEO defect: broken external link to a non-existent domain.
			{ href: 'https://example.invalid/static-site-benchmarks', label: 'Our full benchmark results' },
			{ href: '/docs/css-grid-layout', label: 'CSS Grid Layout Explained' }
		]
	},
	{
		slug: 'writing-accessible-forms',
		title: 'Writing Accessible Forms: A Checklist',
		metaTitle: 'Accessible Forms Checklist for Developers | DevNotes',
		description:
			'A practical checklist for building accessible HTML forms: labels, error messages, focus management, input types and keyboard support.',
		excerpt: 'Labels, errors, focus and keyboard support: a checklist you can apply today.',
		author: 'Daniel Osei',
		datePublished: '2026-10-19',
		image: '/images/blog-forms.svg',
		imageAlt: 'Mock sign-up form with clearly labelled fields and an inline error message',
		omitJsonLd: true,
		sections: [
			{
				heading: 'Every input needs a real label',
				paragraphs: [
					'Placeholder text is not a label. It disappears as soon as someone starts typing and is often too low in contrast to read. Use a label element connected to its input, either by wrapping the input or with matching for and id attributes, so screen readers announce the field correctly and clicking the label focuses the input.'
				]
			},
			{
				heading: 'Make errors easy to find and fix',
				paragraphs: [
					'When validation fails, describe the problem in text next to the field and link it with aria-describedby. Move focus to an error summary at the top of the form for long forms, and never rely on colour alone to signal that something is wrong.',
					'Validate on submit rather than on every keystroke. Interrupting someone while they are still typing an email address is frustrating for everyone and especially disorienting for screen reader users.'
				]
			},
			{
				heading: 'Use the platform',
				paragraphs: [
					'Native input types such as email, tel and number give mobile users the right keyboard and provide basic validation for free. The autocomplete attribute lets browsers fill in names and addresses, saving time for people with motor impairments. Finally, test the whole form using only a keyboard: if you cannot complete it without a mouse, neither can many of your users.'
				]
			}
		]
	}
];

export const faqs = [
	{
		q: 'Is DevNotes free to read?',
		a: 'Yes. Every guide and article on DevNotes is free to read, with no paywall and no account required. The site is funded by a small number of clearly labelled sponsorships.'
	},
	{
		q: 'How often do you publish new content?',
		a: 'We publish one or two blog articles a month and review every documentation guide at least twice a year so that code samples stay current with the latest browser and tooling releases.'
	},
	{
		q: 'Can I use the code samples in my own projects?',
		a: 'Yes. All code samples are released under the MIT licence, so you can copy, adapt and use them in personal and commercial projects without attribution.'
	},
	{
		q: 'Do you accept guest posts?',
		a: 'We accept a limited number of guest articles from practising developers. Send a short outline and two writing samples through the contact page and an editor will reply within two weeks.'
	},
	{
		q: 'I found a mistake in a guide. How do I report it?',
		a: 'Thank you! Use the contact form and include the page address and a short description. Corrections are usually published within a few days and credited in the changelog.'
	},
	{
		q: 'Which level of experience are the guides written for?',
		a: 'Each guide is tagged Beginner, Intermediate or Advanced. Beginner guides assume only basic HTML knowledge, while advanced guides expect comfort with JavaScript and the command line.'
	}
];

export const team = [
	{ name: 'Ana Kowalski', role: 'Founder and editor-in-chief' },
	{ name: 'Daniel Osei', role: 'Accessibility and front-end writer' },
	{ name: 'Mei Tanaka', role: 'Technical reviewer, TypeScript and tooling' }
];

export function formatDate(iso: string) {
	return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'UTC'
	});
}
