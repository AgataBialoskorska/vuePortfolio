<script>
	import TemplateSkills from '../components/TemplateProjects.vue'
	import WeatherAPI from '../components/WeatherAPI.vue'
	import AirlyAPI from '../components/AirlyApi.vue'

	export default {
		components: {
			TemplateSkills,
			WeatherAPI,
			AirlyAPI,
		},
		methods: {
			getWeather() {
				this.$refs.getApiWeather.getWeather()
			},
			getAirly() {
				this.$refs.getApiAirly.getAirly()
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
			<a href="https://github.com/JakubBialoskorski/bialoskorski-eu/pull/64">GH Repository</a>
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
			<a href="https://github.com/AgataBialoskorska/hello-world">GH Repository</a>
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
			<a href="https://github.com/AgataBialoskorska/vuePortfolio/blob/master/src/components/GameHangman.vue">
				GH Repository
			</a>
		</template>
		<template #right>Hangman game created with Vanilla Java Script, rewrited to Vue.js</template>
	</TemplateSkills>
	<TemplateSkills>
		<template #title>Click icon and check random city weather</template>

		<template #left>
			<a class="click" @click="getWeather">
				<i class="fa-solid fa-cloud-sun-rain"></i>
			</a>
		</template>
		<template #right>
			<WeatherAPI ref="getApiWeather" />
		</template>
	</TemplateSkills>
	<TemplateSkills>
		<template #title>
			Click the icon and check
			<br />
			what the air is like in the selected city?
		</template>

		<template #left>
			<a class="click" @click="getAirly">
				<i class="fa-solid fa-lungs"></i>
			</a>
		</template>
		<template #right>
			<AirlyAPI ref="getApiAirly" />
		</template>
	</TemplateSkills>
</template>
<style scoped>
	.click {
		margin: 0.6em;
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
	a:hover {
		animation: beat 1.2s infinite ease-in-out;
	}
	@keyframes beat {
		0% {
			transform: scale(1.1);
		}
		50% {
			transform: scale(0.9);
		}
		100% {
			transform: scale(1.1);
		}
	}
</style>
