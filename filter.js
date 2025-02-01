

//extract elements from an array based on a condition. It creates a new array
// containing only the elements that pass the test implemented by the provided function.
// use :  include or exclude elements based on a condition.


// When to Use filter():

// When you need to extract a subset of data from an array based on a condition.

// When you want to exclude certain elements from an array.

// When working with dynamic data (e.g., search results, user inputs, or API responses).


// Filtering Based on Multiple Conditions

const employees = [
    { name: 'Alice', department: 'HR', salary: 50000 },
    { name: 'Bob', department: 'Engineering', salary: 80000 },
    { name: 'Charlie', department: 'HR', salary: 60000 },
    { name: 'David', department: 'Engineering', salary: 90000 }
  ];
  
  const highPaidHR = employees.filter(employee =>
    employee.department === 'HR' && employee.salary > 55000
  );
  
  console.log(highPaidHR);
  // Output:
  // [
  //   { name: 'Charlie', department: 'HR', salary: 60000 }
// ]
  

// =================================== //

// on invalid Data

const data = [
    { id: 1, value: 10 },
    { id: 2, value: null },
    { id: 3, value: 20 },
    { id: 4, value: undefined }
  ];
  
  const validData = data.filter(entry => entry.value !== null && entry.value !== undefined);
  
  console.log(validData);
  // Output:
  // [
  //   { id: 1, value: 10 },
  //   { id: 3, value: 20 }
// ]
  
// ===================================== //

// search results

const books = [
    { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' },
    { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
    { title: 'You Don’t Know JS', author: 'Kyle Simpson' }
  ];
  
  const searchQuery = 'javascript';
  const searchResults = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  console.log(searchResults);
  // Output:
  // [
  //   { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' },
  //   { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' }
// ]
  

// ======================================== //

// fitler on products 

const products = [
    { name: 'Laptop', category: 'Electronics', price: 1200 },
    { name: 'Shirt', category: 'Clothing', price: 25 },
    { name: 'Headphones', category: 'Electronics', price: 150 },
    { name: 'Shoes', category: 'Clothing', price: 80 }
  ];
  
  const electronics = products.filter(product => product.category === 'Electronics');
  
  console.log(electronics);
  // Output:
  // [
  //   { name: 'Laptop', category: 'Electronics', price: 1200 },
  //   { name: 'Headphones', category: 'Electronics', price: 150 }
  // ]