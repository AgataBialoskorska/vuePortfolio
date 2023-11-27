<script>
	export default {
		data() {
			return {
				showAlphabet: true,
				passwordArray: [
					'Practice makes perfect',
					'East or west, home is best',
					'A friend in need is a friend indeed',
					'Where there is a will, there is a way',
					'Time heals all wounds',
					'Better late than never',
					'Easier said than done',
					'Speech is silver, silence is golden',
					'Better an open enemy than a false friend',
					'Every man has his faults',
				],
				password: '',
				passwordLength: 0,
				trying: 0,
				passwordSecret: [],
				clickedLetters: [],
				alphabet: Array.from({ length: 26 }, (_, i) =>
					String.fromCharCode(65 + i)
				),
				wonGame: false,
				lostGame: false,
				resultMessage: '',
			}
		},
		created() {
			this.initializeGame()
		},
		methods: {
			goBack() {
				this.$router.go(-1)
			},
			initializeGame() {
				this.showAlphabet = true
				this.password =
					this.passwordArray[
						Math.floor(Math.random() * this.passwordArray.length)
					].toUpperCase()
				this.passwordLength = this.password.length
				this.trying = 0
				this.passwordSecret = this.password
					.split('')
					.map(char => (char === ' ' || char === ',' ? char : '-'))
				this.clickedLetters = []
				this.wonGame = false
				this.lostGame = false
				this.resultMessage = ''
				//console.log(this.password)
			},
			check(letter) {
				if (this.clickedLetters.includes(letter)) {
					return
				}

				this.clickedLetters.push(letter)
				// console.log(this.clickedLetters);
				let letterFound = false

				for (let i = 0; i < this.passwordLength; i++) {
					if (this.password[i] === letter) {
						this.passwordSecret.splice(i, 1, letter)
						letterFound = true
					}
				}

				if (!letterFound) {
					this.trying++
					if (this.trying >= 9) {
						this.endGame(false)
					}
				}

				if (!this.passwordSecret.includes('-')) {
					this.endGame(true)
				}
			},
			endGame(isWin) {
				if (isWin && !this.lostGame) {
					this.wonGame = true
					this.resultMessage = 'Congratulations! You won!'
					this.showAlphabet = false
				} else {
					this.lostGame = true
					this.resultMessage = 'Oops... You lost. Try again!'
					this.showAlphabet = false
				}
			},
			resetGame() {
				this.initializeGame()
			},
		},
	}
</script>
<template>
	<div class="gameHangman">
		<RouterLink to="./projects">
			<i class="fa-solid fa-angles-left"></i>
			back
		</RouterLink>
		<h1>Hangman Game</h1>
		<img :src="'src/components/img/s' + trying + '.jpg'" alt="Hangman Image" />
		<div class="password">
			<span v-for="(letter, index) in passwordSecret" :key="index">
				{{
					letter === ' ' || letter === ','
						? letter
						: clickedLetters.includes(letter)
						? letter
						: lostGame
						? this.password[index]
						: '-'
				}}
			</span>
		</div>
		<div class="alphabet" v-if="showAlphabet">
			<span
				v-for="(letter, index) in alphabet"
				:key="index"
				@click="check(letter)"
				:class="{
					disabled: clickedLetters.includes(letter),
					guessed:
						clickedLetters.includes(letter) && password.indexOf(letter) > -1,
					notguessed:
						clickedLetters.includes(letter) && password.indexOf(letter) === -1,
				}"
			>
				{{ letter }}
			</span>
		</div>
		<div class="result" :class="{ won: wonGame, loose: lostGame }">
			{{ resultMessage }}
		</div>
		<a class="reset" @click="resetGame">Play Again</a>
		<a
			class="gh"
			href="https://github.com/AgataBialoskorska/vuePortfolio/blob/master/src/components/GameHangman.vue"
		>
			<i class="fa-brands fa-square-github"></i>
			GH Repository
		</a>
	</div>
</template>
<style scoped>
	.gameHangman {
		border: outset 1px;
		border-radius: 30px;
		padding: 1.5em;
	}
	h1 {
		margin: 10px auto;
		text-align: center;
	}
	img {
		display: block;
		margin: 0 auto;
		max-width: 100%;
		width: 20vmin;
	}
	.password {
		margin: 1em auto;
		font-size: 1.5em;
		display: flex;
		justify-content: space-between;
	}
	.alphabet {
		display: flex;
		flex-wrap: wrap;
		font-size: 1.5em;
	}
	.alphabet span {
		width: 45px;
		text-align: center;
	}
	.alphabet span:hover {
		cursor: pointer;
	}
	.guessed {
		color: greenyellow;
	}
	.notguessed {
		color: red;
	}
	.result {
		text-align: center;
	}
	a {
		display: inline-block;
		padding: 1vmin;
		margin: 10px auto;
	}
	@media (max-width: 1280px) {
		.gameHangman {
			width: 70vmin;
			margin: auto;
		}
	}
</style>
