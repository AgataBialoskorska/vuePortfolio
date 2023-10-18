<script setup>
import HomeTemplate from './HomeTemplate.vue'
import IconMail from './icons/IconMail.vue'
import IconGithub from './icons/IconGithub.vue'
import IconLinkedin from './icons/IconLinkedin.vue'
</script>

<template>
	<h1 class="green contact">Feel free to contact me with:</h1>
	<HomeTemplate>
		<template #icon>
			<IconMail />
		</template>
		<template #heading>
			<a
				class="linkContact"
				href="mailto:abialoskorska@icloud.com"
				target="_blank"
				rel="noopener"
				>e-mail</a
			></template
		>
	</HomeTemplate>

	<HomeTemplate>
		<template #icon>
			<IconGithub />
		</template>
		<template #heading>
			<a
				class="linkContact"
				href="https://github.com/agatabialoskorska"
				target="_blank"
				rel="noopener"
				>GitHub</a
			></template
		>
	</HomeTemplate>

	<HomeTemplate>
		<template #icon>
			<IconLinkedin
			/>
		</template>
		<template #heading>
			<a
				class="linkContact"
				href="https://www.linkedin.com/in/agata-bia%C5%82osk%C3%B3rska-b77b73134"
				target="_blank"
				rel="noopener"
				>LinkedIn</a
			></template
		>
	</HomeTemplate>
</template>
<style>
.contact {
	font-weight: 500;
	padding: 2rem 0;
	font-size: 1.5rem;
}
a.linkContact {
	display:flex;
	width: 100%;
	height:100%;
	padding: 0 1rem;
	flex-direction: row-reverse;
}
</style>
