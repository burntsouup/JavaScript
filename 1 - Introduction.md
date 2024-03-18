# INTRODUCTION

## What is JavaScript?

- JS is a programming language, mostly used for web development

- it is **dynamic**, **compiled at runtime (JiT)**

  - it was created to **make webpages more dynamic** (e.g. change content on a page inside the browser)

  :bulb: **dynamic** - code is compiled (translates from a source language to a target language; from JS to machine code) during the execution of the program, at runtime (when the machine's CPU interprets and acts on the code instructions).  Also called *just-in-time*

- it is **weakly typed** and multi-paradigm, supporting **event-driven**, **functional**, **imperative**, and **object-oriented** styles

  :bulb: **weakly-typed** - data types are assumed automatically. This results in fewer errors, allowing your code to run as expected

- it is a **synchronous**, **single-threaded** language

  - processing one command at a time. For operation 2 to start, operation 1 has to finish

  - a thread has a **call stack** and **memory heap**, which are used for memory management and code execution

- JS can be executed as part of a web browser or, as of more recently, directly on a server (Node.js)

- JS works with many built-in **Web APIs** (e.g. DOM, Canvas, WebGL, etc.) to enhance the experience (e.g. JS is a synchronous language but can be asynchronous with the use of APIs)

## History of JS

- (1993) First popular browser, called *Mosaic*, was released.  Those same developers founded Netscape and published an improved browser called the Netscape Navigator (1994)

- (1995) Brendan Eich of Netscape, developed a language that was similar to Java, but easier to work with.  He named this language *Mocha*, then *LiveScript*, and finally *JavaScript*

  - note - due to the popularity of Java at the time, the name JavaScript was used as a marketing ploy

- (1995) Microsoft debuted Internet Explorer which lead to a browser war with Netscape.  Microsoft also re-engineering JavaScript, introducing it's own version of it, called JScript (1996)

- (1996) Netscape submitted JavaScript to ECMA International (European Computer Manufacturing Association) to standardize the language across all browsers.  This led to the release of the :link: [ECMA Standard](https://ecma-international.org/publications-and-standards/standards/ecma-262/) (1997)

  :bulb: JavaScript is now known as a language that conforms to the ECMAScript standard

- Microsoft gained a dominant position in the browser market.  By the early 2000s, IE's market share reached ~95%.  Therefore, JScript became the de facto standard for web development

- However, over time, this started to change.  JavaScript soon became the most popular client-side language.  Here are a few examples of why:

  - Mozilla (successor of Netscape) released the Firefox browser, which aligned directly with ECMAScript/JavaScript

  - Browser vendors implemented JavaScript engines (Google - V8, Mozilla - SpiderMonkey)

  - (2005) Jesse Garrett released Ajax, a set of web dev technologies to create (dynamic) asynchronous web apps, that were built on JavaScript

  - (2009) Ryan Dahl created Node.js, enabling JavaScript developing outside of the web browser

- JavaScript is currently used by ~98% of all websites

- Many open-source libraries and web frameworks were born, based on JavaScript: React, Angular, jQuery, Vanilla JS, etc.

## How do webpages work?

- User visits/interacts with a browser through their client/machine

  - Initial visit - request is sent to the server; a computer where the webpage sits (where the HTML file is posted)

  - Server loads webpage (HTML file) and sends it back to your browser (response)

  ![image1](/images/image1.png)

- What if the user clicks on a form on that webpage?

  - Triggers a new request (sent from client to server)

  - Server processes request, maybe stores some data in a DB, and then responds back with a new HTML file webpage

- JS makes the client/browser experience more "reactive"

  - E.g. instead of sending a second response, the originally loaded page could, instead, dynamically change to meet the needs of the user

  ![image2](/images/image2.png)

## How is JS code executed?

- **JS Engine** - a program that receives source code, loads it, parses it, compiles it to binary instructions (machine code) that the CPU understands, and then executes it

  ![image3](/images/image3.png)

- Browsers have built-in JS engines:
  
  - SpiderMonkey in Firefox

  - V8 in Chrome

- Compiled vs Interpreted language

  - Compiled - code is translated directly to machine code, all at once (e.g. C, C++)

  - Interpreted - interpreter reads and compiles the code, line-by-line (e.g. JS)

  :bulb: compiled languages have a slow write-time and a fast run-time while interpreted languages have the opposite

- JS engine is defined by an **Interpreter** and a **Compiler**

  - **Interpreter** - loads source code, parses, and translates it to bytecode (machine code; x86, ARM, etc.), starting the execution

  - **Compiler** - Interpreter hands the machine code to the Compiler that then executes the code whilst the code is being received, at runtime (called **just-in-time**)

  - Compiled machine code is handed off to your computer (CPU) to execute the code

    ![image23](/images/image23.png)

- Steps:

  1. Source code passed to the parser that reviews the code, lin-by-line, to check if the syntax is correct

  2. If the code is correct, then an Abstract Syntax Tree is created. The AST represents the code as a tree of nodes where each node is a set of data

       :link: [AST Explorer](https://astexplorer.net/)
  
  3. Interpreter takes AST and translates it to Bytecode. Bytecode is an Intermediate Representation; an abstraction of machine code

      :bulb: Interpreter doesn't translate code directly to machine code because machine code is unique to the architecture of the machine (e.g. ARM vs Intel processors). Bytecode is universal and it can be optimized

  4. Compiler will translate Bytecode "on the fly" (JiT), at runtime

      :bulb: Compiled languages will compile all of the code before execution; called Ahead-of-Time (AoT)
  
  5. machine code is passed to the CPU to execute the code

    ![image27](/images/image27.png)

- JS engine receives the data, loads it, parses it, evaluates script, compiles script, and then compiles the code

  ![image13](/images/image13.png)

## How the JS Engine works

- **Execution Context** (EC) - environment where code is executed

  - Types of EC:

    1. **Global Execution Context** (GEC) - when the engine receives a script file, by default, it creates a single EC, called the GEC. This is where all code (variables and functions) that are not inside a function are stored and executed

        :bulb: a global object is created that represents the GEC. The `window` object is created for a browser and the `global` object is created for a server

    2. **Function Execution Context** (FEC) - whenever a function is *called*, the engine creates a FEC within the GEC, to execute code within that function

        :pushpin: *functions*, *variables*, and *objects* introduced [here](/2%20-%20Basics.md)

      ![image8](/images/image8.png)

- **EC phases**:

  :bulb: applies to both GEC and FECs

  1. **Creation phase** (Memory Allocation) - engine sets up the environment for your code to be executed

      a. **Variable Object** - a container within the EC that stores all variables, functions, and objects

        :bulb: *memory management* is described below

        - **hoisting** - variable declarations and functions are moved to the top of their respective scopes, during this phase, and stored

          - allows functions to be *called* even before they're declared in code

          :bulb: variable declarations are stored, but they're not initialized values. They are assigned the value `undefined`

      b. **The Scope Chain** - nested Variable Objects, representing scopes for each function; each VO has a reference to a parent scope, forming a chain

        - **lexical scoping** - when a function is defined within another function, the inner function has access to code defined in the outer function (called *closure*) and any parent code. However the outer function does not have access to code within the inner function

          :bulb: **block scope** - code executes within a defined scope (e.g. within a function's `{}`), blocking external code from executing

          ![image7](/images/image7.png)

      c. **Setting `this` keyword**

        - `this` - references another value (typically an *object*), that represents the current EC (either the GEC or a FEC)

          :pushpin: `this` explained in more detail [here](/8%20-%20Objects.md)

  2. **Execution phase** (Code Execution) - code is executed one line at a time, top to bottom (synchronous), only executing the next line once the current line has executed (single-threaded)

      :bulb: variables are assigned values during this phase. Variables not initialized will be assigned the value `undefined`

      :bulb: if a function is *called*, then a FEC is created and *pushed* to the *stack* to be executed

- **Call Stack** (EC Stack) - how code is executed during the Execution phase

  - a data structure of a collection of ECs to be executed

  - follows a **last-in-first-out** principle

  - since JS is single-threaded, ECs are created for every event, function call, etc.

- **Memory management**

  - The JS Engine requires a place to store and read/write information and a place to keep track of what's happening. Introducing the **stack** and **heap**:

    - **Stack** - (*in addition to what was described above*) used to store **static** data (**Primitives** and **references** to objects and functions)

      :bulb: *static* - a fixed size known to the engine before compilation

      :bulb: a fixed amount of memory is allocated for static data

      :bulb: **stack overflow** - number of function calls (FECs) exceeds the *stack's* maximum storage limit

    - **Heap** - used to store objects and functions

      :bulb: more memory, as required, is allocated for this data since they don't have a known fixed size at compilation

  - The **memory lifecycle** follows these steps:

    1. allocation of memory required

    2. uses the allocated memory

    3. releases the memory when not in use (called *Garbage Collection*)

  - Data Types:

    1. **Primitive** - static data stored directly on the *stack*, where they are accessed from (e.g. string, number, boolean, null, undefined, symbol)

    2. **Reference** (or **Object**) - data stored in the *heap* and accessed by reference (array, function, and object)

        :bulb: this memory storage is great because it avoids duplicating data

      :bulb: the *reference address* is stored on the *stack*, whereas the actual data is stored in memory (*heap*)

    - Example:

      - Variables `name = 'John'`, `age = 30`, `newName = 'Jonathan'` are stored on the *stack*

        :bulb: if we first assign `newName` to `name`, then `newName` would be `'John'`. When we change `newName` to `'Jonathan'`, `name` is still set to `'John'`

      - Object declarations (and their reference addresses), `person` and `newPerson`, are stored on the *stack*. They reference the same values, that are stored in the *heap*

        :bulb: `newPerson` doesn't create a whole new object in the heap, it just points to the existing object

        :bulb: if we change the value of `newPerson.name` to `'Bradley'`, then, since `person` references the same value, `person.name` will also output `'Bradley'`

      ![image26](/images/image26.png)
  
  - **Garbage collection** - memory is automatically allocated when objects are created and memory is freed when not used

    - Periodically checks and removes *heap* memory for unused objects (objects without *references*)

      :bulb: low-level languages like C and C++ require you to do this manually

    - **Memory Leak** - unused objects that still hold a *reference*

- **Web APIs**

  - Webs APIs, included in the browser, can be used with the JS language to add more complex functionality

    :bulb: these web APIs are created on the global object (`window`), during the Creation Phase of the GEC

  - Example - JS is synchronous but can be asynchronous with the help of web APIs

    1. function `message()` is *called*, calling the `setTimeout()` function. Both are *pushed* to the *stack*

    2. the callback function passed to `setTimeout()` (`console.log("hello from callback")`) is added/registered to the Web API

    3. `message()` and `setTimeout()` are *popped* off the *stack*
  
    4. `boo()` function is *called*, *pushed* to the *stack*, and executes, logging `"Boo!"`

    5. after the timeout timer runs, the callback gets added to the **task queue** (*callback queue*)

    6. once the *stack* is empty, the **Event Loop** takes the task, *pushing* it onto the *stack* to be executed
  
        :bulb: **task queue** is a data structure that, unlike the Call Stack that follows a LIFO approach, follows a **first-in-first-out** approach

        :bulb: **Event Loop** simply takes a task and pushes it to the *stack*, when empty. It runs in iterations (***ticks***). Event Loop won't run until a *tick* has completed

        ![image28](/images/image28.png)

        ![image29](/images/image29.png)

        :link: [Similar example here](https://towardsdev.com/event-loop-in-javascript-672c07618dc9#:~:text=First%0AThird%20%0ASecond-,We,-invoke%20bar.)

## Examples

- Example 1:

  GEC Creation phase

  1. (when the script is loaded) GEC is created first and *pushed* to the *call stack*. A global object is created (`window` or `global`)

  2. Objects, functions, and variable declarations, part of the global scope (not part of each function scope), are hoisted and stored in memory (*stack* and *heap*)

  GEC Execution phase

  3. line by line, variables are initialized and functions are *called*

  4. when a function is *called*, a FEC is created and is *pushed* to the top of the *stack*. The EC at the top of the *stack* becomes the "active" EC, and will be executed first

  FEC Creation phase

  5. Objects, functions, and variable declarations, part of this function scope, are hoisted and stored in memory (*stack* and *heap*)

  FEC Execution phase

  6. function code executes and then the engine removes (*pops*) that FEC from the *stack*

  7. as functions are *called*, FECs are created and *pushed*/*popped* to/from the *stack*

  8. when everything is done, *pop* the GEC off the *stack*

- Example 2:

  1. `first()` function is *called* and *pushed* to the *stack*, but pauses execution

  2. `second()` function is *called* and *pushed* to the *stack*, but pauses execution

  3. `third()` function is *called* and *pushed* to the *stack* and is then executed and is *popped* off the *stack*

  4. `second()` is executed and *popped* off the *stack*

  5. `first()` is executed and *popped* off the *stack*

  ![image24](/images/image24.png)

  ![image25](/images/image25.png)

- Example 3:

  GEC Creation phase

  1. GEC is created and *pushed* to the *stack*. A global object is created (`window` or `global`)

  2. `name` variable declaration and `first()`, `second()`, `third()` function body references are stored in memory (*stack* and *heap*)

      :bulb: `name` variable is declared, but not initialized (it is set to `undefined`)

  GEC Execution phase

  3. `name` is initialized with the value `Victor` (on the *stack*)

  4. `first()` function is *called*, creating a FEC. This context is placed on top of the *stack*, becoming the "active" context, and will be executed

  FEC Creation phase (`first()`)

  5. functions and variable declarations within `first()` will be hoisted and stored in memory (e.g. `var a` set to `undefined`)

  FEC Execution phase (`first()`)

  6. `var a` is initialized and set to the value of `Hi!`. `second()` function is *called*, creating a new FEC, pushing it to the top of the *stack* to be executed, pausing the execution of the `first()` FEC

  FEC Creation phase (`second()`)

  7. functions and variable declarations within `second()` will be hoisted and stored in memory (e.g. `var b` set to `undefined`)

  FEC Execution phase (`second()`)

  8. `var b` is initialized and set to the value of `Hey!`. `third()` function is *called*, creating a new FEC, pushing it to the top of the *stack* to be executed, pausing the execution of the `second()` FEC

  FEC Creation phase (`third()`)

  9. functions and variable declarations within `third()` will be hoisted and stored in memory (e.g. `var c` set to `undefined`)

  FEC Execution phase (`third()`)

  10. `var c` is initialized and set to the value of `Hello!`. `Hello!` is logged to the console. Since all code has executed, the `third()` FEC is remove (*popped*) from the *stack*, making the `second()` FEC the new active context

  11. `second()` FEC continues execution, logging `Hey!` to the console. Since all code has executed, the `second()` FEC is remove (*popped*) from the *stack*, making the `first()` FEC the new active context

  12. `first()` FEC continues execution, logging `Hi!` to the console. Since all code has executed, the `first()` FEC is remove (*popped*) from the *stack*

  ![image5](/images/image5.png)

  ![image12](/images/image12.png)

  :link: [Similar example here](https://dev.to/jahid6597/javascript-execution-context-a-deep-dive-4kno#:~:text=JavaScript%20Execution%20Context%20is%20the,creation%20phase)