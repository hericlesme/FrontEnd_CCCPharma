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
		        <h2 class="mdc-dialog__title" id="my-dialog-title">${this.title}</h2>
		        <div class="mdc-dialog__content" id="my-dialog-content">
		          
		          <form is="product-form"></form>
		        </div>
		      </div>
		    </div>
		    <div class="mdc-dialog__scrim"></div>
		  </div>	
		`
    }
}

try {
    customElements.define( 'custom-dialog', CustomDialog );
} catch (err) {}