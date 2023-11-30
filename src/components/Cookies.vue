<script>
	export default {
		data() {
			return {
				checking: false,
			}
		},
		mounted() {
			const checking = localStorage.getItem('cookieButtonClicked')
			if (checking) {
				this.checking = true
			}
		},
		methods: {
			clicked() {
				localStorage.setItem('cookieButtonClicked', true)
				this.checking = true
			},
		},
	}
</script>

<template>
	<div class="cookie" v-if="!checking">
		<p>I do not collect cookies.</p>
		<button @click="clicked">OK!</button>
	</div>
</template>

<style>
	.cookie {
		background-color: var(--background);
		display: flex;
		margin: auto;
		padding: 1vmin;
		justify-content: space-evenly;
		align-items: center;
		font-size: 1rem;
		z-index: 999;
	}
	button {
		background: transparent;
		border: 2px solid var(--green);
		border-radius: 50%;
		color: white;
		padding: 1em;
	}
	button:hover {
		cursor: pointer;
		background: var(--green);
		border: 2px solid transparent;
	}
</style>
