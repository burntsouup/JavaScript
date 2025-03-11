# Arrays

:pushpin: refer to the code from within the [More on Arrays](/More%20on%20Arrays/) folder

- **iterable** - objects that can be looped over (or iterated through) one item at a time. Think of a playlist where you play songs one by one. More technically, these are objects that can be looped over using constructs like `for..of`, the spread operator (`...`), or the `Array.from()` method

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

- Methods to manage arrays

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

    - `indexOf()` - finds the position (index) of the **first** occurrence in an array

        - `lastIndexOf()` - finds the position (index) of the **last** occurrence in an array

        ```JavaScript
        // array.indexOf(searchElement, fromIndex);

        const numbers = [10, 20, 30, 40, 20];
        console.log(numbers.indexOf(20)); // 1
        console.log(numbers.indexOf(20, 2)); // 4
        ```

        :bulb: if the array has multiple values (e.g. "20"), then `indexOf()` will only return the first occurrence

        ```JavaScript
        // array.lastIndexOf(searchElement, fromIndex);

        console.log(numbers.lastIndexOf(20)); // 4
        ```

        :bulb: `lastIndexOf()` search starts from the end of the array and moves towards the beginning

        :bulb: `indexOf()` and `lastIndexOf()` return `-1` if no element is found

        :bulb: `indexOf()` and `lastIndexOf()` return `-1` if working with objects stored in an array

    - `find()` - searches an array based on a condition and returns the first matching element

        ```JavaScript
        // array.find(callback(element, index, array));

        const users = [
            { name: "Alice", age: 25 },
            { name: "Bob", age: 30 },
            { name: "Charlie", age: 35 }
        ];
        const user = users.find(user => user.age > 27); // { name: "Bob", age: 30 }
        ```

        :bulb: `callback` - function that tests each element

        :bulb: returns `undefined` if no match is found

    - `findIndex()` - searches an array based on a condition and returns the index of the first matching element

        ```JavaScript
        // array.findIndex(callback(element, index, array));

        const nums = [10, 20, 30, 40, 50];
        const index = nums.findIndex(num => num > 25); // 2
        ```

        :bulb: returns `undefined` if no match is found

    - `map()` - executes a function on every element of an array

        ```JavaScript
        // array.map(callback(element, index, array));

        const values = [4, 6, 2, 8];
        const valuesDoubled = values.map(x => x*2); // [8,12,4,16]
        ```

        :bulb: returns a net new array. It doesn't change the values of the existing array

    - `forEach()` - executes a function on every element of an array

        ```JavaScript
        // array.forEach(callback(element, index, array));

        const digits = [1, 4, 9, 2];
        const digitsDoubled = digits.forEach(x => console.log(x*2)); 
        // 2
        // 8
        // 18
        // 4
        ```

        :bulb: does not return a new array

    - `filter()` - executes a function on every element of an array, returning a `truthy` value, to keep the element, or a `falsy` value, to remove an element

        ```JavaScript
        // // array.filter(callback(element, index, array));

        const points = [8, 1, 4, 3];
        const evenPoints = points.filter(x => x%2===0); // [8,4]
        ```

        :bulb: returns a net new array

    - `sort()` - sorts the elements of an array

        - `callback` takes 2 arguments: `a` (first element for comparison) and `b` (second element for comparison). A negative value indicates that `a` should come before `b`. A positive value indicates that `a` should come after `b`

            :bulb: if `callback` is not provided, then elements are converted to strings and sorted in ascending ASCII order

        ```JavaScript
        // array.sort(callback);
        
        const fruitBowl = ["banana", "apple", "cherry"];
        fruitBowl.sort(); // ["apple", "banana", "cherry"]

        const food = ["ham", "turkey", "sandwich", "pie", "candy", "cookie"];
        food.sort((a,b) => a.length - b.length); // ['ham', 'pie', 'candy', 'turkey', 'cookie', 'sandwich']
        ```

        :bulb: returns the sorted original array, not a net new array

    - `reduce()` - reduces an array to a single value by applying a function cumulatively to each element

        ```JavaScript
        // array.reduce(callback(accumulator, element), initialValue);

        const scores = [6, 2, 3, 5];
        const result = scores.reduce((acc, val) => acc + val, 10); // 26 (10+6+2+3+5)
        ```

        :bulb: `accumulator` - the value from the previous callback's call. The first accumulator value is `initialValue`. If we don't pass this argument, then this value is the first element in the array

        :bulb: does not change the original array

- Methods to convert a string to an array

    - `split()` - splits a string into an array

        ```JavaScript
        // string.split(separator, limit);

        const text = "Hello world, welcome!";
        //split by words:
        const words = text.split(" "); // ["Hello", "world,", "welcome"]

        //split by comma:
        const csv = "apple,sandwich,chocolate";
        const lunch = csv.split(","); // ['apple', 'sandwich', 'chocolate']
        ```

        :bulb: `separator` - delimiter that determines where to split the string. `limit` (optional) - limits the number of splits

    - `join()` - splits an array into a string

        ```JavaScript
        // array.join(separator);

        const wordArray = ["JavaScript", "is", "awesome"];
        const sentence = wordArray.join(" "); // "JavaScript is awesome"
        ```

        :bulb: `separator` (optional) - string to separate each element

- Other

    - **spread operator** (`...`) - expands elements of an iterable (array, object, or string). Think of it as "unpacking" an iterable into individual elements

        ```JavaScript
        const list = [1, 2, 3];
        const newList = [...list, 4, 5]; // [1, 2, 3, 4, 5]
        ```

        :bulb: copying to create a net new array:

        ```JavaScript
        const original = [10, 20, 30];
        const copy1 = original;
        console.log(original === copy1); // true (both point to same array)

        const copy2 = [...original];       
        console.log(original === copy2); // false (there are now 2 different arrays)
        ```

        :bulb: merging arrays:

        ```JavaScript
        const arr1 = [1, 2];
        const arr2 = [3, 4];
        const merged = [...arr1, ...arr2]; // [1, 2, 3, 4]
        ```

        :bulb: expanding a string into an array:

        ```JavaScript
        const word = "hello";
        const letters = [...word]; // ["h", "e", "l", "l", "o"]
        ```

- **Destructuring** an array

    - a quick way to extract values from an array and assign them to variables in a single line

        ```JavaScript
        const [var1, var2] = array;
        ```

        :bulb: the first variable (var1) gets the first element, the second variable (var2) gets the second element, etc.

        ```JavaScript
        const numList = [10, 20, 30];
        const [a, b, c] = numList;
        console.log(a); // 10
        console.log(b); // 20
        console.log(c); // 30

        // alternative method:
        const a = numbers[0]; // 10
        const b = numbers[1]; // 20
        const c = numbers[2]; // 30
        ```