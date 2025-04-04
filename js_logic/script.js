const names = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
//forEach
names.forEach(function(printName){
      if(printName == 'Bob'){
            console.log("Bob Founded");
      }else{
            console.log(printName);
      }
});

// Map
let newNames= names.map(function(nameExt){
      return "Mr. " + nameExt;
})

console.log(newNames);

// Filter
const fullNames = [
      "Alice Johnson",
      "Bob Smith",
      "Charlie Johnson",
      "Diana Brown",
      "Eve Smith",
      "Frank Johnson",
      "Grace Brown",
      "Hank Smith",
      "Ivy Johnson",
      "Jack Brown"
];
let filterName = fullNames.filter(function(name){
      // return name.includes("Johnson");
      if(name.includes("Johnson")){
            return true;
      }
});
console.log(filterName);

// destructuring

const user = {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      email: "john.doe@example.com",
      address: {
            street: "123 Main St",
            city: "Springfield",
            state: "IL",
            zip: "62704"
      },
      hobbies: ["reading", "traveling", "coding"],
      isActive: true,
      roles: ["admin", "editor", "viewer", "moderator", "contributor"]
};
let {zip} = user.address;
console.log(zip);

let [r1,r2,r3,r4,r5]= user.roles;
console.log(r1, r2);

//spread Operator
const copyname = [...names];
copyname.pop();
console.log(copyname);
console.log(names);


const smallUser = {
      name: "Jane Doe",
      age: 25,
      isActive: false,
      email: "jane.doe@example.com",
      address: {
            street: "456 Elm St",
            city: "Metropolis",
            state: "NY",
            zip: "10001"
      },
      hobbies: ["painting", "cycling"]
};
const newSmallUser = {...smallUser};
console.log(newSmallUser);

// Rest Operator
function abcd(a, b, c,...any){
      console.log(a, b, c, any);
}
abcd(1,2,3,4,5,6,7,8,9,10);