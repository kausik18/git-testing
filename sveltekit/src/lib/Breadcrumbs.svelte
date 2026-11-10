<script lang="ts">
	interface Props {
		items: { name: string; path: string }[];
	}

	let { items }: Props = $props();
</script>

<nav class="breadcrumbs" aria-label="Breadcrumb">
	<ol>
		{#each items as item, i}
			<li>
				{#if i < items.length - 1}
					<a href={item.path}>{item.name}</a>
				{:else}
					<span aria-current="page">{item.name}</span>
				{/if}
			</li>
		{/each}
	</ol>
</nav>
