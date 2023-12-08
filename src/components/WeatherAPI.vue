<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				API_LINK: 'https://api.openweathermap.org/data/2.5/weather?q=',
				API_KEY: 'JmFwcGlkPTE5Yjc1MWQzOTZmYzA3ZDQxM2QyZjVlZGQzMjMwOGQ2',
				API_UNITS: '&units=metric',
				city: '',
				weatherIcon: '',
				temperature: '',
				humidity: '',
				wind: '',
				tempFeel: '',
				sunset: '',
				description: '',
			}
		},
		methods: {
			async getRandomCity() {
				try {
					const cities = [
						'Warszawa',
						'Oslo',
						'Madrid',
						'Tromso',
						'Cape Town',
						'Sydney',
						'Tokio',
						'Vancouver',
						'Ottawa',
						'Las Vegas',
						'Miami',
						'Santo Domingo',
						'Lima',
						'Rio de Janeiro',
						'Ushuaia',
					]
					const randomIndex = Math.floor(Math.random() * cities.length)
					return cities[randomIndex]
				} catch (error) {
					console.error('Ups, something went wrong:', error)
				}
			},
			async getWeather() {
				try {
					const randomCity = await this.getRandomCity()
					const URL = this.API_LINK + randomCity + atob(this.API_KEY) + this.API_UNITS
					const response = await axios.get(URL)
					const temp = response.data.main.temp
					const hum = response.data.main.humidity
					const temFeel = response.data.main.feels_like
					const win = response.data.wind.speed
					const sun = response.data.sys.sunset
					const weatherDes = response.data.weather[0].description
					this.city = `${response.data.name}`
					this.temperature = Math.floor(temp) + '℃'
					this.humidity = hum + '%'
					this.tempFeel = `${Math.floor(temFeel)}℃`
					this.wind = win + ' km/h'
					this.sunset = this.localeSunset(sun, 'UTC') + ' (UTC)'
					this.description = weatherDes
				} catch (error) {
					console.error('Ups, something went wrong:', error)
				}
			},
			localeSunset(sun, timeZone) {
				return new Date(sun * 1000).toLocaleTimeString('default', {
					timeZone,
					timeStyle: 'short',
				})
			},
		},
		created() {
			this.getWeather()
		},
	}
</script>

<template>
	<a class="click" @click="getWeather"></a>
	<div class="getWeather">
		<div class="cityName">City: {{ city }}</div>
		<div class="temperature">Temperature: {{ temperature }}</div>
		<div class="tempFeel">Feel temp.: {{ tempFeel }}</div>
		<div class="humidity">Humidity: {{ humidity }}</div>
		<div class="wind">Wind speed: {{ wind }}</div>
		<div class="sunset">Time of sunset: {{ sunset }}</div>
		<div class="description">Description: {{ description }}</div>
	</div>
</template>

<style scoped>
	.getWeather {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
	}
	.cityName {
		font-weight: bold;
	}
</style>
