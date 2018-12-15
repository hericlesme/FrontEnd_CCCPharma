class OrderChip extends HTMLElement {
    constructor(content) {
        super();
        this.setAttribute('content', content);
    }

    connectedCallback(){
        this.addEventListeners();
        this.content = this.getAttribute('content');
        this.render();
    }

    addEventListeners(){
        let self = this;
        this.addEventListener('click', () => {
            this.parentElement.setOrderMethod(self);
        });
    }

    render(){
        this.classList.add('mdc-chip');
        this.innerHTML = `  
        <div class="mdc-chip__text">${this.content}</div>
        `
    }
}

try {
    customElements.define('order-chip', OrderChip);
} catch (err) {
    const h3 = document.createElement('h3');
    h3.innerHTML = "Something went wrong!";
    document.body.appendChild(h3);
}

export { OrderChip };