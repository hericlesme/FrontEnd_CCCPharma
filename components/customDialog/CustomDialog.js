class CustomDialog extends HTMLElement {
    connectedCallback() {
    	this.title = this.getAttribute("title");
        this.render();
    }

    render() {
        this.innerHTML = `
			<div class="mdc-dialog"
		       role="alertdialog"
		       aria-modal="false"
		       aria-labelledby="my-dialog-title"
		       aria-describedby="my-dialog-content">

		    <div class="mdc-dialog__container">
		      <div class="mdc-dialog__surface">
		        <h2 class="mdc-dialog__title" id="my-dialog-title"><!--
		       -->${this.title}<!--
		     --></h2>
		        <div class="mdc-dialog__content" id="my-dialog-content">
		          
		          <form is="product-form"></form>

		        </div>
		        <footer class="mdc-dialog__actions">
		          <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="close">Cancelar</button>
		          <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="submit">Submeter</button>
		        </footer>
		      </div>
		    </div>
		    <div class="mdc-dialog__scrim"></div>
		  </div>	
		`
    }
}

try {
    customElements.define( 'custom-dialog', CustomDialog );
} catch (err) {
    const h3 = document.createElement('h3');
    h3.innerHTML = "Something went wrong!";
    document.body.appendChild(h3);
}