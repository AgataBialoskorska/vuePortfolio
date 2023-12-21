<script>
	export default {
		name: 'HiEl',
	}
</script>

<template>
	<img alt="my photo" class="photo" src="@/components/img/agataCV.jpeg" />
	<h1>Hi, I am Agata</h1>
</template>

<style scoped>
	.photo {
		border: none;
		border-radius: 50%;
		width: 40%;
	}
	@media (max-width: 1280px) {
		.photo {
			max-width: 15vmin;
		}
	}
</style>
