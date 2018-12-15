class Product extends HTMLLIElement {
    /**
    * Construtor de Product
    * 
    * @param product Object com os atributos de Product
    */
    constructor(product) {
        super();
        for (const attribute in product) {
            this.setAttribute(attribute, product[attribute]);
        }
    }

    connectedCallback() {
        this.imageUrl = this.getAttribute('imageUrl');
        this.category = this.getAttribute('category');
        this.quantity = this.getAttribute('quantity');
        this.price = this.getAttribute('price');
        this.name = this.getAttribute('name');
        this.render();
    }

    render() {
        let classes = ["mdc-image-list__item", "product"];
        this.classList.add(...classes);

        this.innerHTML = `
        <h2>${this.name.toUpperCase()}</h2>
        <img class="mdc-image-list__image" src="${this.imageUrl}">
        <div class="mdc-image-list__supporting">
            <p>${this.category.toUpperCase()}</p>
            <span>${this.quantity == 0 ? "Indisponível" : "R$" + this.price}</span>
        </div>
    `
    }
}

try {
    customElements.define('product-card', Product, { extends: 'li' });
} catch (err) {
    const h3 = document.createElement('h3');
    h3.innerHTML = "Something went wrong!";
    document.body.appendChild(h3);
}

export { Product };
