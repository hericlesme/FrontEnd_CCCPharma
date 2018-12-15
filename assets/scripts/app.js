import {MDCList} from '@material/list';
import {MDCDialog} from '@material/dialog';

new MDCList(document.querySelector('.mdc-list'));

const productDialog = new MDCDialog(document.querySelector('#pform'));

let $addItemButton = document.querySelector("#add-item");
$addItemButton.addEventListener("click", () => {
	productDialog.open();
	console.log(productDialog);
});

productDialog.listen("MDCDialog:closing", (event) => {	
	let action = event["detail"].action;
	console.log( "acao: " + action );

	if(action === "submit") {
		let form = productDialog.content_.querySelector("form");
		form.handleSubmit();
		productDialog.close();
	}
});

const signupDialog = new MDCDialog(document.querySelector('#register'));

let $signupButton = document.querySelector("#sign-up");
$signupButton.addEventListener("click", () => {
	signupDialog.open();
	console.log(signupDialog);
});

//signupDialog.listen("MDCDialog:closing", (event) => {	
//	let action = event["detail"].action;
//	console.log( "acao: " + action );
//
//	if(action === "submit") {
//		let form = signupDialog.content_.querySelector("form");
//		form.handleSubmit();
//		signupDialog.close();
//	}
//});