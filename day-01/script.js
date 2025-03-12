// To print somehting you need to use console.log() function.
// We are printing "Hello World" in the console.
console.log("Hello World"); // Output: Hello World & this is a single line statement.
// You can also use console.log() to print multiple values. Example:
console.log("Hello", "World"); // Output: Hello World & this is a single line statement.  // Output: Hello World
console.log("Dulal", "Shikdar"); // Output: [object Object] [object Object] & this is a single line statement.

// Comments are used to explain the code. Comments are ignored by the browser. You can write comments in two ways:
// Single line comment: To write a single line comment you can use two forward slashes (//).
// Multi-line comment: To write a multi-line comment you can use /* to start the comment and */ to end the comment. Example:
/* This is a
multi-line
comment */
// to break the line you can use \n
console.log("Hello\nI am Dulal"); // Output: Hello World
console.log("I am a Web Developer\n\nAnd Ethical Hacker"); // Output: Hello World

// variables: Variables are used to store data values. Example:
var x = 10;
console.log(x); // Output: 10
var y = 20;
console.log(y); // Output: 20

// javascript variables can be declared in three ways: 
//       1. var
//       2. let
//       3. const
// The main difference between these three ways is the scope of the variable. Example:
// var: The var keyword is used to declare variables in JavaScript. Example:
var a = 11;
console.log(a);
// let: The let keyword is used to declare variables in JavaScript. Example:
let b = 12;
console.log(b);
// const: The const keyword is used to declare variables in JavaScript. Example:
const c = 13;
console.log(c);
// You can also declare multiple variables in a single line. Example usning var:
var x = 10, y = 20, z = 30;
console.log(x, y, z); // Output: 10 20 30

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// why var, let, const?
      // var:
      //       - Stored in Functional or Global Scope. (We can access the variable from anywhere in the code)
      //       - Can be re-declared and updated. Example:
                    var dulal = 10;
                    console.log(dulal); // Output: 10
                    dulal = 20;
                    console.log(dulal); // Output: 20
      //       - Can be accessed without initialization. Example:
                    console.log(noData); // Output: undefined (noData is not defined)
                    var noData = 114;
                    console.log(noData); // Output: 114
      //       - Can be initialized without a value as its default value is undefined. Example:
                    var noValue;
                    console.log(noValue); // Output: undefined
      //       - Can be hoisted. Example:
                    console.log(hoisted); // Output: undefined
                    var hoisted = 15;
                    console.log(hoisted); // Output: 15

      // let:
      //       - Block scoped. (Only accessible within the block where it is declared)
      //       - Cannot be re-declared but can be updated. Example:
                    let shikdar = 30;
                    console.log(shikdar); // Output: 30
                    shikdar = 40;
                    console.log(shikdar); // Output: 40
      //       - Cannot be accessed without initialization. Example:
                    // console.log(noLet); // ReferenceError: noLet is not defined
                    let noLet = 214;
                    console.log(noLet); // Output: 214
      //       - Cannot be hoisted. Example:
                    // console.log(noHoist); // ReferenceError: noHoist is not defined
                    let noHoist = 25;
                    console.log(noHoist); // Output: 25

      // const:
      //       - Block scoped. (Only accessible within the block where it is declared)
      //       - Cannot be re-declared and cannot be updated. Example:
                    const constantValue = 50;
                    console.log(constantValue); // Output: 50
                    // constantValue = 60; // TypeError: Assignment to constant variable.
      //       - Cannot be accessed without initialization. Example:
                    // console.log(noConst); // ReferenceError: noConst is not defined
                    const noConst = 314;
                    console.log(noConst); // Output: 314
      //       - Cannot be hoisted. Example:
                    // console.log(noConstHoist); // ReferenceError: noConstHoist is not defined
                    const noConstHoist = 35;
                    console.log(noConstHoist); // Output: 35
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// when to use var, let, const:
      // var can be tricky because its scope is either global or within a function, which can lead to bugs.
      // Use let when you know a variable’s value might change later in your code.
      // Use const for variables that should never change once you set them.
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Operators: Operators are used to perform operations on variables and values. Example:
// Arithmetic Operators: Arithmetic operators are used to perform arithmetic operations on numbers. Example:
var j = 10;
var s = 20;
console.log(j+s); // Output: 30
console.log(j-s); // Output: -10
console.log(j*s); // Output: 200
console.log(j/s); // Output: 0.5
console.log(j%s); // Output: 10
console.log(j**s); // Output: 100000000000000000000
// Increment and Decrement Operators: Increment and decrement operators are used to increase or decrease the value of a variable by 1. Example:
var k = 10;
k++;
console.log(k); // Output: 11
k--;
console.log(k); // Output: 10
// Assignment Operators: Assignment operators are used to assign values to variables. Example:
var x = 10;
x += 5;
console.log(x); // Output: 15
x -= 5;
console.log(x); // Output: 10
x *= 5;
console.log(x); // Output: 50
x /= 5;
console.log(x); // Output: 10
x %= 5;
console.log(x); // Output: 0
x **= 5;
console.log(x); // Output: 0
// Comparison Operators: Comparison operators are used to compare two values. Example:

let d = "5";
let e = 10;
let res = d+e;
console.log(res);
console.log(typeof res);
