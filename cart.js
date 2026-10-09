import {
    products,
    cart1,
    customers
} from './product.js';

function displayproducts() {
    products.forEach(p => {
        console.log(`${p.id}. ${p.name} - ${p.price} - Stock: ${p.stock}`);
    })
}
// displayproducts();

function displayproducts1() {
    products.forEach(p => {
        console.log(`${p.name} - Rs.${p.price}`);
    });
}
// displayproducts1();

// Using Find Mehtod
function findProduct1(name) {
    const product = products.find(p => p.name.toLowerCase() === name.toLowerCase());
    return product ? `${product.name} - Rs.${product.price}` : 'Product Not Found'
}
// console.log(findProduct1('Belt'));
// console.log(findProduct1('Laptop'));

//Using For..of
function findProduct2(name) {
    for (const p1 of products) {
        if (p1.name.toLowerCase() === name.toLowerCase()) {

            return `${p1.name} - Rs.${p1.price}`;
        }
    }
    return 'Product Not Found.';
}
// console.log(findProduct2('Belt'));
// console.log(findProduct2('Laptop'));


function getProductsByCategory(category) {
    const mproduct = products.filter(p => p.category && p.category.toLowerCase() === category.toLowerCase());

    if (mproduct.length > 0) {
        return mproduct.map(p => `${p.name}`).join('\n');
    }

    return 'Category Not Found';
}
// console.log(getProductsByCategory("Medical"));
// console.log(getProductsByCategory("Electronics"));

function showcart(){
    cart1.forEach(items => {
        const product = products.find(p => p.id === items.productId);
        if(product){
            console.log(`${product.name} -> Rs.${product.price} x ${items.quantity}`);
        }
    })
}

function Totalcart() {
    const ftotal = cart1.reduce((total, items) => {
        const product = products.find(p => p.id === items.productId);

        if (product) {
            return total + (product.price * items.quantity);
        }
        return total;
    }, 0);

    // console.log(`\nFinal Total : Rs.${ftotal}`);

    return ftotal;
}


function calculateDiscount(ftotal) {
    if (ftotal >= 50000) {
        return ftotal * 0.1;
    } else if (ftotal >= 20000) {
        return ftotal * 0.05;
    } else {
        return 0;
    }
}

function displaydiscount() {
    const cTotal = Totalcart(cart1);
    const Damount = calculateDiscount(cTotal);
    const fprice = cTotal - Damount;

    console.log(`\nCart Total : ${cTotal}\n Discount : ${Damount}\n Final-Price : ${fprice}`);

    return fprice;
}
// displaydiscount();

function checkStock(productId, quantity) {
    const cStock = products.find(p => p.id === productId);

    if (!cStock) {
        return 'Product Not Found';
    }
    if (cStock.stock >= quantity) {
        return 'Stock Available';
    } else {
        return 'Not Enough Stock '
    }
}
// console.log(checkStock(2, 5));

function updateproduct(productId, newStock) {
    const product = products.find(p => p.id === productId);

    if (product) {
        const nstock = product.stock + newStock;
        return `Stock Updated : ${product.name} Current Stock is ${nstock} & Old Stock is ${product.stock}`
    }

    return 'Product Not Found';
}
// console.log(updateproduct(2, 20));

function showProductDetails(productId) {
    const product = products[productId];
    const {
        name,
        price,
        category
    } = product;

    console.log(`\nName: ${name}\nPrice:${price}\nCategory: ${category}`);
}

// showProductDetails(2);

function createUpdatedProduct(productId, newprice) {
    const product = products[productId];

    const updateProduct = {
        ...product,
        price: newprice
    };

    console.log(`Old Price: Rs.${product.price}\nNew Price: Rs.${updateProduct.price}`);

    return updateProduct;
}

// createUpdatedProduct(3, 8000);


function showDetails(id) {

    const customer = customers.find(p => p.id === id);

    if (!customer) {
        console.log('Product Not Found')
        return ;
    }
    console.log(`\nCustomer: ${customer.name}\n City: ${customer.city}`);
}

function showDetails1(id) {

    console.log(`\nCustomer: ${customers[id-1].name}\n City: ${customers[id-1].city}`);
}

// showDetails(1);
// showDetails1(2);

function processProducts(callback) {
    products.forEach(product => callback(product));
}
processProducts(product => {
    //   console.log(product.name);
});

export {
    displayproducts1,
    getProductsByCategory,
    Totalcart,
    showDetails,
    displaydiscount,
    showcart
}