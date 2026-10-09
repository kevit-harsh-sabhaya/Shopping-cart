import {
    displayproducts1,
    getProductsByCategory,
    Totalcart,
    showcart,
    showDetails,
    displaydiscount
} from './cart.js';



console.log("===== Shopping Cart Report =====\n");

console.log("AVAILABLE PRODUCTS\n------------");
displayproducts1();

console.log('\n');
console.log("CART\n-----");

showcart();

console.log("------------------------");

displaydiscount();

console.log("------------------------");

console.log("Electronics Products:\n");
console.log(getProductsByCategory("electronics"));

console.log("------------------------");

showDetails(1);