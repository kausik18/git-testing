import { site, type Guide, type Post } from './data';

const abs = (base: URL | undefined, path: string) => new URL(path, base).href;

export function organizationSchema(base?: URL) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'@id': abs(base, '/#organization'),
		name: site.name,
		description: site.tagline,
		url: abs(base, '/'),
		logo: abs(base, '/favicon.svg'),
		email: site.email,
		foundingDate: site.founded
	};
}

export function websiteSchema(base?: URL) {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: site.name,
		url: abs(base, '/'),
		publisher: { '@id': abs(base, '/#organization') }
	};
}

export function breadcrumbSchema(base: URL | undefined, items: { name: string; path: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: item.name,
			item: abs(base, item.path)
		}))
	};
}

export function techArticleSchema(base: URL | undefined, g: Guide) {
	return {
		'@context': 'https://schema.org',
		'@type': 'TechArticle',
		headline: g.name,
		description: g.description,
		image: abs(base, g.image),
		dateModified: g.updated,
		proficiencyLevel: g.level,
		author: { '@type': 'Organization', name: site.name, url: abs(base, '/') },
		publisher: { '@id': abs(base, '/#organization') },
		mainEntityOfPage: abs(base, `/docs/${g.slug}`)
	};
}

export function blogPostingSchema(base: URL | undefined, p: Post) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: p.title,
		description: p.description,
		image: abs(base, p.image),
		datePublished: p.datePublished,
		dateModified: p.datePublished,
		author: { '@type': 'Person', name: p.author },
		publisher: {
			'@type': 'Organization',
			name: site.name,
			logo: { '@type': 'ImageObject', url: abs(base, '/favicon.svg') }
		},
		mainEntityOfPage: abs(base, `/blog/${p.slug}`)
	};
}

export function faqSchema(faqs: { q: string; a: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((f) => ({
			'@type': 'Question',
			name: f.q,
			acceptedAnswer: { '@type': 'Answer', text: f.a }
		}))
	};
}
