
//------------------------------------
// Objects
//------------------------------------


// Example 1 ---------------------------
const car = {
    brand: "Subaru",
    model: "Crosstrek",
    year: 2019,
    start: () => "engine started!",
    getCarInfo: () => `This year is a ${car.year} ${car.brand} ${car.model}`
};
// console.log(car.brand);
// console.log(car.year);
// console.log(car.start());
// console.log(car.getCarInfo());


// Example 2 ---------------------------
let obj1 = { name: "Cassy" };
let obj2 = obj1; // both variables reference the same object in memory
// console.log(obj1.name);
// console.log(obj2.name);

obj2.name = "Kyle"; // modifies the original object
// console.log(obj1.name);
// console.log(obj2.name);


// Adding, modifying, and deleting properties ---------------------------
let person1 = {
    name: "John",
    age: 28,
    hobbies: ["reading", "gaming"],
    greet: () => { `Hello, my name is ${person1.name} and I am ${person1.age} years old.`; }
};
person1.job = "developer";
// console.log(person1.job);
person1.job = "sales";
// console.log(person1.job);
delete person1.age;
// console.log(person1);

let person2 = {
    name: "Emma",
    age: 35,
    hobbies: ["bowling", "soccer"],
    greet: () => { `Hello, my name is ${person2.name} and I am ${person2.age} years old.`; },
    job: "nurse",
    "favourite colour": "blue"
};
// console.log(person2["job"]);
// console.log(person2["favourite colour"]);
const person2Age = "age";
// console.log(person2[person2Age]);

// spread operator ---------------------------

const user1 = { name: "Alice", age: 30 };
const user2  = user1;  // both constants reference the same object stored in memory
user1.age = 32; 
// console.log(user1.age);  // 32
// console.log(user2.age);  // 32

// copying objects:
user3 = { name: "John", age: 40 };
user4 = { ...user3 };  // creates shadow copy
user3.age = 42;
// console.log(user3.age); // 42
// console.log(user4.age); // 40

// merging objects:
const settings = { Tier: "Standard_LRS", Region: "eastus" };
const custom = { Region: "canadacentral" };
const newSettings = { ...settings, ...custom };  // { Tier: "Standard_LRS", Region: "canadacentral" }

// adding properties
user5 = { name: "Emma", age: 30 };
user6 = { ...user5, hobbies: ["reading", "climbing"] };


// shadow copy example
const u1 = { name: "Alice", age: 30, hobbies: ["swimming", "reading"]};
const u2 = { ...u1 }; // creates shadow copy

u1.age = 35;
// console.log(u1.age);  // 35
// console.log(u2.age);  // 30  // since it's a copy

u1.hobbies.push("coding");
// console.log(u1.hobbies);  // ["swimming", "reading", "coding"]
// console.log(u2.hobbies);  // ["swimming", "reading", "coding"]  // outputs the same as user1's hobbies since only the hobbies reference was copied

u3 = { ...u1, hobbies: [...u1.hobbies] };  // this will create a new array for user3
u3.hobbies.push("chess");
// console.log(u3.hobbies);  // ["swimming", "reading", "coding", "chess"]
// console.log(u1.hobbies);  // ["swimming", "reading", "coding"]

// destructuring objects ---------------------------

const employee = {
    name: "Alice",
    age: 30,
    job: "Engineer"
};

// destructuring
const { name, age } = employee;
// console.log(name); // "Alice"
// console.log(age);  // 30

const { name: fullName } = employee;
// console.log(fullName); // "Alice"

const { hireDate = 2020 } = employee;
// console.log(hireDate); // 2020


//------------------------------------
// this keyword
//------------------------------------

// console.log(this); // in browser: Window object


function showThis() {
    console.log(this);
}
// showThis(); // Window object


const food = {
    fruit: "apple",
    candy: function jellybean() {
        console.log(this);
    }
}
// food.candy(); // food object


function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

const dog1 = new Dog("Fido", "Labrador");
// console.log(dog1.name); // "Fido"
// console.log(dog1.breed); // "Labrador"


function sayHi() {
  console.log(this.name);
}
const user = { name: "Luke" };
sayHi.call(user); // "Luke"
sayHi.apply(user); // "Luke"

const boundFn = sayHi.bind(user);
boundFn(); // "Luke"


