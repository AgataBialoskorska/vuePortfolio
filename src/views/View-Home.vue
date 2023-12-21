<script>
	export default {
		name: 'ViewHome',
	}
</script>

<template>
	<div class="home">
		<h2>Few words about me.</h2>
		<h3>
			Hi there!
			<br />
			I’m an aspiring frontend engineer with not-so-obvious past experience.
			<br />
			I used to work in customer service, accounting, art shop, e-commerce, also petrol business as a manager. I hope
			I’ll be able to push myself more to broaden coding skills used in my projects (at one of them you’re looking right
			now).
			<br />
			On a private side of things, I like to learn languages - mainly English and German, but also to discover world of
			javascript frameworks (Vue at the moment).
		</h3>
	</div>
</template>
<style scoped>
	h2 {
		padding-bottom: 0.5em;
	}
	@media (max-width: 1280px) {
		.home {
			margin: 3vmin auto;
			max-width: 70%;
			font-size: 2vmin;
		}
	}
</style>
