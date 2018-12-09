import {Product} from './Product.js';

class ProductList extends HTMLElement {
    getProductsJson() {
        // WORK IN PROGRESS
        return fetch(this.url + "/products.json", {method: "GET"})
            .then(data => data.json())
            .catch(err => console.log(err.message));
    }

    setProductsInDOM(productList) {
        productList.forEach(product => {
            const productCard = new Product(product);
            this.appendChild(productCard);
        });
    }

    connectedCallback(){
        this.url = "components/product"
        this.getProductsJson().then(productsJson => this.render(productsJson));
    }

    render(products){
        this.classList.add("product-list");
        this.setProductsInDOM(products);
    }
}

try {
    customElements.define('product-list', ProductList);
    
} catch (err) {
    const h3 = document.createElement('h3');
    h3.innerHTML = "Something went wrong!";
    document.body.appendChild(h3);
}