function handleSubmit(event) {
	event.preventDefault();
	
	const name = $("[name]=nome")[0].value;
	const category = $("[name]=categoria")[0].value;
	const bar_code = $("[name]=codigo")[0].value;
	const manufacturer = $("[name]=fabricante")[0].value;
	
	const situation = true; // ??
	
	console.log("nome foi " + name);
	console.log("categoria foi " + category);
	console.log("codigo de barras foi " + bar_code);
	console.log("fabricante foi " + manufacturer);
}

const form = $(".product_form")[0];
form.addEventListener('submit', handleSubmit);