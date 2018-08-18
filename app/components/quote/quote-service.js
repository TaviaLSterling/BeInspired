let url = '//bcw-getter.herokuapp.com/?url=';
let url2 = 'http://quotesondesign.com/api/3.0/api-3.0.json';
let apiUrl = url + encodeURIComponent(url2);
//Do Not Edit above we have to go through the bcw-getter to access this api
import Quote from "../../models/Quote.js"

const quoteApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

let quotes = {}
export default class QuoteService {
	constructor() {

	}
	getQuote(draw) {
		quoteApi.get()
		.then(res => {
			draw(res.data)
		//	console.log(res.data)
		//	let myQuotes = res.data.map(rawQuote => {
		//		return new Quote(rawQuote)
			})
	//		draw(myQuotes)
	//	})
	}
}