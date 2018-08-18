import QuoteService from "./quote-service.js";

let quoteService = new QuoteService
let app = document.getElementById('app')


function drawQuotes(quote) {
//	let quotesElem = document.getElementById('quote')
	
//	data.forEach(quote => {
	//	template += `
	let template = `
	<div><h3>${quote.quote}</h3>
	</div>
	<div><p>-- ${quote.author}</p></div>
	
	`	
	
document.getElementById('quote').innerHTML = template
}

export default class QuoteController {
	constructor() {
	//	this.getQuote()
	quoteService.getQuote(drawQuotes)
	}
}