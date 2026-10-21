// Business details shared by the layout, SEO tags and structured data.
export const SITE = {
	url: 'https://globalprimeengineering.ae',
	name: 'Global Prime Engineering',
	legalName: 'Global Prime Engineering Turning Workshop LLC',
	tagline: 'Precision. Strength. Legacy Since 1968.',
	logo: '/images/logo.png',
	ogImage: '/images/og/default.jpg',
	email: 'info@globalprimeengineering.ae',
	landline: { display: '+971 6 561 2799', tel: '+97165612799' },
	mobile: { display: '+971 54 257 6771', tel: '+971542576771' },
	whatsapp: { display: '+971 54 257 6771', number: '971542576771' },
	address: {
		street: 'Near Taj Factory, Industrial Area 2',
		city: 'Sharjah',
		country: 'AE',
		display: 'Near Taj Factory, Industrial Area 2, Sharjah - U.A.E.'
	},
	// From the Google Maps listing (plus code 896X+C44, Sharjah).
	geo: { latitude: 25.311013, longitude: 55.397828 },
	mapUrl: 'https://maps.app.goo.gl/P4rkDFKqru9THYd58',
	/** Canonical Google Maps URL for the business listing. */
	mapPlaceUrl: 'https://www.google.com/maps?cid=5315728933368712400',
	/** Satellite view centred on the listing, so the pin and business card show. */
	mapEmbedUrl:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500!2d55.397828!3d25.311013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d003a9d3fa9%3A0x49c5434d0bb54cd0!2sGLOBAL%20PRIME%20ENGINEERING%20TURNING%20WORKSHOP%20LLC!5e1!0!3m2!1sen!2sae!4v1792600000000!5m2!1sen!2sae',
	hours: { days: 'Saturday - Thursday', open: '08:00', close: '18:00', display: '8:00 AM - 6:00 PM' },
	areasServed: ['Sharjah', 'Dubai', 'Ajman', 'Umm Al Quwain', 'Ras Al Khaimah', 'Abu Dhabi']
} as const;

export const DEFAULT_WHATSAPP_MESSAGE =
	'Hello Global Prime Engineering, I would like to inquire about your services.';

export function whatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
	return `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path: string): string {
	return path.startsWith('http') ? path : `${SITE.url}${path}`;
}
