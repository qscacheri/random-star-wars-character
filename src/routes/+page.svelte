<script>
	const apiUrl = 'https://random-star-wars-character.vercel.app/api';
</script>

<main
	class="min-h-screen bg-gradient-to-br from-emerald-600 via-green-500 to-emerald-400 p-8 text-white"
>
	<div class="mx-auto max-w-4xl">
		<header class="mb-16 text-center">
			<h1
				class="mb-4 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-5xl font-bold text-transparent"
			>
				Random Star Wars Character API
			</h1>
			<p class="text-xl font-semibold text-white">
				Get a random Star Wars character name with a simple API call
			</p>
		</header>

		<section class="mb-12 rounded-lg bg-emerald-800/50 p-8 shadow-xl backdrop-blur-sm">
			<h2 class="mb-6 text-2xl font-semibold text-white">How to Use</h2>
			<div class="space-y-6">
				<div>
					<h3 class="mb-2 text-xl font-medium text-white">Endpoint</h3>
					<code class="block rounded-lg bg-emerald-900/50 p-4 font-mono text-white">
						GET {apiUrl}
					</code>
				</div>

				<div>
					<h3 class="mb-2 text-xl font-medium text-white">Example Response</h3>
					<pre
						class="overflow-x-auto rounded-lg bg-emerald-900/50 p-4 font-mono text-white">Luke Skywalker</pre>
				</div>
			</div>
		</section>

		<div class="text-center">
			<a
				href={apiUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-block transform rounded-lg bg-emerald-700 px-8 py-4 font-bold text-white transition hover:scale-105 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/20"
			>
				Try the API →
			</a>
		</div>
	</div>
</main>

<style>
	:global(body) {
		margin: 0;
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			sans-serif;
	}
</style>
