# Efficient Development and Debugging and Error Handling

### Writing code efficiently

- VSCode Shortcuts

    - Developer tools - `Ctrl+Shift+I`

    - Comment line - `Ctrl+/`

    - Search - `Ctrl+F`, `Ctrl+Shift+F`

    - Copy Line Up - `Shift+Alt+UpArrow`

    - Move Line Up - `Alt+UpArrow`

    - Expand Selection - `Shift+Alt+RightArrow`

    - Select block of text - `Ctrl+Shift+arrow`

    - Navigate down page - `Ctrl+DownArrow`

    - Split editor - `Ctrl+\`

    - Toggle sidebar - `Ctrl+B`

    - Select Next Occurrence - `Ctrl+D`

    - Preview markdown - `Ctrl+Shift+V`

    - Replace - `Ctrl+H`

    - Multiple cursors - `Ctrl+Alt+UpArrow`

    - Toggle Terminal - `Ctrl+backtick`

    - New window - `Ctrl+Shift+N`

    - Command palette - `Ctrl+Shift+P`

    - Quick Open - `Ctrl+P`

    - Settings - `Ctrl+,`

    - Suggestions - `Ctrl+Space`, `Ctrl+Shift+Space` (parameters)

### Resources

:link: [MDN unofficial JS documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Debugging

- used to address logical and syntax errors

- :bulb: read error messages

- use `console.log()` to gain insights into your code

- use the browser debugging tools

- use your IDE for debugging

- **Breakpoints** - pause code execution to examine what's going on

    - Debugging toolbar:

        `Developer tools` > `Sources` tab

        - `Resume script execution` - continue to execute code (or until next breakpoint is hit)

        - `Step` - this will always jump to the next *step*.  If the next step is a function call, it will navigate to the function

        - `Step over next function call` - jumps to the next line of code.  If a function is called, it won't navigate to the function, instead, it will execute the function call on our behalf

        - `Step into next function call`

        - `Step out of current function`

    - `Call Stack` - shows the Execution Context(s), while pointing to the active context

    - `Local & Global scope` - current variables

    - `Watch` - add an expression to see how the execution changes something

    ![image19](/images/image19.png)

    - **Conditional Breakpoints** - stop execution only when some condition is met

        ![image20](/images/image20.png)

    - **Event Listener Breakpoints** - pause execution based on Event Listeners we've added in our code

        ![image21](/images/image21.png)

- VSCode debugger

    :bulb: install JavaScript Debugger extension

    `F5` or `Run` > `Start Debugging`

    ![image22](/images/image22.png)

### Error Handling

:pushpin: refer to Monster Killer app within the [Control Structures folder](/ControlStructures/monsterKiller/)

- Yes, we can use debugging tools to understand and fix logical errors, however, some errors cannot be avoided.  For example:

    - user input errors - user enters a string, instead of an expected number

    - network errors - offline server

- Solution:

    - `throw` error - outputs a custom error (*throws* an exception)

        - the exception can be a string, number, boolean, or an object (most common)

    - `try..catch..finally` - the `try` block of code is executed first.  If this code throws an exception, then the code in the `catch` block will be executed.  If not, then this code will not execute.  Code in the (optional) `finally` block will always execute, whether an exception was thrown or not

        :bulb: you expect that an exception could be thrown from code within the `try` block.  You wouldn't include all of your code in the `try` block

        ```JavaScript
        try {
            // code to execute
        } catch (exceptionVariable) {
            // code that executes if an exception is thrown in the 'try' block
        } finally {
            // codes that executes whether an exception was thrown or not
        }
        ```

        :bulb: `exceptionVariable` (optional) - holds the exception value; typically the value specified by the `throw` statement

        :bulb: use the `finally` block to make your script fail gracefully