// Schema.org structured data (JSON-LD) so search engines understand the business and its pages.
import { SITE, absoluteUrl } from './site';
import { blogImages, plain } from './blog/format';
import type { Post, PostSummary } from './blog/types';

const BUSINESS_ID = `${SITE.url}/#business`;

type Node = Record<string, unknown>;

const areaServed = () => SITE.areasServed.map((name) => ({ '@type': 'City', name }));

export function businessSchema(services: { name: string; slug: string }[] = []): Node {
	return {
		'@type': 'LocalBusiness',
		'@id': BUSINESS_ID,
		name: SITE.legalName,
		alternateName: SITE.name,
		slogan: SITE.tagline,
		description:
			'ISO-certified engineering and turning workshop in Sharjah Industrial Area 2 offering CNC machining, engine rebuilding, crankshaft grinding, laser and waterjet cutting, welding, motor rewinding, hydraulic servicing and fabrication.',
		url: `${SITE.url}/`,
		logo: absoluteUrl(SITE.logo),
		image: absoluteUrl(SITE.ogImage),
		telephone: SITE.landline.tel,
		email: SITE.email,
		address: {
			'@type': 'PostalAddress',
			streetAddress: SITE.address.street,
			addressLocality: SITE.address.city,
			addressRegion: SITE.address.city,
			addressCountry: SITE.address.country
		},
		geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.latitude, longitude: SITE.geo.longitude },
		hasMap: SITE.mapUrl,
		openingHoursSpecification: {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
			opens: SITE.hours.open,
			closes: SITE.hours.close
		},
		areaServed: areaServed(),
		contactPoint: {
			'@type': 'ContactPoint',
			contactType: 'customer service',
			telephone: SITE.mobile.tel,
			email: SITE.email,
			areaServed: 'AE'
		},
		...(services.length > 0 && {
			hasOfferCatalog: {
				'@type': 'OfferCatalog',
				name: 'Engineering and workshop services',
				itemListElement: services.map((service) => ({
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: service.name,
						url: absoluteUrl(`/blog/${service.slug}`)
					}
				}))
			}
		})
	};
}

export function websiteSchema(): Node {
	return {
		'@type': 'WebSite',
		'@id': `${SITE.url}/#website`,
		url: `${SITE.url}/`,
		name: SITE.name,
		alternateName: SITE.legalName,
		inLanguage: 'en',
		publisher: { '@id': BUSINESS_ID }
	};
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Node {
	return {
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: absoluteUrl(item.path)
		}))
	};
}

export function graph(...nodes: Node[]): Node {
	return { '@context': 'https://schema.org', '@graph': nodes };
}

export function blogSchema(posts: PostSummary[], description: string): Node {
	const url = absoluteUrl('/blog');
	return graph(
		{
			'@type': 'Blog',
			'@id': `${url}#blog`,
			url,
			name: `${SITE.name} Blog`,
			description,
			inLanguage: 'en',
			publisher: { '@id': BUSINESS_ID },
			blogPost: posts.map((post) => ({
				'@type': 'BlogPosting',
				headline: post.title,
				url: absoluteUrl(`/blog/${post.slug}`),
				datePublished: post.datePublished,
				image: absoluteUrl(blogImages(post.slug).card)
			}))
		},
		breadcrumbSchema([
			{ name: 'Home', path: '/' },
			{ name: 'Blog', path: '/blog' }
		]),
		businessSchema()
	);
}

export function postSchema(post: Post): Node {
	const path = `/blog/${post.slug}`;
	const url = absoluteUrl(path);
	const images = blogImages(post.slug);
	return graph(
		{
			'@type': 'BlogPosting',
			'@id': `${url}#article`,
			headline: post.title,
			description: post.metaDescription,
			image: [absoluteUrl(images.og), absoluteUrl(images.hero)],
			datePublished: post.datePublished,
			dateModified: post.dateModified,
			author: { '@type': 'Organization', name: SITE.name, url: `${SITE.url}/` },
			publisher: { '@id': BUSINESS_ID },
			mainEntityOfPage: url,
			articleSection: post.service,
			keywords: post.keywords.join(', '),
			inLanguage: 'en',
			about: { '@id': `${url}#service` }
		},
		{
			'@type': 'Service',
			'@id': `${url}#service`,
			name: `${post.service} in Sharjah`,
			serviceType: post.service,
			description: post.metaDescription,
			url,
			provider: { '@id': BUSINESS_ID },
			areaServed: areaServed()
		},
		breadcrumbSchema([
			{ name: 'Home', path: '/' },
			{ name: 'Blog', path: '/blog' },
			{ name: post.service, path }
		]),
		{
			'@type': 'FAQPage',
			'@id': `${url}#faq`,
			mainEntity: post.faqs.map((faq) => ({
				'@type': 'Question',
				name: faq.q,
				acceptedAnswer: { '@type': 'Answer', text: plain(faq.a) }
			}))
		},
		businessSchema()
	);
}

/** Serialises JSON-LD into a script tag, escaping "<" so content can never close the tag early. */
export function jsonLdScript(data: Node): string {
	return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;
}
