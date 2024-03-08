# INTRODUCTION

What is JavaScript?

- JS is a programming language, mostly used for web development

- it is **dynamic**, **compiled at runtime (JiT)**

  - it was created to **make webpages more dynamic** (e.g. change content on a page inside the browser)

  - **dynamic** - code is compiled (translates from a source language to a target language; from JS to machine code) during the execution of the program, at runtime (when the machine's CPU interprets and acts on the code instructions).  Also called just-in-time

- it is **weakly typed** and multi-paradigm, supporting **event-driven**, **functional**, **imperative**, and **object-oriented** styles

  - **weakly-typed** - data types are assumed automatically. This results in fewer errors, allowing your code to run as expected

- it is a **synchronous**, **single-threaded** language

  - processing one command at a time. For operation 2 to start, operation 1 has to finish

  - A thread has a **call stack** and **memory heap**

- JS can be executed as part of a web browser or, as of more recently, directly on a server (Node.js)

- JS works with many built-in **APIs** (e.g. DOM, Canvas, WebGL, etc.) to enhance the experience (e.g. JS is a synchronous language but is asynchronous with the use of APIs)

History of JS

- (1993) First popular browser, called *Mosaic*, was released.  Those same developers founded Netscape and published an improved browser called the Netscape Navigator (1994)

- (1995) Brendan Eich of Netscape, developed a language that was similar to Java, but easier to work with.  He named this language *Mocha*, then *LiveScript*, and finally *JavaScript*

  - note - due to the popularity of Java at the time, the name JavaScript was used as a marketing ploy

- (1995) Microsoft debuted Internet Explorer which lead to a browser war with Netscape.  Microsoft also re-engineering JavaScript, introducing it's own version of it, called JScript (1996)

- (1996) Netscape submitted JavaScript to ECMA International (European Computer Manufacturing Association) to standardize the language across all browsers.  This led to the release of the [ECMA Standard](https://ecma-international.org/publications-and-standards/standards/ecma-262/) (1997)

  - note - JavaScript is now known as a language that conforms to the ECMAScript standard

- Microsoft gained a dominant position in the browser market.  By the early 2000s, IE's market share reached ~95%.  Therefore, JScript became the de facto standard for web development

- However, over time, this started to change.  JavaScript soon became the most popular client-side language.  Here are a few examples of why:

  - Mozilla (successor of Netscape) released the Firefox browser, which aligned directly with ECMAScript/JavaScript

  - Browser vendors implemented JavaScript engines (Google - V8, Mozilla - SpiderMonkey)

  - (2005) Jesse Garrett released Ajax, a set of web dev technologies to create (dynamic) asynchronous web apps, that were built on JavaScript

  - (2009) Ryan Dahl created Node.js, enabling JavaScript developing outside of the web browser

- JavaScript is currently used by ~98% of all websites

- Many open-source libraries and web frameworks were born, based on JavaScript: React, Angular, jQuery, Vanilla JS, etc.

How do webpages work?

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

How is JS code executed?

- **JS Engine** - a program that receives source code, loads it, parses it, compiles it to binary instructions (machine code) that the CPU understands, and then executes it

  ![image3](/images/image3.png)

- JS engine is defined by an **Interpreter** and a **Compiler**

  - **Interpreter** - loads source code, parses, and translates it to bytecode (machine code; x86, ARM, etc.), starting the execution

  - **Compiler** - Interpreter hands the machine code to the Compiler that then executes the code whilst the code is being received, at runtime (called **just-in-time**)

  - Compiled machine code is handed off to your computer to execute the code

    ![image23](/images/image23.png)

- built into our browser (V8 in Chrome, SpiderMonkey in Firefox, etc.)

- JS engine receives the data, loads it, parses it, evaluates script, compiles script, and then compiles the code

  ![image13](/images/image13.png)

- How the JS Engine works

  - **Execution Context** (EC) - environment where code is executed

    - **Global Execution Context** (GEC) - when the engine receives a script file, by default, it creates a single EC, called the GEC. This is where all code (variables and functions) that are not inside a function are stored and executed

      :warning: the GEC for the browser is the `window` object. The GEC for a non-browser is the `global` object

    - **Function Execution Context** (FEC) - whenever a function is called, the engine creates a FEC within the GEC, to execute code within that function

      ![image8](/images/image8.png)

  - EC phases:

    :warning: applies to both GEC and FECs

    1. **Creation phase** (Memory Allocation)

        a. **Variable Object** - a container within the EC that stores all variables and functions (as key-value pairs)

          - **Memory Heap** - where these objects are actually stored

          - **hoisting** - variable and function declarations are moved to the top of their respective scopes, during this phase, and stored

            - allows functions to be called even before they're declared in code

            :warning: variables and functions within globally declared functions are not stored in memory (GEC VO)

            :warning: variable declarations are stored, but they're not initialized values (outputs a *ReferenceError*)

        b. **The Scope Chain** - nested Variable Objects, representing scopes for each function; each VO has a reference to a parent scope, forming a chain

          - **lexical scoping** - when a function is defined within another function, the inner function has access to code defined in the outer function (called *closure*) and any parent code. However the outer function does not have access to code within the inner function

            :warning: **block scope** - code executes within a defined scope (e.g. within a function's `{}`), blocking external code from executing

            ![image7](/images/image7.png)

        c. **Setting "this" keyword**

          - `this` - references another value (typically an object), that represents the current EC (either the GEC or a FEC)

            - example 1: Global Scope

              ```JavaScript
              console.log(this)  // "this" references the window object (in the browser), since the GEC is executing the function
              ```

            - example 2: Global Scope

              introduce a function, however, once called, `this` still references the window object because the GEC is executing the function

              ![image9](/images/image9.png)

            - example 3: Method Invocation

              take the same function, use it as a property (method) on an object. When we *call* the function on the object, `this` references the object itself

              ![image10](/images/image10.png)

            - example 4: Constructor Invocation

              when a function is called with the `new` keyword to create an instance of an object (CI), the `this` keyword refers to the newly created object

              ![image11](/images/image11.png)

    2. **Execution phase** (Code Execution) - code is executed one line at a time, top to bottom (synchronous), only executing the next line once the current line has executed (single-threaded)

    :warning: think of both phases as sifting through your code twice

  - **Call Stack** (EC Stack) - how code is executed in the Execution phase
  
    - a collection of ECs to be executed

    - follows a *last-in-first-out* principle

    - since JS is single-threaded, ECs are created for every event, function call, etc.

  - Example 1:

    GEC Creation phase

    a. (when the script is loaded) GEC is created first and *pushed* to the *call stack*

    b. Function and variable declarations, part of the global scope (not part of each function scope), are hoisted and stored in memory (GEC VO)

    GEC Execution phase

    c. line by line, variables are initialized and functions are *called*

    d. when a function is *called*, a FEC is created and is *pushed* to the top of the *stack*. The EC at the top of the *stack* becomes the "active" EC, and will be executed first

    FEC Creation phase

    e. Function and variable declarations, part of this function scope, are hoisted and stored in memory (FEC VO)

    FEC Execution phase

    g. once the execution of a code within an active FEC is complete, the engine removes (*pops*) that FEC from the *stack*

    h. as functions are called, FECs are created and pushed/popped to/from the *stack*

  - Example 2:

    a. `first()` function is *called* and *pushed* to the *stack*, but not executed

    b. `second()` function is *called* and *pushed* to the *stack*, but not executed

    c. `third()` function is *called* and *pushed* to the *stack* and is then executed and is *popped* off the *stack*

    d. `second()` is executed and *popped* off the *stack*

    e. `first()` is executed and *popped* off the *stack*

    ![image24](/images/image24.png)

    ![image25](/images/image25.png)

  - Example 3:

    GEC Creation phase

    a. GEC is created and *pushed* to the *stack*

    b. `name` variable and `first()`, `second()`, `third()` function declarations are stored in memory (GEC VO)

    :warning: `name` variable is declared, but not initialized

    :warning: variables and functions declared within `first()`, `second()`, and `third()` functions are not stored in memory (GEC VO)

    GEC Execution phase

    c. `name` is initialized with the value `Victor`

    d. `first()` function is called, creating a FEC. This context is placed on top of the *stack*, becoming the "active" context, and will be executed

    FEC Creation phase (`first()`)

    e. functions and variables within `first()` will be hoisted and stored in memory (FEC VO) (e.g. `var a`)

    FEC Execution phase (`first()`)

    f. `var a` is initialized and set to the value of `Hi!`. `second()` function is called, creating a new FEC, pushing it to the top of the *stack* to be executed, pausing the execution of the `first()` FEC

    FEC Creation phase (`second()`)

    g. functions and variables within `second()` will be hoisted and stored in memory (FEC VO) (e.g. `var b`)

    FEC Execution phase (`second()`)

    h. `var b` is initialized and set to the value of `Hey!`. `third()` function is called, creating a new FEC, pushing it to the top of the *stack* to be executed, pausing the execution of the `second()` FEC

    FEC Creation phase (`third()`)

    i. functions and variables within `third()` will be hoisted and stored in memory (FEC VO) (e.g. `var c`)

    FEC Execution phase (`third()`)

    j. `var c` is initialized and set to the value of `Hello!`. `Hello!` is logged to the console. Since all code has executed, the `third()` FEC is remove (*popped*) from the *stack*, making the `second()` FEC the new active context

    k. `second()` FEC continues execution, logging `Hey!` to the console. Since all code has executed, the `second()` FEC is remove (*popped*) from the *stack*, making the `first()` FEC the new active context

    l. `first()` FEC continues execution, logging `Hi!` to the console. Since all code has executed, the `first()` FEC is remove (*popped*) from the *stack*

    ![image5](/images/image5.png)

    ![image12](/images/image12.png)