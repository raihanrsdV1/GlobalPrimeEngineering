import { posts } from '$lib/blog';
import { SITE } from '$lib/site';

export const prerender = true;

const pages = ['/', '/about', '/services', '/equipment', '/contact', '/blog'];

export function GET() {
	const latestPost = posts.map((post) => post.dateModified).sort().at(-1);
	const urls = [
		...pages.map((path) => ({ path, lastmod: path === '/blog' ? latestPost : undefined })),
		...posts.map((post) => ({ path: `/blog/${post.slug}`, lastmod: post.dateModified }))
	];

	const body = [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		...urls.map(
			({ path, lastmod }) =>
				`\t<url>\n\t\t<loc>${SITE.url}${path}</loc>${lastmod ? `\n\t\t<lastmod>${lastmod}</lastmod>` : ''}\n\t</url>`
		),
		'</urlset>'
	].join('\n');

	return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
