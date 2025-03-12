// Function Declaration
function hello(name, age=18) {
      console.log("hello " + name + " your age is " + age);
}
hello("Dulal",20);
hello("Emon");

// Click Me 

function clickMe() {
      alert("You clicked me!");
}
document.getElementById("clickMe").addEventListener('click', clickMe);

(

function(name){
      console.log("Hello World");
}
)();


let amarmon = function(name){
      console.log(`Hello my name is ` + name);
      return 0;
};
amarmon("Dulal");
amarmon("Dulal");

let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers);
let seqNumber = numbers.map(function(number){
      return number * number;
});
console.log(seqNumber);
console.log(numbers[0]);

//arrow function
let newArrow = (a, b) => {
      return a + b;
}
console.log(newArrow(10, 20));


function kodumia(gali) {
      function ageDak(){
            alert("Tore koto bar bolsi " + gali);
      }
      return ageDak();
}
kodumia("Bolod");

