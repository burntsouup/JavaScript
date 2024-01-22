# BASICS

*refer to calculator app within the [Basics folder](/Basics/calculator/)

## Variables & Constants

- **Variable** - data container/storage where the value can change

  - declare using **let** keyword

    :warning: declare only once

    ```JavaScript
    let userName = "John";
    ```

- **Constant** - data container/storage where the value must not change

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

- **Numbers**: integers (1, -3), floats (7.1)

- **String**: text ("", '', or ``)

  - **string concatenation** - appending one string with another

  - **template literal** (``) - allows us to add variables within this scope using ${}

    ```JavaScript
    const result = 10;
    let desc = `The result is ${result}` ;
    ```

- **Booleans**: true, false

- **Objects**: 

- **Arrays**: 

- Convert data types:

    :warning: a user input will always out a string. What if we want this to be a number?

    - `parseInt()` or `+`(*in front of text*) - converts string to integer

    - `parseFloat()` - converts string to float

    - `toString()` - converts number to string

    - note - `+` operator defaults to string concatenation:

      ```JavaScript
        3 + "3"  // outputs "33"
      ```

      :warning: `-` operator does not support this; outputs `NaN`

    - note:

      ```JavaScript
        3 * "3"  // outputs 9
      ```

      ```JavaScript
        3 - "3"  // outputs 0
      ```

      ```JavaScript
        3 / "3"  // outputs 1
      ```

## Functions

- code-on-demand; define isolated code that can be executed at a late point in time ("called")

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

- JS executes our code from top to bottom. However, for functions, they can be *called* even if they've been defined at the end of our code

- *call* functions as many times as required

- every function execution is independent from other executions

- there are built-in functions, such as *alert*, that can be called any time

- **return** - keyword that ends the function execution and specifies a value to be returned to the function caller

  - :warning: code defined after the *return* statement is NOT executed

- **global** vs **local** (block) **scope**
  
    - variables defined outside of our functions are defined at the *global* scope

    - variables defined within the function body (*local* scope) are ONLY available within the function itself

    - **shadow variables** - can we define the SAME named variable globally and then locally

- **indirect** function execution

    - we don't want the JS Engine to execute a function right away; call the function without any parameters and `()`

    - example - only execute the *add* function when the button is clicked

      ```JavaScript
      addBtn.addEventListener('click', add);
      ```

## Additional Considerations

- Naming:

  - convention: *camelCase*

  - allowed: letters, numbers, starting with *$* or *_*

  - not allowed: starting with numbers, other special characters (e.g. *-*), JS keywords (e.g. *let*)

- Declaring:

  - declare variables/constants before you use them

    ```JavaScript
    let currentResult;
    ```

- Initializing:

    ```JavaScript
    let currentResult = 20;
    ```

