<script lang="ts">
	import { blogImages } from '$lib/blog/format';
	import type { PostSummary } from '$lib/blog/types';

	interface Props {
		post: PostSummary;
		headingLevel?: 'h2' | 'h3';
	}

	let { post, headingLevel = 'h3' }: Props = $props();
</script>

<!-- The title link stretches over the whole card, so the card is clickable but announced by its title. -->
<article
	class="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-navy-800 transition-all focus-within:border-gold-500/60 hover:border-gold-500/30 hover:shadow-lg hover:shadow-gold-500/5"
>
	<div class="relative aspect-[16/10] overflow-hidden">
		<img
			src={blogImages(post.slug).card}
			alt={post.imageAlt}
			width="800"
			height="500"
			loading="lazy"
			decoding="async"
			class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
		/>
		<span
			class="absolute top-3 left-3 rounded-full border border-gold-500/30 bg-navy-900/80 px-2.5 py-1 text-[11px] font-semibold text-gold-300 backdrop-blur-sm"
		>
			{post.service}
		</span>
	</div>
	<div class="flex flex-1 flex-col p-5">
		<svelte:element this={headingLevel} class="text-base leading-snug font-bold text-white sm:text-lg">
			<a
				href="/blog/{post.slug}"
				class="transition-colors group-hover:text-gold-300 after:absolute after:inset-0 focus-visible:outline-none"
			>
				{post.title}
			</a>
		</svelte:element>
		<p class="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-400">{post.excerpt}</p>
		<div class="mt-auto flex items-center justify-between pt-4 text-xs">
			<span class="text-gray-500">{post.readingMinutes} min read</span>
			<span class="inline-flex items-center gap-1 font-semibold text-gold-400" aria-hidden="true">
				Read guide
				<svg class="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</span>
		</div>
	</div>
</article>
