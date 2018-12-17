class Report extends HTMLElement {
	getPurchasesJSON() {
		const URL = 'https://cccpharma-rest.herokuapp.com/';
		 
		return fetch(URL + 'purchase/report/', {method: 'GET'})
		.then(res => { return res.json(); })
		.then(data => { return data; })
        .catch(function(err) { console.log(err.message); })
	}

	update() {
		while(this.lastChild) this.removeChild(this.lastChild);
		this.connectedCallback();
	}

	getProductsJSON() {
		const URL = 'https://cccpharma-rest.herokuapp.com/';
	
		return fetch(URL + '/products/report/', {method: 'GET'})
		.then( function (res) { return res.json(); } )
		.then( (data) => { return data; } )
		.catch(function (err) { console.log("error: " + err); })
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.getPurchasesJSON().then( (purchases) => {
			this.getProductsJSON().then( (products) => {
				let $lista = document.createElement("ul");

				for(let i = 0; i < products.length; i++) {
					let $newElement = document.createElement("li");
					$newElement.innerText = products[i];

					$lista.appendChild($newElement);
				}

				let $lista2 = document.createElement("ul");
				for(let i = 0; i < purchases.length; i++) {
					let $newElement = document.createElement("li");
					$newElement.innerText = purchases[i];

					$lista2.appendChild($newElement);
				}

				this.innerHTML += `
					<h2>Relatório geral de Produtos</h2>
					<div class="divisor"></div>`
				this.appendChild($lista);
				
				this.innerHTML += `
					<h2>Relatório geral de Vendas</h2>
					<div class="divisor"></div>
				`
				
				this.appendChild($lista2);

				this.innerHTML += `
				<footer class="mdc-dialog__actions">
					<button class="mdc-button mdc-dialog__button" data-mdc-dialog-action="close" type="button">Fechar</button>
				</footer>
				`
			})
		});
	}
}

try {
	customElements.define('custom-report', Report);
} catch (err) {
	const h3 = document.createElement('h3');
	h3.innerHTML = "Something went wrong!";
	document.body.appendChild(h3);
}