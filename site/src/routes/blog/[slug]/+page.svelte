<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';
	import { blogImages, formatDate, headingId, inline } from '$lib/blog/format';
	import { postSchema } from '$lib/seo';
	import { SITE, whatsappLink } from '$lib/site';

	let { data } = $props();

	const post = $derived(data.post);
	const images = $derived(blogImages(post.slug));
	const whatsappHref = $derived(
		whatsappLink(`Hello Global Prime Engineering, I would like a quote for ${post.service}.`)
	);
	const quoteHref = $derived(`/contact?service=${post.contactService}`);
</script>

<Seo
	title={post.metaTitle}
	description={post.metaDescription}
	image={images.og}
	imageAlt={post.imageAlt}
	type="article"
	publishedTime={post.datePublished}
	modifiedTime={post.dateModified}
	jsonLd={postSchema(post)}
/>

<svelte:head>
	<link rel="preload" as="image" href={images.hero} fetchpriority="high" />
</svelte:head>

{#snippet checkIcon()}
	<svg class="mt-1 h-4 w-4 shrink-0 text-gold-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
		<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
	</svg>
{/snippet}

{#snippet whatsappIcon()}
	<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
	</svg>
{/snippet}

{#snippet phoneIcon()}
	<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
	</svg>
{/snippet}

<!-- Article Hero - Parallax -->
<section class="page-hero relative min-h-[60vh] sm:min-h-[65vh] flex items-end overflow-hidden">
	<div class="page-hero-bg" style="background-image: url('{images.hero}')"></div>
	<div class="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-navy-900/50"></div>
	<div class="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 pb-12 sm:pb-16 pt-32">
		<nav aria-label="Breadcrumb">
			<ol class="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-gray-400">
				<li><a href="/" class="transition-colors hover:text-gold-400">Home</a></li>
				<li aria-hidden="true">/</li>
				<li><a href="/blog" class="transition-colors hover:text-gold-400">Blog</a></li>
				<li aria-hidden="true">/</li>
				<li class="text-gold-400" aria-current="page">{post.service}</li>
			</ol>
		</nav>
		<h1 class="mt-4 max-w-4xl text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
			{post.title}
		</h1>
		<p class="mt-4 max-w-3xl text-sm sm:text-lg text-gray-300">{post.excerpt}</p>
		<div class="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-gray-400">
			<span class="inline-flex items-center gap-1.5">
				<svg class="h-4 w-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
				</svg>
				<span>By <span class="font-medium text-gray-200">{SITE.name}</span></span>
			</span>
			<span class="inline-flex items-center gap-1.5">
				<svg class="h-4 w-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
				</svg>
				<time datetime={post.datePublished}>{formatDate(post.datePublished)}</time>
			</span>
			<span class="inline-flex items-center gap-1.5">
				<svg class="h-4 w-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
				<span>{data.readingMinutes} min read</span>
			</span>
		</div>
	</div>
</section>

<!-- Article Body -->
<section class="bg-navy-900 py-12 sm:py-16">
	<div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
		<article class="article-body min-w-0 max-w-3xl">
			{#each post.intro as paragraph, i}
				<p
					class={i === 0
						? 'text-base sm:text-lg leading-relaxed text-gray-200'
						: 'mt-5 text-sm sm:text-base leading-relaxed text-gray-300'}
				>
					{@html inline(paragraph)}
				</p>
			{/each}

			<figure class="mt-8">
				<img
					src={images.hero}
					alt={post.imageAlt}
					width="1600"
					height="1000"
					decoding="async"
					class="aspect-[16/10] w-full rounded-xl border border-white/10 object-cover shadow-2xl shadow-black/30"
				/>
			</figure>

			{#each post.sections as section}
				<h2 id={headingId(section.heading)} class="mt-12 scroll-mt-28 text-2xl sm:text-3xl font-bold text-white">
					{section.heading}
				</h2>
				{#each section.blocks as block}
					{#if block.type === 'p'}
						<p class="mt-4 text-sm sm:text-base leading-relaxed text-gray-300">{@html inline(block.text)}</p>
					{:else if block.type === 'list'}
						<ul class="mt-5 space-y-3">
							{#each block.items as item}
								<li class="flex items-start gap-3">
									{@render checkIcon()}
									<span class="text-sm sm:text-base leading-relaxed text-gray-300">{@html inline(item)}</span>
								</li>
							{/each}
						</ul>
					{:else if block.type === 'steps'}
						<ol class="mt-6 space-y-5">
							{#each block.items as step, i}
								<li class="flex gap-4">
									<span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-500/40 bg-gold-500/10 text-sm font-bold text-gold-400">
										{i + 1}
									</span>
									<div class="pt-1">
										<h3 class="text-base font-semibold text-white">{step.title}</h3>
										<p class="mt-1 text-sm sm:text-base leading-relaxed text-gray-400">{@html inline(step.text)}</p>
									</div>
								</li>
							{/each}
						</ol>
					{:else if block.type === 'callout'}
						<div class="mt-6 rounded-xl border border-gold-500/30 bg-gold-500/5 p-5">
							<p class="font-semibold text-gold-300">{block.title}</p>
							<p class="mt-1.5 text-sm sm:text-base leading-relaxed text-gray-300">{@html inline(block.text)}</p>
						</div>
					{:else if block.type === 'table'}
						<div class="mt-6 overflow-x-auto rounded-xl border border-white/10">
							<table class="w-full min-w-[540px] text-left text-sm">
								<thead class="bg-navy-800">
									<tr>
										{#each block.head as cell}
											<th scope="col" class="px-4 py-3 font-semibold text-white">{cell}</th>
										{/each}
									</tr>
								</thead>
								<tbody class="divide-y divide-white/10">
									{#each block.rows as row}
										<tr>
											{#each row as cell, i}
												{#if i === 0}
													<th scope="row" class="px-4 py-3 font-medium text-gray-200">{cell}</th>
												{:else}
													<td class="px-4 py-3 text-gray-400">{@html inline(cell)}</td>
												{/if}
											{/each}
										</tr>
									{/each}
								</tbody>
							</table>
						</div>
					{/if}
				{/each}
			{/each}

			<!-- FAQ -->
			<h2 id="faq" class="mt-14 scroll-mt-28 text-2xl sm:text-3xl font-bold text-white">Frequently asked questions</h2>
			<div class="mt-6 divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10 bg-navy-800/60">
				{#each post.faqs as faq}
					<details class="group">
						<summary class="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-white/5 [&::-webkit-details-marker]:hidden">
							<h3 class="text-sm sm:text-base font-semibold text-white">{faq.q}</h3>
							<svg class="h-5 w-5 shrink-0 text-gold-400 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
							</svg>
						</summary>
						<p class="px-5 pb-5 text-sm sm:text-base leading-relaxed text-gray-400">{@html inline(faq.a)}</p>
					</details>
				{/each}
			</div>
		</article>

		<!-- Sidebar: the contents list scrolls away, the quote card stays in view -->
		<aside class="space-y-5">
			<nav aria-label="In this guide" class="hidden rounded-2xl border border-white/10 bg-navy-800/60 p-6 lg:block">
				<p class="text-xs font-semibold tracking-wider text-gold-400 uppercase">In this guide</p>
				<ol class="mt-3 space-y-2.5 text-sm">
					{#each post.sections as section}
						<li>
							<a href="#{headingId(section.heading)}" class="text-gray-400 transition-colors hover:text-white">{section.heading}</a>
						</li>
					{/each}
					<li><a href="#faq" class="text-gray-400 transition-colors hover:text-white">Frequently asked questions</a></li>
				</ol>
			</nav>

			<div class="rounded-2xl border border-gold-500/30 bg-navy-800 p-6 lg:sticky lg:top-24">
				<p class="text-xs font-semibold tracking-wider text-gold-400 uppercase">Need this service?</p>
				<h2 class="mt-2 text-lg font-bold text-white">{post.service} in Sharjah</h2>
				<p class="mt-2 text-sm text-gray-400">
					Send us photos, drawings or a sample. Our team aims to respond within 24 hours, with 24/7 support for breakdowns.
				</p>
				<div class="mt-5 space-y-3">
					<a
						href={whatsappHref}
						target="_blank"
						rel="noopener noreferrer"
						class="flex w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-4 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
					>
						{@render whatsappIcon()}
						WhatsApp us
					</a>
					<a
						href="tel:{SITE.landline.tel}"
						class="flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-sm font-semibold text-white transition-all hover:border-gold-500/50 hover:bg-white/5"
					>
						{@render phoneIcon()}
						{SITE.landline.display}
					</a>
					<a
						href={quoteHref}
						class="flex w-full items-center justify-center rounded-lg bg-gold-500 px-4 py-3 text-sm font-semibold text-navy-900 transition-all hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25"
					>
						Request a Quote
					</a>
				</div>

				<div class="mt-6 border-t border-white/10 pt-5">
					<p class="text-xs font-semibold tracking-wider text-gold-400 uppercase">Visit our workshop</p>
					<p class="mt-2 text-sm text-gray-300">{SITE.address.display}</p>
					<p class="mt-1.5 text-sm text-gray-400">
						{SITE.hours.days}: <span class="whitespace-nowrap">{SITE.hours.display}</span><br />Friday: Closed | Emergency: 24/7
					</p>
					<a
						href={SITE.mapUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-gold-400 transition-colors hover:text-gold-300"
					>
						Open in Google Maps
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
						</svg>
					</a>
				</div>
			</div>
		</aside>
	</div>
</section>

<!-- Related Articles -->
<section class="border-t border-white/5 bg-navy-800 py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="flex items-end justify-between gap-4">
			<div>
				<span class="text-xs sm:text-sm font-semibold tracking-wider text-gold-400 uppercase">Keep Reading</span>
				<h2 class="mt-2 text-2xl sm:text-3xl font-bold text-white">Related Service Guides</h2>
			</div>
			<a href="/blog" class="hidden shrink-0 items-center gap-2 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300 sm:inline-flex">
				All articles
				<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</a>
		</div>
		<div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.related as related (related.slug)}
				<BlogCard post={related} />
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="bg-navy-900 py-16 sm:py-20">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 text-center">
		<h2 class="text-2xl sm:text-3xl font-bold text-white">Talk to Our Team About {post.service}</h2>
		<p class="mt-3 text-sm sm:text-base text-gray-400">
			Visit us in Industrial Area 2, Sharjah, a short drive from Dubai, or send your requirements and we’ll come back to you with a quote.
		</p>
		<div class="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
			<a
				href={whatsappHref}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition-all hover:brightness-110"
			>
				{@render whatsappIcon()}
				Chat on WhatsApp
			</a>
			<a
				href={quoteHref}
				class="inline-flex items-center justify-center rounded-lg bg-gold-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-navy-900 transition-all hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/25"
			>
				Request a Quote
			</a>
		</div>
	</div>
</section>
