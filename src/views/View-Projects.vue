<script>
	import TemplateSkills from '../components/TemplateProjects.vue'
	import WeatherAPI from '../components/WeatherAPI.vue'

	export default {
		components: {
			TemplateSkills,
			WeatherAPI,
		},
		methods: {
			getWeather() {
				this.$refs.getApi.getWeather()
			},
		},
	}
</script>

<template>
	<TemplateSkills>
		<template #title>
			<a href="https://www.bialoskorski.eu">
				<i class="fa-solid fa-angles-right"></i>
				bialoskorski.eu
			</a>
		</template>
		<template #left>
			<a href="https://github.com/JakubBialoskorski/bialoskorski-eu/pull/64">
				GH Repository
			</a>
		</template>
		<template #right>Refactor of Next.js webpage</template>
	</TemplateSkills>
	<TemplateSkills>
		<template #title>
			<a href="https://jabi.pl">
				<i class="fa-solid fa-angles-right"></i>
				jabi.pl
			</a>
		</template>
		<template #left>
			<a href="https://github.com/JacekBialoskorski/jabi-pl">GH Repository</a>
		</template>
		<template #right>Webpage migration from WordPress.</template>
	</TemplateSkills>
	<TemplateSkills>
		<template #title></template>
		<template #left>
			<a href="https://github.com/AgataBialoskorska/hello-world">
				GH Repository
			</a>
		</template>
		<template #right>"Hello World" in several programming languages</template>
	</TemplateSkills>

	<TemplateSkills>
		<template #title>
			<RouterLink to="../hangman">
				<i class="fa-solid fa-angles-right"></i>
				Wanna play Hangman session?
			</RouterLink>
		</template>
		<template #left>
			<a
				href="https://github.com/AgataBialoskorska/my-portfolio/tree/master/projects/hangman"
			>
				GH Repository
			</a>
		</template>
		<template #right>
			Hangman game created with Vanilla Java Script, rewrited to Vue.js
		</template>
	</TemplateSkills>
	<TemplateSkills>
		<template #title>Click icon and check random city weather</template>

		<template #left>
			<a class="click" @click="getWeather">
				<i class="fa-solid fa-cloud-sun-rain"></i>
			</a>
		</template>
		<template #right>
			<WeatherAPI ref="getApi" />
		</template>
	</TemplateSkills>
</template>
<style scoped>
	.click {
		margin: 1em;
		border: outset 1px var(--green);
		border-radius: 50%;
		margin: auto;
		padding: 1em;
		cursor: pointer;
		width: 8vmin;
		height: 8vmin;
	}
	.click svg {
		width: 100%;
		height: 100%;
	}
	a {
		padding: 0 0.4em;
	}
</style>
