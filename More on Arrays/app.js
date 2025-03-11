
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
const values = [4, 6, 2, 8];
const valuesDoubled = values.map(x => x*2);
// console.log(valuesDoubled);

// example 2:
const pets1 = [
    { owner: "Dobby", species: "fish" },
    { owner: "Dumbledore", species: "dog" },
    { owner: "Hagrid", species: "dog" },
    { owner: "Snape", species: "worm" },
    { owner: "Malfoy", species: "rabbit" },
    { owner: "Ron", species: "cat" },
];
const petOwners = pets1.map(x => x.owner);
// console.log(petOwners);

//------------------------------------
// forEach()
//------------------------------------

// example 1:
let pets2 = [
    { name: "Dobby", species: "fish" },
    { name: "Dumbledore", species: "dog" },
    { name: "Hagrid", species: "dog" },
    { name: "Snape", species: "worm" },
    { name: "Malfoy", species: "rabbit" },
    { name: "Ron", species: "cat" },
];
// pets2.forEach(x => console.log(x));

// example 2:
const digits = [1, 4, 9, 2];
// const digitsDoubled = digits.forEach(x => console.log(x*2));

//------------------------------------
// filter()
//------------------------------------

// example 1:
const points = [8, 1, 4, 3];
const evenPoints = points.filter(x => x%2===0);
// console.log(evenPoints);

// example 2:
let pets3 = [
    { name: "Dobby", species: "fish" },
    { name: "Dumbledore", species: "dog" },
    { name: "Hagrid", species: "dog" },
    { name: "Snape", species: "worm" },
    { name: "Malfoy", species: "rabbit" },
    { name: "Ron", species: "cat" },
];
let dogs = pets3.filter(x => x.species === "dog");
// console.log(dogs);

//------------------------------------
// sort()
//------------------------------------

// example 1:
const fruitBowl = ["banana", "apple", "cherry"];
fruitBowl.sort();
// console.log(fruitBowl);

// example 2:
const food = ["ham", "turkey", "sandwich", "pie", "candy", "cookie"];
food.sort((a,b) => a.length - b.length);
// console.log(food);

//------------------------------------
// reduce()
//------------------------------------

// example 1:
const scores = [6, 2, 3, 5];
const result = scores.reduce((acc, val) => acc + val, 10);
// console.log(result);

// example 2:
const randomNumbers = [10, 25, 18, 42, 5];
const max = randomNumbers.reduce((acc, num) => (num > acc ? num : acc), );
// console.log(max);

//------------------------------------
// split()
//------------------------------------

const text = "Hello world, welcome!";
const words = text.split(" ");
// console.log(words);

const csv = "apple,sandwich,chocolate";
const lunch = csv.split(",");
// console.log(lunch);

const string = "one two three four";
const splitWords = string.split(" ", 2);
// console.log(splitWords);

//------------------------------------
// join()
//------------------------------------

const wordArray = ["JavaScript", "is", "awesome"];
const sentence = wordArray.join(" ");
// console.log(sentence);

const valuess = ["10", "20", "30"];
// console.log(valuess.join(","));

//------------------------------------
// spread operator
//------------------------------------

const list = [1, 2, 3];
const newList = [...list, 4, 5];
// console.log(newList);

const original = [10, 20, 30];
const copy1 = original;
const copy2 = [...original];
// console.log(copy1);
// console.log(copy2);
// console.log(original === copy1);
// console.log(original === copy2);

const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
// console.log(merged);

const word = "hello";
const letters = [...word];
console.log(letters); // ["h", "e", "l", "l", "o"]

//------------------------------------
// destructuring an array
//------------------------------------

const numList = [10, 20, 30];
const [a, b, c] = numList;
// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

// const a = numbers[0];
// const b = numbers[1];
// const c = numbers[2];



