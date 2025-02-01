
// map() – Transforming Data(Applying Discounts)
// create a new array by applying a function to each element of an existing array. 
// It does not modify the original array but instead returns a new array with the results of applying the provided function to each element.

// Use Case:
// Apply a 10% discount on all products and create a new discounted price list.

const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 }
];

const discountedProducts = products.map(product => ({...product, 
    discountedPrice: (product.price * 0.9).toFixed(2) // 10% discount
}));

console.log(discountedProducts);

// // put :
// [
//     { "id": 1, "name": "Laptop", "price": 1000, "discountedPrice": "900.00" },
//     { "id": 2, "name": "Phone", "price": 500, "discountedPrice": "450.00" },
//     { "id": 3, "name": "Tablet", "price": 300, "discountedPrice": "270.00" }
// ]


// ============================== //

// Combining map() with other array methods

const numbers = [1, 2, 3, 4, 5];
const squaredEvenNumbers = numbers
  .filter(num => num % 2 === 0) // Filter even numbers
  .map(num => num * num); // Square each even number

console.log(squaredEvenNumbers); // Output: [4, 16]