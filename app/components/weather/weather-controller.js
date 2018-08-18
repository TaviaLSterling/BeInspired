import WeatherService from "./weather-service.js";

let weatherService = new WeatherService()
let app = document.getElementById('app')

function drawWeather(weather) {
//	let weathersElem = document.getElementById('weather')
//	let template = ''
//	data.forEach(weather => {
	let	template = `
	<div><h4>Temp: ${weather.main.temp}° F</h4></div>
	`	
	// })
document.getElementById('weather').innerHTML = template
}

export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
	//	this.getWeather()
	weatherService.getWeather(drawWeather)
	}

//	getWeather() {
//		(weather => {
//			console.log(weather);
//			//What can you do with this weather object?
//		})
	}