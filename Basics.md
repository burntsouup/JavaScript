# BASICS

*refer to calculator app within the [Basics folder](/Basics/calculator/)

## Variables & Constants

- Variable - data container/storage where the value can change

  - declare using *let* keyword

    :warning: declare only once

    ```JavaScript
    let userName = "John";
    ```

- Constant - data container/storage where the value must not change

    ```JavaScript
    const totalUsers = 15;
    ```

    :warning: capitalize global constants

## Operators

- allows us to manipulate values

- Types:

  - Math: +, -, *, /, **, % (modulus; divide and yield remainder)

  - Assignment: =

  - 

## Data Types

- Numbers: integers (1, -3), floats (7.1)

- String: text ("", '', or ``)

  - string conatenation - appending one string with another

  - template literal (``) - allows us to add variables within this scope using ${}

    ```JavaScript
    const result = 10;
    let desc = `The result is ${result}` ;
    ```

- Booleans: true, false

- Objects: 

- Arrays: 

## Functions

- code-on-demand; define isolated code that can be executed at a late point in time ("called")

- JS executes our code from top to bottom. However, for functions, they can be *called* even if they've been defined at the end of our code

- *call* functions as many times as required

- every function execution is independent from other executions

- there are built-in functions, such as *alert*, that can be called any time

- *return* - keyword that ends the function execution and specifies a value to be returned to the function caller

  ```JavaScript
      function functionName(parameter1, parameter2, ...) {
        // body code
      }
  ```

  ```JavaScript
      function greetUser(name) {
        alert('hi ' + name);
      }
  ```

## Additional Considerations

- naming:

  - convention: *camelCase*

  - allowed: letters, numbers, starting with *$* or *_*

  - not allowed: starting with numbers, other special characters (e.g. *-*), JS keywords (e.g. *let*)

- declaring:

    ```JavaScript
    let currentResult;
    ```

- initializing:

    ```JavaScript
    let currentResult = 20;
    ```

