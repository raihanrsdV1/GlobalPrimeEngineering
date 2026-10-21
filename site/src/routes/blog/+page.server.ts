import { posts, toSummary } from '$lib/blog';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({ posts: posts.map(toSummary) });
