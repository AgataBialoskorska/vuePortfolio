<script>
import TemplateSkills from '../components/Template-Skills.vue';
import WeatherAPI from '../components/WeatherAPI.vue';

export default {
  components: {
    TemplateSkills,
    WeatherAPI,
  },
  methods: {
    getWeather() {
      this.$refs.getApi.getWeather();
    },
  },
};
</script>

<template>
	<TemplateSkills>
		<template #headings
			><a href="https://www.bialoskorski.eu"
				>Refactor of Next.js webpage</a
			></template
		><template #image>
			<a href="https://jabi.pl"
				><img
					src="https://agatabialoskorska.github.io/my-portfolio/projects/bialoskorskieu.png"
			/></a>
		</template>
		<template #description>
			<a href="https://github.com/JakubBialoskorski/bialoskorski-eu/pull/64"
				>GH Repository</a
			>
		</template>
	</TemplateSkills>

	<TemplateSkills>
		<template #headings
			><a href="https://jabi.pl">Webpage migration from WordPress</a></template
		><template #image>
			<a href="https://jabi.pl"
				><img
					src="https://agatabialoskorska.github.io/my-portfolio/projects/jabi.png"
			/></a>
		</template>
		<template #description>
			<a href="https://github.com/JacekBialoskorski/jabi-pl">GH Repository</a>
		</template>
	</TemplateSkills>
	<TemplateSkills>
		<template #headings
			>"Hello World" in several programming languages</template
		><template #image>
			<img
				src="https://agatabialoskorska.github.io/my-portfolio/projects/programming.jpg" />
		</template>
		<template #description
			><a href="https://github.com/AgataBialoskorska/hello-world"
				>GH Repository</a
			></template
		>
	</TemplateSkills>

	<TemplateSkills>
		<template #headings>Wanna play Hangman session?</template
		><template #image>
			<img
				src="https://agatabialoskorska.github.io/my-portfolio/projects/hangman/img/s4.jpg" />
		</template>
		<template #description>
			<a
				href="https://agatabialoskorska.github.io/my-portfolio/projects/hangman/hangman.html"
				>PLAY</a
			>---
			<a
				href="https://github.com/AgataBialoskorska/my-portfolio/tree/master/projects/hangman"
				>GH Repository</a
			>
		</template> </TemplateSkills
	><TemplateSkills>
		<template #headings>Click icon and check random city weather</template>

		<template #image>
			<a class="click" @click="getWeather">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Weather-sun-clouds-shower.svg/2048px-Weather-sun-clouds-shower.svg.png" />
			</a>
		</template>

		<template #description>
			<WeatherAPI ref="getApi" />
		</template>
	</TemplateSkills>
</template>
<style scoped>
.click {
	margin: 1em;
	padding: 10px;
	border: outset 1px;
	border-radius: 50%;
	text-align: center;
	width: 100px;
}
img {
	max-width: 50px;
	max-height: 50px;
}
</style>
