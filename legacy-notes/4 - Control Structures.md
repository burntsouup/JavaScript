# Control Structures

:pushpin: refer to calculator app within the [Basics folder](/Basics/calculator/)

:pushpin: refer to Monster Killer app within the [Control Structures folder](/ControlStructures/monsterKiller/)

### Conditional Statements

- `if statement` - used to execute code based on a condition

    ```JavaScript
    if (condition) {
        // if condition is met (true), then this code is executed
    } else {
        // if condition is not met (false), then this code is executed
    }
    ```

- `if elseif statement` - specifies a new condition(s)

    ```JavaScript
    if (condition1) {
        // if condition1 is true, then this code is executed
    } else if (condition2) {
        // if condition1 is false but condition2 is true, then this code is executed
    } else {
        // if condition1 and condition2 are false, then this code is executed
    }
    ```

- `switch case statement`

    :bulb: an alternative to the `if elseif statement`

    ```JavaScript
    switch (expression) {
        case x:
            // execute this code statement if the expression equates (===) to this case value
            break;  // stops all execution within this switch block
        case y:
            // code block
            break;
        default:
            // execute this code if none of the cases are met
    }
    ```

- Conditions

    - based on **boolean** data types

    - **Comparison operators**:

        - `==` (**loose**) **equality** - checks whether two operands are equal, returning `true` or `false`. It converts and compares operands of different types

            :bulb: `=` is the assignment operator

            ```JavaScript
            // no type conversion
            console.log(2 == 2);  //returns true
            console.log("John" == "John");  //returns true

            // type conversions
            console.log(2 == "2");  //returns true; number to string
            console.log(false == 0);  //returns true; boolean to 0 (false) or 1 (true)
            console.log(null == undefined); //returns true
            ```

        - `!=` (**loose**) **inequality** - checks whether two operands are not equal, returning `true` or `false`

        - `===` **strict equality** - checks whether two operands are equal, returning `true` or `false`. Always considers operands of different types

            :bulb: we should use `===` over `==`; we should care about the data type

            ```JavaScript
            // same type
            console.log(1 === 1);  //returns true
            console.log("Emma" === "Emma");  //returns true

            // different types
            console.log(1 === "1");  //returns false
            console.log(true === 1);  //returns false
            console.log(null === undefined); //returns false
            ```

        - `!==` **strict inequality**

        - :bulb: **equality** for **objects** and **arrays**

            - Scenario 1 - comparing 2 objects/arrays that have the same values, using the `===/==` operator, would return a `false`

                :bulb: recall, both objects/arrays have different memory (heap) allocations

                ```JavaScript
                person1 = {name: "John"}
                person2 = {name: "John"}
                person1 === person2; //returns false
                ```

            - Scenario 2 - comparing 2 object/array values that are the same, using the `===/==` operator, would return a `true`

                ```JavaScript
                person1.name === person2.name; //returns true
                ```

        - `>`, `<` greater than, smaller than

        - `>=`, `<=` greater than and equal, smaller than and equal

    - **Logical operators**:

        - **AND** (`&&`) and **OR** (`||`) - combines conditions

            - AND example - `expr1 && expr2` returns `true` if both operands are true

            - OR example - `expr1 || expr2` returns `true` if either operand is true

            :bulb: AND and OR doesn't return a boolean value, instead, they are used to compare conditions that can return boolean values

            :bulb: if the OR operator is used for assignment:

            - if one operand is true/truthy and the other is false/falsy, then the true/truthy operand is returned

            - if both operands are true/truthy, then the left operand is returned

            - if both operands are false/falsy, then the right operand is returned

            - Examples:

                ```JavaScript
                const a1 = false || "car"; // returns car
                ```

                ```JavaScript
                const a2 = "bat" || "car"; // returns bat
                ```

                ```JavaScript
                const a3 = "" || 0; // returns 0
                ```

            :bulb: if the AND operator is used for assignment:

            - if one operand is true/truthy and the other is false/falsy, then the false/falsy operand is returned

            - if both operands are true/truthy, then the right operand is returned

            - if both operands are false/falsy, then the left operand is returned

            - Examples:

                ```JavaScript
                const a3 = "cat" && "dog"; // returns dog
                ```

                ```JavaScript
                const a4 = 0 && "car"; // returns 0
                ```

                ```JavaScript
                const a5 = "" && 0; // returns ""
                ```

        - **NOT** (`!`)

            - NOT example - `!expr1` returns `false` if the operand is true

    - **Truthy** and **Falsy** values

        - JS attempts to coerce (convert) a non-boolean value to a boolean value, if it is required

        - **truthy** - a value considered to be `true`

            - truthy values: `true`, any *number* (other than `0`), `"strings"`, `[]`, `{}`, *functions*

        - **falsy** - a value considered to be `false`

            - falsy values: `false`, `0`, `""` (empty string), `NaN`, `Null`, `undefined`

            :bulb: use the `!!` operator to convert a truthy/falsy value to a real boolean (true/false) value

            ```JavaScript
            const userInput = ""; // returns a falsy value
            const isValidInput = !!userInput; // returns false
            ```

