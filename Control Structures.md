# Control Structures

*refer to calculator app within the [Basics folder](/Basics/calculator/)

*refer to calculator app within the [Control Structures folder](/ControlStructures/monsterKiller/)

## Conditional Statements

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

- Conditions

    - based on **boolean** data types

    - **Comparison operators**:

        - `==` (**loose**) **equality** - checks whether two operands are equal, returning `true` or `false`. It converts and compares operands of different types

            :warning: `=` is the assignment operator

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

            :warning: we should use `===` over `==`; we should care about the data type

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

        - **equality** for **objects** and **arrays**
   
            - Scenario 1 - comparing 2 objects/arrays that have the same values, using the `===/==` operator, would return a `false`

                ```JavaScript
                person1 = {name: "John"}
                person2 = {name: "John"}
                person1 == person2; //returns false
                ```

            - Scenario 2 - comparing 2 object/array values that are the same, using the `===/==` operator, would return a `true`

                ```JavaScript
                person1.name == person2.name; //returns true
                ```

        - `>`, `<` greater than, smaller than

        - `>=`, `<=` greater than and equal, smaller than and equal

    - **Logical operators**:
    
        - **AND** (`&&`) and **OR** (`||`) - combines conditions

            - AND example - `expr1 && expr2` returns `true` if both operands are true

            - OR example - `expr1 || expr2` returns `true` if either operand is true

            :warning: AND and OR doesn't return a boolean value, instead, they are used to compare conditions that can return boolean values

        - **NOT** (`!`)

            - NOT example - `!expr1` returns `false` if the operand is true

    - **Truthy** and **Falsy** values

        - JS attempts to coerce (convert) a non-boolean value to a boolean value, if it is required

        - **truthy** - a value considered to be `true`

            - truthy values: `true`, any *number* (other than `0`), `"strings"`, `[]`, `{}`, *functions*

        - **falsy** - a value considered to be `false`

            - falsy values: `false`, `0`, `""` (empty string), `NaN`, `Null`, `undefined`

            - Example:

                ```JavaScript
                !enteredNumber //if enteredNumber is falsy (0), ! returns true
                ```
