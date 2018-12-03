function handleSubmit(event) {
	event.preventDefault();
	
	const name = document.getElementsByName("nome")[0].value;
	const category = document.getElementsByName("categoria")[0].value;
	const bar_code = document.getElementsByName("codigo")[0].value;
	const manufacturer = document.getElementsByName("fabricante")[0].value;
	
	const situation = true; // ??
	
	console.log("nome foi " + name);
	console.log("categoria foi " + category);
	console.log("codigo de barras foi " + bar_code);
	console.log("fabricante foi " + manufacturer);
}

const form = document.getElementsByClassName("product_form")[0];
form.addEventListener('submit', handleSubmit);