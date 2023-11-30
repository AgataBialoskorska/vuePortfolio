<script setup>
	import { RouterView } from 'vue-router'
	import Navigation from './views/Navigation.vue'
	import HiSite from './views/HiSite.vue'
	import Contact from './views/Contact.vue'
	import Cookies from './components/Cookies.vue'
</script>

<template>
	<header>
		<Navigation />
		<HiSite />
		<Contact />
	</header>
	<div class="content"><RouterView /></div>
	<footer>
		<Cookies />
	</footer>
</template>
<style>
	header {
		display: flex;
		flex-direction: column;
		place-items: center;
		justify-content: center;
	}
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.content img {
		max-width: 100px;
	}
	footer {
		position: fixed;
		bottom: 0;
		width: min(100vw, 1280px);
	}
</style>
