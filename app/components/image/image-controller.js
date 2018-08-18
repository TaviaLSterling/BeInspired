//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service.js"
let imageService = new ImageService()
//let app = document.getElementById('app')

function drawImages(image) {
// had to use style.backgroundImage or else my image would cover quote and weather. 
		document.getElementById('body').style.backgroundImage = `url(${image.url})`
	   }

export default class ImageController {

	constructor() {
	
	imageService.getImage(drawImages)
	}

	}