import QuoteService from "./quote-service.js";

let quoteService = new QuoteService
let app = document.getElementById('app')


function drawQuotes(quote) {
//	let quotesElem = document.getElementById('quote')
	
//	data.forEach(quote => {
	//	template += `
	let template = `
	<div id="background" class="col-sm-6 offset-sm-3"><h3>${quote.quote}</h3>
	
	<div><p>-- ${quote.author}</p></div>
	</div>
	`	
	
document.getElementById('quote').innerHTML = template
}

export default class QuoteController {
	constructor() {
	//	this.getQuote()
	quoteService.getQuote(drawQuotes)
	}
}