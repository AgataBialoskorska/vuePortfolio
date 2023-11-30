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
		font-size: 1.5em;
		text-align: center;
		padding: 1.5em 0;
	}

	nav a.router-link-exact-active {
		color: var(--white);
	}

	nav a.router-link-exact-active:hover {
		background-color: transparent;
	}

	nav a {
		display: inline-block;
		padding: 0 1em;
		border-left: 1px solid var(--borders);
	}

	nav a:first-of-type {
		border: 0;
	}
	@media (max-width: 1280px) {
		nav {
			font-size: max(1.5em, 16px);
			display: flex;
			justify-content: center;
		}
	}
</style>
