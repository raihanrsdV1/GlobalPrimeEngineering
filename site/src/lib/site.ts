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
	geo: { latitude: 25.33228, longitude: 55.41931 },
	mapUrl: 'https://maps.app.goo.gl/P4rkDFKqru9THYd58',
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
