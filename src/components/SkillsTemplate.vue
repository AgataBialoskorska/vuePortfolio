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
	display: flex;
	flex-direction: column;
    justify-content: space-around;
	align-items: center;
	position: relative;
	border: 1px outset;
	border-radius: 15px;
	margin-top: 2em;
}
div.window > * {
	display: flex;
	padding: 10px;
	text-align: center;
}

@media (min-width: 1024px) {
}
.window:before {
	content: ' ';
	border-left: 1px solid var(--color-border);
	position: absolute;
	left: 50%;
	bottom: 0;
	height: calc(1em - 10px);
}

.window:after {
	content: ' ';
	border-left: 1px solid var(--color-border);
	position: absolute;
	left: 50%;
	top: 0;
	height: 0;
}

.window:first-of-type:before {
	display: none;
}

.window:last-of-type:after {
	display: none;
}
</style>
