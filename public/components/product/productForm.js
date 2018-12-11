class ProductForm extends HTMLFormElement {
	handleSubmit(event) {
		event.preventDefault();

		const name = document.getElementsByClassName("field")[0].value;
		const category = document.getElementsByClassName("field")[1].value;
		const bar_code = document.getElementsByClassName("field")[2].value;
		const manufacturer = document.getElementsByClassName("field")[3].value;
		
		const situation = true; // ??
		
		console.log("nome foi: " + name);
		console.log("categoria foi: " + category);
		console.log("codigo de barras foi: " + bar_code);
		console.log("fabricante foi: " + manufacturer);

		this.reset();
	}

    connectedCallback(){
        this.render();
		this.addEventListener('submit', this.handleSubmit);
    }

    render(){
        this.innerHTML = `
	        <h1>Formulário de cadastro de produtos</h1>
			<form class="product_form">
				<div>
					<label for="nome"> Nome: </label> 
					<input type="text" id="nome" name="nome" class="field" autocomplete="off" required>
					<label for="categoria"> Categoria: </label> <input type="text" id="categoria" name="categoria" class="field" autocomplete="off" required>
					<label for="codigo"> Código de Barra: </label> <input type="text" id="codigo" name="codigo" class="field" autocomplete="off" required>
					<label for="fabricante"> Fabricante: </label> <input type="text" id="fabricante" name="fabricante" class="field" autocomplete="off" required>
				</div>
				<button type="submit">Enviar</button>
			</form>
		`
    }
}

try {
    customElements.define( 'product-form', ProductForm, {extends: 'form'} );
} catch (err) {
    const h3 = document.createElement('h3');
    h3.innerHTML = "Something went wrong!";
    document.body.appendChild(h3);
}