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

console.log(userDetail);
console.log(userDetail.name);
console.log(userDetail['age']);
console.log(userDetail['Baper nam']);
console.log(userDetail[symbol]);

const obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      };
const obj2 = {
      p: 5,
      q: 6,
      r: 7,
      };
const obj3 = {
      x: 8,
      y: 9,
      z: 10,
      };
const objFinal ={
      obj,
      obj2,
      obj3,
}
const objFinal1 = Object.assign({}, obj, obj2, obj3);
const objFinal2 = {...obj, ...obj2, ...obj3};
console.log(objFinal1);
console.log(objFinal2);

