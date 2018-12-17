class ProductSale extends HTMLFormElement {
	handleSubmit(event) {
		event.preventDefault();
		let $fields = this.querySelectorAll('input');
		// Validate fields (??)

		const product_id = $fields[0].placeholder;
		const bar_code = $fields[1].placeholder;
		const quantity = $fields[2].value;

		console.log( JSON.stringify({
			product: {id: parseInt(product_id)},
			bar_code: bar_code,
			quantity: parseInt(quantity)
		}) )

		fetch('https://cccpharma-rest.herokuapp.com/purchase/', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				product: {id: parseInt(product_id)},
				bar_code: bar_code,
				quantity: parseInt(quantity)
			})
		})
		.then(function (res) {
			swal("Compra registrada!", ("Pressione 'OK' para continuar..." ), "success")
					.then(() => {
						let $prodList = document.querySelector("#product-list");
						$prodList.refreshItems();

						let $report = document.querySelector("custom-report");
						$report.update();

					});			

			return res.json();
		})
		.catch(function (err) { 
			swal("Ops!", ("Parece que houve um erro com sua compra." ), "error").then(() => location.reload());
			console.log("error: " + err); 
		});

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
				  <input type="text" autocomplete="off" id="purchase-product" class="mdc-text-field__input" disabled placeholder=${product ? product.id : ""}>
				  <label class="mdc-floating-label form-label" for="my-text-field">ID do Produto</label>
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
					<button id="submit" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="close" type="submit" ${disabled ? "disabled" : ""}>${disabled ? "Indisponível": "Registrar"}</button>
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