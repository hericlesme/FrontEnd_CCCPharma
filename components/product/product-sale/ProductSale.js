class ProductSale extends HTMLFormElement {

	handleSubmit(event) {
		event.preventDefault();
		let $fields = this.querySelectorAll('input');
		// Validate fields (??)

		const product = $fields[0].value;
		const barcode = $fields[1].value;
		const stock = $fields[2].value;

		// debug
		console.log("nome: " + product);
		console.log("barcode: " + barcode);
		console.log("quantidade: " + stock);

		// URL used for test purposes only
		// mode: "no-cors" also used for test purposes
		fetch('http://ptsv2.com/t/g7mku-1544891444/post', {
			method: 'POST',
			mode: "no-cors",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				product: product,
				barcode: barcode,
				stock: stock
			})
		})
		.then(function (res) { return res.json(); })
		.then(function (data) { console.log("data:" + data); })
		.catch(function (err) { console.log("error: " + err); })

		this.reset();
	}

	connectedCallback() {
		this.addEventListener('submit', this.handleSubmit);
		this.render();
	}

	setupProductInfo(product) {
		this.product = product;
		this.render();
	}

	render() {
		let product = this.product;
		let disabled = (!this.product || this.product.stock <= 0); 
			this.innerHTML = `
				<div class="mdc-text-field">
				  <input type="text" autocomplete="off" id="purchase-product" class="mdc-text-field__input" disabled placeholder=${product ? product.name : ""}>
				  <label class="mdc-floating-label form-label" for="my-text-field">Produto</label>
				  <div class="mdc-line-ripple"></div>
				</div>
				<div class="mdc-text-field">
				  <input type="text" autocomplete="off" id="purchase-barcode" class="mdc-text-field__input" disabled placeholder=${product ? product.bar_code : ""}>
				  <label class="mdc-floating-label form-label" for="purchase-barcode">Código de Barras</label>
				  <div class="mdc-line-ripple"></div>
				</div>
				<div class="mdc-text-field">
				  <input type="number" autocomplete="off" id="purchase-qnt" class="mdc-text-field__input" required min="1" max=${product ? product.stock : ""}>
				  <label class="mdc-floating-label form-label" for="purchase-qnt">Quantidade</label>
				  <div class="mdc-line-ripple"></div>
				</div>
				<footer class="mdc-dialog__actions">
					<button class="mdc-button mdc-dialog__button" data-mdc-dialog-action="close" type="button">Cancelar</button>
					<button id="submit" class="mdc-button mdc-dialog__button" type="submit" ${disabled ? "disabled" : ""}>${disabled ? "Indisponível": "Registrar"}</button>
				</footer>
		`
	}
}

try {
	customElements.define('product-sale', ProductSale, { extends: 'form' });
} catch (err) {
	const h3 = document.createElement('h3');
	h3.innerHTML = "Something went wrong!";
	document.body.appendChild(h3);
}