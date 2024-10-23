/*
------------------------------------
CALLBACK FUNCTIONS
------------------------------------
*/

// Accepting a function
//------------------------------------

// synchronous code
// const button = document.getElementById('btn');
// button.addEventListener('click',() => console.log('Clicked!'));
// let result = 0;
// for (i=0; i < 100000000; i++) {
//     result += i;
// }
//console.log("Result: " + result);

// example 1:
function message () {
    setTimeout(() => {
        console.log("hello from callback!")
    }, 2000);
}
function boo() {
    console.log("Boo!");
}
// message();
// boo();

// example 2:
function dog() {
    console.log("bark bark!");
}
function noise(callback) {
    console.log("la la la!!");

    if(callback) {
        callback();
    }
}
//noise();
//noise(dog);
//noise(function() {console.log("gah gah gah");})
//noise(()=>console.log("boo boo boo"))


// example 3:
const posts = [
    { title: "Post one", body: "Post one body" },
    { title: "Post two", body: "Post two body" }
]
function getPost() {
    setTimeout(() => {
        posts.forEach(post => {
            console.log(post.title);
        });
    }, 1000);
}
//getPost();

// Returning a function
//------------------------------------

//how to do this otherwise:
// function multiplier(x, factor) {
//     return x * factor;
// }

function multiplier(factor) {
    return function(x) {
        return x * factor;
    };
}

//re-write using an arrow function:
// function multiplier(factor) {
//     return x => x * factor;
// }

//let doubler = multiplier(2);
//console.log(doubler(3)) //returns 6
//let tripler = multiplier(3);
//console.log(tripler(5)) //return 15


/*
------------------------------------
PROMISE FUNCTIONS
------------------------------------
*/

// example 1:
// let p = new Promise((resolve, reject) => {
//     const num = Math.random();
//     if (num >= 0.5) {
//         resolve("Promise is fulfilled!");
//     } else {
//         reject("Promise failed!");
//     }
// });
// p.then(value => console.log(value + " Yay!"));
// p.catch(err => console.log(err));

// example 2:
// const delay = function(time) {
//     return new Promise((resolve, reject) => {
//         if(isNaN(time)){
//             reject(new Error("delay requires a number!!"));
//         } else {
//             setTimeout(resolve, time);
//         }
//     })
// };
// let time = prompt("Enter a number less than 10:",)*1000;
// delay(time)
//     .then(() => console.log("Wahoo!"))
//     .catch(err => console.log(err));


// example 3:
// const isMomHappy = (Math.random()<0.5?true:false);
// const phone = {
//     brand: 'Pixel',
//     color: 'green',
//     version: '7'
// };
// const willIGetNewPhone = new Promise((resolve, reject) => {
//         if (isMomHappy) {
//             resolve(phone);
//         } else {
//             reject(reason);
//         }

//     }
// );
// willIGetNewPhone
//     .then(value => console.log("I got a new phone!: " + value.brand))
//     .catch(() => console.log(new Error('mom is unhappy')));

// example 4:
// const img = document.querySelector('img');
// const button = document.getElementById('btn');
// let searchValue = prompt("Enter a value:",);
// const giphyAPI = `https://api.giphy.com/v1/gifs/search?api_key=AMqOV3iIhSOAfJ2fz8scG8HEsl0SXSJ7&q=${searchValue}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

// let setup = function() {
//     fetch(giphyAPI)
//         .then(response => {
//             return response.json();
//         })
//         .then(json => {
//             //console.log(json)
//             return img.src = json.data[Math.round((Math.random()*24))].images['fixed_height'].url;
//         })
//         .catch(err => console.log("well poopy: " + err));
// }

// button.addEventListener('click', setup);

// example 5:
// let searchValue = prompt("Enter a value:",);
// const giphyAPI = `https://api.giphy.com/v1/gifs/search?api_key=AMqOV3iIhSOAfJ2fz8scG8HEsl0SXSJ7&q=${searchValue}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
// const resultsEl = document.getElementById('results')
// let resultsHTML = '';

// let getRequest = fetch(giphyAPI);
// // console.log(getRequest);

// let getGif = function(num) {
//     return getRequest
//         .then(response => {
//             return response.json();
//         })
//         .then(json => {
//             // console.log(json)
//             return resultsHTML = `<img src="${json.data[num].images['fixed_height'].url}">`
//         });
// }


// chained:
// getGif(0)
//    .then(value => {resultsEl.innerHTML += value; return getGif(1)})
//    .then(value => {resultsEl.innerHTML += value; return getGif(2)})
//    .then(value => resultsEl.innerHTML += value)
//    .catch(err => console.log("oops .. something went wrong :(" + err))

// Promise.all()
// let promises = [getGif(0), getGif(1), getGif(2)];
// Promise.all(promises)
//     .then((value) => resultsEl.innerHTML += value)
//     .catch(err => console.log(err));
 
/*
------------------------------------
ASYNC & AWAIT
------------------------------------
*/

// example 1:
// const delay2 = function(time2) {
//     return new Promise((resolve, reject) => {
//         if(isNaN(time2)){
//             reject(new Error("delay requires a number!!"));
//         } else {
//             setTimeout(resolve("resolved!"), time2);
//         }
//     })
// };

// let time2 = prompt("Enter a number less than 10:",)*1000;
// async function asyncCall() {
//     console.log("calling..");
//     const result = await delay2(time2);
//     console.log(result);
// }
// asyncCall();

// example 2a - sequentialStart:
//   execution suspends 2s for the first await, and then another 1s for the second await
//   the second timer is not created until the first has already fired; code finishes after 3s
function resolveAfter2Seconds() {
    console.log("starting slow promise..");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("slow promise is done.");
      }, 2000);
    });
}
  
function resolveAfter1Second() {
    console.log("starting fast promise..");
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve("fast promise is done.");
        }, 1000);
    });
}
  
async function sequentialStart() {
    console.log("== sequentialStart starts ==");

    // 1. Start a timer, log after it's done
    const slow = await resolveAfter2Seconds();
    console.log(slow);
        
    // 2. Start the next timer after waiting for the previous one
    const fast = await resolveAfter1Second();
    console.log(fast);

    console.log("== sequentialStart done ==");
}

// sequentialStart();

// example 2b - sequentialWait:
//   both timers are created, running concurrently; code finishes in 2s
//   the await calls still run in series, meaning the second await will wait for the first await to finish (fast processes after slow)
async function sequentialWait() {
    console.log("== sequentialWait starts ==");

    // 1. Start two timers without waiting for each other
    const slow = resolveAfter2Seconds();
    const fast = resolveAfter1Second();

    // 2. Wait for the slow timer to complete, and then log the result
    console.log(await slow);
    // 3. Wait for the fast timer to complete, and then log the result
    console.log(await fast);

    console.log("== sequentialWait done ==");
}

// sequentialWait();

// example 3:
// const img = document.querySelector('img');
// const button = document.getElementById('btn');
// let searchValue = prompt("Enter a value:",);

// const giphyAPI = `https://api.giphy.com/v1/gifs/search?api_key=AMqOV3iIhSOAfJ2fz8scG8HEsl0SXSJ7&q=${searchValue}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

// async function giphy() {
//     const response = await fetch(giphyAPI);
//     const json = await response.json();
//     return img.src = json.data[Math.round((Math.random()*24))].images['fixed_height'].url
// }

// button.addEventListener('click', giphy);

/*
------------------------------------
ARRAYS
------------------------------------
*/

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