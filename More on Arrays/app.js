
// ----------------------
// Creating an array
// ----------------------

// Method 1
const fruits = ["apple", "banana", "cherry"];
// console.log(fruits);

// Method 2
const moreFruits = new Array("orange", "melon", "tangerine");
// console.log(moreFruits);

// Method 3
const evenMoreFruits = Array.of("lemon", "lime", "grapefruit");
// console.log(evenMoreFruits);

// Method 4
const itemList = document.querySelectorAll("li");
// console.log(itemList);
const itemListArray = Array.from(itemList);
// console.log(itemListArray);

const kiwiArray = Array.from("kiwi");
// console.log(kiwiArray);

// ----------------------
// Adding to an array
// ----------------------

// Method 1
const hobbies = ["reading", "cooking"];
hobbies.push("coding");
// console.log(hobbies);

hobbies.pop();
// console.log(hobbies);

// Method 2
hobbies.unshift("running");
// console.log(hobbies);

hobbies.shift();
// console.log(hobbies);

// Method 3
hobbies[2] = "swimming";
// console.log(hobbies);

// Method 4
hobbies.splice(0, 0, "biking", "hiking");
// console.log(hobbies);

hobbies.splice(0, 2);
// console.log(hobbies);

// ----------------------
// slice() method
// ----------------------

someHobbies = hobbies.slice(0,2);
// console.log(hobbies);
// console.log(someHobbies);

// ----------------------
// concat() method
// ----------------------

const chores1 = ["dishes", "laundry"];
const chores2 = ["vacuum", "dust"];
const allChores = chores1.concat(chores2);
// console.log(allChores);