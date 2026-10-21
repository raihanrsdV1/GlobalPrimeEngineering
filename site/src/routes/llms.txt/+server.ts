// A plain-text summary for AI assistants and crawlers (see https://llmstxt.org).
import { posts } from '$lib/blog';
import { SITE } from '$lib/site';

export const prerender = true;

export function GET() {
	const pages = [
		['Home', '/', 'overview, ISO certificates and featured service guides'],
		['About Us', '/about', 'history since 1968, mission, leadership and industries served'],
		['Services', '/services', 'the full engineering service portfolio'],
		['Equipment', '/equipment', 'machinery list and workshop gallery'],
		['Contact', '/contact', 'address, map, phone, WhatsApp and quote form']
	];

	const body = `# ${SITE.legalName}

> ISO-certified engineering and turning workshop in Industrial Area 2, Sharjah, UAE, serving Sharjah, Dubai, Ajman and the wider UAE: CNC machining, engine rebuilding, crankshaft grinding, laser and waterjet cutting, MIG/TIG welding, motor rewinding, hydraulic servicing, gear making, steel fabrication, moulding, surface grinding and oilfield equipment.

- Address: ${SITE.address.display}
- Google Maps: ${SITE.mapPlaceUrl}
- Phone: ${SITE.landline.display}
- Mobile and WhatsApp: ${SITE.mobile.display}
- Email: ${SITE.email}
- Hours: ${SITE.hours.days}, ${SITE.hours.display}; Friday closed; 24/7 emergency support
- Certifications: ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, ISO 3834-2:2021
- Family engineering legacy since 1968 (Chittagong Engineering Turning Workshop)

## Pages

${pages.map(([name, path, notes]) => `- [${name}](${SITE.url}${path}): ${notes}`).join('\n')}

## Service guides

${posts.map((post) => `- [${post.title}](${SITE.url}/blog/${post.slug}): ${post.metaDescription}`).join('\n')}
`;

	return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
