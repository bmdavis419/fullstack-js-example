<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each data.users as user}
	<div>
		<h4>#{user.id}</h4>
		<h5>{user.username}</h5>
		<p>{user.email}</p>
	</div>
{/each}
