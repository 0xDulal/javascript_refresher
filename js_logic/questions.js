//Merging two arrays of data from separate APIs into a single list.

const firstNames = ['John', 'Jane', 'Alice', 'Bob'];
const lastNames = ['Doe', 'Smith', 'Johnson', 'Brown'];

const newFullNames = [...firstNames, ...lastNames];
console.log(newFullNames);


// filtering an arrey of products based on a specific search term filtering product by type
const products = [
      { name: 'Laptop', type: 'Electronics' },
      { name: 'Shoes', type: 'Fashion' },
      { name: 'Watch', type: 'Accessories' },
      { name: 'Phone', type: 'Electronics' },
      { name: 'T-shirt', type: 'Fashion' }
]

const filter = products.filter(function (product) {
      return product.type === 'Electronics';
})
console.log(filter);

// Mapping over an array of user data to create a list of user cards
const users = [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 },
      { name: 'Alice', age: 28 },
      { name: 'Bob', age: 22 }
];
const card = users.map(function (user) {
      return `<div><h3>${user.name}</h3><h5>${user.age}</h5></div>`
})
console.log(card);


// Group an arrey of objects by a specific property
const items = [
      { name: 'Apple', category: 'Fruit' },
      { name: 'Carrot', category: 'Vegetable' },
      { name: 'Banana', category: 'Fruit' },
      { name: 'Phone', category: 'Electronics' },
      { name: 'Broccoli', category: 'Vegetable' }

];
const obj = {};
items.forEach(function(item){
    if(obj[item.category]){
        obj[item.category].push(item.name);
    }
    else{
        obj[item.category] = [item.name];
    }
});
console.log(obj);


// Removing or Updating items from an array of objects based on a specific id
const items2 = [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Carrot' },
      { id: 3, name: 'Banana' },
      { id: 4, name: 'Phone' },
      { id: 5, name: 'Broccoli' }
];
const newUsers= items2.filter(function(item){
      return item.id !== 2;
})
console.log(newUsers);