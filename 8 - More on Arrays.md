# Arrays

:pushpin: refer to the code from within the [More on Arrays](/More%20on%20Arrays/) folder

- **iterable** - objects that can be looped over using constructs like `for..of`, spread syntax (`...`), or `Array.from()`

    - Examples: strings (`"hello"`), arrays (`[1, 2, 3]`), `Map()`, `Set()`

        ```JavaScript
        const str = "hello";
        for (const char of str) {
            console.log(char);
            // h
            // e
            // l
            // l
            // o
        }
        ```

- **array-like objects** - objects that look like arrays but do not have array methods (`.map()`, `.filter()`, or `.forEach()`), has indexed elements, and has a `.length` property

    - Example: `NodeList`

    ```JavaScript
    const itemList = document.querySelectorAll("li");
    console.log(itemList.length); // Works ✅
    console.log(itemList[0]); // Works ✅
    console.log(itemList.map); // Undefined ❌
    ```

    - Example: custom object with indexed properties

    ```JavaScript
    const arrayLike = { 0: "apple", 1: "banana", length: 2 };
    console.log(arrayLike.length); // 2 ✅
    console.log(arrayLike[0]); // "apple" ✅
    console.log(arrayLike.map); // undefined ❌
    ```

- **Arrays**

    - Creating an array:

        ```JavaScript
        // 1.
        const fruits = ["apple", "banana", "cherry"];
        ```

        :bulb: this is the preferred approach

        ```JavaScript
        // 2.
        const moreFruits = new Array("orange", "melon", "tangerine");
        ```

        :bulb: constructors are covered in a future section found [here]()

        ```JavaScript
        // 3.
        const evenMoreFruits = new Array("orange", "melon", "tangerine");
        ```

        ```JavaScript
        // 4.
        const itemList = document.querySelectorAll("li");
        const itemListArray = Array.from(itemList);
        ```

        :bulb: `Array.from()` creates an array from an iterable or array-like object

        ![image49](/images/image49.png)

    - What can you store in an array?

        - primitive data types

            ```JavaScript
            const numbers = [1, 2, 3, 4, 5]; // numbers
            const names = ["Alice", "Bob", "Charlie"]; // strings
            const flags = [true, false, true]; // booleans
            ```

        - mixed data types

            ```JavaScript
            const mixed = [42, "hello", true, null, undefined];
            ```

        - objects

            ```JavaScript
            const users = [
                { name: "Alice", age: 25 },
                { name: "Bob", age: 30 }
            ];
            ```

        - arrays (nested arrays; multidimensional arrays)

            ```JavaScript
            const matrix = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ];
            ```

    - Methods to add/remove to an array

        - `push()` - add to the end

            ```JavaScript
            const hobbies = ["reading", "cooking"];
            hobbies.push("coding"); // ["reading", "cooking", "coding"]
            ```

            :bulb: most common

        - `pop()` - removes the last element

            ```JavaScript
            hobbies.pop(); // ["reading", "cooking"]
            ```

            :bulb: `pop()` returns the removed element

        - `unshift()` - add to the beginning

            ```JavaScript
            hobbies.unshift("running"); // ["running", "reading", "cooking"]
            ```

        - `shift()` - removes the first element

            ```JavaScript
            hobbies.shift(); // ["reading", "cooking"]
            ```

        - add element at a specific index

            ```JavaScript
            hobbies[2] = "swimming"; // ["reading", "cooking", "swimming"]
            ```

            :bulb: could replace existing element. To insert an element between elements, use `splice()`

        - `splice()` - insert element(s) at a specific index

            ```JavaScript
            // array.splice(index, deleteCount, item1, item2, ...);

            // add 2 elements at the beginning
            hobbies.splice(0, 0, "biking", "hiking"); // ["biking", "hiking", "reading", "cooking", "swimming"]

            // delete 2 elements starting from the first element
            hobbies.splice(0, 2); // ["reading", "cooking", "swimming"]
            ```

            :bulb: `splice()` returns the removed element(s) as a net new array

    - Other methods:

        - `slice()` - extracts a portion of an array

            ```JavaScript
            // array.slice(startIndex, endIndex);
            someHobbies = hobbies.slice(0,2);
            console.log(hobbies); // ["reading", "cooking", "swimming"]
            console.log(someHobbies); // ["reading", "cooking"]
            ```

            :bulb: returns a net new array

            :bulb: the endIndex is omitted from the newly created array

            :bulb: if we modify the hobbies array, it will not impact the new someHobbies array. They each point to different values in memory (heap)

        - `concat()` - merge arrays

            ```JavaScript
            // array1.concat(array2);
            const chores1 = ["dishes", "laundry"];
            const chores2 = ["vacuum", "dust"];
            const allChores = chores1.concat(chores2); // ["dishes", "laundry", "vacuum", "dust"]
            ```

            :bulb: returns a net new array

            :bulb: doesn't modify the existing arrays











https://www.youtube.com/playlist?list=PLRqwX-V7Uu6aAEUqu96Newc-7qpuh-cxc

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