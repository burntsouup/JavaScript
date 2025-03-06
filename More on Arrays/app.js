
//------------------------------------
// Creating an array
//------------------------------------

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

//------------------------------------
// Adding/removing to an array
//------------------------------------

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

//------------------------------------
// slice()
//------------------------------------

someHobbies = hobbies.slice(0,2);
// console.log(hobbies);
// console.log(someHobbies);

//------------------------------------
// concat()
//------------------------------------

const chores1 = ["dishes", "laundry"];
const chores2 = ["vacuum", "dust"];
const allChores = chores1.concat(chores2);
// console.log(allChores);

//------------------------------------
// indexOf() and lastIndexOf()
//------------------------------------

const numbers = [10, 20, 30, 40, 20];
// console.log(numbers.indexOf(20));
// console.log(numbers.indexOf(20, 2));

// console.log(numbers.lastIndexOf(20));

//------------------------------------
// find() and findIndex()
//------------------------------------

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
const user = users.find(user => user.age > 27);
// console.log(user);

const nums = [10, 20, 30, 40, 50];
const index = nums.findIndex(num => num > 25);
// console.log(index);

//------------------------------------
// map()
//------------------------------------

// example 1:
let vals1 = [4, 6, 2, 8];
//console.log("original vals1: " + vals1);

function doubler(x) {
    return x * 2;
}

// let doubledVals1 = vals1.map(doubler);
// console.log(doubledVals1);

vals1 = vals1.map(doubler); //override existing array
//console.log("new vals1: " + vals1);

//re-write using arrow function:
// vals1 = vals1.map(x => x*2);

// example 2:
let animals1 = [
    { name: "Dobby", species: "fish" },
    { name: "Dumbledore", species: "dog" },
    { name: "Hagrid", species: "dog" },
    { name: "Snape", species: "worm" },
    { name: "Malfoy", species: "rabbit" },
    { name: "Ron", species: "cat" },
];

let names = animals1.map(x => x.name);
//console.log(names);


// reduce()
//------------------------------------

let vals2 = [6, 2, 3, 5];
//console.log("original vals2: " + vals2);

//how to do this otherwise:
// let acc = 0;
// for (let el of vals2) {
//     acc += el;
// }
// console.log(sum);

function sum (acc, val) {
    //console.log(acc);
    return acc + val;
}

//let answer1 = vals2.reduce(sum);
let answer2 = vals2.reduce(sum, 10); //include initialValue argument
//console.log(answer1);
//console.log(answer2);

//re-write using arrow function:
// let answer2 = vals2.reduce((acc, val) => acc + val, 10);


// filter()
//------------------------------------

// example 1:
let vals3 = [8, 1, 4, 3];
//console.log("original vals3: " + vals3);

function isEven(x) {
    if (x % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

vals3 = vals3.filter(isEven);
//console.log(vals3);

//re-write using arrow function
// vals3 = vals3.filter(x => x%2===0);

// example 2:
let animals2 = [
    { name: "Dobby", species: "fish" },
    { name: "Dumbledore", species: "dog" },
    { name: "Hagrid", species: "dog" },
    { name: "Snape", species: "worm" },
    { name: "Malfoy", species: "rabbit" },
    { name: "Ron", species: "cat" },
];

let dogs = animals2.filter(x => x.species === "dog");
//console.log(dogs);


// sort()
//------------------------------------

// example 1:
let vals4 = [1, 9, 300, 7];
//console.log("original vals4: " + vals4);

function compare(a, b) {
    return a - b;
}

vals4 = vals4.sort(compare);
//console.log(vals4);

// example 2:
let words = ["ham", "turkey", "sandwich", "pie", "candy", "cookie"];
//console.log("original: " + words);

words.sort((a,b) => a.length - b.length);
//console.log("sorted: " + words);


// forEach()
//------------------------------------

// example 1:
let animals3 = [
    { name: "Dobby", species: "fish" },
    { name: "Dumbledore", species: "dog" },
    { name: "Hagrid", species: "dog" },
    { name: "Snape", species: "worm" },
    { name: "Malfoy", species: "rabbit" },
    { name: "Ron", species: "cat" },
];

//how to do this otherwise:
// for(let i = 0; i < animals3.length; i++) {
//     console.log(animals3[i]);
// }

// animals3.forEach(function(animals3) {
//     console.log(animals3);
// });

//re-write using arrow function
// animals3.forEach(animals3 => console.log(animals3));

// example 2:
let vals5 = [1, 4, 9, 2];

// vals5 = vals5.forEach(x => console.log(x*2));
//console.log(vals5);