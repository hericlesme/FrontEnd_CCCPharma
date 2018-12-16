class Report extends HTMLElement {
	getReportJSON() {
		return null;
		// TODO
		const URL = '';
		 
		fetch(URL, {method: 'GET'})
		.then(function (res) { return res.json(); })
		.catch(function (err) { console.log("error: " + err); })
	}

	connectedCallback() {
		this.render();
	}

	render() {
		let report = this.getReportJSON();

		this.innerHTML = `
			<p>Relatório aqui</p>
			<footer class="mdc-dialog__actions">
				<button class="mdc-button mdc-dialog__button" data-mdc-dialog-action="close" type="button">Fechar</button>
			</footer>
		`
	}
}

try {
	customElements.define('custom-report', Report);
} catch (err) {
	const h3 = document.createElement('h3');
	h3.innerHTML = "Something went wrong!";
	document.body.appendChild(h3);
}