

const Separators = (function () {

    (function setEventListeners(){
        let ids = ['#saude','#cosmeticos','#alimentos','#higiene','#all']
        ids.forEach(id => {
            document.querySelector(id).addEventListener('click', () => {
                let $list = document.querySelector('.product-list');
                $list.render($list.products, $list.method, id);
            });
        })
    }())

    const cosmeticosSeparator = (product) => product.category.name.toLowerCase() == 'cosméticos';
    const alimentosSeparator = (product) => product.category.name.toLowerCase() == 'alimentos';
    const higieneSeparator = (product) => product.category.name.toLowerCase() == 'higiene';
    const saudeSeparator = (product) => product.category.name.toLowerCase() == 'saúde';
    const showAll = (product) => true;

    return {
        '#saude': saudeSeparator,
        '#cosmeticos': cosmeticosSeparator,
        '#alimentos': alimentosSeparator,
        '#higiene': higieneSeparator,
        '#all': showAll
    }
}());


export { Separators }