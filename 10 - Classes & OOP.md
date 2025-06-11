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

    - **inheritance**

    - **polymorphism**