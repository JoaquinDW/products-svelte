<script lang="ts">
	let data = $props();
</script>

<header>
	<a href="/" data-sveltekit-preload-data="hover">
		<h1 class="px-10 text-4xl font-bold text-purple-600">⬅️ Home</h1>
	</a>
</header>

{@render data.children()}
