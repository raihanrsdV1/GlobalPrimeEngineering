<script lang="ts">
	import { page } from '$app/state';
	import { SITE, absoluteUrl } from '$lib/site';
	import { jsonLdScript } from '$lib/seo';

	interface Props {
		title: string;
		description: string;
		/** 1200x630 social preview image (used by WhatsApp, Facebook, LinkedIn and X). */
		image?: string;
		imageAlt?: string;
		type?: 'website' | 'article';
		publishedTime?: string;
		modifiedTime?: string;
		jsonLd?: Record<string, unknown>;
	}

	let {
		title,
		description,
		image = SITE.ogImage,
		imageAlt = SITE.legalName,
		type = 'website',
		publishedTime,
		modifiedTime,
		jsonLd
	}: Props = $props();

	const canonical = $derived(absoluteUrl(page.url.pathname));
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={SITE.name} />
	<meta property="og:locale" content="en_AE" />
	<meta property="og:url" content={canonical} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={absoluteUrl(image)} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={imageAlt} />
	{#if publishedTime}
		<meta property="article:published_time" content={publishedTime} />
	{/if}
	{#if modifiedTime}
		<meta property="article:modified_time" content={modifiedTime} />
	{/if}

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={absoluteUrl(image)} />

	{#if jsonLd}
		{@html jsonLdScript(jsonLd)}
	{/if}
</svelte:head>
