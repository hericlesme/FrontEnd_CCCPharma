import { MDCList } from '@material/list';
import { MDCDialog } from '@material/dialog';

new MDCList(document.querySelector('.mdc-list'));

const productPurchase = new MDCDialog(document.querySelector('#purchase-dialog'));
const productDialog = new MDCDialog(document.querySelector('#pform-dialog'));

let $addItemButton = document.querySelector("#add-item");
$addItemButton.addEventListener("click", () => {
	productDialog.open();
});

const signupDialog = new MDCDialog(document.querySelector('#register-dialog'));

let $signupButton = document.querySelector("#sign-up");
$signupButton.addEventListener("click", () => {
	signupDialog.open();
});

const loginDialog = new MDCDialog(document.querySelector('#login-dialog'));

let $loginButton = document.querySelector("#login");
$loginButton.addEventListener("click", () => {
	loginDialog.open();
});


export { productPurchase };