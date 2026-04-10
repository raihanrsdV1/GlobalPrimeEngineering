<svelte:head>
	<title>About Us | Global Prime Engineering & Turning Workshop LLC</title>
</svelte:head>

<!-- Page Hero - Parallax -->
<section class="page-hero relative min-h-[50vh] sm:min-h-[60vh] flex items-end overflow-hidden">
	<div class="page-hero-bg" style="background-image: url('/images/cnc-lathe.jpg')"></div>
	<div class="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-navy-900/40"></div>
	<div class="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 pb-12 sm:pb-16 pt-32">
		<span class="text-xs sm:text-sm font-semibold tracking-wider text-gold-400 uppercase">About Us</span>
		<h1 class="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
			Global Prime Engineering <span class="text-gold-400">Turning Workshop LLC</span>
		</h1>
		<p class="mt-3 max-w-2xl text-sm sm:text-lg text-gray-300">
			Precision. Strength. Legacy Since 1968.
		</p>
	</div>
</section>

<!-- Company Introduction -->
<section class="bg-navy-900 py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="grid gap-10 lg:gap-14 lg:grid-cols-2 items-center">
			<div class="relative">
				<div class="absolute -inset-3 rounded-2xl bg-gradient-to-br from-gold-500/10 to-navy-600/20 blur-2xl"></div>
				<img
					src="/images/industrial-maintenance.png"
					alt="Global Prime Engineering workshop floor"
					class="relative rounded-2xl shadow-2xl shadow-black/30 border border-white/10 w-full"
					loading="lazy"
				/>
			</div>
			<div>
				<span class="text-xs sm:text-sm font-semibold tracking-wider text-gold-400 uppercase">Our Story</span>
				<h2 class="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Built on Family Legacy Since 1968</h2>
				<p class="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
					Global Prime Engineering Turning Workshop LLC is a professionally established engineering
					workshop built on decades of experience and a strong family legacy in the engineering
					industry.
				</p>
				<p class="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
					Our journey began in 1968 with our first family-owned sister concern,
					<strong class="text-gray-200">Chittagong Engineering Turning Workshop</strong>, which laid the
					foundation for our expertise in precision machining and engineering services.
				</p>
				<p class="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
					Today, we specialize in precision turning, machining, fabrication, and maintenance services
					for industrial, construction, and marine sectors. We combine traditional craftsmanship with
					modern engineering solutions to deliver quality, durability, and customer satisfaction.
				</p>
			</div>
		</div>

		<div class="mt-10 grid gap-6 lg:grid-cols-2">
			<div class="rounded-xl border border-white/10 bg-navy-800 p-6 sm:p-8">
				<h3 class="text-lg sm:text-xl font-bold text-white">Our Mission</h3>
				<p class="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
					To deliver high-quality, reliable, and cost-effective engineering solutions while ensuring
					safety, precision, and customer satisfaction in every project.
				</p>
			</div>
			<div class="rounded-xl border border-white/10 bg-navy-800 p-6 sm:p-8">
				<h3 class="text-lg sm:text-xl font-bold text-white">Our Vision</h3>
				<p class="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
					To become a leading and trusted engineering workshop in the UAE and beyond by providing
					innovative solutions, maintaining superior quality standards, and continuing our legacy of
					excellence for future generations.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Core Values -->
