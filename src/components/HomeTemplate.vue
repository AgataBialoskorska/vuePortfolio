<template>
	<div class="item">
		<i>
			<slot name="icon"></slot>
		</i>
		<h3>
			<slot name="heading"></slot>
		</h3>
	</div>
</template>

<style scoped>
.item {
	margin-top: 2rem;
	display: flex;
	position: relative;
}

i {
	display: flex;
	place-items: center;
	place-content: center;
	width: 32px;
	height: 32px;
	color: var(--color-text);
}

@media (min-width: 1024px) {
	.item {
		margin: 0;
		padding: 1.5rem 0;
		width: 80%;
	}

	i {
		top: calc(50% - 25px);
		position: absolute;
		border: 1px solid var(--color-border);
		background: var(--color-background);
		border-radius: 8px;
		width: 100%;
		height: 50px;
	}

	h3 {
		font-size: 1.2rem;
		font-weight: 500;
		position: relative;
		width: 100%;
		text-align: right;
	}
	.item:before {
		content: ' ';
		border-left: 1px solid var(--color-border);
		position: absolute;
		left: 50%;
		bottom: calc(50% + 25px);
		height: calc(50% - 25px);
	}

	.item:after {
		content: ' ';
		border-left: 1px solid var(--color-border);
		position: absolute;
		left: 50%;
		top: calc(50% + 25px);
		height: calc(50% - 25px);
	}

	.item:first-of-type:before {
		display: none;
	}

	.item:last-of-type:after {
		display: none;
	}
}
</style>
