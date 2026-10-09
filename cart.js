import products from './products.js';

function findProduct(id) {
    const product = products.find(product => product.id === id);
    return product ? product.name : 'Product not found';
}

// console.log(findProduct(3));

function getElectronics() {
    return products.filter(product => product.category === 'Electronics');
}

// console.log(getElectronics());

function calculateTotal() {
    return products.reduce((total,product) => total + product.price, 0);
}

// console.log(calculateTotal());   


export{
    findProduct,
    getElectronics,
    calculateTotal
}; //ES6 Syntax

// module.exports = {
//     findProduct,
//     getElectronics,
//     calculateTotal
// }; //Normal Syntax