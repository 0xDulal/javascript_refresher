//object
const symbol = Symbol('name');
const userDetail = {
  name: 'John',
  age: 25,
  location: 'USA',
  height : 5.8,
  weight : 70,
  email: `abc@gmail.com`,
  'Baper nam' : `korim ali`,
      [symbol]: 'my name is john', 
};
userDetail.age = 30;
// prints all the properties of the object
console.log(userDetail);
// prints the value of the property name
//Dot notation
console.log(userDetail.name);
//Bracket notation
console.log(userDetail['age']);
//why bracket notation?
// because the property name contains space
// prints the value of the property 'Baper nam'
//Dot notation will not work here
// because the property name contains space
// so we have to use bracket notation
console.log(userDetail['Baper nam']);
// prints the value of the property symbol
console.log(userDetail[symbol]);
// changing the value of the property "name"
userDetail.name = 'Doe';
console.log(userDetail.name);
// Freezing the object
// after freezing the object, we can't change the value of the properties
Object.freeze(userDetail);
userDetail.name = 'Dulal';
console.log(userDetail.name);

// View all the properties of the object
console.log(Object.keys(userDetail));
// View all the values of the object
console.log(Object.values(userDetail));
// View all the entries of the object
console.log(Object.entries(userDetail));