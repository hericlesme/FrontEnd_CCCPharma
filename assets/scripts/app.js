import {MDCList} from '@material/list';
import {MDCDialog} from '@material/dialog';

const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));
new MDCList(document.querySelector('.mdc-list'));

let $button = document.querySelector("#add-item");
$button.addEventListener("click", () => {
	dialog.open();
});

dialog.listen("MDCDialog:closing", (event) => {	
	let action = event["detail"].action;
	console.log( "acao: " + action );

	if(action === "submit") {
		let form = dialog.content_.querySelector("form");
		form.handleSubmit();
		dialog.close();
	}
});