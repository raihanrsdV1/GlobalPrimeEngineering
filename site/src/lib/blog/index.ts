import type { Block, Post, PostSummary } from './types';
import { post as cncMachining } from './posts/cnc-machining-sharjah';
import { post as crankshaftGrinding } from './posts/crankshaft-grinding-sharjah';
import { post as engineRebuilding } from './posts/engine-rebuilding-sharjah';
import { post as laserCutting } from './posts/laser-cutting-waterjet-sharjah';
import { post as welding } from './posts/mig-tig-welding-sharjah';
import { post as motorRewinding } from './posts/motor-rewinding-sharjah';
import { post as hydraulics } from './posts/hydraulic-cylinder-repair-sharjah';
import { post as gears } from './posts/gear-manufacturing-gearbox-repair-sharjah';
import { post as fabrication } from './posts/steel-fabrication-sharjah';
import { post as moulding } from './posts/metal-casting-moulding-sharjah';
import { post as grinding } from './posts/surface-cylindrical-grinding-sharjah';
import { post as oilfield } from './posts/oilfield-equipment-manufacturing-uae';

// Display order on /blog. Posts marked `featured` also appear on the home page.
export const posts: Post[] = [
	cncMachining,
	crankshaftGrinding,
	engineRebuilding,
	laserCutting,
	welding,
	motorRewinding,
	hydraulics,
	gears,
	fabrication,
	moulding,
	grinding,
	oilfield
];

export function getPost(slug: string): Post | undefined {
	return posts.find((post) => post.slug === slug);
}

for (const post of posts) {
	for (const slug of post.related) {
		if (!getPost(slug)) throw new Error(`Blog post "${post.slug}" links to unknown related post "${slug}"`);
	}
}

function blockText(block: Block): string[] {
	switch (block.type) {
		case 'p':
			return [block.text];
		case 'list':
			return block.items;
		case 'steps':
			return block.items.flatMap((item) => [item.title, item.text]);
		case 'callout':
			return [block.title, block.text];
		case 'table':
			return [...block.head, ...block.rows.flat()];
	}
}

export function readingMinutes(post: Post): number {
	const text = [
		...post.intro,
		...post.sections.flatMap((section) => [section.heading, ...section.blocks.flatMap(blockText)]),
		...post.faqs.flatMap((faq) => [faq.q, faq.a])
	].join(' ');
	return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}

export function toSummary(post: Post): PostSummary {
	return {
		slug: post.slug,
		service: post.service,
		title: post.title,
		excerpt: post.excerpt,
		imageAlt: post.imageAlt,
		datePublished: post.datePublished,
		readingMinutes: readingMinutes(post)
	};
}

/** The post's chosen related posts, topped up from the rest of the list if needed. */
export function getRelated(post: Post, count = 3): PostSummary[] {
	const related = post.related.map((slug) => getPost(slug)!);
	for (const candidate of posts) {
		if (related.length >= count) break;
		if (candidate !== post && !related.includes(candidate)) related.push(candidate);
	}
	return related.slice(0, count).map(toSummary);
}
