
function separator(selector, category) {
    document.querySelector(selector).addEventListener("click", () => {
        let products = document.querySelector('.product-list').childNodes;
        products.forEach(p => {
            (p.category == category) ? (p.style.display = 'flex') : (p.style.display = 'none');
        });
    });
}

function showAll() {
    document.querySelector('#all').addEventListener("click", () => {
        let products = document.querySelector('.product-list').childNodes;
        products.forEach(p => {
            p.style.display = 'flex';
        });
    });
}

const Separators = (function () {
    separator('#saude', 'Saúde');
    separator('#cosmeticos', 'Cosméticos');
    separator('#alimentos', 'Alimentos');
    separator('#higiene', 'Higiene Pessoal');
    showAll();
});


Separators();