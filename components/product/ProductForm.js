class ProductForm extends HTMLFormElement {
	handleSubmit(event) {
		event.preventDefault();
		let $fields = this.querySelectorAll('input');
		// Validate fields (??)

		const name = $fields[0].value;
		const category = $fields[1].value;
		const bar_code = $fields[2].value;
		const manufacturer = $fields[3].value;
		const quantity = $fields[4].value;
		
		const situation = true; // ??
		
		// debug
		console.log("nome: " + name);
		console.log("categoria: " + category);
		console.log("codigo de barras: " + bar_code);
		console.log("fabricante: " + manufacturer);
		console.log("quantidade: " + quantity);

		// URL used for test purposes only
		// mode: "no-cors" also for test purposes
		fetch('http://ptsv2.com/t/g7mku-1544891444/post', {
            method: 'POST',
            mode: "no-cors",
            headers: {
            	"Content-Type": "application/json"
        	},
            body: JSON.stringify({
            	name: name, 
            	category: category, 
            	bar_code: bar_code,
            	manufacturer: manufacturer,
            	quantity: quantity,
            	situation: situation
            })
        })
        .then( function(res) { return res.json(); } )
        .then( function(data) { console.log("data:" + data); } )
        .catch( function(err) { console.log("error: " + err); } )

		this.reset();
	}

    connectedCallback() {
		this.addEventListener('submit', this.handleSubmit);
		this.render();
	}

    render() {
		// Modularizar
        this.innerHTML = `
				<div class="mdc-text-field">
				  <input type="text" autocomplete="off" id="nome" class="mdc-text-field__input" required>
				  <label class="mdc-floating-label form-label" for="my-text-field">Nome</label>
				  <div class="mdc-line-ripple"></div>
				</div>
				<div class="mdc-text-field">
				  <input type="text" autocomplete="off" id="categoria" class="mdc-text-field__input" required>
				  <label class="mdc-floating-label form-label" for="categoria">Categoria</label>
				  <div class="mdc-line-ripple"></div>
				</div>
				<div class="mdc-text-field">
				  <input type="text" autocomplete="off" id="codigo" class="mdc-text-field__input" required>
				  <label class="mdc-floating-label form-label" for="codigo">Código de Barras</label>
				  <div class="mdc-line-ripple"></div>
				</div>
				<div class="mdc-text-field">
				  <input type="text" autocomplete="off" id="fabricante" class="mdc-text-field__input" required>
				  <label class="mdc-floating-label form-label" for="fabricante">Fabricante</label>
				  <div class="mdc-line-ripple"></div>
				</div>
				<div class="mdc-text-field">
				  <input type="number" autocomplete="off" min="1" id="quantidade" class="mdc-text-field__input" required>
				  <label class="mdc-floating-label form-label" for="quantidade">Quantidade</label>
				  <div class="mdc-line-ripple"></div>
				</div>
				<footer class="mdc-dialog__actions">
					<button class="mdc-button mdc-dialog__button" data-mdc-dialog-action="close" type="button">Cancelar</button>
					<button id="submit" class="mdc-button mdc-dialog__button" type="submit">Enviar</button>
				</footer>
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