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
				<div>
					<p> Nome: <input type="text" name="nome" class="field" autocomplete="off" required> </p>
					<p> Categoria: <input type="text" name="categoria" class="field" autocomplete="off" required> </p>
					<p> Código de Barra: <input type="text" name="codigo" class="field" autocomplete="off" required> </p>
					<p> Fabricante: <input type="text" name="fabricante" class="field" autocomplete="off" required> </p>
				</div>
				<button type="submit">Enviar</button>
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