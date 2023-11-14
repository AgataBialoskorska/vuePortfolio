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
	margin: 0.5em auto;
	display: grid;
	grid-template-areas:
		'header header'
		'image description';
	border: 2px outset;
	border-radius: 15px;
	transform: scale(1);
	width:80%;
}
.window:hover {
	background-color: black;
	transform: scale(1.2);
	z-index: 99;
}
.window > * {
	display: flex;
	padding: 10px;
}

.window > h3 {
	grid-area: header;
}

.window > i {
	grid-area: image;
	width: 100px;
}

.window > p {
	grid-area: description;
}
</style>
