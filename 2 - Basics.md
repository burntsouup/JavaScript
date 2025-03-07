# BASICS

:pushpin: refer to calculator app within the [Basics folder](/Basics/calculator/)

### Variables & Constants

- **Variable** - data container/storage where the value can change

  - declare using `let` keyword

    :bulb: declare only once

    ```JavaScript
    let userName = "John";
    ```

- **Constant** - data container/storage where the value must not change

    ```JavaScript
    const totalUsers = 15;
    ```

    :bulb: typically we capitalize global constants

### Operators

- allows us to manipulate values

- Types:

  - **Arithmetic**: `+` `-` `*` `/` `**` `%`

    - **Increment/Decrement** operators

      ```JavaScript
        currentResult = currentResult + 1;
        // is the same as:
        currentResult++;
      ```

      :bulb: not available for *multiplication* or *division*

  - **Assignment**: `=`

    - **Addition Assignment**:

      ```JavaScript
        currentResult = currentResult + enteredNumber;
        // is the same as:
        currentResult += enteredNumber;
      ```

      :bulb: also applies to: `-=` `*=` `/=` `%=` `**=`

  - [Comparison](/Control%20Structures.md): `==` `===` `!=` `!==` `>` `<` `>=` `<=` `?`

  - [Logical](/Control%20Structures.md): `&&` `||` `!`

  :link: [Operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)

### Data Types

- **Numbers** - *integers* (`1`, `-3`) or *floats* (`7.1`)

- **String** - text (`""`, `''`, or ``)

  - **string concatenation** - appending one string with another

  - **template literal** (``) - allows us to add variables within this scope using ${}

    :bulb: anything passed within `{}` will be converted to a *string*

    ```JavaScript
    const result = 10;
    let desc = `The result is ${result}` ;
    ```

- **Booleans** - `true` or `false`; used for conditional statements

- **Objects** - allows you to group and organize related data; key:value pairs

  ```JavaScript
  const user = {
    name: "Kyle",
    age: 30
  };
  ```

  - **dot-notation** - used to access *properties* (key: value) in an object

    ```JavaScript
    user.name;  //outputs "Kyle"
    ```

  :pushpin: objects explained in more detail [here](/9%20-%20More%20on%20Objects.md)

- **Arrays**: a list of data

  ```JavaScript
  [1, 3, 5]
  ```

  :pushpin: arrays explained in more detail [here](/8%20-%20More%20on%20Arrays.md)

- **undefined**, **null**, **NaN**

  - `undefined` - default value for uninitialized/declared variables (value that is not assigned to a variable), or when a function doesn't return a value, or when accessing an object property or array element that doesn't exist

    :bulb: it is also a **value**

    ```JavaScript
    let x;  //variable declared but not initialized
    console.log(x); //outputs undefined
    
    function doSomething() {
      //no return statement, so the function returns undefined
    }
    console.log(doSomething());  //outputs undefined
    
    let obj = {};
    console.log(obj.property);  //outputs undefined
    ```

  - `null` - represents the absence of any object value. Used to indicate that a variable or object property should have no value

    :bulb: it is also a **value**

    ```JavaScript
    let y = null;
    console.log(y);  //outputs null
    
    let obj = { property: null };
    console.log(obj.property);  //outputs null
    ```

    :bulb: `undefined` and `null` share the same value, but not the same data type

      ```JavaScript
      undefined == null;  //outputs true
      undefined === null;  //outputs false
      ```

- `typeof` - evaluates the data type

  ```JavaScript
  typeof "Kyle";  //outputs "string"
  typeof 1.1;  //outputs "number"
  typeof NaN;  //outputs "number"
  typeof true;  //outputs "boolean"
  typeof [1, 2, 3];  //outputs "object"
  typeof {name: "Kyle", age: 30};  //outputs "object"
  typeof undefined;  //outputs "undefined"
  typeof null;  //outputs "object"
  ```

- Convert data types:

    :bulb: a user input will always out a string. What if we want this to be a number?

    - `parseInt()` or `+`(*in front of text*) - converts string to integer

    - `parseFloat()` - converts string to float

    - `toString()` - converts number to string

      :bulb: `+` operator defaults to string concatenation:

      ```JavaScript
        3 + "3"  // outputs "33"
      ```

      :bulb: `-` operator does not support this; outputs `NaN`

      :bulb:

      ```JavaScript
        3 * "3"  // outputs 9
      ```

      ```JavaScript
        3 - "3"  // outputs 0
      ```

      ```JavaScript
        3 / "3"  // outputs 1
      ```

### Functions

