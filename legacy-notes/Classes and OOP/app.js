// Example 1 --------------------

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        console.log(`${this.make} ${this.model} is starting.`);
    }
}

const myCar = new Car("Toyota", "Corolla");
// myCar.start();

// Example 2 --------------------

class Dogg {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    describe() {
        console.log(`${this.name} is a ${this.breed}`);
    }
}

const dog1 = new Dogg("Buddy", "Golden Retriever");
// console.log(dog1);

// dog1.describe();

// Example 3a --------------------

class BankAccount1 {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }
}

const account1 = new BankAccount1("Alice", 100);
account1.deposit(50);
// console.log(account1.balance);

account1.balance = -1000;
// console.log(account1.balance);

// Example 3b --------------------

class BankAccount2 {
    #balance = 0;

    constructor(owner, initialBalance) {
        this.owner = owner;
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account2 = new BankAccount2("John", 100);
account2.deposit(50);
// console.log(account2.#balance);
// console.log(account2.getBalance());

// Example 4a --------------------

class Person1 {
  constructor(name) {
    this.name = name;
  }
}

const person1 = new Person1("Lisa");

// console.log(person1.name);
person1.name = "John";
// console.log(person1.name);

// Example 4b --------------------

class Person2 {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.log("Name must not be empty.");
    }
  }
}

const person2 = new Person2("Carl");

// console.log(person2.name);
person2.name = "Bob";
// console.log(person2.name);

// person2.name = "";

// Example 5a --------------------

class Animal1 {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog1 extends Animal1 {
    bark() {
        console.log(`${this.name} barks: Woof!`);
    }
}

const myDog1 = new Dog1("Oakley");

// myDog1.bark();
// myDog1.speak();

// Example 5b --------------------

class Animal2 {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog2 extends Animal2 {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    super.speak();
    console.log(`${this.name} also barks.`);
  }
}

const myDog2 = new Dog2("Fido", "Labrador");
// myDog2.speak();

// Example 5c --------------------

class Animal3 {
  eat() { console.log("eating"); }
}

class Mammal extends Animal3 {
  sleep() { console.log("sleeping"); }
}

class Dog3 extends Mammal {
  bark() { console.log("barking"); }
}

const myDog3 = new Dog3();
// myDog3.eat();
// myDog3.sleep();
// myDog3.bark();

// Example 6 --------------------

class Vehicle {
  speak() {
    console.log("The vehicle makes a sound.");
  }
}

class Subaru extends Vehicle {
  speak() {
    console.log("The Subaru goes vroom.");
  }
}

class Lexus extends Vehicle {
  speak() {
    console.log("The Lexus goes whoosh.");
  }
}

const vehicles = [new Subaru(), new Lexus()];

// vehicles.forEach(vehicle => {
//   vehicle.speak();
// });





