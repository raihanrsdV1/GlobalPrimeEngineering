import { error } from '@sveltejs/kit';
import { getPost, getRelated, posts, readingMinutes } from '$lib/blog';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => posts.map((post) => ({ slug: post.slug }));

export const load: PageServerLoad = ({ params }) => {
	const post = getPost(params.slug);
	if (!post) error(404, 'Article not found');

	return { post, readingMinutes: readingMinutes(post), related: getRelated(post) };
};
