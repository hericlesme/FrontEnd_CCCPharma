class ProductList extends HTMLElement {
    getProductsJson() {
        // WORK IN PROGRESS
        return fetch(this.url + "/products.json", {method: "GET"})
            .then(data => data.json())
            .catch(err => console.log(err.message));
    }

    setProductList(productList) {
        productList.forEach(product => {
            const productCard = document.createElement("product-card");
            for (const attribute in product) {
                productCard.setAttribute(attribute, product[attribute]);
            }
            this.appendChild(productCard);
        });
    }

    connectedCallback(){
        this.url = "components/product"

        this.getProductsJson().then(productsJson => this.render(productsJson));
    }

    render(products){
        this.classList.add("product-list");
        this.setProductList(products);
    }
}

try {
    customElements.define('product-list', ProductList);
    
} catch (err) {
    const h3 = document.createElement('h3');
    h3.innerHTML = "Something went wrong!";
    document.body.appendChild(h3);
}