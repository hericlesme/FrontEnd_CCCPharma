/**
 * Material Components Controller
 * 
 * Creates instances of Material Components
 */
import { MDCList } from '@material/list';
import { MDCDialog } from '@material/dialog';


// List
new MDCList(document.querySelector('.mdc-list'));

/* Material Dialogs */

// Add Product
const productDialog = new MDCDialog(document.querySelector('#pform-dialog'));
let $addItemButton = document.querySelector("#add-item");
$addItemButton.addEventListener("click", () => {
	productDialog.open();
});

// Report
const reportDialog = new MDCDialog(document.querySelector('#report-dialog'));
let $reportButton = document.querySelector("#report-button");
$reportButton.addEventListener("click", () => {
	reportDialog.open();
});

// SignUp
const signupDialog = new MDCDialog(document.querySelector('#register-dialog'));
let $signupButton = document.querySelector("#sign-up");
$signupButton.addEventListener("click", () => {
	signupDialog.open();
});

// Login
const loginDialog = new MDCDialog(document.querySelector('#login-dialog'));
let $loginButton = document.querySelector("#login");
$loginButton.addEventListener("click", () => {
	loginDialog.open();
});

// Purchase
const productPurchase = new MDCDialog(document.querySelector('#purchase-dialog'));
const register = function register() {
	let $products = document.getElementsByClassName('product');
	let $purchaseForm = document.querySelector('#purchase-dialog form');

	for (let i = 0; i < $products.length; i++) {
		$products[i].addEventListener('click', () => {
			$purchaseForm.setupProductInfo($products[i]);
			productPurchase.open();
		});
	}
}

export { register };
