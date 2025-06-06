# Objects

:pushpin: refer to the code from within the [More on Objects](/More%20on%20Objects/) folder

- What is an **object**?

    - a collection of **properties**, or key: value pairs, where the keys are strings and the values can be of any data type (e.g. objects, functions, arrays, etc.). They allow you to group related data and behavior together

    - Objects allow you to model real-world entities and structure your code in an organized and reuseable way

        ```JavaScript
        const car = {
            brand: "Subaru",
            model: "Crosstrek",
            year: 2019
        };
        console.log(car.brand); // Subaru
        console.log(car.year); // 2019
        ```

        :bulb: access **properties** using **dot notation** (`object.property`)

    - **Method** - a function stored as a *property* in an *object*. Methods define behavior or actions that the object can perform

        ```JavaScript
        const car = {
            // . . . 
            start: () => "engine started!",
        };
        console.log(car.start()); // engine started!
        ```

    - Recall, in JS, there are 2 data types - Primitive and Reference.  Objects are **Reference** values meaning that the data is stored in memory (*heap*) and accessed by reference (memory address)

        :bulb: when you assign an object to a variable, the variable holds a reference (memory address) to the object, not the actual value

        ```JavaScript
        let obj1 = { name: "Cassy" };
        let obj2 = obj1; // both variables reference the same object in memory
        console.log(obj1.name); // "Cassy"
        console.log(obj2.name); // "Cassy"

        obj2.name = "Kyle"; // modifies the original object value

        console.log(obj1.name); // "Kyle" (changed)
        console.log(obj2.name); // "Kyle" (same reference)
        ```

- Adding, modifying, and deleting properties

    - **Dot notation** - a way to access or modify a property of an object

        - Syntax: `object.propertyName`

        ```JavaScript
        let person1 = {
            name: "John",
            age: 28,
            hobbies: ["reading", "gaming"],
            greet: () => { `Hello, my name is ${person1.name} and I am ${person1.age} years old.`; }
        };

        person1.job = "developer"; // adding a new property
        person1.job = "sales"; // modifying a property
        delete person1.age; // delete a property
        ```

        :bulb: if you try to access a deleted property, it returns `undefined`

    - **Bracket notation** - another way to access or modify a property of an object

        - Syntax: `object["propertyName"]`

            :bulb: use bracket notation over dot notation when the key has spaces or special characters, when the key is stored in a variable, or when you're dynamically generating or looping through keys

        ```JavaScript
        let person2 = {
            name: "Emma",
            age: 35,
            hobbies: ["bowling", "soccer"],
            greet: () => { `Hello, my name is ${person2.name} and I am ${person2.age} years old.`; },
            job: "nurse",
            "favourite colour": "blue"
        };
        person2["job"]; // "nurse"
        person2["favourite colour"]; // "blue"

        const person2Age = "age";
        person2[person2Age]; // "35"
        ```

