class Navbar extends HTMLElement {
    connectedCallback() {
        this.createShadowRoot();
        this.render();
    }

    addEventListeners(div) {
        // TODO
    }

    render() {
        const div = document.createElement('div');
        div.classList.add('nav');
        this.shadowRoot.appendChild(div)
    }
}

try {
    customElements.define('navbar', Navbar)
} catch (err) {
    const h3 = document.createElement('h3')
    h3.innerHTML = "Something went wrong!"
    document.body.appendChild(h3)
}