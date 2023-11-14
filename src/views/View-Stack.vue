<template>
	<div>
		<h2 class="green">I work with:</h2>
		<div class="gridStack">
			<i class="fa-brands fa-square-github"></i>
			<i class="fa-brands fa-node"></i>
			<i class="fa-brands fa-vuejs"></i>
			<i class="fa-brands fa-square-js"></i>
			<i class="fa-brands fa-html5"></i>
			<i class="fa-brands fa-css3"></i>
			<i class="fa-brands fa-react"></i>
			<i class="fa-brands fa-python"></i>
			<i class="fa-brands fa-aws"></i>
			<i class="fa-brands fa-wordpress"></i>
		</div>
	</div>
</template>

<style scoped>
	div:first-child {
		margin-left: 2em;
	}
	.gridStack {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
		max-width: 50%;
	}
	.gridStack > * {
		font-size: 3em;
		color: var(--green);
		padding: 1em 1em 0 0;
	}
</style>
