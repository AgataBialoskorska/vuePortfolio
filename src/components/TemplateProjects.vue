<template>
	<div class="window">
		<h3>
			<slot name="title"></slot>
		</h3>
		<i>
			<slot name="left"></slot>
		</i>
		<p>
			<slot name="right"></slot>
		</p>
	</div>
</template>

<style scoped>
	.window {
		margin: 0.5em auto;
		display: grid;
		grid-template-areas:
			'title right'
			'left right';
		grid-template-columns: 0.7fr 1fr;
		border: 2px outset;
		border-radius: 15px;
		transform: scale(1);
		transition: all 500ms;
		width: 80%;
	}
	.window:hover {
		background-color: black;
		transform: scale(1.05);
		transition: transform 500ms ease-in-out;
		z-index: 99;
	}
	.window > * {
		display: flex;
		align-items: center;
		padding: 10px;
	}

	.window > h3 {
		grid-area: title;
	}

	.window > i {
		grid-area: left;
	}

	.window > p {
		grid-area: right;
	}
</style>
