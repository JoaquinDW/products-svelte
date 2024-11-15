<script lang="ts">
	import type { Product } from '../../+page.svelte';

	let { data } = $props();
	let { productInfo }: { productInfo: Product } = data;
	$inspect(data);
</script>

<article class="flex items-center justify-center">
	<!-- clone amazon product detail with img on the left and rest on right -->
	<div
		class="flex h-[100vh] flex-col items-center justify-center gap-20 md:flex-row md:items-center md:justify-center"
	>
		<div class="w-full md:w-[600px]">
			<img src={productInfo.image} alt={productInfo.title} class="h-auto w-full object-contain" />
		</div>
		<div class="flex w-full flex-col gap-5 md:w-1/3">
			<h1 class="text-4xl font-bold text-purple-600">{productInfo.title}</h1>
			<p class="text-lg text-gray-500">{productInfo.description}</p>
			<p class="text-2xl font-bold text-purple-600">${productInfo.price}</p>
			<button class="w-full rounded-md bg-purple-600 py-2 text-white">Add to cart</button>
		</div>
	</div>
</article>
