import { SITE_URL } from '$app/env/public';
import { business, type BlogPost, type GymClass } from '#lib/data.ts';

const abs = (path: string) => SITE_URL + path;

export function gymSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'ExerciseGym',
		'@id': abs('/#gym'),
		name: business.name,
		description: business.tagline,
		url: abs('/'),
		logo: abs('/favicon.svg'),
		image: abs(business.defaultImage),
		telephone: business.phone,
		email: business.email,
		priceRange: business.priceRange,
		openingHours: business.openingHours,
		address: {
			'@type': 'PostalAddress',
			streetAddress: business.street,
			addressLocality: business.city,
			addressRegion: business.region,
			postalCode: business.postalCode,
			addressCountry: business.country
		}
	};
}

export function websiteSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: business.name,
		url: abs('/'),
		publisher: { '@id': abs('/#gym') }
	};
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: item.name,
			item: abs(item.path)
		}))
	};
}

export function serviceSchema(c: GymClass) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: c.name,
		serviceType: 'Group fitness class',
		description: c.description,
		image: abs(c.image),
		url: abs(`/classes/${c.slug}`),
		provider: { '@type': 'ExerciseGym', name: business.name, url: abs('/') },
		areaServed: business.city
	};
}

export function blogPostingSchema(p: BlogPost) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: p.title,
		description: p.description,
		image: abs(p.image),
		datePublished: p.datePublished,
		dateModified: p.datePublished,
		author: { '@type': 'Person', name: p.author },
		publisher: { '@type': 'Organization', name: business.name, logo: { '@type': 'ImageObject', url: abs('/favicon.svg') } },
		mainEntityOfPage: abs(`/blog/${p.slug}`)
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
