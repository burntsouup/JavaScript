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

class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    describe() {
        console.log(`${this.name} is a ${this.breed}`);
    }
}

const dog1 = new Dog("Buddy", "Golden Retriever");
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







