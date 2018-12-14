class ProductForm extends HTMLFormElement {
	handleSubmit() {
		let $fields = document.getElementsByClassName("field");
		// Validate fields (??)

		const name = $fields[0].value;
		const category = $fields[1].value;
		const bar_code = $fields[2].value;
		const manufacturer = $fields[3].value;
		const quantity = $fields[4].value;
		
		const situation = true; // ??
		
		console.log("nome: " + name);
		console.log("categoria: " + category);
		console.log("codigo de barras: " + bar_code);
		console.log("fabricante: " + manufacturer);
		console.log("quantidade: " + quantity);

		// TODO Fetch POST
		
		this.reset();
	}

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
			<form class="product-form">
				<div>
					<label for="nome"> Nome: </label> <input type="text" id="nome" name="nome" class="field" autocomplete="off" required> <br>
					<label for="categoria"> Categoria: </label> <input type="text" id="categoria" name="categoria" class="field" autocomplete="off" required> <br>
					<label for="codigo"> Código de Barra: </label> <input type="text" id="codigo" name="codigo" class="field" autocomplete="off" required> <br>
					<label for="fabricante"> Fabricante: </label> <input type="text" id="fabricante" name="fabricante" class="field" autocomplete="off" required> <br>
					<label for="quantidade"> Quantidade: </label> <input type="number" id="quantidade" name="quantidade" class="field" autocomplete="off" required> <br>
				</div>
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