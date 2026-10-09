const products = [{
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 50000,
    stock: 5
  },
  {
    id: 2,
    name: "Mouse",
    category: "Electronics",
    price: 800,
    stock: 10
  },
  {
    id: 3,
    name: "Keyboard",
    category: "Electronics",
    price: 1500,
    stock: 7
  },
  {
    id: 4,
    name: "Chair",
    category: "Furniture",
    price: 7000,
    stock: 3
  },
  {
    id: 5,
    name: "Notebook",
    category: "Stationery",
    price: 100,
    stock: 20
  }
];

const cart1 = [{
    productId: 1,
    quantity: 1
  },
  {
    productId: 2,
    quantity: 2
  },
  {
    productId: 5,
    quantity: 3
  }
];

const customers = [{
  id: 1,
  name: 'Harsh',
  city: 'Rajkot'
},
{
  id:2,
  name: 'Krish',
  city: 'Gondal'
}
];

export {
  products,
  cart1,
  customers
};