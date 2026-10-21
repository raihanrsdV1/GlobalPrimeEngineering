// Text fields support two inline markers: **bold** and [link text](/path).
export type Block =
	| { type: 'p'; text: string }
	| { type: 'list'; items: string[] }
	| { type: 'steps'; items: { title: string; text: string }[] }
	| { type: 'callout'; title: string; text: string }
	| { type: 'table'; head: string[]; rows: string[][] };

export interface Section {
	heading: string;
	blocks: Block[];
}

export interface Faq {
	q: string;
	a: string;
}

export interface Post {
	slug: string;
	/** Short service name used on cards, chips and WhatsApp messages. */
	service: string;
	/** Value of the matching option in the contact form's service dropdown. */
	contactService: string;
	title: string;
	metaTitle: string;
	metaDescription: string;
	excerpt: string;
	imageAlt: string;
	keywords: string[];
	datePublished: string;
	dateModified: string;
	featured?: boolean;
	intro: string[];
	sections: Section[];
	faqs: Faq[];
	related: string[];
}

/** The lightweight fields needed to render a post card. */
export interface PostSummary {
	slug: string;
	service: string;
	title: string;
	excerpt: string;
	imageAlt: string;
	datePublished: string;
	readingMinutes: number;
}
