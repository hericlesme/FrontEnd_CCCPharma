import { register } from './app.js'

setTimeout(() => {
	register();

	let $submitProductButton = document.querySelector("#submit-new-product");
	$submitProductButton.addEventListener("click", function () {
		setTimeout(() => {
			register();
		}, 1000);
	});
}, 500);

