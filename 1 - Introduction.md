# INTRODUCTION

What is JavaScript?

- JS is a **dynamic**, **weakly typed** programming language **compiled at runtime**

- It can be executed as part of a webpage in a browser or directly on any machine ('host environment')

- Created to **make webpages more dynamic** (e.g. change content on a page inside the browser)

- Originally, called 'LiveScript' but renamed due to the popularity of Java, at the time  

  - note - JS is independent of Java
  
How do webpages work?

- User visits/interacts with browser through their client/machine

  - Initial visit - request is sent to the server; a computer where the webpage sits (where the HTML file is posted)

    - Server loads webpage (HTML file) and sends it back to your browser (response)

    ![image1](/images/image1.png)

- What if the user clicks on a form on that webpage?

  - Triggers a new request (sent from client to server)

    - Server processes request, maybe stores some data in a DB, and then responds back with a new HTML file webpage

- JS makes the client/browser experience more "reactive"
  - E.g. instead of sending a second response, the originally loaded page could, instead, dynamically change to meet the needs of the user

  ![image2](/images/image2.png)

How is JS executed?

- **JS Engine** - program that receives source code, loads it, parses it, compiles it to binary instructions (machine code) that the CPU understands, and then executes it

  ![image3](/images/image3.png)

  - built into our browser (V8 in Chrome, SpiderMonkey in Firefox, etc.)

  - engine receives the data, loads it, parses it, evaluates script, compiles script, and then compiles the code

    ![image4](/images/image4.jpg)

    ![image13](/images/image13.png)

- How the JS Engine works

  - **Execution Context** (EC) - environment where code is executed

    - **Global Execution Context** (GEC) - when the engine receives a script file, by default, it creates a single EC, called the GEC. This is where all code (variables and functions) that are not inside a function are stored and executed

      - note - the GEC for the browser is the `window` object. The GEC for a non-browser is the `global` object

    - **Function Execution Context** (FEC) - whenever a function is called, the engine creates a FEC within the GEC, to execute code within that function

      ![image8](/images/image8.png)

  - EC phases:

    1. **Creation** (Memory Allocation)

        a. **Variable Object** - a container within the EC that stores all variables and functions (as key-value pairs)

          - *hoisting* - variable and function declarations are moved to the top of their respective scopes during this phase

            - note - functions can be called even before they're declared in code

            - note - variable declarations are moved to the top of their scope, but NOT their assignments. Variables declared with the `var` keyword are set to `undefined` and will output `undefined`, prior to assignment (`let` or `const` declarations would output a ReferenceError)

              ![image6](/images/image6.png)

        b. **The Scope Chain** - nested Variable Objects, representing scopes for each function; each VO has a reference to a parent scope, forming a chain

          - **lexical scoping** - when a function is defined within another function, the inner function has access to code defined in the outer function (called *closure*) and any parent code. However the outer function does not have access to code within the inner function

            ![image7](/images/image7.png)

        c. **Setting "this" keyword**

          - `this` - references another value (typically an object), that represents the current EC (either GEC or FEC)

            - example 1: Global Scope
              ```JavaScript
              console.log(this)  //this references the window object (browser), since the GEC is executing the function
              ```

            - example 2: Global Scope

              introduce a function, however, once called, `this` still references the window object because the GEC is executing the function

              ![image9](/images/image9.png)

            - example 3: Method Invocation

              take the same function, use it as a property (method) on an object. When we call the function on the object, `this` references the object itself

              ![image10](/images/image10.png)

            - example 4: Constructor Invocation

              when a function is called with the `new` keyword to create an instance of an object (CI), the `this` keyword refers to the newly created object

              ![image11](/images/image11.png)


    2. **Execution** (Code Execution) - code is executed one line at a time, top to bottom (synchronous), only executing the next line once the current line has executed (single-threaded)

  - How code is executed: - **Call Stack** (EC Stack) 
  
    - a collection of ECs to be executed

    - since JS is single-threaded, ECs are created for every event, function call, etc.

    - Steps:

      a. (when the script is loaded) GEC is created first and pushed to stack

      b. (GEC VO) Memory is allocated for all function and variable declarations

      b. JS Engine creates an FEC for each function call. Each FEC is placed on top of the stack, of the currently executing EC. The EC at the top of the stack becomes the "active" EC, and will be executed first

      c. When the execution of a code within an active FEC is done, the engine removes that FEC from the stack, moving onto the next FEC, etc.

    - Example:
    
        ![image5](/images/image5.png)

      i. GEC created and pushed to base of stack

      ii. `name` variable and `first`, `second`, `third` function declarations stored in the GEC VO

      iii. FEC created for the `first` function call. This context is placed on top of the stack, becoming the "active" context, and will be executed

      iv. within the `first` FEC, var a = "Hi!" is stored in the FEC (not the GEC). `second` function is called, creating a new FEC, pushing it to the top of the stack, pausing the execution of the `first` FEC

      v. the now active `second` FEC stores the `var b = "Hey!"` and then invokes the `third` function call. This creates a new active FEC on the stack

      vi. within the `third` FEC, the `var c = "Hello!"` is stored and a message is logged to the console. The `third` FEC has performed all tasks (*returns*), so it is removed from the stack, making the `second` FEC the new active context

      ... etc. ...

        ![image12](/images/image12.png)

Dynamic? Weakly Typed?

- JS = (dynamic, interpreted) + weakly typed

- Dynamic:
  - Not pre-compiled, instead parsed and compiled "on the fly" (e.g. in the browser)
    - Code evaluated and executed at runtime

- Code can change at runtime (e.g. type of a variable)

- Weakly typed:

  - Data types are assumed automatically

  - You don’t define that some variable has to hold a certain value (e.g. in other languages, you need to define the data type in advance)

Executes in a Hosted Environment

- JS can be executed in different environments (e.g. browser, server, etc.)

- Browser-side:

  - JS's origin

  - JS invented to create more dynamic websites by executing in the browser

  - JS can manipulate HTML code, CSS, send background HTTP requests, etc.

  - JS cant access local file system, interact with OS, etc.

- Server-side

  - Google's V8 JS engine was extracted to run JS anywhere (not just in the browser); this tool is called 'Node.js'

  - Node.js can be executed on any machine and is therefore often used to build web backends

  - Node.js can access the local file system, interact with OS, etc.

  - Node.js cant manipulate HTML or CSS

- note - syntax is the same for both environments

JS vs Java

- Completely independent; syntax and principles

- Java doesn’t run in the browser

- Java is object-oriented and strongly typed

History of JS

- 1995 Netscape introduced 'LiveScript' which was the original name of JS

- 1996 Microsoft introduced its own version for IE

- Late 1996, JS submitted to ECMA (European Computer Manufacturing Association) to start standardization across all browsers (1997 - 2005)

- 2006 - 2011 Microsoft joined efforts to help develop

- ECMA runs a language called ECMAScript

- [ECMA Standard](https://ecma-international.org/publications-and-standards/standards/ecma-262/)

- ECMAScript is implemented by browser vendors as JS

- JS is the most famous ECMAScript implementation (others include ActionScript and Jscript)

- Browser vendors implement these standards into their JS engines

  - Each browser comes with its own JS engine that also defines which features are supported

- ECMAScript is under active development, therefore so is JS