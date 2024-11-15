<script module lang="ts">
	export interface Product {
		id: number;
		title: string;
		price: number;
		description: string;
		category: string;
		image: string;
	}

	let products: Promise<Product[]> = fetch('https://fakestoreapi.com/products').then((res) =>
		res.json()
	);
</script>

<section>
	<h1 class="my-10 text-center text-7xl font-bold text-purple-600">Productos</h1>

	{#await products}
		<p>Cargando...</p>
	{:then data}
		<ul class="mt-10 grid grid-cols-4 place-items-center gap-5">
			{#each data as product}
				<!-- svelte-ignore a11y_img_redundant_alt -->
				<a
					href={`/products/${product.id}`}
					data-sveltekit-preload-data="hover"
					class="group transition-transform duration-150 hover:scale-105"
				>
					<div
						class="flex h-[520px] w-[350px] flex-col justify-between overflow-hidden rounded-lg border border-gray-200 p-4 shadow-md"
					>
						<img
							src={product.image}
							alt={product.title}
							class="h-64 w-full object-contain transition-all duration-150 ease-in-out group-hover:scale-110"
						/>
						<div class="mt-1">
							<h2 class="text-balance text-center text-xl font-bold">
								{product.title.substring(0, 50)}
							</h2>
							<p class="text-balance text-center text-sm text-gray-500">
								{product.description.substring(0, 200)}
							</p>
						</div>
						<div>
							<button class="w-full rounded-md bg-purple-600 py-2 text-white">
								Add to cart - ${product.price}
							</button>
						</div>
					</div>
				</a>
			{/each}
		</ul>
	{:catch error}
		<p>Hubo un error</p>
	{/await}
</section>

<style>
	body {
		background-color: #faf7f6;
	}
</style>
