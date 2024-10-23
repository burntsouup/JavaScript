# INTRODUCTION

### What is JavaScript?

- JS is a programming language, mostly used for web development

- **compiled at runtime (JiT)** and **dynamic**

  :bulb: code is compiled (translates from a source language to a target language; from JS to machine code) during the execution of the program, at runtime (when the machine's CPU interprets and acts on the code instructions)

- **weakly typed** and multi-paradigm, supporting **event-driven**, **functional**, **imperative**, and **object-oriented** styles

  :bulb: **weakly-typed** - data types are assumed automatically. This results in fewer errors, allowing your code to run as expected

- it is a **synchronous**, **single-threaded** language

  - processing one command at a time. For operation 2 to start, operation 1 has to finish

  - a single thread has a **call stack** and **memory heap**, which are used for memory management and code execution

- JS can be executed as part of a web browser or, as of more recently, directly on a server (Node.js)

- JS works with many built-in **Web APIs** (e.g. DOM, Canvas, WebGL, etc.) to enhance the experience (e.g. JS is a synchronous language but can be asynchronous with the use of APIs)

### History of JS

- (1993) First popular browser, called *Mosaic*, was released.  Those same developers founded Netscape and published an improved browser called the Netscape Navigator (1994)

- (1995) Brendan Eich of Netscape, developed a language that was similar to Java, but easier to work with.  He named this language *Mocha*, then *LiveScript*, and finally *JavaScript*

  - note - due to the popularity of Java at the time, the name JavaScript was used as a marketing ploy

- (1995) Microsoft debuted Internet Explorer which lead to a browser war with Netscape.  Microsoft also re-engineering JavaScript, introducing it's own version of it, called JScript (1996)

- (1996) Netscape submitted JavaScript to ECMA International (European Computer Manufacturing Association) to standardize the language across all browsers.  This led to the release of the :link: [ECMA Standard](https://ecma-international.org/publications-and-standards/standards/ecma-262/) (1997)

  :bulb: JavaScript is now known as a language that conforms to the ECMAScript standard

  :bulb: new versions of ECMAScript are released every few years, resulting in changes to the JavaScript language

- Microsoft gained a dominant position in the browser market.  By the early 2000s, IE's market share reached ~95%.  Therefore, JScript became the de facto standard for web development

- However, over time, this started to change.  JavaScript soon became the most popular client-side language.  Here are a few examples of why:

  - Mozilla (successor of Netscape) released the Firefox browser, which aligned directly with ECMAScript/JavaScript

  - Browser vendors implemented JavaScript engines (Google - V8, Mozilla - SpiderMonkey)

  - (2005) Jesse Garrett released Ajax, a set of web dev technologies to create (dynamic) asynchronous web apps, that were built on JavaScript

  - (2009) Ryan Dahl created Node.js, enabling JavaScript developing outside of the web browser

- JavaScript is currently used by ~98% of all websites

- Many open-source libraries and web frameworks were born, based on JavaScript: React, Angular, jQuery, Vanilla JS, etc.

### The Mechanics of a Web Browser

- a browser is software enabling users to access content on the World Wide Web. The browser is used to display content that a user can easily interact with (images, videos, documents, etc.)

- example of a user attempting to access content on a web page:

  1. the user interacts with the browser, through their client device, navigating to a `URL address`
  
  2. the browser identifies the server, where the website's contents are stored, using `DNS`
  
  3. the browser establishes a secured connection with the server using `TCP/IP` and `TLS`
  
  4. the browser sends an `HTTP` (`GET`) request to the server, asking for an `HTML` file. The server responds by sending the `HTML` file back to the client
  
  5. the browser **parses** the `HTML` file, building the **DOM** node tree; a hierarchical representation of objects that comprise of the relationships and contents defining a website, that can be accessed and manipulated using the JS language. The browser will initiate requests every time the parser finds links to external resources, such as stylesheets (`CSS` files), scripts (JS files), or embedded image references
  
      :bulb: some requests are **blocking** (e.g. `script` files), meaning that parsing of the remaining `HTML` file is stopped until the received asset is handled

      :pushpin: DOM explained in more detail [here](<9 - DOM.md>)

  6. once the parser is complete, and the **DOM** tree is built, the browser constructs the CSS object model (`CSSOM`), that defines how to **style** certain nodes of the **DOM**

  7. as the `CSSOM` is being created, JS `script` files are downloaded, parsed, interpreted, compiled, and executed, adding interactivity and dynamic functionality

      :bulb: these steps are performed by the **JS engine**
  
  8. once the **DOM** and `CSSOM` trees are built, the `Render tree` is created, used to capture visible nodes from the **DOM** tree and any associated styles

      ![image39](/images/image39.png)

  9. after the render tree is created, the `layout` is determined, defining size and position of each object on the page
  
      :bulb: subsequent recalculations are called **reflows**, sparking a **repaint**

  10. after layout, pixels are `painted` onto the screen, displaying visual content for the user to see

      :bulb: steps 5 - 10 define the **Critical Rendering Path**; how the browser converts HTML, CSS, and JS into pixels on the screen. These steps are performed by the **Rendering engine**

      ![image34](/images/image34.png)

      ![image1](/images/image1.png)

      ![image13](/images/image13.png)

      :link: [Explained in greater detail here](https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work#javascript_compilation)

- components of a web browser:

  - **User interface** - the visually intuitive space where users can interact with the browser (e.g. tabs, address bar, refresh button, etc.)

  - **Browser engine** - coordinates the relationship with the different components of the browser

  - **Rendering engine** - creates the visual content displayed on a web page (e.g. layout, text, font, images, etc.) (e.g. Blink - Google Chrome, Gecko - Firefox, WebKit - Safari)

  - **JavaScript engine** - interprets and compiles JS code that can be executed by the user's CPU, adding interactivity and dynamic functionality to the web page

  - **Networking** - handles the network communication (e.g. DNS resolution, sending an HTTP request to a server using TCP/IP, etc.)

  - **Storage** - e.g. local, session, cookies, etc.

  ![image2](/images/image2.png)

### How does the JS Engine work (high-level)

- **JS Engine** - a program that receives source code (from a `script` file), loads it, parses it, compiles it to binary instructions (machine code) that the CPU understands, and then executes it

  ![image3](/images/image3.png)

- browsers have built-in JS engines (e.g. V8 - Chrome, SpiderMonkey - Firefox, Chakra - Microsoft Edge)

- Compiled vs Interpreted language

  - **Compiled** - code is translated directly to machine code, all at once (e.g. C, C++)

  - **Interpreted** - interpreter reads and compiles the code, line-by-line (e.g. JS)

  :bulb: compiled languages have a slow write-time and a fast run-time while interpreted languages have the opposite

- JS engine steps (high-level):

  1. **Interpreter** - loads source code, parses, and translates it to bytecode (machine code; x86, ARM, etc.), starting the execution

  2. **Compiler** - the *interpreter* hands the machine code to the *compiler* that then executes the code whilst the code is being received, at runtime (called **just-in-time compilation**)

  3. Compiled machine code is handed off to your computer's CPU to execute the code

      ![image23](/images/image23.png)

- JS engine steps (detailed):

  1. source code, from a `script` file, is passed to a parser that reviews the code, line-by-line, to check if the syntax is correct

  2. if the code is correct, then an **Abstract Syntax Tree** (AST) is created. The AST represents the code as a tree of nodes where each node is a set of data

      :link: [AST Explorer](https://astexplorer.net/)
  
  3. **Interpreter** takes AST and translates it to bytecode. Bytecode is an *Intermediate Representation*; an abstraction of machine code

      :bulb: Interpreter doesn't translate code directly to machine code because machine code is unique to the architecture of the machine (e.g. ARM vs Intel processors). Bytecode is universal and it can be optimized

  4. **Compiler** will translate bytecode just-in-time, at runtime

      :bulb: Compiled languages will compile all of the code before execution; called Ahead-of-Time (AoT)
  
  5. machine code is passed to the CPU to execute the code

    ![image27](/images/image27.png)

### How the JS Engine works (detailed)

- **Execution Context** (EC) - environment where code is executed

  - Types of EC:

    1. **Global Execution Context** (GEC) - when the engine receives a `script` file, by default, it creates a single EC, called the GEC. This is where all code (variables and functions) that are not inside a function are stored and executed

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

  - a collection of ECs to be executed

  - follows a **last-in-first-out** principle

  - since JS is single-threaded, ECs are created for every event, function call, etc.

- **Memory management**

  - The JS Engine requires a place to store and read/write information and a place to keep track of what's happening. Introducing the **stack** and **heap**:

    1. **Stack** - (*in addition to what was described above*) used to store **static** data

        :bulb: **static** data - a fixed size known to the engine before compilation. This includes **Primitives** and **references** that point to objects and functions

        :bulb: a fixed amount of memory is allocated for static data

        :bulb: **stack overflow** - number of function calls (FECs) exceeds the stack's maximum storage limit

    2. **Heap** - used to store objects and functions

        :bulb: more memory, as required, is allocated for this data since they don't have a known fixed size at compilation

  - The **memory lifecycle** follows these steps:

    1. **Allocation** - dedicated memory required

    2. **Use** - of allocated memory

    3. **Release** (**Garbage Collection**) - removing memory when not in use

        :bulb: a **memory leak** occurs when the program continues to allocate unused memory, without releasing it

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

- **Web APIs**, **Event Loop**, and **Task Queue**

  :bulb: these attached components allow JS, a synchronous language, to be asynchronous

  - **Webs APIs** - used with the JS Engine to add more complex functionality

    :bulb: these web APIs are created on the global object (`window`), during the Creation Phase of the GEC

    - Examples - manipulating documents (DOM), fetching data from a server or database (Fetch), drawing graphics (Canvas, WebGL), audio and video (Web Audio API, WebRTC), device (Geolocation), storage (Web Storage), etc.

  - **Task queue** (also called **message queue** or **callback queue**) - stores tasks/messages that are not immediately executed but that need to be

    :bulb: follows a **first-in-first-out** approach

  - **Event Loop** - simply takes a task and pushes it to the *stack*, when empty. It runs in iterations (*ticks*). Event Loop won't run until a *tick* has completed

  - Example:

      1. function `message()` is *called*, calling the `setTimeout()` function. `message()`, followed by `setTimeout()`, are *pushed* to the *stack*

      2. a (callback) function is passed to `setTimeout()` and is added/registered to the web API

      3. `setTimeout()`, followed by `message()`, are done executing and are then *popped* off the *stack*
  
      4. while the `setTimeout()` timer runs within the web API, function `boo()` is *called*, *pushed* to the *stack*, and executes, logging `"Boo!"`. `boo()` is then popped off the stack

      5. after the `setTimeout()` timer runs for 2s, the callback gets added to the **task queue**

      6. once the *stack* is empty, the **Event Loop** takes the task (callback function), *pushing* it onto the *stack* to be executed. The callback function is then executed, logging `"hello from callback"`

          ```JavaScript
            function message () {
                setTimeout(() => {
                    console.log("hello from callback!")
                }, 2000);
            }

            function boo() {
                console.log("Boo!");
            }

            message();
            boo();
            ```

          ![image29](/images/image29.png)

          :link: [Similar example here](https://towardsdev.com/event-loop-in-javascript-672c07618dc9#:~:text=First%0AThird%20%0ASecond-,We,-invoke%20bar.)

### Examples

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