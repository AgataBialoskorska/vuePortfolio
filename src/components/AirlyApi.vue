<template>
	<div>
		<select v-model="selectedCity">
			<option value="Cracow">Cracow</option>
			<option value="Gdansk">Gdansk</option>
			<option value="Warsaw" selected>Warsaw</option>
			<option value="Poznan">Poznan</option>
		</select>
		<p>Last Measurement Time: {{ time }} UTC</p>
		<p>PM10: {{ pm10 }}</p>
		<p>PM2.5: {{ pm25 }}</p>
		<p>PM1: {{ pm1 }}</p>
		<p>Temperature: {{ temp }}*C</p>
		<p>Humidity: {{ hum }}%</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				pm1: '',
				pm10: '',
				pm25: '',
				time: '',
				temp: '',
				hum: '',
				selectedCity: '',
				cities: {
					Cracow: ['50.057224', '19.933157'],
					Gdansk: ['54.380279', '18.620274'],
					Warsaw: ['52.2271933854', '21.0580286402'],
					Poznan: ['52.394534', '16.924363'],
				},
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
							throw new Error('Network response was not ok')
						}
						return response.json()
					})
					.then(data => {
						const myTime = data.current.tillDateTime
						this.time = `${myTime.slice(0, 10)} / ${myTime.slice(11, 16)}`
						this.pm1 = data.current.values.find(item => item.name === 'PM1').value
						this.pm10 = data.current.values.find(item => item.name === 'PM10').value
						this.pm25 = data.current.values.find(item => item.name === 'PM25').value
						this.temp = data.current.values.find(item => item.name === 'TEMPERATURE').value
						this.hum = data.current.values.find(item => item.name === 'HUMIDITY').value
					})
					.catch(error => {
						console.error(error)
					})
			},
		},
	}
</script>
<style scoped>
	select {
		width: 100%;
		font-size: 1em;
		color: white;
		background: transparent;
		border: 1px solid var(--green);
		border-radius: 5px;
		padding: 3%;
	}
</style>
