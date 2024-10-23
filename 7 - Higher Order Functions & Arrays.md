# Higher-order functions

:pushpin: refer to the app within the [Higher Order Functions folder](<Higher Order Functions>)

- **Higher-order functions**

    - a function that accepts one or more functions as arguments, or a function that returns a function

    - Example - accepting a function as an argument

        ```JavaScript
        function dog() {
            console.log("bark bark!");
        }

        function noise(callback) {
            console.log("la la la!!");

            if(callback) {
                callback();
            }
        }

        noise(); //returns "la la la!!"
        noise(dog); //returns "la la la!!" and "bark bark!"
        noise(function() {console.log("gah gah gah");}) //returns "la la la!!" and "gah gah gah"
        noise(()=>console.log("boo boo boo")) //returns "la la la!!" and "boo boo boo"
        ```

    - Example - returning a function

        ```JavaScript
        function multiplier(factor) {
            return function(x) {
                return x * factor;
            };
        }

        // can also be written like this:
        // function multiplier(factor) {
        //     return x => x * factor;
        // }

        let doubler = multiplier(2);
        doubler(3) //returns 6
        let tripler = multiplier(3);
        tripler(5) //return 15
        ```

## Callbacks and Promises

- **Callback** functions

    :bulb: JS is a synchronous language but can be asynchronous with the use of Web APIs, the Task Queue, and the Event Loop

    - **synchronous** - only one operation will run at a time (single thread)

    - **asynchronous** - operations can run in parallel (multi-thread)

        :bulb: asynchronous coding is beneficial because it prevents **blocking** (stopping our code from executing, while waiting for the active context to finish executing)

        Example of blocking - the browser engine executes `result` and this takes a long time. If I click on the button, the button won't execute until `result` is done executing. This is because only one operation will run at a time, top to bottom

        :bulb: therefore, don't put slow code on the stack. When the Event Loop is blocked, the rendering is also blocked

        ```JavaScript
        const button = document.getElementById('btn');
        button.addEventListener('click',() => console.log("Clicked!"));

        let result = 0;
        for (i=0; i < 100000000; i++) {
            result += i;
        }
        console.log("Result: " + result);
        ```

    :bulb: Callback functions (with the use of Web APIs, the Task Queue, and the Event Loop) allow us to achieve this asynchronous behavior

    - **Callback functions** - a function that is called only when something else happens (it's not called by simply running the program). This is achieved by passing a function into another function as an argument. The function we pass is then "called back" after something else has occurred

        :bulb: this is possible because JS supports **higher-order functions**

    - Examples:

        - loading images on a website by calling a database. If images loaded synchronously, the website would freeze and wait for each image to load before continuing

        - event listeners - you pass a function that is called back when an event has occurred (e.g. mouse click)

        - asynchronous built-in methods/APIs - `setTimeout()`

    - Example:

      1. function `message()` is called, calling the `setTimeout()` function. `message()`, followed by `setTimeout()`, are pushed to the stack

      2. a (callback) function is passed to `setTimeout()` and is added/registered to the web API

      3. `setTimeout()`, followed by `message()`, are done executing and are then popped off the stack
  
      4. while the `setTimeout()` timer runs within the web API, function `boo()` is called, pushed to the stack, and executes, logging `"Boo!"`. `boo()` is then popped off the stack

      5. after the `setTimeout()` timer runs for 2s, the callback gets added to the *task queue*

      6. once the stack is empty, the *Event Loop* takes the task (callback function), pushing it onto the stack to be executed. The callback function is then executed, logging `"hello from callback"`

            ```JavaScript
            function message () {
                setTimeout(() => {
                    console.log("hello from callback!")
                }, 2000);
            }

            function boo() {
                console.log("Boo!");
            }

            message();
            boo();
            ```

            ![image29](/images/image29.png)

            :link: [Similar example here](https://towardsdev.com/event-loop-in-javascript-672c07618dc9#:~:text=First%0AThird%20%0ASecond-,We,-invoke%20bar.)

    :bulb: `setTimeout(callback, delay)` - the *delay* is the minimum time to execution, not the guaranteed time. This is due to the event cycle (Task Queue and Event Loop)

    - Example - let's run `setTimeout()` four times, with a 1 second delay. The first `setTimeout()` function is pushed to the call stack, it's `timeout()` callback function is added to the web API, and after 1 second, it is added to the Task Queue. The second `setTimeout()`.., then the third.., and finally the fourth.. is added to the queue. Once the stack is empty, the Event Loop will push the first `timeout()` callback to the stack, pushing and executing `console.log('hi')`, and then are popped off the stack. The second `setTimeout()`.., then the third.., and finally the fourth...

        :bulb: again, we asked for a 1 second delay, but if we look at, let's say, the fourth `setTimeout()`, even after 1 second, it's still waiting (in the queue)

        ![image32](/images/image32.png)

        :link: [Reference](https://www.youtube.com/watch?v=8aGhZQkoFbQ&ab_channel=JSConf)

- **Promise functions**

    :bulb: **Promises** address the concern when sequencing callbacks (called **callback hell** when we nest callbacks). They're also useful for **error handling**

    - a `Promise` is an object that represents the eventual success (or failure) of an asynchronous operation and it's resulting value

    - instead of immediately returning the final value, this method returns a **Promise** to supply the value at some future point in time, based on the eventual success or failure of the async operation

    - Example - as a kid, your mom "promises" you that she will buy you a new phone. At this point in time, you don't 100% know if you will get a phone or not. Your mom will either keep the promise or not based on how she feels. Promises have 3 states:

        1. **pending** - initial state, neither fulfilled nor rejected; you don't know if you will get a phone

        2. settled:

            a. **fulfilled** - async operation succeeded, returning a (`resolve`) **value**; your mom buys you a phone; the promise is **resolved**

            b. **rejected** - async operation failed, returning an (`reject`) **error**/**reason**; your mom doesn't buy you a phone; the promise is **rejected**

    - Syntax - defined by the `Promise` constructor, where we pass a function (called the **executor**) that receives two functions as parameters (`resolve` and `reject`)

        ```JavaScript
        new Promise(function (resolve, reject){
            // async operation, accepting a callback
        });
        ```

    - once the Promise settles, we can (asynchronously) invoke the `then()` and `catch()` methods to take some further action:

        :bulb: these methods return a new Promise object that can be used for **promise chaining**

        :bulb: **promise chaining** - executing two or more async operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous operation (previously, this resulted in **callback hell**) (review the `sequentialStart` example)

        - `then()` - invoked when a Promise is fulfilled. It takes two callback functions as parameters, executing the first function if the Promise is fulfilled, returning a **value**, and executing the second function if the Promise is rejected, returning an **error**

            ```JavaScript
            .then(function(value){
                // handle fulfilled Promise
            }, function(error){
                // handle rejected Promise or error
            })
            ```

        - `catch()` - invoked when a Promise is either rejected or some error has occurred (error handler). It takes a callback function as a parameter, executing if the Promise is rejected or to handle errors

            ```JavaScript
            .catch(function(error){
                // handle rejected Promise or error
            })
            ```

        ![image33](/images/image33.png)

    - Example - the Promise settles once your mom eventually decides between:

        1. **fulfilling** her promise and **then** giving you a phone

        2. **rejecting** her promise, giving (**catch**) you a **reason** (error) why

        ```JavaScript
        const isMomHappy = (Math.random()<0.5?true:false);
        const phone = {
            brand: 'Pixel',
            color: 'green',
            version: '7'
        };

        const willIGetNewPhone = new Promise((resolve, reject) => {
                if (isMomHappy) {
                    resolve(phone);
                } else {
                    reject(reason);
                }

            }
        );

        willIGetNewPhone
            .then(value => console.log("I got a new phone!: " + value.brand))
            .catch(() => console.log(new Error('mom is unhappy')));
        ```

    - Example - use the `fetch()` method to retrieve data from a server (giphyAPI). The `fetch()` method returns a Promise. The `then()` method is chained to the `fetch()` call to handle a fulfilled response asynchronously. Inside the callback function passed to `then()`, the `json()` method is called to parse and return the response body as `JSON` (*into something we can actually use). This method also returns a Promise. Additional `then()` methods are chained, ultimately adding a gif to the `HTML` page.

        :bulb: the `Fetch API` is used to retrieve resources by running an HTTP request method - GET, POST, PUT, or DELETE

        ```JavaScript
        let searchValue = prompt("Enter a value:",);
        const giphyAPI = `https://api.giphy.com/v1/gifs/search?api_key=AMqOV3iIhSOAfJ2fz8scG8HEsl0SXSJ7&q=${searchValue}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
        const resultsEl = document.getElementById('results')
        let resultsHTML = '';

        let getRequest = fetch(giphyAPI);
        ```

        :bulb: `fetch()` GET request returns a fulfilled Promise:

        ![image41](/images/image41.png)

        ```JavaScript
        let getGif = function(num) {
        return getRequest
            .then(response => {
                return response.json();
            })
            .then(json => {
                return resultsHTML = `<img src="${json.data[num].images['fixed_height'].url}">`
            });
        }
        ```

        :bulb: `json()` method parses the `fetch()` response into `JSON`

        ![image42](/images/image42.png)

        ![image43](/images/image43.png)

        ```JavaScript
        getGif(0)
        .then(value => {resultsEl.innerHTML += value; return getGif(1)})
        .then(value => {resultsEl.innerHTML += value; return getGif(2)})
        .then(value => resultsEl.innerHTML += value)
        .catch(err => console.log("oops .. something went wrong :(" + err))
        ```

        :bulb: `catch()` will catch any error that takes place along the entire chain

    - `Promise.all()` - takes an array of promises that will return a single promise array of the results of those promises. The array returns only when all input promises fullfil

    - **Async** & **Await**:

        :bulb: `async`/`await` isn't adding any new functionality, it's just an easier way to write `Promises`. It's *syntactic sugar*

        :bulb: code after each `await` expression can be thought of as existing in a `then()` callback

### Arrays

https://www.youtube.com/playlist?list=PLRqwX-V7Uu6aAEUqu96Newc-7qpuh-cxc

:pushpin: review *arrays* [here](<6 - Arrays.md>)

- array higher order functions (array methods) allow us to manipulate an array all at once

- **iterative methods** - array methods that take a callback function as an argument

- Examples of iterative array methods:

1. `map()` - executes a function on every element of an array

    :bulb: `map()` returns a whole new array; it doesn't change the values in the original array

    - syntax: `map(callbackFn)`

    ```JavaScript
    let vals1 = [4, 6, 2, 8];

    vals1 = vals1.map(x => x*2); //returns [8,12,4,16]
    ```

2. `reduce()` - executes a (reducer) function on every element of an array, passing in the return value from the calculation of the preceding element. The array is reduced to a single accumulated value

    :bulb: reduce does not change the original array

    - syntax: `reduce(reducerCallbackFn, initialValue)`

        :bulb: `initialValue` is optional

    - `reducerCallbackFn` takes 2 arguments:

        A. `accumulator` - the value from the previous callback's call

        :bulb: the first accumulator value is `initialValue`. If we don't pass this argument, then this value is the first element in the array

        B. `currentValue` - the value of the current element

    ```JavaScript
    let vals2 = [6, 2, 3, 5];
    function sum (acc, val) {
        return acc + val;
    }
    let answer2 = vals2.reduce(sum, 10); //returns 26
    ```

3. `filter()` - executes a function on every element of an array, returning a `truthy` value, to keep the element, or a `falsy` value, to remove an element

    :bulb: `filter()` returns a whole new array

    - syntax: `filter(callbackFn)`

    ```JavaScript
    let vals3 = [8, 1, 4, 3];
    function isEven(x) {
        if (x % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
    vals3 = vals3.filter(isEven); //returns [8,4]
    ```

4. `sort()` - executes a function that determines the order of elements

    :bulb: `sort()` changes the original array

    - syntax: `sort(callbackFn)`

    - `callbackFn` takes 2 arguments:

        A. `a` - the first element for comparison

        B. `b` - the second element for comparison

        - a negative value indicates that `a` should come before `b`

        - a positive value indicates that `a` should come after `b`

    - if `callbackFn` is not provided, then elements will be sorted by converting them to strings and comparing those strings in UTF-16 code units order

    ```JavaScript
    let vals4 = [1, 9, 300, 7];
    vals4 = vals4.sort((a,b) => a-b); //returns [1,7,9,300]
    ```

5. `forEach()` - executes a function on every element of an array

    :bulb: unlike `map()`, `forEach()` always returns `undefined`

    - syntax: `forEach(callbackFn)`

    ```JavaScript
    let vals5 = [1, 4, 9, 2];
    vals5 = vals5.forEach(x => console.log(x*2)); //returns 2, 8, 18, 4
    ```