const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

const BOLD = /\*\*(.+?)\*\*/g;
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

function escapeHtml(text: string): string {
	return text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

/** Renders the **bold** and [link](/path) markers in post text as HTML. */
export function inline(text: string): string {
	return escapeHtml(text)
		.replace(BOLD, '<strong>$1</strong>')
		.replace(LINK, '<a href="$2">$1</a>');
}

/** Strips inline markers, for meta tags and structured data. */
export function plain(text: string): string {
	return text.replace(BOLD, '$1').replace(LINK, '$1');
}

export function headingId(heading: string): string {
	return heading
		.toLowerCase()
		.replace(/&/g, 'and')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
}

/** Formats an ISO date (YYYY-MM-DD) as "21 October 2026" without locale differences. */
export function formatDate(iso: string): string {
	const [year, month, day] = iso.split('-').map(Number);
	return `${day} ${MONTHS[month - 1]} ${year}`;
}

export function blogImages(slug: string) {
	return {
		hero: `/images/blog/${slug}.webp`,
		card: `/images/blog/${slug}-800.webp`,
		og: `/images/og/${slug}.jpg`
	};
}
