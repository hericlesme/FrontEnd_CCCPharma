import { MDCList } from '@material/list';
import { MDCDialog } from '@material/dialog';

new MDCList(document.querySelector('.mdc-list'));

const productDialog = new MDCDialog(document.querySelector('#pform'));

let $addItemButton = document.querySelector("#add-item");
$addItemButton.addEventListener("click", () => {
	productDialog.open();
	console.log(productDialog);
});

productDialog.listen("MDCDialog:closing", (event) => {
	let action = event["detail"].action;
	console.log("acao: " + action);

	if (action === "submit") {
		let form = productDialog.content_.querySelector("form");
		form.handleSubmit();
		productDialog.close();
	}
});

const signupDialog = new MDCDialog(document.querySelector('#register'));
const productPurchase = new MDCDialog(document.querySelector('#purchase'));

let $signupButton = document.querySelector("#sign-up");
$signupButton.addEventListener("click", () => {
	signupDialog.open();
	console.log(signupDialog);
});

let $products = document.getElementsByClassName('product');
let purchaseForm = document.querySelector('#purchase form');
for (let i = 0; i < $products.length; i++) {
	$products[i].addEventListener('click', () => {
		console.log('oi');
		purchaseForm.setupProductInfo($products[i]);
		productPurchase.open();
	});
	console.log('ok');
}