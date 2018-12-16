import { MDCDialog } from '@material/dialog';
import { register } from './app.js'

setTimeout(() => {
	register();

	let $submitProductButton = document.querySelector("#submit-new-product");
	$submitProductButton.addEventListener("click", function () {
		setTimeout(() => {
			register();
		}, 500);
	});
}, 500);