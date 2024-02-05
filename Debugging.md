# Efficient Development and Debugging

## Writing code efficiently

- VSCode Shortcuts
    - (chrome) Developer tools - `Ctrl+Shift+I`
    - Toggle Line comment - `Ctrl+/`
    - Search - `Ctrl+F`, `Ctrl+Shift+F`
    - Copy Line Up - `Shift+Alt+UpArrow`
    - Move Line Up - `Alt+UpArrow`
    - Expand Selection - `Shift+Alt+RightArrow`
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
    - (VSCode) Suggestions - `Ctrl+Space`, `Ctrl+Shift+Space` (parameters)

## Resources

- [MDN unofficial JS documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Debugging

:warning: read error messages

- use `console.log()` to gain insights into your code

- use the browser debugging tools

- use your IDE for debugging

- **Breakpoints** - pause code execution to examine what's going on

    - Debugging toolbar:

        `Developer tools` > `Sources` tab

        - **Resume script execution** - continue to execute code (or until next breakpoint is hit)

        - **Step** - this will always jump to the next *step*.  If the next step is a function call, it will navigate to the function

        - **Step over next function call** - jumps to the next line of code.  If a function is called, it won't navigate to the function, instead, it will execute the function call on our behalf

        - **Step into next function call**

        - **Step out of current function**

    - **Call Stack** - shows the Execution Context(s), while pointing to the active context

    - **Local & Global scope** - current variables

    - **Watch** - add an expression to see how the execution changes something

    ![image19](/images/image19.png)

    - **Conditional Breakpoints** - stop execution only when some condition is met

        ![image20](/images/image20.png)

    - **Event Listener Breakpoints** - pause execution based on Event Listeners we've added in our code

        ![image21](/images/image21.png)

- VSCode debugger

    :warning: install JavaScript Debugger extension

    `F5` or `Run` > `Start Debugging`

    ![image22](/images/image22.png)