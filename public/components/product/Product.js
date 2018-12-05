class Product extends HTMLElement {

    connectedCallback(){
        this.imageUrl = this.getAttribute('imageUrl');
        this.category = this.getAttribute('category');
        this.price = this.getAttribute('price');
        this.name = this.getAttribute('name');
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="product">
                <h2>${this.name.toUpperCase()}</h2>
                <h4>${this.category.toUpperCase()}</h4>
                <figure>
                <img src="${this.imageUrl}" alt="product" />
              </figure>
                <span class="price">R$ ${this.price}</span>
            </div>
        `
    }
}

try {
    customElements.define('product-card', Product);
} catch (err) {
    const h3 = document.createElement('h3');
    h3.innerHTML = "Something went wrong!";
    document.body.appendChild(h3);
}