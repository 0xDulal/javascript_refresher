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