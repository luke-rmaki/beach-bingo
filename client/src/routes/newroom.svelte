<script lang="ts" context="module">
	export async function load({ fetch }) {
		const res = await fetch('/words.json');

		if (res.ok) {
			const data = await res.json();
			return {
				props: {
					data
				}
			};
		} else {
			return {
				status: 400,
				props: {
					msg: `Something bad happened when stringing some random words together`
				}
			};
		}
	}
</script>

<script lang="ts">
	import Button from '$lib/Button.svelte';

	export let data;
</script>

<svelte:head>
	<title>Beach Bingo | New Room</title>
</svelte:head>

<main>
	<h1>New Room</h1>
	<h3>Room name: <span>{data.data}</span></h3>
	<Button isPrimary={true} action={() => location.reload()}>New room name</Button>
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		align-items: center;

		h3 {
			color: var(--blue);
			span {
				color: var(--yellow);
			}
		}
	}
</style>
