<script setup>
import { RouterView } from 'vue-router'
import Navigation from './views/Navigation.vue'
import HiSite from './views/HiSite.vue'
import Contact from './views/Contact.vue'
</script>

<template>
	<header>
		<Navigation />
		<HiSite />
		<Contact />
	</header>
	<div class="content"><RouterView /></div>
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
.content img{
	max-width: 100px;
}
</style>
