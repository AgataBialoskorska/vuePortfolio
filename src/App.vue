<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HiSite from './components/HiSite.vue'
</script>

<template>
	<header>
		<div class="wrapper">
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
				<RouterLink to="/skills">Skills</RouterLink>
			</nav>

			<HiSite />
		</div>
	</header>

	<RouterView />
</template>

<style scoped>
header {
	line-height: 1.5;
	max-height: 100vh;
}

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
	header {
		display: flex;
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
	}

	header .wrapper {
		display: flex;
		justify-content: center;
		place-items: flex-stretch;
		flex-wrap: wrap;
	}

	nav {
		margin-left: -1rem;
		font-size: 1.5rem;
	}
}
</style>
