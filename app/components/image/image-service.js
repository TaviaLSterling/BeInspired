const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/random'
const apiUrl = url + encodeURIComponent(url2);


const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});
import Image from "../../models/Image.js"
let images = {}

export default class ImageService {
	getImage(draw) {
			imgApi.get()
			.then(res => {
				draw(res.data)
// console.log(res.data)
	//	// ^^^^^^^ How do you call this function?
	//	console.log("Looking for a good pic")
	//	imgApi().then(res => {
	//	console.log('Image Data:', res.data)
//			draw(res.data)
		})
	}
}