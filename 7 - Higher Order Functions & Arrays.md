

### Higher-order functions

- Higher-order functions:

    - a function that accepts one or more functions as arguments, or a function that returns a function

    - 


- **Callback** and **Promise**

    :bulb: JS is a synchronous language but can be asynchronous with the help of web APIs

    - **synchronous** - only one operation will run at a time (single thread)

    - **asynchronous** - operations can run in parallel (multi-thread)

        :bulb: Callback functions allow us to achieve this asynchronous behavior

    - **Callback** functions - a function that is called only when something else happens (it's not called by simply running the program). This is achieved by passing a function into another function as an argument. The function we pass is then *called back* after something else has occurred

        :bulb: this is possible because JS supports **higher-order functions**

    - Examples:

        - loading images on a website. If images loaded synchronously, the website would freeze and wait for each image to load before continuing

        - event listeners - you pass a function that is called back when an event has occurred (e.g. mouse click)

        - asynchronous built-in methods - `setTimeout()`

    - Example:

        1. function `message()` is called, calling the `setTimeout()` function (*a built-in web API*). Both are pushed to the stack

        2. a (callback) (anonymous) function is passed to `setTimeout()` and is added/registered to the Web API

        3. `setTimeout()` and then `message()` are popped off the stack

        4. while the `setTimeout()` timer runs, function `boo()` is called, pushed to the stack, and executes, logging `"Boo!"`. `boo()` is then popped off the stack

        5. after the `setTimeout()` timer runs for 2s, the callback function gets added to the **task queue** (*callback queue*)

        6. once the stack is empty, the **Event Loop** takes the task, and pushes it onto the stack to be executed. The callback function is then executed, logging `"hello from callback"`
  
            :bulb: **task queue** follows a **first-in-first-out** approach

            :bulb: **Event Loop** simply takes a task and pushes it to the *stack*, when empty. It runs in iterations (***ticks***). Event Loop won't run until a *tick* has completed

            ![image28](/images/image28.png)

            ![image29](/images/image29.png)

            :link: [Similar example here](https://towardsdev.com/event-loop-in-javascript-672c07618dc9#:~:text=First%0AThird%20%0ASecond-,We,-invoke%20bar.)