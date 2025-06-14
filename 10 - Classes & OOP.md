https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr

# Classes & OOP

:pushpin: refer to the code from within the [Classes and OOP](<Classes and OOP>)folder

- **Object-Oriented Programming** (OOP) is a programming paradigm that structures software design around *objects* - entities that encapsulate both data (*properties*) and behaviors (*methods*).  This approach:

    - models real-world entities

    - organizes code using **encapsulation** (bundling data and functions together in one unit - called a *class*) and **abstraction** (hiding complex details and exposing only what’s necessary)

    - makes code reusable using **inheritance** (one *class* can inherit properties/methods from another)

    - builds flexible systems using **polymorphism** (different objects can respond differently to the same method)

- Classes

    - a **class** is like a template for creating *objects*. It defines what an object will have (*properties*) and what the object can do (*methods*)

        :bulb: this is known as **encapsulation**; bundling data and methods together in a single unit

        ```JavaScript
        class Car { // defines a template for creating objects
            constructor(make, model) { // a special method that runs, defining the object's properties
                this.make = make;
                this.model = model;
            }

            start() { // a method of this class
                console.log(`${this.make} ${this.model} is starting.`);
            }
        }

        const myCar = new Car("Toyota", "Corolla");  // myCar is an object created using the Car class
        myCar.start(); // Toyota Corolla is starting.
        ```

        :bulb: use the `new` keyword to *construct* a new object

    - **`constructor()`** - a special *method* inside a *class* that runs automatically when you create a new object using this *class*.  It initializes the object, setting up properties it would start with.

        :bulb: we can define our constructor function with parameters, which are then used to initialize object properties: `constructor(parameter1, parameter2)`

        ```JavaScript
        class Dog {
            constructor(name, breed) { // accepts these arguments when an object is created using this class
                this.name = name; // a property
                this.breed = breed; // another property
            }

            describe() { // a method
                console.log(`${this.name} is a ${this.breed}`);
            }
        }

        const dog1 = new Dog("Buddy", "Golden Retriever"); // pass arguments that will define this object's properties
        console.log(dog1); // Dog {name: 'Buddy', breed: 'Golden Retriever'}

        dog1.describe(); // Buddy is a Golden Retriever
        ```

        :bulb: `this` refers to the object created from the class, so `this.name = name` is like saying, "set the new dog's name to whatever value was passed" or "set this new object's *name* property to whatever value was passed"

    - **methods** - a function defined inside a class. They define what your objects can do.

        ```JavaScript
        class Dog {
        constructor(name, breed, age) {
            this.name = name;
            this.breed = breed;
            this.age = age;
        }

        speak() {
            console.log(`${this.name} says "woof!"`);
        }

        describe() {
            console.log(`${this.name} is a ${this.breed} and is ${this.age} years old.`);
        }
        }

        const dog1 = new Dog("Luna", "Husky", 3);
        dog1.speak(); // Luna says "woof!"
        dog1.describe(); // Luna is a Husky and is 3 years old.
        ```

    - **abstraction** - within a *class*, we can hide unnecessary internal details, only exposing what the user of the object needs to see.

        ```JavaScript
        // without abstraction
        class BankAccount {
            constructor(owner, balance) {
                this.owner = owner;
                this.balance = balance; // anyone can access or change this!
            }

            deposit(amount) {
                this.balance += amount;
            }
        }

        const account1 = new BankAccount("Alice", 100);
        account1.deposit(50);
        console.log(account1.balance); // 150

        account1.balance = -1000; // yikes!
        console.log(account1.balance); // -1000 (not good!)
        ```

        ```JavaScript
        // with abstraction
        class BankAccount {
            #balance = 0; // private!

            constructor(owner, initialBalance) {
                this.owner = owner;
                this.#balance = initialBalance;
            }

            deposit(amount) {
                if (amount > 0) this.#balance += amount;
            }

            getBalance() { // create a method to get the value of the balance
                return this.#balance;
            }
        }

        const account2 = new BankAccount("John", 100);
        account2.deposit(50);
        console.log(account2.#balance); // SyntaxError: Private field
        console.log(account2.getBalance()); // 150
        ```

        - **getters** & **setters** - special methods that allow internal data to be accessed or modified in a controlled way, while hiding the implementation details and protecting the object’s integrity.

            - **getter** - let's you access a property, but not directly

            - **setter** - let's you set or update a property, but with logic or validation

            ```JavaScript
            // without getters/setters:
            class Person1 {
            constructor(name) {
                this.name = name;
            }
            }

            const person1 = new Person1("Lisa");

            console.log(person1.name); // "Lisa"
            person1.name = "John";   // updates the name property directly
            console.log(person1.name); // "John"
            ```

            :bulb: there's no control over what values are assigned!

            ```JavaScript
            // with getters/setters:
            class Person2 {
            constructor(name) {
                this._name = name; // use "_" to indicate a private property
            }

            get name() { // getter method to access the private property
                return this._name;
            }

            set name(newName) { // setter method to update the private property
                // You can add validation logic here
                if (newName.length > 0) {
                this._name = newName;
                } else {
                console.log("Name must not be empty.");
                }
            }
            }

            const person2 = new Person2("Carl");

            console.log(person2._name); // "Carl" 

            console.log(person2.name); // calls the "get name()" method, returning "Carl"
            person2.name = "Bob";      // calls the "set name(newName)" method, updating _name
            console.log(person2.name); // "Bob"

            person2.name = "";         // blocked by the setter logic, returning "Name must not be empty."
            ```

            :bulb: why not just use methods (e.g. `person.getName()`, `person.setName("Bob")`)? You could, but getters/setters feel more natural to read/write and it keeps the syntax clean. It even looks like you're accessing a property (e.g. `person2.name`), but, in-fact, you're actually running a method!

            :bulb: `_name` does not make the property private, it's just a convention. It's a way of saying, "hey developers, don't touch this directly - treat it as internal." `person2._name` will still return a value. If you want true privacy, then use `#`

    - **inheritance**

        

    - **polymorphism**