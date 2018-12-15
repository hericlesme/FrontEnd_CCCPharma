import {MDCList} from '@material/list';
import {MDCDialog} from '@material/dialog';

new MDCList(document.querySelector('.mdc-list'));

const productDialog = new MDCDialog(document.querySelector('#pform'));

let $addItemButton = document.querySelector("#add-item");
$addItemButton.addEventListener("click", () => {
	productDialog.open();
	console.log(productDialog);
});

const signupDialog = new MDCDialog(document.querySelector('#register'));

let $signupButton = document.querySelector("#sign-up");
$signupButton.addEventListener("click", () => {
	signupDialog.open();
	console.log(signupDialog);
});