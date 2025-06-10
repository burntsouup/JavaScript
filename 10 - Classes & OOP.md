https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr

# Classes & OOP

:pushpin: refer to the code from within the [Classes and OOP](<Classes and OOP>)folder

- **Object-Oriented Programming** (OOP) is a programming paradigm that structures software design around *objects* - entities that encapsulate both data (*properties*) and behaviors (*methods*).  This approach:

    - models real-world entities

    - organizes code using **encapsulation** (bundling data and methods together in one unit - called a *class*) and **abstraction** (hiding complex details and exposing only what’s necessary)

    - makes code reusable using **inheritance** (one *class* can inherit properties/methods from another)

    - builds flexible systems using **polymorphism** (different objects can respond differently to the same method)

- Class

    - a **class** is like a blueprint for creating *objects*. It defines what an object will have (*properties*) and what the object can do (*methods*)

    ```JavaScript
    class Car { // defines a blueprint
        constructor(make, model) {
            this.make = make; // a property of this class
            this.model = model; // a property of this class
        }

        start() { // a method of this class
            console.log(`${this.make} ${this.model} is starting.`);
        }
    }

    const myCar = new Car("Toyota", "Corolla");  // myCar is an object creating using the Car class
    myCar.start(); // Toyota Corolla is starting.
    ```

    - **`constructor()`** - a special *method* inside a *class* that runs automatically when you create a new object using this *class*.  It initializes the object, setting up properties it would start with.

    ```JavaScript
    class Dog {
        constructor(name, breed) { // takes these arguments when creating a new dog object
            this.name = name; // stores the arguments inside the object, as a property
            this.breed = breed;
        }

        describe() { // a method
            console.log(`${this.name} is a ${this.breed}`);
        }
    }

    const dog1 = new Dog("Buddy", "Golden Retriever");
    const dog2 = new Dog("Luna", "Poodle");

    dog1.describe(); // Buddy is a Golden Retriever
    dog2.describe(); // Luna is a Poodle
    ```

    :bulb: `this` refers to the object being created from the class, so `this.name = name` is like saying, "set the new dog's name to whatever was passed."
