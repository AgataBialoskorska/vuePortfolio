<template>
	<div class="gridStack">
		<i class="fa-brands fa-square-github" style="color: rgb(255, 255, 255)"></i>
		<i class="fa-brands fa-node" style="color: rgb(104, 159, 99)"></i>
		<i class="fa-brands fa-vuejs" style="color: rgb(65, 184, 131)"></i>
		<i class="fa-brands fa-square-js" style="color: rgb(247, 223, 30)"></i>
		<i class="fa-brands fa-html5" style="color: rgb(241, 101, 41)"></i>
		<i class="fa-brands fa-css3" style="color: rgb(0, 128, 255)"></i>
		<i class="fa-brands fa-react" style="color: rgb(97, 218, 251)"></i>
		<i class="fa-brands fa-python" style="color: rgb(255, 222, 87, 1)"></i>
		<i class="fa-brands fa-aws" style="color: rgb(255, 153, 0)"></i>
		<i class="fa-brands fa-wordpress" style="color: rgb(0, 116, 154)"></i>
	</div>
</template>

<style scoped>
	.gridStack {
		margin: auto;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
	}
	.gridStack > * {
		font-size: 3em;
		color: var(--green);
		margin: 0.5em 1em;
	}
	@media (max-width: 1280px) {
		.gridStack {
			max-width: 80%;
			margin-top: 2vh;
		}
		.gridStack > * {
			font-size: 8vmin;
		}
	}
</style>