- Other

    - **spread operator** (`...`) - unpack (or "spread") elements of an iterable (array, object, etc.)

        ```JavaScript
        // what we learned previously:
        const user1 = { name: "Alice", age: 30 };
        const user2  = user1;  // both constants reference the same object stored in memory
        user1.age = 32; 
        user1.age;  // 32
        user2.age;  // 32
        
        // copying objects:
        user3 = { name: "John", age: 40 };
        user4 = { ...user3 };  // creates shadow copy
        user3.age = 42;
        user3.age; // 42
        user4.age; // 40
        ```

        ```JavaScript
        // merging objects:
        const settings = { Tier: "Standard_LRS", Region: "eastus" };
        const custom = { Region: "canadacentral" };
        const newSettings = { ...settings, ...custom };  // { Tier: "Standard_LRS", Region: "canadacentral" }
        ```

        ```JavaScript
        // adding properties
        user5 = { name: "Emma", age: 30 };
        user6 = { ...user5, hobbies: ["reading", "climbing"] };
        ```

        :bulb: the spread operator only performs a **shadow copy**.  If your object or array has nested objects/arrays, the inner references are shared

        ```JavaScript
        // shadow copy example
        const u1 = { name: "Alice", age: 30, hobbies: ["swimming", "reading"]};
        const u2 = { ...u1 }; // creates shadow copy

        u1.age = 35;
        u1.age;  // 35
        u2.age;  // 30  // since it's a copy

        u1.hobbies.push("coding");
        u1.hobbies;  // ["swimming", "reading", "coding"]
        u2.hobbies;  // ["swimming", "reading", "coding"]  // outputs the same as user1's hobbies since only the hobbies reference was copied

        u3 = { ...user1, hobbies: [...user1.hobbies] };  // this will create a new array for user3
        u3.hobbies.push("chess");
        u3.hobbies;  // ["swimming", "reading", "coding", "chess"]
        u1.hobbies;  // ["swimming", "reading", "coding"]
        ```

    - **destructuring** - unpack values from an object into distinct variables

        ```JavaScript
        const employee = {
            name: "Alice",
            age: 30,
            job: "Engineer"
        };

        // destructuring
        const { name, age } = employee;

        console.log(name); // "Alice"
        console.log(age);  // 30
        ```

        ```JavaScript
        // renaming variables:

        const { name: fullName } = employee;

        console.log(fullName); // "Alice"
        ```

        ```JavaScript
        // default values:

        const { hireDate = 2020 } = employee;

        console.log(hireDate); // 2020
        ```

- `this` keyword

    - refers to the object that is executing the current function

        :bulb: think of it as "what object is this function a property of, or being called on?"

        :bulb: the "object" in question is dynamic and can change depending on how the function is being invoked

    - Considerations:

        1. **Global scope** - `this` refers to the global object (`window` object in the browser and `global` object in Node.js)

            ```JavaScript
            console.log(this); // in browser: Window object
            ```

        2. **Regular function** - `this` refers to the object that called the function

            :bulb: this will typically be the global object, since the GEC is executing the function

            ```JavaScript
            function showThis() {
                console.log(this);
            }
            showThis(); // Window object
            ```

        3. **Object method** - `this` refers to the object that owns the method

            ```JavaScript
            const food = {
                fruit: "apple",
                candy: function jellybean() {
                    console.log(this);
                }
            }
            food.candy(); // food object
            ```

            :bulb: **arrow functions** do not bind their own `this`. Instead, they inherit `this` from their surrounding scope (lexical scope).

        4. **Constructor function** - when a function is called with the `new` keyword, `this` refers to the newly created object instance

            :bulb: constructor functions covered in a later section

            ```JavaScript
            function Dog(name, breed) {
                this.name = name;
                this.breed = breed;
            }

            const dog1 = new Dog("Fido", "Labrador");
            console.log(dog1.name); // "Fido"
            console.log(dog1.breed); // "Labrador"
            // visually, this is what we just did:
            // const dog1 = {
            //   name: "Fido",
            //   breed: "Labrador"
            // };
            ```

        5. **`call()`, `apply()`, `bind()`** - methods that explicitly set what `this` should be

            ```JavaScript
            // analogy: 
                // function: A script that says: "Hi, I'm this.name"
                // decide how the script is read:
                    // call() = Alice reads the script now
                    // apply() = Alice reads the script now, and you give her a list of lines
                    // bind() = Give the script to Alice to read later
            function introduce(greeting) {
                console.log(`${greeting}, I'm ${this.name}`);
            }
            const alice = { name: "Alice" };
            const bob = { name: "Bob" };

            // call(): "call this now, with this person"
            introduce.call(alice, "Hi"); // Hi, I'm Alice
            introduce.call(bob, "Hello"); // Hello, I'm Bob
            // first argument is the value for `this`
            // remaining arguments are function parameters

            // apply(): like call(), but pass arguments as an array
            introduce.apply(alice, ["Hi"]); // Hi, I'm Alice

            // bind(): "bind this person, but don’t call yet"
            const introduceAlice = introduce.bind(alice);
            introduceAlice("Yo"); // Yo, I'm Alice
            // doesn’t run the function
            // returns a new function where this is locked in
            // you can call it later
            ```