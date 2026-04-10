<svelte:head>
	<title>Contact Us | Global Prime Engineering & Turning Workshop LLC</title>
</svelte:head>

<!-- Page Hero - Parallax -->
<section class="page-hero relative min-h-[50vh] sm:min-h-[60vh] flex items-end overflow-hidden">
	<div class="page-hero-bg" style="background-image: url('/images/custom-fabrication.jpeg')"></div>
	<div class="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-navy-900/40"></div>
	<div class="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 pb-12 sm:pb-16 pt-32">
		<span class="text-xs sm:text-sm font-semibold tracking-wider text-gold-400 uppercase">Contact Us</span>
		<h1 class="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
			Let's <span class="text-gold-400">Work Together</span>
		</h1>
		<p class="mt-3 max-w-xl text-sm sm:text-lg text-gray-300">
			Ready to discuss your project? Reach out for expert consultation and a free quote.
		</p>
	</div>
</section>

<!-- Contact Content -->
<section class="bg-navy-900 py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="grid gap-10 lg:gap-12 lg:grid-cols-2">
			<!-- Contact Form -->
			<div class="rounded-2xl border border-white/10 bg-navy-800 p-6 sm:p-8 lg:p-10">
				<h2 class="text-xl sm:text-2xl font-bold text-white">Send Us a Message</h2>
				<p class="mt-1.5 text-sm text-gray-400">
					Fill out the form and our team will get back to you within 24 hours.
				</p>

				<form name="contact" method="POST" data-netlify="true" class="mt-6 sm:mt-8 space-y-5">
					<input type="hidden" name="form-name" value="contact" />

					<div class="grid gap-5 sm:grid-cols-2">
						<div>
							<label for="name" class="block text-sm font-medium text-gray-300">Full Name</label>
							<input type="text" id="name" name="name" required class="mt-1.5 w-full rounded-lg border border-white/10 bg-navy-900/50 px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500" placeholder="Your full name" />
						</div>
						<div>
							<label for="company" class="block text-sm font-medium text-gray-300">Company</label>
							<input type="text" id="company" name="company" class="mt-1.5 w-full rounded-lg border border-white/10 bg-navy-900/50 px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500" placeholder="Your company name" />
						</div>
					</div>

					<div class="grid gap-5 sm:grid-cols-2">
						<div>
							<label for="email" class="block text-sm font-medium text-gray-300">Email Address</label>
							<input type="email" id="email" name="email" required class="mt-1.5 w-full rounded-lg border border-white/10 bg-navy-900/50 px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500" placeholder="you@company.com" />
						</div>
						<div>
							<label for="phone" class="block text-sm font-medium text-gray-300">Phone Number</label>
							<input type="tel" id="phone" name="phone" class="mt-1.5 w-full rounded-lg border border-white/10 bg-navy-900/50 px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500" placeholder="+971 XX XXX XXXX" />
						</div>
					</div>

					<div>
						<label for="service" class="block text-sm font-medium text-gray-300">Service Required</label>
						<select id="service" name="service" class="mt-1.5 w-full rounded-lg border border-white/10 bg-navy-900/50 px-4 py-3 text-sm text-white transition-colors focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500">
							<option value="">Select a service</option>
							<option value="engine-rebuilding">Engine Rebuilding & Cylinder Block Boring</option>
							<option value="crankshaft-grinding">Crankshaft Grinding</option>
							<option value="cnc-machining">CNC Lathe & Milling</option>
							<option value="laser-cutting">Laser Cutting & Waterjet Machining</option>
							<option value="welding">Arc MIG/TIG Welding</option>
							<option value="motor-rewinding">Motor Rewinding (AC & DC)</option>
							<option value="hydraulic">Hydraulic Equipment Servicing</option>
							<option value="fabrication">Industrial Fabrication</option>
							<option value="other">Other</option>
						</select>
					</div>

					<div>
						<label for="message" class="block text-sm font-medium text-gray-300">Project Details</label>
						<textarea id="message" name="message" rows="4" required class="mt-1.5 w-full rounded-lg border border-white/10 bg-navy-900/50 px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 resize-none" placeholder="Describe your project requirements..."></textarea>
					</div>

					<button type="submit" class="w-full rounded-lg bg-gold-500 px-8 py-3.5 text-sm sm:text-base font-semibold text-navy-900 transition-all hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/25">
						Submit Inquiry
					</button>
				</form>
			</div>

			<!-- Contact Info & Map -->
			<div class="space-y-6">
				<!-- Google Maps Embed -->
				<div class="overflow-hidden rounded-2xl border border-white/10 bg-navy-800">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.4890844882046!2d55.41931!3d25.33228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5bc683c0e6af%3A0xbb8e532759ce56a8!2sGlobal%20Prime%20Engineering%20%26%20Turning%20Workshop%20LLC!5e0!3m2!1sen!2sae!4v1712700000000!5m2!1sen!2sae"
						width="100%"
						height="300"
						style="border:0;"
						allowfullscreen
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						title="Global Prime Engineering location on Google Maps"
						class="w-full"
					></iframe>
					<div class="p-4">
						<a
							href="https://maps.app.goo.gl/P4rkDFKqru9THYd58"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-2 text-sm font-medium text-gold-400 hover:text-gold-300 transition-colors"
						>
							<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
							Open in Google Maps
						</a>
					</div>
				</div>

				<!-- Contact Cards Grid -->
				<div class="grid gap-4 sm:grid-cols-2">
					<!-- Address -->
					<div class="rounded-xl border border-white/10 bg-navy-800 p-5">
						<div class="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-gold-500/10">
							<svg class="h-4 w-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						</div>
						<h3 class="font-semibold text-white text-sm">Address</h3>
						<p class="mt-1 text-sm text-gray-400">Industrial Area 2, Sharjah - U.A.E.</p>
					</div>

					<!-- Landline -->
					<div class="rounded-xl border border-white/10 bg-navy-800 p-5">
						<div class="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-gold-500/10">
							<svg class="h-4 w-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
						</div>
						<h3 class="font-semibold text-white text-sm">Landline</h3>
						<a href="tel:+97165612799" class="mt-1 block text-sm text-gold-400 hover:text-gold-300 transition-colors">+971 6 561 2799</a>
					</div>

					<!-- WhatsApp Sales -->
					<div class="rounded-xl border border-white/10 bg-navy-800 p-5">
						<div class="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10">
							<svg class="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
							</svg>
						</div>
						<h3 class="font-semibold text-white text-sm">WhatsApp Sales</h3>
						<a href="https://wa.me/971542576770" target="_blank" rel="noopener noreferrer" class="mt-1 block text-sm text-green-400 hover:text-green-300 transition-colors">+971 54 257 6770</a>
					</div>

					<!-- WhatsApp Technical -->
					<div class="rounded-xl border border-white/10 bg-navy-800 p-5">
						<div class="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10">
							<svg class="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
							</svg>
						</div>
						<h3 class="font-semibold text-white text-sm">WhatsApp Technical</h3>
						<a href="https://wa.me/971542576772" target="_blank" rel="noopener noreferrer" class="mt-1 block text-sm text-green-400 hover:text-green-300 transition-colors">+971 54 257 6772</a>
					</div>
				</div>

				<!-- Email -->
				<div class="rounded-xl border border-white/10 bg-navy-800 p-5">
					<div class="flex items-center gap-4">
						<div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-500/10">
							<svg class="h-5 w-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						</div>
						<div class="min-w-0">
							<h3 class="font-semibold text-white text-sm">Email Us</h3>
							<a href="mailto:sales@globalprimeengineering.ae" class="text-sm text-gold-400 hover:text-gold-300 transition-colors break-all">sales@globalprimeengineering.ae</a>
						</div>
					</div>
				</div>

				<!-- Business Hours -->
				<div class="rounded-xl border border-white/10 bg-navy-800 p-5">
					<div class="flex items-center gap-4">
						<div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-500/10">
							<svg class="h-5 w-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-white text-sm">Business Hours</h3>
							<p class="text-sm text-gray-400">Saturday - Thursday: 8:00 AM - 6:00 PM</p>
							<p class="text-sm text-gray-400">Friday: Closed | Emergency: 24/7</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
