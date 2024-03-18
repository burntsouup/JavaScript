




- `this` keyword

    - references an object, depending on the current Execution Context

    - the "object" in question depends on how `this` is being invoked

    - For example:

        1. alone, `this` refers to the global object (`window` object in the browser, `global` object in Node.js)

            ![image30](/images/image30.png)

        2. when a function is called, `this` refers to the object that called the function

            :bulb: this will typically be the global object, since the GEC is executing the function

            ![image9](/images/image9.png)

            :bulb: for arrow functions, `this` always refers to the object that defined the arrow function (e.g. the global `window` object)

        3. in an object method, `this` refers to the object itself

            ![image10](/images/image10.png)

       



    

    - example 4: Constructor Invocation

    when a function is *called* with the `new` keyword to create an instance of an object (CI), the `this` keyword refers to the newly created object

    ![image11](/images/image11.png)