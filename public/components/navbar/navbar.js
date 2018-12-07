class Navbar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    addEventListeners(div) {
        // TODO
    }

    render() {
        // TODO
        this.innerHTML = `
            <nav>
                <h1>daedae (navbar)</h1>
            </nav>
        `
    }
}

try {
    customElements.define('nav-bar', Navbar);
} catch (err) {
    const h3 = document.createElement('h3');
    h3.innerHTML = "Something went wrong!";
    document.body.appendChild(h3);
}