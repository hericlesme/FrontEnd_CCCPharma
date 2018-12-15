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

export { productPurchase };