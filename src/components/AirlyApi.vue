<template>
	<div>
		<div class="selectStyle" v-if="selectCity">
			<select v-model="selectedCity">
				<option value="" selected disabled>Select the city</option>
				<option value="Cracow">Cracow</option>
				<option value="Gdansk">Gdansk</option>
				<option value="Warsaw">Warsaw</option>
				<option value="Poznan">Poznan</option>
			</select>
		</div>
		<div class="showData" v-if="showData">
			<p>Last Measurement Time: {{ time }} UTC</p>
			<p>PM10: {{ pm10 }} µg/m³ / {{ pm10p }}%</p>
			<p>PM2.5: {{ pm25 }} µg/m³ / {{ pm25p }}%</p>
			<p>PM1: {{ pm1 }} µg/m³</p>
		</div>
		<div class="toManyRequests" v-if="toManyRequests">
			<p>
				Ooh, sorry!
				<br />
				To many requests today.
				<br />
				Please, try after midnight.
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				pm1: '',
				pm10: '',
				pm10p: '',
				pm25: '',
				pm25p: '',
				time: '',
				selectedCity: '',
				cities: {
					Cracow: ['50.057224', '19.933157'],
					Gdansk: ['54.380279', '18.620274'],
					Warsaw: ['52.2271933854', '21.0580286402'],
					Poznan: ['52.394534', '16.924363'],
				},
				showData: false,
				toManyRequests: false,
				selectCity: true,
			}
		},
		methods: {
			getAirly() {
				const selected = this.cities[this.selectedCity]

				const headers = {
					Accept: 'application/json',
					apikey: 'vRrcb4VwKBe35lAXPg2CkQSdlgVvRZec',
				}

				const URL = `https://airapi.airly.eu/v2/measurements/point?lat=${selected[0]}&lng=${selected[1]}`

				fetch(URL, { method: 'GET', headers })
					.then(response => {
						if (!response.ok) {
							throw ((this.toManyRequests = true), (this.selectCity = false), new Error("Something's broken"))
						}
						return response.json()
					})
					.then(data => {
						const myTime = data.current.tillDateTime
						this.time = `${myTime.slice(0, 10)} / ${myTime.slice(11, 16)}`
						this.pm1 = data.current.values.find(item => item.name === 'PM1').value
						this.pm10 = data.current.values.find(item => item.name === 'PM10').value
						this.pm10p = data.current.standards.find(item => item.pollutant === 'PM10').percent
						this.pm25 = data.current.values.find(item => item.name === 'PM25').value
						this.pm25p = data.current.standards.find(item => item.pollutant === 'PM25').percent
						this.showData = true
						// console.log(data)
					})
					.catch(error => {
						console.error(error)
					})
			},
		},
	}
</script>
<style scoped>
	.selectStyle {
		position: relative;
		width: 100%;
	}
	.selectStyle select {
		display: none;
	}
	.selectStyle::before {
		content: '\26DB';
		position: absolute;
		color: var(--green);
		top: 50%;
		right: 10px;
		transform: translateY(-50%);
		pointer-events: none;
	}
	.selectStyle select {
		appearance: none;
		width: 100%;
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 4px;
		display: grid;
		background: transparent;
		color: var(--text);
		font-size: 1em;
		border: 1px solid var(--green);
		border-radius: 5px;
		padding-right: 30px;
	}
	.selectStyle:hover select {
		background-color: var(--hover-bg);
	}
	.toManyRequests {
		color: darkred;
	}
</style>
