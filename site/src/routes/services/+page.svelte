<svelte:head>
	<title>Our Services | Global Prime Engineering & Turning Workshop LLC</title>
</svelte:head>

<!-- Page Hero - Parallax -->
<section class="page-hero relative min-h-[50vh] sm:min-h-[60vh] flex items-end overflow-hidden">
	<div class="page-hero-bg" style="background-image: url('/images/cnc-laser-cutting.jpg')"></div>
	<div class="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-navy-900/40"></div>
	<div class="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 pb-12 sm:pb-16 pt-32">
		<span class="text-xs sm:text-sm font-semibold tracking-wider text-gold-400 uppercase">Our Services</span>
		<h1 class="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
			Comprehensive <span class="text-gold-400">Industrial Solutions</span>
		</h1>
		<p class="mt-3 max-w-xl text-sm sm:text-lg text-gray-300">
			From precision machining to advanced fabrication, end-to-end mechanical services for every industrial need.
		</p>
	</div>
</section>

<!-- Service 3: CNC Lathe & Milling -->
<section class="bg-navy-900 py-14 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
			<div>
				<div class="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 mb-3">
					<span class="text-xs font-semibold text-gold-400">03</span>
				</div>
				<h2 class="text-2xl sm:text-3xl font-bold text-white">CNC Lathe & Milling</h2>
				<p class="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
					Multi-axis machining for complex shapes in steel, aluminum, brass, and industrial plastics.
					Precision turning for shafts, bushings, and bolts with micron-level tolerances.
				</p>
				<ul class="mt-5 space-y-2.5">
					{#each ['CNC lathe turning (6m length, 1.2m diameter capacity)', 'Multi-axis CNC milling for custom brackets', 'Vertical milling & radial drilling for heavy plates'] as item}
						<li class="flex items-start gap-2.5">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
							</svg>
							<span class="text-sm text-gray-300">{item}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<img src="/images/cnc-milling.jpeg" alt="CNC lathe and milling machining" class="rounded-xl shadow-2xl shadow-black/30 border border-white/10 w-full" loading="lazy" />
			</div>
		</div>
	</div>
</section>

<!-- Fabrication & Forming Grid -->
<section class="relative">
	<div class="parallax-bg absolute inset-0" style="background-image: url('/images/fabrication-and-forming.png')"></div>
	<div class="absolute inset-0 bg-navy-900/90"></div>
	<div class="relative z-10 py-16 sm:py-24">
		<div class="mx-auto max-w-7xl px-4 sm:px-6">
			<div class="text-center mb-12">
				<span class="text-xs sm:text-sm font-semibold tracking-wider text-gold-400 uppercase">More Capabilities</span>
				<h2 class="mt-2 text-2xl sm:text-3xl font-bold text-white">Fabrication & Forming Services</h2>
				<p class="mt-3 text-sm sm:text-base text-gray-400">Structural integrity and precision metal shaping for every application.</p>
			</div>

			<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
				<div class="group rounded-xl border border-white/10 bg-navy-900/60 backdrop-blur-sm overflow-hidden transition-all hover:border-gold-500/30">
					<div class="aspect-video overflow-hidden">
						<img src="/images/fabrication-and-forming.png" alt="Cutting, bending, and rolling" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
					</div>
					<div class="p-5">
						<h3 class="text-base sm:text-lg font-bold text-white">Cutting, Bending & Rolling</h3>
						<p class="mt-1.5 text-sm text-gray-400">Shear cutting of plates, hydraulic press brake bending, and rolling metal sheets into cylinders or cones.</p>
					</div>
				</div>

				<div class="group rounded-xl border border-white/10 bg-navy-900/60 backdrop-blur-sm overflow-hidden transition-all hover:border-gold-500/30">
					<div class="aspect-video overflow-hidden">
						<img src="/images/custom-fabrication.jpeg" alt="Industrial fabrication" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
					</div>
					<div class="p-5">
						<h3 class="text-base sm:text-lg font-bold text-white">Industrial Fabrication</h3>
						<p class="mt-1.5 text-sm text-gray-400">"Build-to-Print" engineering. Structural steel welding, frame construction, and marine work.</p>
					</div>
				</div>

				<div class="group rounded-xl border border-white/10 bg-navy-900/60 backdrop-blur-sm overflow-hidden transition-all hover:border-gold-500/30 sm:col-span-2 lg:col-span-1">
					<div class="aspect-video overflow-hidden">
						<img src="/images/advanced-fabrication.png" alt="Boring and facing operations" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
					</div>
					<div class="p-5">
						<h3 class="text-base sm:text-lg font-bold text-white">Boring & Facing</h3>
						<p class="mt-1.5 text-sm text-gray-400">Precision boring to exact diameters for engine blocks and machinery, and facing for perfectly flat surfaces.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Service 1: Engine Rebuilding -->
<section class="bg-navy-900 py-14 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
			<div>
				<div class="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 mb-3">
					<span class="text-xs font-semibold text-gold-400">01</span>
				</div>
				<h2 class="text-2xl sm:text-3xl font-bold text-white">Engine Rebuilding & Cylinder Block Boring</h2>
				<p class="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
					Expert boring services using precision equipment to achieve optimal engine performance and
					longevity. We restore cylinders to OEM specifications with micron-level accuracy.
				</p>
				<ul class="mt-5 space-y-2.5">
					{#each ['Cylinder block boring & honing to OEM specs', 'Complete engine overhaul and rebuilding', 'Head seats & head facing with perfect flatness', 'Custom turning jobs for industrial parts'] as item}
						<li class="flex items-start gap-2.5">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
							</svg>
							<span class="text-sm text-gray-300">{item}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<img src="/images/precision-machining.png" alt="Engine rebuilding and cylinder block boring" class="rounded-xl shadow-2xl shadow-black/30 border border-white/10 w-full" loading="lazy" />
			</div>
		</div>
	</div>
</section>

<!-- Service 2: Crankshaft Grinding -->
<section class="bg-navy-800 py-14 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
			<div class="order-2 lg:order-1">
				<img src="/images/cnc-lathe.jpg" alt="High-precision crankshaft grinding" class="rounded-xl shadow-2xl shadow-black/30 border border-white/10 w-full" loading="lazy" />
			</div>
			<div class="order-1 lg:order-2">
				<div class="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 mb-3">
					<span class="text-xs font-semibold text-gold-400">02</span>
				</div>
				<h2 class="text-2xl sm:text-3xl font-bold text-white">Crankshaft Grinding</h2>
				<p class="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
					High-tolerance grinding services that return worn crankshafts to factory specifications.
					Our advanced techniques extend component life and improve engine efficiency.
				</p>
				<ul class="mt-5 space-y-2.5">
					{#each ['Precision grinding to factory tolerances', 'Dynamic balancing for smooth operation', 'Extended component lifespan'] as item}
						<li class="flex items-start gap-2.5">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
							</svg>
							<span class="text-sm text-gray-300">{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>



<!-- Service 4: Laser Cutting & Waterjet -->
<section class="bg-navy-800 py-14 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
			<div class="order-2 lg:order-1">
				<img src="/images/cnc-laser-cutting.jpg" alt="CNC laser cutting machine in action" class="rounded-xl shadow-2xl shadow-black/30 border border-white/10 w-full" loading="lazy" />
			</div>
			<div class="order-1 lg:order-2">
				<div class="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 mb-3">
					<span class="text-xs font-semibold text-gold-400">04</span>
				</div>
				<h2 class="text-2xl sm:text-3xl font-bold text-white">Laser Cutting & Waterjet Machining</h2>
				<p class="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
					High-speed, high-precision profile cutting for sheet metal. Clean edges with zero contact,
					minimizing secondary finishing. Intricate patterns with state-of-the-art equipment.
				</p>
				<ul class="mt-5 space-y-2.5">
					{#each ['CNC laser cutting for complex metal designs', 'Waterjet machining for heat-sensitive materials', 'Minimal secondary finishing required'] as item}
						<li class="flex items-start gap-2.5">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
							</svg>
							<span class="text-sm text-gray-300">{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Service 5: Welding -->
<section class="bg-navy-900 py-14 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
			<div>
				<div class="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 mb-3">
					<span class="text-xs font-semibold text-gold-400">05</span>
				</div>
				<h2 class="text-2xl sm:text-3xl font-bold text-white">Arc MIG/TIG Welding</h2>
				<p class="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
					Professional Argon, Aluminum, and Stainless Steel welding. Certified welders handle all
					materials with precision. Structural steel welding, frame construction, and marine
					fabrication for ship components and offshore structures.
				</p>
				<ul class="mt-5 space-y-2.5">
					{#each ['Argon, ARC, MIG/TIG welding capabilities', 'Structural steel & frame construction', 'Marine fabrication for ship components'] as item}
						<li class="flex items-start gap-2.5">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
							</svg>
							<span class="text-sm text-gray-300">{item}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<img src="/images/specialized-welding.png" alt="Professional MIG TIG welding" class="rounded-xl shadow-2xl shadow-black/30 border border-white/10 w-full" loading="lazy" />
			</div>
		</div>
	</div>
</section>

<!-- Service 6: Motor Rewinding -->
<section class="bg-navy-800 py-14 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
			<div class="order-2 lg:order-1">
				<img src="/images/vertical-drilling-and-laser-drilling.png" alt="Motor rewinding and electrical services" class="rounded-xl shadow-2xl shadow-black/30 border border-white/10 w-full" loading="lazy" />
			</div>
			<div class="order-1 lg:order-2">
				<div class="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 mb-3">
					<span class="text-xs font-semibold text-gold-400">06</span>
				</div>
				<h2 class="text-2xl sm:text-3xl font-bold text-white">Motor Rewinding (AC & DC)</h2>
				<p class="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
					Complete motor and generator winding services for AC and DC motors. Compressor repair,
					power starting solutions, and comprehensive electrical diagnostics.
				</p>
				<ul class="mt-5 space-y-2.5">
					{#each ['AC & DC motor rewinding', 'Generator winding & compressor repair', 'Electrical diagnostics & power solutions'] as item}
						<li class="flex items-start gap-2.5">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
							</svg>
							<span class="text-sm text-gray-300">{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Service 7: Hydraulic Equipment -->
<section class="bg-navy-900 py-14 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
			<div>
				<div class="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 mb-3">
					<span class="text-xs font-semibold text-gold-400">07</span>
				</div>
				<h2 class="text-2xl sm:text-3xl font-bold text-white">Hydraulic Equipment Servicing</h2>
				<p class="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
					Comprehensive hydraulic system repair and maintenance. From hydraulic presses to cylinder
					repair, we ensure peak efficiency with minimal downtime.
				</p>
				<ul class="mt-5 space-y-2.5">
					{#each ['Hydraulic press maintenance (up to 400 ton)', 'Cylinder repair & seal replacement', 'System diagnostics & preventive maintenance'] as item}
						<li class="flex items-start gap-2.5">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
							</svg>
							<span class="text-sm text-gray-300">{item}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<img src="/images/industrial-maintenance.png" alt="Hydraulic equipment servicing" class="rounded-xl shadow-2xl shadow-black/30 border border-white/10 w-full" loading="lazy" />
			</div>
		</div>
	</div>
</section>



<!-- CTA -->
<section class="bg-navy-800 py-16 sm:py-20">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 text-center">
		<h2 class="text-2xl sm:text-3xl font-bold text-white">Need a Custom Solution?</h2>
		<p class="mt-3 text-sm sm:text-base text-gray-400">
			Every industrial challenge is unique. Contact us for a tailored solution from our engineering team.
		</p>
		<div class="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
			<a href="/contact" class="inline-flex items-center justify-center rounded-lg bg-gold-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-navy-900 transition-all hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/25">
				Request a Quote
			</a>
			<a href="/equipment" class="inline-flex items-center justify-center rounded-lg border-2 border-white/20 px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition-all hover:border-gold-500/50 hover:bg-white/5">
				View Our Equipment
			</a>
		</div>
	</div>
</section>
