<script lang="ts">
	import '../app.css';

	let { children } = $props();
	let mobileMenuOpen = $state(false);
	let scrolled = $state(false);

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About Us' },
		{ href: '/services', label: 'Services' },
		{ href: '/equipment', label: 'Equipment' },
		{ href: '/contact', label: 'Contact' }
	];

	function handleScroll() {
		scrolled = window.scrollY > 50;
	}
</script>

<svelte:window onscroll={handleScroll} />

<!-- Navigation -->
<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled
		? 'bg-navy-900/95 backdrop-blur-md shadow-lg shadow-black/20 py-2'
		: 'bg-navy-900/30 backdrop-blur-sm py-3'}"
>
	<nav class="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
		<!-- Logo -->
		<a href="/" class="flex items-center gap-2.5 shrink-0">
			<img
				src="/images/logo.png"
				alt="Global Prime Engineering Logo"
				class="h-10 w-auto sm:h-12 rounded transition-all {scrolled ? 'h-9 sm:h-10' : ''}"
			/>
			<div class="hidden md:block">
				<p class="text-sm leading-tight font-bold text-white">Global Prime Engineering</p>
				<p class="text-xs leading-tight text-gold-400">Turning Workshop LLC</p>
			</div>
		</a>

		<!-- Desktop Nav -->
		<div class="hidden items-center gap-0.5 lg:flex">
			{#each navLinks as link}
				<a
					href={link.href}
					class="rounded-lg px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-gold-400"
				>
					{link.label}
				</a>
			{/each}
			<a
				href="/contact"
				class="ml-3 rounded-lg bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-900 transition-all hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25"
			>
				Get a Quote
			</a>
		</div>

		<!-- Mobile Toggle -->
		<button
			class="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
			onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			aria-label="Toggle menu"
		>
			<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				{#if mobileMenuOpen}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				{:else}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				{/if}
			</svg>
		</button>
	</nav>

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div class="border-t border-white/10 bg-navy-900/98 backdrop-blur-md lg:hidden">
			<div class="space-y-1 px-4 py-4">
				{#each navLinks as link}
					<a
						href={link.href}
						class="block rounded-lg px-4 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-gold-400"
						onclick={() => (mobileMenuOpen = false)}
					>
						{link.label}
					</a>
				{/each}
				<a
					href="/contact"
					class="mt-3 block rounded-lg bg-gold-500 px-4 py-3 text-center text-sm font-semibold text-navy-900"
					onclick={() => (mobileMenuOpen = false)}
				>
					Get a Quote
				</a>
			</div>
		</div>
	{/if}
</header>

<!-- Main Content -->
<main>
	{@render children()}
</main>

<!-- Footer -->
<footer class="border-t border-white/10 bg-navy-900">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
		<div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
			<!-- Brand -->
			<div class="sm:col-span-2 lg:col-span-1">
				<div class="flex items-center gap-3">
					<img src="/images/logo.png" alt="Global Prime Engineering" class="h-12 w-auto rounded" />
					<div>
						<p class="text-sm leading-tight font-bold text-white">Global Prime Engineering</p>
						<p class="text-xs leading-tight text-gold-400">Turning Workshop LLC</p>
					</div>
				</div>
				<p class="mt-4 text-sm leading-relaxed text-gray-400">
					Sharjah's premier destination for precision mechanical repair and industrial fabrication.
				</p>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="mb-4 text-sm font-semibold tracking-wider text-gold-400 uppercase">Quick Links</h3>
				<ul class="space-y-2.5">
					{#each navLinks as link}
						<li>
							<a href={link.href} class="text-sm text-gray-400 transition-colors hover:text-white">{link.label}</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Services -->
			<div>
				<h3 class="mb-4 text-sm font-semibold tracking-wider text-gold-400 uppercase">Our Services</h3>
				<ul class="space-y-2.5">
					<li><a href="/services" class="text-sm text-gray-400 transition-colors hover:text-white">Engine Rebuilding</a></li>
					<li><a href="/services" class="text-sm text-gray-400 transition-colors hover:text-white">CNC Machining</a></li>
					<li><a href="/services" class="text-sm text-gray-400 transition-colors hover:text-white">Laser Cutting</a></li>
					<li><a href="/services" class="text-sm text-gray-400 transition-colors hover:text-white">Industrial Welding</a></li>
					<li><a href="/services" class="text-sm text-gray-400 transition-colors hover:text-white">Motor Rewinding</a></li>
				</ul>
			</div>

			<!-- Contact Info -->
			<div>
				<h3 class="mb-4 text-sm font-semibold tracking-wider text-gold-400 uppercase">Contact Us</h3>
				<ul class="space-y-3">
					<li class="flex items-start gap-2.5">
						<svg class="mt-0.5 h-4 w-4 shrink-0 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
						<span class="text-sm text-gray-400">Industrial Area 2, Sharjah - U.A.E.</span>
					</li>
					<li class="flex items-start gap-2.5">
						<svg class="mt-0.5 h-4 w-4 shrink-0 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
						</svg>
						<a href="tel:+97165612799" class="text-sm text-gray-400 transition-colors hover:text-white">+971 6 561 2799</a>
					</li>
					<li class="flex items-start gap-2.5">
						<svg class="mt-0.5 h-4 w-4 shrink-0 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
						<a href="mailto:sales@globalprimeengineering.ae" class="text-sm text-gray-400 transition-colors hover:text-white break-all">sales@globalprimeengineering.ae</a>
					</li>
					<li class="flex items-start gap-2.5">
						<svg class="mt-0.5 h-4 w-4 shrink-0 text-green-500" fill="currentColor" viewBox="0 0 24 24">
							<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
						</svg>
						<a href="https://wa.me/971542576770" class="text-sm text-gray-400 transition-colors hover:text-white">+971 54 257 6770</a>
					</li>
				</ul>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
			<p class="text-xs text-gray-500 text-center sm:text-left">
				&copy; {new Date().getFullYear()} Global Prime Engineering & Turning Workshop LLC. All rights reserved.
			</p>
			<div class="flex gap-4 text-xs text-gray-500">
				<span>Sharjah, UAE</span>
			</div>
		</div>
	</div>
</footer>
