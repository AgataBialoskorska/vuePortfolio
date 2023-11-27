<script>
	export default {
		methods: {
			aHover(e) {
				e.target.classList.add('fa-beat')
			},
			aNotHover(e) {
				e.target.classList.remove('fa-beat')
			},
		},
	}
</script>
<template>
	<div class="contact">
		<h2>Feel free to contact me with:</h2>
		<a
			href="mailto:abialoskorska@icloud.com"
			target="_blank"
			rel="noopener"
			@mouseenter="aHover"
			@mouseleave="aNotHover"
		>
			<i class="fa-regular fa-envelope"></i>
		</a>

		<a
			href="https://github.com/agatabialoskorska"
			target="_blank"
			rel="noopener"
			@mouseenter="aHover"
			@mouseleave="aNotHover"
		>
			<i class="fa-brands fa-github"></i>
		</a>

		<a
			href="https://www.linkedin.com/in/agata-bia%C5%82osk%C3%B3rska-b77b73134"
			target="_blank"
			rel="noopener"
			@mouseenter="aHover"
			@mouseleave="aNotHover"
		>
			<i class="fa-brands fa-linkedin-in"></i>
		</a>
	</div>
</template>
<style scoped>
	.contact {
		padding-top: 2em;
	}
	.contact a {
		display: inline-block;
		width: 33%;
		text-align: center;
		font-size: 3vmin;
		border-radius: 5px;
		padding: 0 0.5em;
	}

	@media (max-width: 1280px) and (orientation: portrait) {
		h2 {
			padding-left: 0.5em;
		}
		.contact a {
			font-size: max(3vmin, 30px);
		}
	}
</style>
