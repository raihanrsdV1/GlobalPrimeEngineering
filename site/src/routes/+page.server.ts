import { posts, toSummary } from '$lib/blog';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({
	featuredPosts: posts.filter((post) => post.featured).map(toSummary),
	services: posts.map((post) => ({ name: post.service, slug: post.slug }))
});
