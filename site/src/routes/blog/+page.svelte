<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';
	import { blogSchema } from '$lib/seo';
	import { whatsappLink } from '$lib/site';

	let { data } = $props();

	const description =
		'Guides from our Sharjah workshop on CNC machining, engine rebuilding, crankshaft grinding, welding, motor rewinding, hydraulics, fabrication and more.';
</script>

<Seo
	title="Engineering Service Guides & Blog | Global Prime Engineering, Sharjah"
	{description}
	jsonLd={blogSchema(data.posts, description)}
/>

<!-- Page Hero - Parallax -->
<section class="page-hero relative min-h-[50vh] sm:min-h-[60vh] flex items-end overflow-hidden">
	<div class="page-hero-bg" style="background-image: url('/images/blog/metal-casting-moulding-sharjah.webp')"></div>
	<div class="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-navy-900/40"></div>
	<div class="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 pb-12 sm:pb-16 pt-32">
		<span class="text-xs sm:text-sm font-semibold tracking-wider text-gold-400 uppercase">Blog</span>
		<h1 class="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
			Engineering <span class="text-gold-400">Service Guides</span>
		</h1>
		<p class="mt-3 max-w-2xl text-sm sm:text-lg text-gray-300">
			Practical advice from our workshop in Sharjah Industrial Area 2: how each service works, the warning signs to look for, and how to get the right repair or part, fast.
		</p>
	</div>
</section>

<!-- Articles -->
<section class="bg-navy-900 py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.posts as post (post.slug)}
				<BlogCard {post} headingLevel="h2" />
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="bg-navy-800 py-16 sm:py-20">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 text-center">
		<h2 class="text-2xl sm:text-3xl font-bold text-white">Don’t See Your Job Here?</h2>
		<p class="mt-3 text-sm sm:text-base text-gray-400">
			From axle repair and conveyor rollers to dies, tooling and machine installation, our Sharjah workshop handles a wide range of engineering work. Tell us what you need.
		</p>
		<div class="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
			<a
				href="/contact"
				class="inline-flex items-center justify-center rounded-lg bg-gold-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-navy-900 transition-all hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/25"
			>
				Request a Quote
			</a>
			<a
				href={whatsappLink()}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center justify-center rounded-lg border-2 border-white/20 px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition-all hover:border-gold-500/50 hover:bg-white/5"
			>
				Ask on WhatsApp
			</a>
			<a
				href="/services"
				class="inline-flex items-center justify-center rounded-lg border-2 border-white/20 px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition-all hover:border-gold-500/50 hover:bg-white/5"
			>
				All Services
			</a>
		</div>
	</div>
</section>
