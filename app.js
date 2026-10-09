import { findProduct, getElectronics, calculateTotal } from "./cart.js";
import products from "./products.js";

console.log('----- ALL PRODUCTS ------');

products.forEach(product => console.log(`${product.name} - ${product.price} Rupees`));
console.log();

console.log('----Producy Found----');
console.log(findProduct(3));
console.log();

console.log('----Electronic Items----')

const Eproducts = products.filter(product => product.category === 'Electronics')
                            .map(product => product.name);

console.log(Eproducts);
console.log();

console.log('----Total----');
console.log(`Total Stock Prices is ${calculateTotal()} Rupees.`);
console.log();

console.log('----Expensive Products----');
products
    .filter(product => product.price > 1000)
    .map(product => console.log(`${product.name} - ${product.price} Rupees`));