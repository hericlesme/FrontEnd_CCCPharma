import { OrderChip } from './OrderChip.js';

class OrderChipSet extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    setChipsInDOM(chipSet) {
        chipSet.forEach(content => {
            const orderChip = new OrderChip(content);
            this.appendChild(orderChip);
        });
    }

    setOrderMethod(chip){
        let selected = 'mdc-chip--selected';
        document.querySelector('.'+ selected).classList.remove(selected);
        chip.classList.add(selected);
    }

    render() {
        
        this.classList.add("mdc-chip-set");
        this.classList.add("mdc-chip-set--choice");
        
        const chipSet = ['Nome', 'Preço', 'Quantidade', 'Categoria'];
        this.setChipsInDOM(chipSet);
        this.firstChild.classList.add('mdc-chip--selected');
    }
}

try {
    customElements.define('order-set', OrderChipSet);
} catch (err) { 
    const h3 = document.createElement('h3');
    h3.innerHTML = "Something went wrong!";
    document.body.appendChild(h3);
}
