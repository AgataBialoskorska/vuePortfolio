<script setup>
	import { RouterLink } from 'vue-router'
</script>
<template name="nav">
	<nav>
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/stack">Tech Stack</RouterLink>
		<RouterLink to="/projects">Projects</RouterLink>
	</nav>
</template>
<style scoped>
	nav {
		width: 100%;
		font-size: 1rem;
		text-align: center;
		padding: 2rem 0;
	}

	nav a.router-link-exact-active {
		color: var(--color-text);
	}

	nav a.router-link-exact-active:hover {
		background-color: transparent;
	}

	nav a {
		display: inline-block;
		padding: 0 1rem;
		border-left: 1px solid var(--color-border);
	}

	nav a:first-of-type {
		border: 0;
	}

	@media (min-width: 1024px) {
		nav {
			margin-left: -1rem;
			font-size: 1.5rem;
		}
	}
</style>
