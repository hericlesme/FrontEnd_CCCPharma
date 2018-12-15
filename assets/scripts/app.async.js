import { MDCDialog } from '@material/dialog';
import { productPurchase } from './app.js'

let $products = document.getElementsByClassName('product');
let purchaseForm = document.querySelector('#purchase form');
for (let i = 0; i < $products.length; i++) {
	$products[i].addEventListener('click', () => {
		purchaseForm.setupProductInfo($products[i]);
		productPurchase.open();
	});
}
