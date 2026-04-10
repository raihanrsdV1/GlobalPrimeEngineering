<script lang="ts">
	let currentSlide = $state(0);
	const slides = [
		{ image: '/images/precision-machining.png', title: 'Precision Machining' },
		{ image: '/images/industrial-maintenance.png', title: 'Industrial Maintenance' },
		{ image: '/images/cnc-laser-cutting.jpg', title: 'CNC Laser Cutting' },
		{ image: '/images/advanced-fabrication.png', title: 'Advanced Fabrication' }
	];

	$effect(() => {
		const interval = setInterval(() => {
			currentSlide = (currentSlide + 1) % slides.length;
		}, 5000);
		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<title>Global Prime Engineering & Turning Workshop LLC | Sharjah, UAE</title>
</svelte:head>

<!-- Hero Section with Auto-Sliding Background -->
<section class="relative h-[72vh] min-h-[520px] max-h-[920px] overflow-hidden sm:h-screen sm:min-h-[600px] sm:max-h-[1000px]">
	<!-- Sliding Background Images (Fixed/Parallax) -->
	{#each slides as slide, i}
		<div
			class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
			style="opacity: {currentSlide === i ? 1 : 0}"
		>
			<div
				class="absolute inset-0 bg-cover bg-center bg-fixed"
				style="background-image: url('{slide.image}')"
			></div>
		</div>
	{/each}

	<!-- Dark Overlay -->
	<div class="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/75 to-navy-900/60"></div>
	<div class="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/40"></div>

	<!-- Hero Content -->
	<div class="relative z-10 flex h-full items-center">
		<div class="mx-auto w-full max-w-7xl px-4 sm:px-6">
			<div class="max-w-3xl">
				<p class="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-gold-300/90 uppercase">
					Turning Workshop LLC
				</p>
				<h1 class="mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-white">
					Global <span class="text-gold-400">Prime</span> Engineering
				</h1>
				<p class="mt-5 inline-flex rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-2 text-xs sm:text-sm font-semibold text-gold-300">
					Precision. Strength. Legacy Since 1968.
				</p>

				<h2 class="mt-5 text-2xl sm:text-3xl md:text-4xl font-black leading-[1.1] tracking-tight text-white">
					Leading Sharjah's
					<span class="text-gold-400">Industrial Excellence</span>
				</h2>

				<p class="mt-5 max-w-lg text-base sm:text-lg leading-relaxed text-gray-300">
					Precision Mechanical Repair & Industrial Fabrication. Decades of technical expertise
					with cutting-edge technology to keep your operations running.
				</p>

				<div class="mt-8 flex flex-col gap-3 sm:flex-row">
					<a
						href="/services"
						class="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-6 py-3.5 text-sm sm:text-base font-semibold text-navy-900 transition-all hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/25"
					>
						Our Services
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</a>
					<a
						href="/contact"
						class="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/20 px-6 py-3.5 text-sm sm:text-base font-semibold text-white transition-all hover:border-gold-500/50 hover:bg-white/5"
					>
						Request a Quote
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Slide Indicators -->
	<div class="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
		{#each slides as _, i}
			<button
				class="h-2 rounded-full transition-all duration-300 {currentSlide === i ? 'w-8 bg-gold-400' : 'w-2 bg-white/40 hover:bg-white/60'}"
				onclick={() => (currentSlide = i)}
				aria-label="Go to slide {i + 1}"
			></button>
		{/each}
	</div>
</section>

<!-- Stats Bar -->
<section class="bg-navy-800 border-y border-gold-500/20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
		<div class="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
			<div class="text-center">
				<p class="text-2xl sm:text-3xl font-bold text-gold-400">400+</p>
				<p class="mt-1 text-xs sm:text-sm text-gray-400">Ton Press Capacity</p>
			</div>
			<div class="text-center">
				<p class="text-2xl sm:text-3xl font-bold text-gold-400">6m</p>
				<p class="mt-1 text-xs sm:text-sm text-gray-400">Max Lathe Capacity</p>
			</div>
			<div class="text-center">
				<p class="text-2xl sm:text-3xl font-bold text-gold-400">24/7</p>
				<p class="mt-1 text-xs sm:text-sm text-gray-400">Service Readiness</p>
			</div>
			<div class="text-center">
				<p class="text-2xl sm:text-3xl font-bold text-gold-400">100%</p>
				<p class="mt-1 text-xs sm:text-sm text-gray-400">Client Satisfaction</p>
			</div>
		</div>
	</div>
</section>

<!-- Four Pillars of Excellence -->
<section class="bg-navy-900 py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="text-center">
			<span class="text-xs sm:text-sm font-semibold tracking-wider text-gold-400 uppercase">What We Do</span>
			<h2 class="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Four Pillars of Excellence</h2>
			<p class="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-gray-400">
				Our comprehensive service portfolio ensures we can handle any mechanical challenge your operation faces.
			</p>
		</div>

		<div class="mt-12 sm:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
			<!-- Precision Machining -->
			<div class="group relative overflow-hidden rounded-xl border border-white/10 bg-navy-800 transition-all hover:border-gold-500/30 hover:shadow-lg hover:shadow-gold-500/5">
				<div class="aspect-[4/3] overflow-hidden">
					<img
						src="/images/precision-machining.png"
						alt="Precision machining services including engine rebuilding and cylinder boring"
						class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
						loading="lazy"
					/>
				</div>
				<div class="p-5">
					<div class="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-gold-500/10">
						<svg class="h-4.5 w-4.5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
					</div>
					<h3 class="text-base sm:text-lg font-bold text-white">Precision Machining</h3>
					<p class="mt-1.5 text-sm text-gray-400">Engine rebuilding, cylinder boring, crankshaft grinding, and custom turning operations.</p>
				</div>
			</div>

			<!-- Industrial Maintenance -->
			<div class="group relative overflow-hidden rounded-xl border border-white/10 bg-navy-800 transition-all hover:border-gold-500/30 hover:shadow-lg hover:shadow-gold-500/5">
				<div class="aspect-[4/3] overflow-hidden">
					<img
						src="/images/industrial-maintenance.png"
						alt="Industrial maintenance and repair services for heavy-duty equipment"
						class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
						loading="lazy"
					/>
				</div>
				<div class="p-5">
					<div class="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-gold-500/10">
						<svg class="h-4.5 w-4.5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
						</svg>
					</div>
					<h3 class="text-base sm:text-lg font-bold text-white">Industrial Maintenance</h3>
					<p class="mt-1.5 text-sm text-gray-400">Comprehensive repair services for heavy-duty engines, axles, and manufacturing equipment.</p>
				</div>
			</div>

			<!-- Electrical Services -->
			<div class="group relative overflow-hidden rounded-xl border border-white/10 bg-navy-800 transition-all hover:border-gold-500/30 hover:shadow-lg hover:shadow-gold-500/5">
				<div class="aspect-[4/3] overflow-hidden">
					<img
						src="/images/specialized-welding.png"
						alt="Electrical services including motor rewinding and generator repair"
						class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
						loading="lazy"
					/>
				</div>
				<div class="p-5">
					<div class="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-gold-500/10">
						<svg class="h-4.5 w-4.5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
						</svg>
					</div>
					<h3 class="text-base sm:text-lg font-bold text-white">Electrical Services</h3>
					<p class="mt-1.5 text-sm text-gray-400">Motor and generator winding, compressor repair, and power starting solutions.</p>
				</div>
			</div>

			<!-- Advanced Fabrication -->
			<div class="group relative overflow-hidden rounded-xl border border-white/10 bg-navy-800 transition-all hover:border-gold-500/30 hover:shadow-lg hover:shadow-gold-500/5">
				<div class="aspect-[4/3] overflow-hidden">
					<img
						src="/images/advanced-fabrication.png"
						alt="Advanced fabrication including laser cutting and specialized welding"
						class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
						loading="lazy"
					/>
				</div>
				<div class="p-5">
					<div class="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-gold-500/10">
						<svg class="h-4.5 w-4.5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
						</svg>
					</div>
					<h3 class="text-base sm:text-lg font-bold text-white">Advanced Fabrication</h3>
					<p class="mt-1.5 text-sm text-gray-400">Laser cutting, specialized welding, and custom component manufacturing.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Why Choose Us - Parallax Section -->
<section class="relative">
	<!-- Fixed Background -->
	<div class="parallax-bg absolute inset-0" style="background-image: url('/images/cnc-lathe.jpg')"></div>
	<div class="absolute inset-0 bg-navy-900/85"></div>

	<div class="relative z-10 py-16 sm:py-24">
		<div class="mx-auto max-w-7xl px-4 sm:px-6">
			<div class="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
				<!-- Image -->
				<div class="relative order-2 lg:order-1">
					<div class="absolute -inset-3 rounded-2xl bg-gradient-to-br from-gold-500/15 to-navy-600/15 blur-2xl"></div>
					<img
						src="/images/industrial-maintenance.png"
						alt="Global Prime Engineering workshop with technician"
						class="relative rounded-2xl shadow-2xl shadow-black/30 border border-white/10 w-full"
						loading="lazy"
					/>
				</div>

				<!-- Content -->
				<div class="order-1 lg:order-2">
					<span class="text-xs sm:text-sm font-semibold tracking-wider text-gold-400 uppercase">Why Global Prime?</span>
					<h2 class="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Your Trusted Industrial Partner</h2>
					<p class="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
						Our commitment to excellence sets us apart. From precision engine rebuilding to advanced
						laser cutting, we provide comprehensive solutions that minimize downtime and maximize
						equipment longevity.
					</p>

					<div class="mt-8 grid gap-4 sm:grid-cols-2">
						<div class="rounded-lg border border-white/10 bg-navy-900/60 backdrop-blur-sm p-4 sm:p-5">
							<div class="mb-2.5 h-1 w-10 rounded-full bg-gradient-to-r from-gold-500 to-gold-300"></div>
							<h3 class="font-semibold text-white text-sm sm:text-base">Reliable Service</h3>
							<p class="mt-1.5 text-xs sm:text-sm text-gray-400">Long-term trust through consistent results, backed by reputation and expertise.</p>
						</div>
						<div class="rounded-lg border border-white/10 bg-navy-900/60 backdrop-blur-sm p-4 sm:p-5">
							<div class="mb-2.5 h-1 w-10 rounded-full bg-gradient-to-r from-gold-500 to-gold-300"></div>
							<h3 class="font-semibold text-white text-sm sm:text-base">Quality Workmanship</h3>
							<p class="mt-1.5 text-xs sm:text-sm text-gray-400">Masters of their craft ensuring every micron counts with precision equipment.</p>
						</div>
						<div class="rounded-lg border border-white/10 bg-navy-900/60 backdrop-blur-sm p-4 sm:p-5">
							<div class="mb-2.5 h-1 w-10 rounded-full bg-gradient-to-r from-gold-500 to-gold-300"></div>
							<h3 class="font-semibold text-white text-sm sm:text-base">Fast Turnaround</h3>
							<p class="mt-1.5 text-xs sm:text-sm text-gray-400">Efficient workflows and 24/7 readiness to minimize your downtime.</p>
						</div>
						<div class="rounded-lg border border-white/10 bg-navy-900/60 backdrop-blur-sm p-4 sm:p-5">
							<div class="mb-2.5 h-1 w-10 rounded-full bg-gradient-to-r from-gold-500 to-gold-300"></div>
							<h3 class="font-semibold text-white text-sm sm:text-base">Customer Satisfaction</h3>
							<p class="mt-1.5 text-xs sm:text-sm text-gray-400">Your success is our success. We stand behind every repair and fabrication.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="relative overflow-hidden bg-navy-800 py-16 sm:py-24">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 text-center">
		<h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Ready to Power Your Operations?</h2>
		<p class="mt-4 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
			From emergency repairs to large-scale fabrication projects, our team is ready to deliver
			precision solutions for your industrial needs.
		</p>
		<div class="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
			<a
				href="/contact"
				class="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-navy-900 transition-all hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/25"
			>
				Contact Us Today
			</a>
			<a
				href="tel:+97165612799"
				class="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gold-500/30 px-7 py-3.5 text-sm sm:text-base font-semibold text-gold-400 transition-all hover:border-gold-500 hover:bg-gold-500/10"
			>
				<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
				</svg>
				+971 6 561 2799
			</a>
		</div>
	</div>
</section>
