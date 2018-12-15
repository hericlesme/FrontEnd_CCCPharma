class SignupForm extends HTMLFormElement {
	handleSubmit(event) {
		event.preventDefault();
		let $fields = this.querySelectorAll('input');
		// Validate fields (??)

		const name = $fields[0].value;
		const email = $fields[1].value;
		const password = $fields[2].value;
		
		// debug
		console.log("nome: " + name);
		console.log("email: " + email);
		console.log("senha: " + password);

		// URL used for test purposes only
		// mode: "no-cors" also used for test purposes
		fetch('http://ptsv2.com/t/g7mku-1544891444/post', {
            method: 'POST',
            mode: "no-cors",
            headers: {
            	"Content-Type": "application/json"
        	},
            body: JSON.stringify({
            	name: name, 
            	email: email,
            	password: password
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
				  <input type="text" autocomplete="off" id="email" class="mdc-text-field__input" required>
				  <label class="mdc-floating-label form-label" for="email">Email</label>
				  <div class="mdc-line-ripple"></div>
				</div>
				<div class="mdc-text-field">
				  <input type="text" autocomplete="off" id="senha" class="mdc-text-field__input" required>
				  <label class="mdc-floating-label form-label" for="senha">Senha</label>
				  <div class="mdc-line-ripple"></div>
				</div>
				<footer class="mdc-dialog__actions">
					<button class="mdc-button mdc-dialog__button" data-mdc-dialog-action="close">Cancelar</button>
					<button id="submit" class="mdc-button mdc-dialog__button" type="submit">Registrar</button>
				</footer>
		`
    }
}

try {
    customElements.define( 'sign-up-form', SignupForm, {extends: 'form'} );
} catch (err) {
    const h3 = document.createElement('h3');
    h3.innerHTML = "Something went wrong!";
    document.body.appendChild(h3);
}