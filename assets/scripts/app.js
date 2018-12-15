import { MDCList } from '@material/list';
import { MDCDialog } from '@material/dialog';

new MDCList(document.querySelector('.mdc-list'));

const productPurchase = new MDCDialog(document.querySelector('#purchase'));
const productDialog = new MDCDialog(document.querySelector('#pform'));

let $addItemButton = document.querySelector("#add-item");
$addItemButton.addEventListener("click", () => {
	productDialog.open();
});

const signupDialog = new MDCDialog(document.querySelector('#register'));

let $signupButton = document.querySelector("#sign-up");
$signupButton.addEventListener("click", () => {
	signupDialog.open();
});

// let $productList = document.getElementById('product-list');
// $productList.addEventListener('refresh', () => {
// 	for (let i = 0; i < $productList.products.length; i++) {
// 		$productList.products[i].addEventListener('click', () => {
// 			purchaseForm.setupProductInfo($productList.products[i]);
// 			productPurchase.open();
// 		})
// 	};
// });

export { productPurchase };