- **Ternary (Conditional) Operator**

    - a concise alternative way to writing an `if statement`

        ```JavaScript
        condition ? expressionIfTrue : expressionIfFalse
        ```

        :bulb: great way of returning some value that could be stored in a variable or constant

### Loops

- run the same code multiple times

- types:

    - **for** - executes code for a certain number of times, based on a condition being true

        ```JavaScript
        for (initialization; condition; increment) {
            // code statement to execute if condition holds true
        }
        ```

        ```JavaScript
        for (let i=0; i<3; i++) {
            console.log(i);
        }
        ```

    - **for-of** - executes code for every element of an iterable object (e.g. an array or a string)

        ```JavaScript
        for (variable of iterable) {
            // code statement to execute
        }
        ```

        ```JavaScript
        const cars = ["Subaru", "BMV", "Lexus"];
        for (const el of cars) {
            console.log(el); // outputs Subaru, BMW, Lexus
        }
        ```

    - **for-in** - executes code for every key in an object

        ```JavaScript
        for (variable in object) {
            // code statement to execute
        }
        ```

        ```JavaScript
        const person = {name: "John", lastName: "Smith", age: 30};
        for (const key in person) {
            console.log(key); // outputs name, lastName, age
            console.log(person[key]); // outputs John, Smith, 30
        }
        ```

    - **while** - executes code while a condition holds true

        ```JavaScript
        while (condition) {
            // code statement to execute
        }
        ```

        ```JavaScript
        let i = 0;
        while (i < 10) {
            console.log(i);
            i++;
        }
        ```

    - **do...while** - executes code until the condition evaluates to false

        :bulb: code executes at least once and only repeats if the following condition is true

        ```JavaScript
        do {
            // code statement to execute
        } while (condition);
        ```

        ```JavaScript
        let i = 0;
        do {
            i += 1;
            console.log(i);
        } while (i < 5);
        ```

    - **break** - terminates the current loop

        ```JavaScript
        // logging the next item of an array on function call
        const array = ['a', 'b', 'c'];

        let prevLogIndex;
        function log() {
            let loopIndex = 0;
            for (item of array) {
                if ((!prevLogIndex && prevLogIndex !== 0) || prevLogIndex < loopIndex) {
                console.log(array[loopIndex]);
                prevLogIndex = loopIndex;
                break;
                }
                loopIndex++;
            }
        };

        log();  // outputs 'a'
        log();  // outputs 'b'
        log();  // outputs 'c'
        ```

    - **continue** - terminates one iteration in the loop based on some condition, and then continues with the next iteration in the loop

        ```JavaScript
        // let's say we want to output everything but the number 3
        // since 'break' jumps us out of our code, this won't work
        for (i=0; i<6; i++) {
            if (i === 3) {break;}
            console.log(i);
        }
        // outputs 0, 1, 2

        // therefore, we can use 'continue'
        for (i=0; i<6; i++) {
            if (i === 3) {continue;}
            console.log(i);
        }
        // outputs 0, 1, 2, 4, 5
        ```