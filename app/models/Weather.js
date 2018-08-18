export default class Weather {
    constructor(data) {
this.temp = data.main.temp
this.icon = data.weather.icon
    }
}