<section class="relative">
	<div class="parallax-bg absolute inset-0" style="background-image: url('/images/precision-machining.png')"></div>
	<div class="absolute inset-0 bg-navy-900/90"></div>
	<div class="relative z-10 py-16 sm:py-24">
		<div class="mx-auto max-w-7xl px-4 sm:px-6">
			<div class="text-center">
				<span class="text-xs sm:text-sm font-semibold tracking-wider text-gold-400 uppercase">What Drives Us</span>
				<h2 class="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Our Core Values</h2>
			</div>

			<div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{#each [
					{ title: 'Quality Excellence', text: 'We never compromise on quality and precision.' },
					{ title: 'Integrity', text: 'We conduct our business with honesty and transparency.' },
					{ title: 'Reliability', text: 'We deliver on time and always meet our commitments.' },
					{ title: 'Innovation', text: 'We continuously improve with modern technology and ideas.' },
					{ title: 'Customer Focus', text: 'Client satisfaction is at the heart of everything we do.' },
					{ title: 'Safety', text: 'We prioritize safe working practices in all operations.' }
				] as value}
					<div class="rounded-xl border border-white/10 bg-navy-900/60 backdrop-blur-sm p-5 sm:p-6">
						<h3 class="text-base sm:text-lg font-bold text-white">{value.title}</h3>
						<p class="mt-2 text-sm text-gray-400 leading-relaxed">{value.text}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Industries We Serve -->
<section class="bg-navy-900 py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="text-center">
			<span class="text-xs sm:text-sm font-semibold tracking-wider text-gold-400 uppercase">Our Clients</span>
			<h2 class="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Industries We Serve</h2>
			<p class="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-gray-400">
				Trusted by leading organizations across multiple sectors in the UAE and the wider Gulf region.
			</p>
		</div>

		<div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
			<div class="group relative overflow-hidden rounded-xl border border-white/10 bg-navy-800 transition-all hover:border-gold-500/30">
				<div class="aspect-[4/3] overflow-hidden">
					<img src="/images/cnc-milling.jpeg" alt="Government department fleet maintenance" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
				</div>
				<div class="p-5">
					<h3 class="text-base sm:text-lg font-bold text-white">Government Departments</h3>
					<p class="mt-1.5 text-sm text-gray-400">Fleet maintenance, infrastructure equipment repair, and specialized fabrication for agencies.</p>
				</div>
			</div>

			<div class="group relative overflow-hidden rounded-xl border border-white/10 bg-navy-800 transition-all hover:border-gold-500/30">
				<div class="aspect-[4/3] overflow-hidden">
					<img src="/images/custom-fabrication.jpeg" alt="Heavy construction equipment repair" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
				</div>
				<div class="p-5">
					<h3 class="text-base sm:text-lg font-bold text-white">Construction Giants</h3>
					<p class="mt-1.5 text-sm text-gray-400">Heavy equipment overhaul, structural steel fabrication, and on-site machinery repair.</p>
				</div>
			</div>

			<div class="group relative overflow-hidden rounded-xl border border-white/10 bg-navy-800 transition-all hover:border-gold-500/30">
				<div class="aspect-[4/3] overflow-hidden">
					<img src="/images/fabrication-and-forming.png" alt="Fleet logistics vehicle repair" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
				</div>
				<div class="p-5">
					<h3 class="text-base sm:text-lg font-bold text-white">Logistics & Fleet Operators</h3>
					<p class="mt-1.5 text-sm text-gray-400">Engine rebuilding, axle repair, and comprehensive fleet maintenance.</p>
				</div>
			</div>

			<div class="group relative overflow-hidden rounded-xl border border-white/10 bg-navy-800 transition-all hover:border-gold-500/30">
				<div class="aspect-[4/3] overflow-hidden">
					<img src="/images/cnc-lathe.jpg" alt="Manufacturing plant equipment maintenance" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
				</div>
				<div class="p-5">
					<h3 class="text-base sm:text-lg font-bold text-white">Manufacturing Plants</h3>
					<p class="mt-1.5 text-sm text-gray-400">Production line equipment repair, custom part fabrication, and preventive maintenance.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="bg-navy-800 py-16 sm:py-20">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 text-center">
		<h2 class="text-2xl sm:text-3xl font-bold text-white">Let’s Build Long-Term Engineering Success</h2>
		<p class="mt-3 text-sm sm:text-base text-gray-400">
			From precision machining to complete custom solutions, our team is ready to support your operations.
		</p>
		<a
			href="/contact"
			class="mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-navy-900 transition-all hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/25"
		>
			Get in Touch
		</a>
	</div>
</section>
