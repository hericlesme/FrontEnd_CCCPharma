class LoginForm extends HTMLFormElement {
	handleSubmit(event) {
		event.preventDefault();
		let $fields = this.querySelectorAll('input');
		// Validate fields (??)

		const login = $fields[0].value;
		const password = $fields[1].value;
		
		// debug purposes
		console.log("login: " + login);
		console.log("senha: " + password);

		// URL used for test purposes only
		// mode: "no-cors" also used for test purposes
		fetch('https://cccpharma-rest.herokuapp.com/users/login/', {
            method: 'POST',
            headers: {
            	"Content-Type": "application/json"
        	},
            body: JSON.stringify({
            	login: login,
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
				  <input type="text" autocomplete="off" id="username-login" class="mdc-text-field__input" required>
				  <label class="mdc-floating-label form-label" for="username">Login</label>
				  <div class="mdc-line-ripple"></div>
				</div>
				<div class="mdc-text-field">
				  <input type="password" autocomplete="off" id="senha-login" class="mdc-text-field__input" required>
				  <label class="mdc-floating-label form-label" for="senha">Senha</label>
				  <div class="mdc-line-ripple"></div>
				</div>
				<footer class="mdc-dialog__actions">
					<button class="mdc-button mdc-dialog__button" data-mdc-dialog-action="close" type="button">Cancelar</button>
					<button class="mdc-button mdc-dialog__button" type="submit">Entrar</button>
				</footer>
		`
    }
}

try {
    customElements.define( 'login-form', LoginForm, {extends: 'form'} );
} catch (err) {
    const h3 = document.createElement('h3');
    h3.innerHTML = "Something went wrong!";
    document.body.appendChild(h3);
}