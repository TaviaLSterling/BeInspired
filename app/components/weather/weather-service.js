const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&units=imperial&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
const apiUrl = url + encodeURIComponent(url2);

const weatherApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});
import Weather from "../../models/Weather.js"
let weather = {}

export default class WeatherService {
	constructor() {

	}

	getWeather(draw) {
		//console.log('Calling the Weatherman')
		weatherApi.get()
		.then(res => {
			draw(res.data)}
	//	let myWeather = res.data.main.map(rawWeather => {
//	return new Weather(rawWeather)
		)}
//draw(myWeather)
		
		
		//	localStorage.setItem('weather', JSON.stringify(res.data))
		//	console.log(res.data.main.temp)
			// HEY FUN FACT 
			// Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
			// res.data.temp is the temperature in Kelvin
			// You should probably convert the temperature data to either F or C
		//	draw(res.data.main.temp);
		}
	