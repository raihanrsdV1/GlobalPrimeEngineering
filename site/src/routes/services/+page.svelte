<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Engineering & Machining Services in Sharjah | Global Prime Engineering"
	description="CNC machining, crankshaft grinding, engine rebuilding, laser and waterjet cutting, MIG/TIG welding, motor rewinding, hydraulics and fabrication in Sharjah."
/>

{#snippet guideLink(slug: string, label: string)}
	<a href="/blog/{slug}" class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300">
		{label}
		<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
		</svg>
	</a>
{/snippet}

<!-- Page Hero - Parallax -->
<section class="page-hero relative min-h-[50vh] sm:min-h-[60vh] flex items-end overflow-hidden">
	<div class="page-hero-bg" style="background-image: url('/images/cnc-laser-cutting.jpg')"></div>
	<div class="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-navy-900/40"></div>
	<div class="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 pb-12 sm:pb-16 pt-32">
		<span class="text-xs sm:text-sm font-semibold tracking-wider text-gold-400 uppercase">Our Services</span>
		<h1 class="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
			Precision Engineering <span class="text-gold-400">Service Portfolio</span>
		</h1>
		<p class="mt-3 max-w-2xl text-sm sm:text-lg text-gray-300">
			Precision. Strength. Legacy Since 1968. End-to-end solutions for industrial, construction, and marine sectors.
		</p>
	</div>
</section>

<!-- Service Summary -->
<section class="bg-navy-900 py-10 sm:py-12 border-y border-white/10">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="flex flex-wrap gap-2.5 sm:gap-3">
			{#each [
				{ label: 'CNC Lathe & Milling', slug: 'cnc-machining-sharjah' },
				{ label: 'Crankshaft Grinding', slug: 'crankshaft-grinding-sharjah' },
				{ label: 'Engine Rebuilding', slug: 'engine-rebuilding-sharjah' },
				{ label: 'Laser Cutting & Waterjet', slug: 'laser-cutting-waterjet-sharjah' },
				{ label: 'Arc MIG/TIG Welding', slug: 'mig-tig-welding-sharjah' },
				{ label: 'Motor Rewinding (AC & DC)', slug: 'motor-rewinding-sharjah' },
				{ label: 'Hydraulic Servicing', slug: 'hydraulic-cylinder-repair-sharjah' },
				{ label: 'Gear Making & Repair', slug: 'gear-manufacturing-gearbox-repair-sharjah' },
				{ label: 'Fabrication & Forming', slug: 'steel-fabrication-sharjah' },
				{ label: 'Moulding Work', slug: 'metal-casting-moulding-sharjah' },
				{ label: 'Surface Grinding', slug: 'surface-cylindrical-grinding-sharjah' },
				{ label: 'Oilfield Equipment', slug: 'oilfield-equipment-manufacturing-uae' }
			] as item}
				<a href="/blog/{item.slug}" class="rounded-full border border-gold-500/30 bg-gold-500/10 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-gold-300 transition-colors hover:border-gold-500/60 hover:bg-gold-500/20 hover:text-white">{item.label}</a>
			{/each}
		</div>
	</div>
</section>

