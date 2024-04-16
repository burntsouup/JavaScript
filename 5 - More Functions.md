# Functions

:pushpin: review *function* basics [here](/2%20-%20Basics.md)

:pushpin: refer to the app within the [Functions folder](/Functions/rockpaperscissors/)

- **Method** - an *object* *property* containing a function

    :bulb: recall, objects are defined with *properties* as key:value pairs

    - access an object method using the **dot-notation**:

        `objectName.methodName()`

    ```JavaScript
    const person = {
        firstName: "Cassy",  //property:value
        lastName: "Smith",
        fullName: function name() {  //method
            return this.firstName + " " + this.lastName;
        }
    };

    person.fullName();  // outputs "Cassy Smith"
    ```

    :pushpin: `this` explained in more detail [here](/8%20-%20Objects.md)

    :bulb: typically, Primitive values, such as strings, cannot have methods or properties because they are not objects.  However, methods and properties are available to strings because JS treats strings as objects when executing methods and properties

    - Examples of string methods: `toString()`, `toUpperCase()`, `length`, `indexOf()`, `replace()`, `slice()`, `split()`, `trim()`, `concat()`, etc.

        :pushpin: more examples [here](https://www.w3schools.com/jsref/jsref_obj_string.asp#:~:text=String%20Properties%20and%20Methods,when%20executing%20methods%20and%20properties.)

- Functions are objects

    :bulb: the difference between a function and a typical object is the fact that functions can be *called*

    - just like objects, functions have *properties* and *methods*

        ![image31](/images/image31.png)

- Storing functions in variables

    :bulb: the variable declaration is stored within the GEC, but the function declaration is not. This means that I can't directly call the function. Also, since we're working variables, we can't access the variable before it's been initialized

    :bulb: the function is being used as an **expression**, not a declaration/statement

    Example:

    ```JavaScript
    let start = function startGame() {
        console.log("Let's start!");
    };
    start(); // outputs "Let's start!"
    ```

    :bulb: we should omit the function name (called an **anonymous function**) since we can't call it by it's name. Instead, we can call the function by the variable name

    ```JavaScript
    let start = function() {
        console.log("Let's start!");
    };
    start(); // outputs "Let's start!"
    ```

    ```JavaScript
    // outputs an error. We can't access a variable before initialization
    start();
    let start = function() {
        console.log("Let's start!");
    };
    ```

- **Anonymous** and **Arrow** functions

    - **Anonymous** functions - a function without a name

        :bulb: anonymous functions aren't added to the GEC so we can't call them. By assigning a variable to an anonymous function, we can then call that function using the variable name

        ```JavaScript
        let add = function (a, b) {
            return a + b;
        };
        ```

        :bulb: if you want a function to execute immediately, then you must declare the function within `()` (this creates an expression)

        ```JavaScript
        (function() {
            console.log("I want to write to the console..");
        })
        ```

    - **Arrow** functions - a shorthand way of declaring anonymous functions

        - Syntax 1: `(param1, paramN) => expression`

        - Syntax 2: `() => expression`

            :bulb: if you don't require parameters, you must include `()`

        - Syntax 3: `param => expression`

             :bulb: If you have only 1 parameter, you can remove the `()`

        :bulb: if we're working with an `expression`, then we remove the `return` keyword and `{}`. However, if we're working without an expression (statement), then we must include `return` and `{}`

        ```JavaScript
        let add = (a, b) => a + b;  
        ```

        ```JavaScript
        let (a, b) => {
            const num1 = 42;
            return a + b + num1;
        };  
        ```

- **Default parameters**

    - if no argument is passed when calling a function, then the function parameter defaults to `undefined`. Therefore, we can set a default parameter value in such cases

    - Syntax:

        ```JavaScript
        function functionName(param1 = defaultValue1, paramN = defaultValueN) {
            // code
        }
        ```

    ```JavaScript
    function answer(a, b) {
        return a + b;
    }
    add(1, 2); // outputs 3
    add(4); // outputs undefined
    ```

    ```JavaScript
    function add(a, b = 1) {
        return a + b;
    }
    add(1, 2); // outputs 3
    add(4); // outputs 5
    ```

    :bulb: if you pass `undefined` as a parameter, but there's a default parameter, the default parameter will take precedence. If you pass a falsy value (`null`, `0`, `""`), then the default parameter would not take precedence

    :bulb: earlier parameters are available to later default parameters

    ```JavaScript
    function greet(name, greeting, message = `${greeting} ${name}`) {
        return [name, greeting, message];
    }

    greet("David", "Hi"); // outputs ['David', 'Hi', 'Hi David']
    ```

- **Rest parameter**

    - allows a function to be called with any number of arguments, as an array

    - Syntax:

        ```JavaScript
        function functionName(...parameters) {
            // code
        }
        ```

        :bulb: a function definition can only have one rest parameter, and it must be the last parameter in the definition

    :bulb: if an argument isn't passed to the rest parameter, then an empty array outputs

    ```JavaScript
    function num(a, b, ...inputs) {
        console.log("a: ", a);
        console.log("b: ", b);
        console.log("more inputs: ", inputs);
    }

    num("one", "two", "three", "four", "five", "six"); // outputs a: 'one'   b: 'two'   more inputs: ['three', 'four', 'five', 'six']

    num("one"); // outputs a: 'one'   b: undefined  more inputs: []
    ```