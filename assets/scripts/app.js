import { MDCList } from '@material/list';
import { MDCDialog } from '@material/dialog';

new MDCList(document.querySelector('.mdc-list'));

const productDialog = new MDCDialog(document.querySelector('#pform'));

let $addItemButton = document.querySelector("#add-item");
$addItemButton.addEventListener("click", () => {
	productDialog.open();
});

const signupDialog = new MDCDialog(document.querySelector('#register'));
const productPurchase = new MDCDialog(document.querySelector('#purchase'));

let $signupButton = document.querySelector("#sign-up");
$signupButton.addEventListener("click", () => {
	signupDialog.open();
});

let $products = document.getElementsByClassName('product');
let purchaseForm = document.querySelector('#purchase form');
for (let i = 0; i < $products.length; i++) {
	$products[i].addEventListener('click', () => {
		purchaseForm.setupProductInfo($products[i]);
		productPurchase.open();
	});
}