<!-- Service 1: CNC Lathe & Milling -->
<section class="bg-navy-900 py-14 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
			<div>
				<div class="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 mb-3">
					<span class="text-xs font-semibold text-gold-400">01</span>
				</div>
				<h2 class="text-2xl sm:text-3xl font-bold text-white">CNC Lathe & Milling</h2>
				<p class="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
					Multi-axis machining for complex shapes in steel, aluminum, brass, and industrial plastics.
					Precision turning for shafts, bushings, and bolts with micron-level tolerances.
				</p>
				<ul class="mt-5 space-y-2.5">
					{#each ['CNC lathe turning (10m length, 1.2m diameter capacity)', 'Multi-axis CNC milling for custom brackets', 'Vertical milling & radial drilling for heavy plates'] as item}
						<li class="flex items-start gap-2.5">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
							</svg>
							<span class="text-sm text-gray-300">{item}</span>
						</li>
					{/each}
				</ul>
				{@render guideLink('cnc-machining-sharjah', 'Read our CNC machining guide')}
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
			<div class="mt-4 text-center">
				{@render guideLink('steel-fabrication-sharjah', 'Read our steel fabrication guide')}
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
				{@render guideLink('crankshaft-grinding-sharjah', 'Read our crankshaft grinding guide')}
			</div>
		</div>
	</div>
</section>

<!-- Service 3: Engine Rebuilding -->
<section class="bg-navy-900 py-14 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
			<div>
				<div class="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 mb-3">
					<span class="text-xs font-semibold text-gold-400">03</span>
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
				{@render guideLink('engine-rebuilding-sharjah', 'Read our engine rebuilding guide')}
			</div>
			<div>
				<img src="/images/precision-machining.png" alt="Engine rebuilding and cylinder block boring" class="rounded-xl shadow-2xl shadow-black/30 border border-white/10 w-full" loading="lazy" />
			</div>
		</div>
	</div>
</section>





<!-- Service 5: Laser Cutting & Waterjet -->
<section class="bg-navy-800 py-14 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
			<div class="order-2 lg:order-1">
				<img src="/images/cnc-laser-cutting.jpg" alt="CNC laser cutting machine in action" class="rounded-xl shadow-2xl shadow-black/30 border border-white/10 w-full" loading="lazy" />
			</div>
			<div class="order-1 lg:order-2">
				<div class="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 mb-3">
					<span class="text-xs font-semibold text-gold-400">05</span>
				</div>
				<h2 class="text-2xl sm:text-3xl font-bold text-white">CNC Laser Cutting, Bending & Profile Work</h2>
				<p class="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
					High-speed, high-precision profile cutting and bending for sheet metal applications.
					Clean edges, repeatable accuracy, and minimal secondary finishing.
				</p>
				<ul class="mt-5 space-y-2.5">
					{#each ['CNC laser cutting for complex metal designs', 'Press brake bending for formed components', 'Minimal secondary finishing required'] as item}
						<li class="flex items-start gap-2.5">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
							</svg>
							<span class="text-sm text-gray-300">{item}</span>
						</li>
					{/each}
				</ul>
				{@render guideLink('laser-cutting-waterjet-sharjah', 'Read our laser & waterjet cutting guide')}
			</div>
		</div>
	</div>
</section>

<!-- Service 6: Welding -->
<section class="bg-navy-900 py-14 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
			<div>
				<div class="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 mb-3">
					<span class="text-xs font-semibold text-gold-400">06</span>
				</div>
				<h2 class="text-2xl sm:text-3xl font-bold text-white">Arc MIG/TIG Welding</h2>
				<p class="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
					Professional Argon, Aluminum, and Stainless Steel welding. Certified welders handle all
					materials with precision. Structural steel welding, frame construction, and marine
					engineering support for ship components and offshore structures.
				</p>
				<ul class="mt-5 space-y-2.5">
					{#each ['Argon, ARC, MIG/TIG welding capabilities', 'Structural steel & frame construction', 'Marine engineering support for ship components'] as item}
						<li class="flex items-start gap-2.5">
							<svg class="mt-0.5 h-4 w-4 shrink-0 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
							</svg>
							<span class="text-sm text-gray-300">{item}</span>
						</li>
					{/each}
				</ul>
				{@render guideLink('mig-tig-welding-sharjah', 'Read our welding guide')}
			</div>
			<div>
				<img src="/images/specialized-welding.png" alt="Professional MIG TIG welding" class="rounded-xl shadow-2xl shadow-black/30 border border-white/10 w-full" loading="lazy" />
			</div>
		</div>
	</div>
</section>

<!-- Service 7: Motor Rewinding -->
<section class="bg-navy-800 py-14 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
			<div class="order-2 lg:order-1">
				<img src="/images/vertical-drilling-and-laser-drilling.png" alt="Motor rewinding and electrical services" class="rounded-xl shadow-2xl shadow-black/30 border border-white/10 w-full" loading="lazy" />
			</div>
			<div class="order-1 lg:order-2">
				<div class="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 mb-3">
					<span class="text-xs font-semibold text-gold-400">07</span>
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
				{@render guideLink('motor-rewinding-sharjah', 'Read our motor rewinding guide')}
			</div>
		</div>
	</div>
</section>

<!-- Service 8: Hydraulic Equipment -->
<section class="bg-navy-900 py-14 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
			<div>
				<div class="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 mb-3">
					<span class="text-xs font-semibold text-gold-400">08</span>
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
				{@render guideLink('hydraulic-cylinder-repair-sharjah', 'Read our hydraulic cylinder repair guide')}
			</div>
			<div>
				<img src="/images/hydraulic-press.jpeg" alt="Hydraulic equipment servicing" class="rounded-xl shadow-2xl shadow-black/30 border border-white/10 w-full" loading="lazy" />
			</div>
		</div>
	</div>
</section>



<!-- Comprehensive Services Grid -->
<section class="bg-navy-900 py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="text-center mb-12">
			<span class="text-xs sm:text-sm font-semibold tracking-wider text-gold-400 uppercase">Full Capability List</span>
			<h2 class="mt-2 text-2xl sm:text-3xl font-bold text-white">Our Complete Service Portfolio</h2>
			<p class="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
				From precision machining to large-scale industrial projects, we offer an extensive range of engineering solutions.
			</p>
		</div>

		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each [
				{ title: 'Gear Making & Shaper Works', desc: 'All types of gear manufacturing, hobbing, and shaper machine operations for industrial gears.', slug: 'gear-manufacturing-gearbox-repair-sharjah' },
				{ title: 'Gear Box Making & Repairing', desc: 'Complete gear box assembly, repair, and reconditioning for industrial and automotive applications.', slug: 'gear-manufacturing-gearbox-repair-sharjah' },
				{ title: 'Moulding Work', desc: 'Precision moulding in CI, Cast Iron, Bronze, and Brass for custom industrial components.', slug: 'metal-casting-moulding-sharjah' },
				{ title: 'Surface & Cylindrical Grinding', desc: 'High-precision surface and cylindrical grinding for tight-tolerance machined parts.', slug: 'surface-cylindrical-grinding-sharjah' },
				{ title: 'Axle Assembly & Repairing', desc: 'Specialized repair and modification of heavy vehicle axles with straightening and welding.' },
				{ title: 'Belt Conveyor Making & Repairing', desc: 'Design, fabrication, and repair of belt conveyor systems for industrial material handling.' },
				{ title: 'Dies & Tools Making', desc: 'Custom dies, jigs, fixtures, and precision tooling for manufacturing operations.' },
				{ title: 'Nylon, Teflon & MS Roller Making', desc: 'Manufacturing of nylon, Teflon, and mild steel rollers for conveyor and industrial use.' },
				{ title: 'Oilfield Equipment Manufacturing', desc: 'Manufacturing and repair of oilfield equipment for the petroleum and energy sector.', slug: 'oilfield-equipment-manufacturing-uae' },
				{ title: 'Steel Mezzanine Floor Making', desc: 'Design and fabrication of steel mezzanine floors for warehouses and industrial facilities.', slug: 'steel-fabrication-sharjah' },
				{ title: 'Machine Installation & Aligning', desc: 'Industrial machine manufacturing, precision installation, and alignment services.' },
				{ title: 'Crusher & Cement Plant Equipment', desc: 'Development and repair of crusher and cement plant equipment and components.' },
				{ title: 'Product Design & Development', desc: 'End-to-end product design, prototyping, and development for custom engineering needs.' },
				{ title: 'Butterfly Valve & Chain Wheel', desc: 'Manufacturing of butterfly valve chain wheel operators for industrial flow control.' },
				{ title: 'Auto Mechanical Turning Works', desc: 'Precision auto mechanical turning for automotive and heavy vehicle components.' }
			] as service}
				<div class="rounded-lg border border-white/10 bg-navy-800/50 p-5 transition-all hover:border-gold-500/20">
					<h3 class="text-sm sm:text-base font-bold text-white">{service.title}</h3>
					<p class="mt-1.5 text-xs sm:text-sm text-gray-400">{service.desc}</p>
					{#if service.slug}
						<a href="/blog/{service.slug}" class="mt-3 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300">
							Read guide<span class="sr-only">: {service.title}</span>
							<svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</a>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="bg-navy-800 py-16 sm:py-20">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 text-center">
		<h2 class="text-2xl sm:text-3xl font-bold text-white">Need a Custom Solution?</h2>
		<p class="mt-3 text-sm sm:text-base text-gray-400">
			Every industrial challenge is unique. Contact us for tailored custom engineering solutions from our team.
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
