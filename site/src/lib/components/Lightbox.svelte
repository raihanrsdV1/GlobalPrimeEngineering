<script module lang="ts">
	export interface LightboxImage {
		src: string;
		/** Small version shown instantly while the full image loads. */
		thumb: string;
		width: number;
		height: number;
		alt: string;
		caption: string;
	}
</script>

<script lang="ts">
	interface Props {
		images: LightboxImage[];
		/** Index of the image being shown, or null when closed. */
		index: number | null;
	}

	let { images, index = $bindable() }: Props = $props();

	let dialog = $state<HTMLDialogElement>();
	let touchStartX: number | null = null;

	const current = $derived(index === null ? undefined : images[index]);
	const isOpen = $derived(index !== null);

	$effect(() => {
		if (!dialog) return;
		if (isOpen && !dialog.open) dialog.showModal();
		else if (!isOpen && dialog.open) dialog.close();
	});

	// Stop the page behind from scrolling; the cleanup also runs if the page is left while open.
	$effect(() => {
		if (!isOpen) return;
		const root = document.documentElement;
		root.style.overflow = 'hidden';
		return () => {
			root.style.overflow = '';
		};
	});

	function step(delta: number) {
		if (index === null) return;
		index = (index + delta + images.length) % images.length;
	}

	function handleClose() {
		index = null;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'ArrowRight') step(1);
		else if (event.key === 'ArrowLeft') step(-1);
	}

	// The dialog fills the screen, so a click on it (rather than its contents) is a click on the dimmed area.
	function handleClick(event: MouseEvent) {
		if (event.target === dialog) dialog.close();
	}

	function handleTouchStart(event: TouchEvent) {
		touchStartX = event.touches.length === 1 ? event.touches[0].clientX : null;
	}

	function handleTouchEnd(event: TouchEvent) {
		if (touchStartX === null) return;
		const distance = event.changedTouches[0].clientX - touchStartX;
		touchStartX = null;
		if (Math.abs(distance) > 50) step(distance < 0 ? 1 : -1);
	}
</script>

<!-- Keyboard users have Escape and the arrow keys; the click handler only adds closing on the backdrop. -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions a11y_click_events_have_key_events -->
<dialog
	bind:this={dialog}
	onclose={handleClose}
	onclick={handleClick}
	onkeydown={handleKeydown}
	aria-label={current?.caption}
	class="lightbox m-0 h-full max-h-none w-full max-w-none bg-transparent p-4 text-white open:flex open:flex-col open:items-center open:justify-center sm:p-10"
>
	{#if current && index !== null}
		<button
			type="button"
			onclick={() => dialog?.close()}
			class="absolute top-3 right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-gold-400 sm:top-5 sm:right-5"
			aria-label="Close"
		>
			<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>

		{#if images.length > 1}
			<button
				type="button"
				onclick={() => step(-1)}
				class="absolute top-1/2 left-2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-gold-400 sm:left-6 sm:flex"
				aria-label="Previous"
			>
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
			</button>
			<button
				type="button"
				onclick={() => step(1)}
				class="absolute top-1/2 right-2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-gold-400 sm:right-6 sm:flex"
				aria-label="Next"
			>
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		{/if}

		<figure class="flex max-h-full min-h-0 flex-col items-center" ontouchstart={handleTouchStart} ontouchend={handleTouchEnd}>
			{#key current.src}
				<img
					src={current.src}
					alt={current.alt}
					width={current.width}
					height={current.height}
					class="h-auto max-h-[calc(100dvh-9rem)] w-auto max-w-full rounded-lg object-contain shadow-2xl shadow-black/50"
					style="background: #fff url('{current.thumb}') center / contain no-repeat"
				/>
			{/key}
			<figcaption class="mt-4 text-center">
				<p class="text-sm font-semibold text-gold-400 sm:text-base">{current.caption}</p>
				<p class="mt-1 text-xs text-gray-400">
					{index + 1} / {images.length}
					<span class="mx-1.5 text-gray-600" aria-hidden="true">|</span>
					<a href={current.src} target="_blank" rel="noopener noreferrer" class="underline underline-offset-2 transition-colors hover:text-white">
						Open full size
					</a>
					{#if images.length > 1}
						<span class="sm:hidden"><span class="mx-1.5 text-gray-600" aria-hidden="true">|</span>Swipe for more</span>
					{/if}
				</p>
			</figcaption>
		</figure>
	{/if}
</dialog>