- code-on-demand; define isolated code that can be executed at a late point in time

  - declare a function using the `function` keyword
  
    :bulb: when you want to use a function, you "call" it

  ```JavaScript
  function functionName(parameter1, parameter2, ...) {
    // body code
  }
  ```

    :bulb: **parameters** are variables you specify between `()`. **Arguments** are the values you pass when *calling* a function

  ```JavaScript
  function greetUser(name) {
    alert('hi ' + name);
  }
  ```

- JS executes our code from top to bottom. However, for functions, they can be *called* even if they've been defined at the end of our code

- *call* functions as many times as required

- every function execution is independent from other executions

- `return` - keyword that ends the function execution and specifies a value to be returned to the function caller

  :bulb: code defined after the `return` statement is NOT executed

- **global** vs **local** (block) **scope**
  
    - variables defined outside of our functions are defined at the *global* scope

    - variables defined within the function body (*local* scope) are ONLY available within the function itself

    - **shadow variables** - we can define the SAME named variable globally and then locally

- **indirect** function execution

    - we don't want the JS Engine to execute a function, right away, and we don't want it to return a value

    - we can achieve this by *calling* the function without any parameters and `()`

    - example - only execute the `add` function when the button is clicked

      ```JavaScript
      addBtn.addEventListener('click', add);
      ```

- there are *built-in* functions that can be called at any time. For example: `addEventListener`, `push`, `alert`, etc.

:pushpin: functions explained in more detail [here](<5 - More Functions.md>)

### Additional Considerations

- **Naming**

  - convention: *camelCase*

  - allowed: letters, numbers, starting with *$* or *_*

  - not allowed: starting with numbers, other special characters (e.g. *-*), JS keywords (e.g. *let*)

- **Declaring** - you must declare variables/constants and functions before you use them

    ```JavaScript
    let currentResult;
    ```
  
    ```JavaScript
    function something() {
      return 32;
    }
    ```

  :bulb: **sloppy mode** - even if you don't declare, JS will still run your code with no issue; JS is a forgiving language

  :bulb: you can only do this once

- **Initializing**

    ```JavaScript
    currentResult = 20;
    ```

- **Comments**

    ```JavaScript
    let currentResult // this is a comment
    ```

    ```JavaScript
    /*
      this is a comment
    */
    ```

- **Expressions vs Statements**:

  - **Expression** - code that produces a value

    Examples:

      - `1` produces `1`

      - `"John"` produces `"John"`

      - `2 * 3` produces `6`

      - `a > 10` produces `true` or `false`

      - `isHappy ? `:smile:` : `:worried: produces an emoji

  - **Statement** - the rigid structure that holds our program together. Statements have room for expressions

    Examples:

      - `let hi = /* some expression */`

      - an `if statement`

  :bulb: if you're unsure, use `console.log(/* code to test */)`.  If it runs, then the code is an expression, if it doesn't, then the code is a statement (or just invalid code)

- `NaN` (Not a Number) - a value that is not a valid number

  ```JavaScript
    console.log(parseInt("hi!"));  //outputs NaN
    console.log(Math.sqrt(-2));  //outputs NaN
    console.log("hi"/5);  //outputs NaN
  ```

- Importing scripts more efficiently using `defer` and `async`

  - JS is a **parser blocking resource**; parsing of HTML file is blocked or interrupted to fetch, download, and execute a `<script>` file

  a. Normal execution:

    - JS engine receives the data, loads it, starts parsing, pauses parsing to fetch, download, and execute a script, before continue parsing ...

      :bulb: this extends the time it takes for content to load

      :bulb: placing your `script` in the `<head>` will block parsing of the HTML file. This will increase the time it takes for the user to see content and will result in errors if the script needs to interact with the DOM

      ![image14](/images/image14.png)

      ![image18](/images/image18.png)
  
  b. `Defer` attribute

    - the script file is fetched and downloaded while the HTML file is still parsing.  The script file is executed once the HTML file has fully parsed  

      :bulb: this ensures that if your script needs to interact with the DOM, it will work as expected

      ![image15](/images/image15.png)

      ![image13](/images/image13.png)
  
  c. `Async` attribute

    - the script file is fetched and downloaded while the HTML file is still parsing. Once the script is downloaded, it executes immediately, potentially interrupting parsing of the HTML file

      :bulb: this make sense if your script file doesn't reply on the HTML code (e.g. DOM interactions)

      ![image16](/images/image16.png)

- **Strict mode** - enables a restricted variant of JS (disabling *sloppy mode*)

  - examples of what semantics change: eliminates silent errors by throwing an error, fixes mistakes to optimize JS, prohibits some syntax

  :bulb: you can enable strict mode to the entire script or to individual functions

  ```JavaScript
  userName = "George";  // even though we don't declare this variable, JS will still run our code
  ```

  ```JavaScript
  "use strict";
  userName = "George";  // JS will output an error message
  ```