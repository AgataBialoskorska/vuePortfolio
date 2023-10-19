<script setup>
import SkillsTemplate from './SkillsTemplate.vue'
import WeatherAPI from './WeatherAPI.vue'
</script>

<template>
	<SkillsTemplate>
		<template #headings><a href="https://jabi.pl">jabi.pl</a></template
		><template #image>
			<a href="https://jabi.pl"
				><img
					src="https://agatabialoskorska.github.io/my-portfolio/projects/jabi.png"
			/></a>
		</template>
		<template #description>
			<a href="https://github.com/JacekBialoskorski/jabi-pl">GH Repository</a>
		</template>
	</SkillsTemplate>
	<SkillsTemplate>
		<template #headings>"Hello World"<br/>in several programming languages</template
		><template #image>
			<img
				src="https://agatabialoskorska.github.io/my-portfolio/projects/programming.jpg" />
		</template>
		<template #description
			><a href="https://github.com/AgataBialoskorska/hello-world"
				>GH Repository</a
			></template
		>
	</SkillsTemplate>

	<SkillsTemplate>
		<template #headings>Wanna play Hangman?</template
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
		</template> </SkillsTemplate
	><SkillsTemplate>
		<template #headings>Choose random city and check its weather</template
		><template #image> </template>
		<template #description>
			<WeatherAPI />
		</template>
	</SkillsTemplate>
</template>
<style scoped>
img {
	width: 100px;
}

</style>
