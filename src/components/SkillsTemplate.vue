<template>
	<div class="window">
		<h3>
			<slot name="headings"></slot>
		</h3>
		<i>
			<slot name="image"></slot>
		</i>
		<p>
			<slot name="description"></slot>
		</p>
	</div>
</template>

<style scoped>
.window {
	border: 1px outset;
	border-radius: 15px;
	flex-direction: column;
	place-items: center;

	margin: auto;
	margin-top: 5%;
	min-height: 40vh;
	width: 60%;
	display: grid;
	grid-template-rows: 0.3fr 0.3fr 0.4fr;
	grid-template-columns: 1fr;
}
div.window > * {
	display: flex;
}

@media (min-width: 1024px) {
}
</style>
