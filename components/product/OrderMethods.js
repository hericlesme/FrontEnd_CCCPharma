const Comparators = (function () {

    function NameComparator(p1, p2) {
        if (p1.name.toLowerCase() > p2.name.toLowerCase()) return 1;
        if (p1.name.toLowerCase() < p2.name.toLowerCase()) return -1;
        return 0;
    }

    function PriceComparator(p1, p2) {
        if (p1.price > p2.price) return 1;
        if (p1.price < p2.price) return -1;
        return 0;
    }

    function CategoryComparator(p1, p2) {
        if (p1.category.name.toLowerCase() > p2.category.name.toLowerCase()) return 1;
        if (p1.category.name.toLowerCase() < p2.category.name.toLowerCase()) return -1;
        return 0;
    }

    function QuantityComparator(p1, p2) {
        if (p1.stock < p2.stock) return 1;
        if (p1.stock > p2.stock) return -1;
        return 0;
    }

    return {
        "name": NameComparator,
        "price": PriceComparator,
        "category": CategoryComparator,
        "stock": QuantityComparator
    }
}());

export { Comparators }