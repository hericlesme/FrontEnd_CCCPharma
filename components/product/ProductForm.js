class ProductForm extends HTMLFormElement {
	handleSubmit(event) {
		event.preventDefault();
		let $fields = this.querySelectorAll('input');
		// Validate fields (??)

		const name = $fields[0].value;
		const price = $fields[1].value;
		const category_name = $fields[2].value;
		const bar_code = $fields[3].value;
		const producer = $fields[4].value;
		const stock = $fields[5].value;
		const image_path = $fields[6].value;
		
		const category_fraction = 0;
		const expirationDate = false; // ??
		
		const discount = {fraction: category_fraction};
		const category = {"name":category_name, discount };

		// debug
		console.log("json enviado: " + JSON.stringify({
            	name: name, 
            	category: category, 
            	bar_code: bar_code,
            	producer: producer,
            	stock: stock,
            	image_path: image_path,
            	expirationDate: expirationDate,
            	price: price
        }));

		fetch('https://cccpharma-rest.herokuapp.com/products/', {
            method: 'POST',
            headers: {
            	"Content-Type": "application/json"
        	},
            body: JSON.stringify({
            	name: name, 
            	category: category, 
            	bar_code: bar_code,
            	producer: producer,
            	stock: stock,
            	image_path: image_path,
            	expirationDate: expirationDate,
            	price: price
            })
        })
        .then( function(res) { 
        	let $prodList = document.querySelector("#product-list");
			$prodList.refreshItems();
        	return res.json();
        })
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
				  <input type="text" autocomplete="off" id="product-name" class="mdc-text-field__input" required>
				  <label class="mdc-floating-label form-label" for="my-text-field">Nome</label>
				  <div class="mdc-line-ripple"></div>
				</div>
				<div class="mdc-text-field">
				  <input type="text" autocomplete="off" id="product-price" class="mdc-text-field__input" required>
				  <label class="mdc-floating-label form-label" for="my-text-field">Preço</label>
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
				<div class="mdc-text-field">
				  <input type="text" autocomplete="off" id="image-url" class="mdc-text-field__input" required>
				  <label class="mdc-floating-label form-label" for="my-text-field">URL da imagem</label>
				  <div class="mdc-line-ripple"></div>
				</div>
				<footer class="mdc-dialog__actions">
					<button class="mdc-button mdc-dialog__button" data-mdc-dialog-action="close" type="button">Cancelar</button>
					<button id="submit-new-product" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="close" type="submit">Enviar</button>
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