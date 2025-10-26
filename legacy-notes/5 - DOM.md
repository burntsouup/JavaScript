# DOM

:pushpin: refer to the samples folder and movies app within the [DOM folder](DOM)

- **HyperText Markup Language (`HTML`)**

    - **markup language** - describes the structure and presentation of a web page and it's content

    - **hypertext** - links that connect web pages

    - consists of a series of **Elements**, used to make content appear a certain way

    - **Element** anatomy:

        ![image40](/images/image40.png)

        - **opening/closing tags** - marks where the Element begins/ends, defines the name of the Element (e.g. `p` for paragraph), and is wrapped in closing angle brackets: `<`, `>`

            :bulb: **void** Elements - do not have a closing tag. Typically used to embed something (e.g. `<img>`)

            Common examples:

            - `<script>` - embed executable code or data

            - `<link>` - specified relationship with external source. Commonly used to link to a style sheet

            - `<canvas>` - used either with `Canvas API` or `WebGL API` to draw graphics and animations

                Content sectioning (organize document into logical pieces):

            - `<header>` - introductory content

            - `<h1>`, `<h2>`, `<h3>` - section headings

            - `<main>` - dominant content

            - `<section>` - generic standalone section

                Text content (organize blocks of content):
            
            - `<div>` - generic container for flow content

            - `<p>` - paragraph

            - `<ul>` - unorganized list of items

            - `<ol>` - organized list of items

            - `<li>` - item in a list

                Inline text (define meaning, structure, or style of text):
            
            - `<a>` - using the `href` attribute, create a hyperlink to another page or file

            - `<br>` - line break

            - `<span>` - generic inline container for phrasing content

                Media:

            - `<img>` - embeds an image

            - `<video>` - embeds a media player that supports video and audio

                Embedded content:

            - `<iframe>` - nested browsing content from another HTML page

                Table:

            - `<table>` - table content

                Forms:

            - `<button>` - interactive control activated by a user with some assistive technology

            - `<form>` - interactive control for submitting information

            - `<input>` - interactive control to accept data from a user

            - `<progress>` - displays indicator showing the progress of a task

            - `<label>` - caption for input

        - **attribute** - contains additional information that adjusts the behavior of the Element. Defined by an identifier followed by it's value. They are always specified in the opening tag

            :bulb: boolean attributes - an attribute without a value

            Examples - `lang` (declares language of web page), `title` (extra information; tooltip), `style` (add styles - color, font, size) `href` (URL), `src` (path to image), `width` and `height` (size for image), `alt` (alternate text for image)

            ```HTML
            <html lang="en">
            <p title="here's a tooltip!">This paragraph has a tooltip based on the title attribute!</p>
            <p style="color:blueviolet">This is a purple paragraph based on the style attribute!</p>
            <a href="https://youtube.com/">this is a link to YouTube based on the href attribute!</a>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/DOM-model.svg" width="100" height="100" alt="DOM tree"/>
            ```

        - **content**

        :bulb: Elements can be *nested*

    - Anatomy of an `HTML` document:

        ```HTML
        <!doctype html>
        <html lang="en-US">
        <head>
            <meta charset="utf-8" />
            <title>Here's my title!</title>
        </head>
        <body>
            <p>This is a paragraph.</p>
        </body>
        </html>
        ```

        - `<!doctype html>` - historically, `doctype` acted as reference to a set of rules that the page had to follow. This has changed with the latest version of `HTML` - *HTML5*. You must simply include this text

        - `<html>` - wraps all content on the page; called *root* Element

        - `<head>` - includes relevant content that defines the page, but not necessarily content visible to the user (e.g. JS code - `<script>`, CSS styling - `<link>`, metadata - `<meta>`, title - `<title>`)

        - `<meta>` - represents any metadata

        - `<title>` - sets the title of the page that will appear on the browser tab

        - `<body>` - contains all content that will display on the page (e.g. text, images, audio, etc.)

        ![image44](/images/image44.png)

        :bulb: content inside the `<body>` section will be displayed in the browser

- **Document Object Model (DOM)**

    - a hierarchical representation of *objects*, defining the structure of a web page

        :bulb: the **DOM** is built from an `HTML` document

    - it's a programming interface (a **web API**) that the JS language can use to interact and manipulate aspects of the web document

        :bulb: JS doesn't understand the `HTML` document directly. It can, however, interpret and interact with the **DOM**

    - this process starts when the server responds to a client's request by sending an `HTML` file. The client's browser parses the `HTML` file, starting the incremental construction of the **DOM**. The browser will initiate requests every time it finds links to external resources (e.g. stylesheets, scripts, images, etc.), which continues to build out the **DOM**

    - as the browser parses the `HTML` file, it turns the bytes of data to *characters*, then to *tokens*, that turn into **nodes**, and that are structured to form the **DOM tree**

        - **nodes** - *objects* that represent the `HTML` document. Each node can have a parent and/or child, creating a hierarchy, that forms the **DOM tree**. There are many types of nodes, the most common being **Element**, **Text**, and **Comment** nodes

            :bulb: the greater number of nodes, the longer it will take for the *Critical Rendering Path* to complete, ultimately impacting performance

            - `document` node - the **document object** is the root, top-level, node that represent the `HTML` document as a web page

                :bulb: `window` object - the *global object* that represents the *Global Execution Context* and the browser. It's created when the JS engine first receives a `script` file. The `document` object is a property of the `window` object

            - **Element** nodes - a type of node in the DOM. Elements are built with `HTML` tags (e.g. `<div>`, `<p>`, `<a>`, etc.)

                :bulb: the browser's developer tools includes the *Elements* tab, displaying all Element nodes but in a human-readable fashion

                :bulb: we typically manipulate Element nodes

            :bulb: any whitespace within our `HTML` file are **Text** nodes. **Text** nodes are excluded from the browser's *Elements* tab

            ![image37](/images/image37.png)

            ![image17](/images/image17.png)

    - manipulating the DOM using a **DOM interface**

        - **DOM interface** - a set of **methods**, **properties**, and **events** for interacting with particular DOM objects. These interfaces allow languages, like JS, to manipulate Elements or components on a web page

            - **properties** - a value associated with a DOM object (e.g. `innerHTML`, `id`, `textContent`, `style`, etc.)

                :bulb: every node object has a list of properties that we can interact with. For example, the follow code shows all properties of the `<h1>` Element node

                ```JavaScript
                console.dir(document.getElementById("main-title"));
                ```

                ![image45](/images/image45.png)

            - **methods** - an action you can take on a DOM object. Methods allow you to perform operations on Elements (e.g. `getElementById()`, `querySelector()`, etc.)

                :bulb: think of *properties* as **nouns** (the state of an object) and *methods* as **verbs** (an action you take take on an object)

            example: Use `getElementbyId` (a *method*) and `innerHTML` (a *property*) to change the title of the web page

            ```HTML
            <h1 id="main-title">Let's learn about the DOM!</h1>
            ```

            ```JavaScript
            document.getElementById("main-title").innerHTML = "Hello World!";
            // alternative option:
            document.querySelector("#main-title").innerHTML = "Hello world!";
            ```

            :bulb: an object can implement many different interfaces. This can be confusing. It's best to focus on the most commonly used interfaces instead - [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document), [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element), [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)

    - Common *interfaces*:

        ```HTML
        <h1 id="main-title">Let's learn about the DOM!</h1>
        <p class="firstParagraph">This is the first paragraph!</p>
        <section>this is a section!</section>
        <ul>
            <li>Item 1</li>
            <li class="list-item">Item 2</li>
            <li class="list-item">Item 3</li>
        </ul>
        ```

        - selecting Elements:

            ```JavaScript
            document.getElementById("main-title"); //returns Element object whose id matches the specified string

            document.getElementsByClassName("firstParagraph"); //returns array-like object (HTMLCollection) of all child Elements that have the specified class name
            document.getElementsByClassName("list-item");

            document.getElementsByTagName("h1"); //returns array-like object (HTMLCollection) of all child Elements that have the specified tag

            document.querySelector("h1"); //returns first Element object that matches the specified CSS selector string
            document.querySelector("#main-title"); //returns same object as the one above
            document.querySelector(".firstParagraph");

            document.querySelectorAll(".list-item"); //returns all Elements that match the specified CSS selector string, in an array-like object (NodeList)
            ```

            :bulb: `querySelector` is more commonly used

            :bulb: a NodeList is *static* meaning that the collection of nodes does not update automatically when the DOM changes whereas an HTMLCollection is *live* meaning that the nodes do update automatically

        - manipulating Nodes:

            ```JavaScript
            const h1 = document.querySelector('h1');
            console.dir(h1); //returns the node's properties
            h1.textContent; //returns the Text node within h1
            h1.textContent = "I'm changing the Text node using JS!"; //change the Text node
            h1.id; //returns id
            h1.className; //returns className; currently empty
            h1.className = "new-class"; //set class
            h1.style.color = 'blue'; //set color of Text node to blue
            h1.style.backgroundColor = 'red'; //set color of background to red
            h1.getAttribute("id"); //returns value of specified attribute
            h1.setAttribute("new-atr", "new-atr-value"); //sets the value of an attribute. If it already exists, the value is updated; otherwise a new attribute is added with the specified name and value
            ```

        - adding/removing Elements:

            ```JavaScript
            const section = document.querySelector('section');
            section.innerHTML = '<p>replacing content with a new paragraph</p>'; //replaces all HTML content inside an Element

            section.insertAdjacentHTML('beforebegin', '<p>inserting content "beforebegin"</p>'); //inserts HTML at a specific position relative to an Element
            section.insertAdjacentHTML('beforeend', '<p>inserting content "beforeend"</p>');
            ```

            :bulb: `innerHTML` re-pareses or replaces all content of an Element which can be inefficient for large DOM trees

            :bulb: `innerAdjacentHTML` does not remove or replace existing content; it adds new content relative to the specified location (before, after, or inside at specific points). It does not re-parse, therefore preserving, the entire inner content of an Element which can be more efficient

            :bulb: `innerAdjacentHTML` positions:

            ![image48](/images/image48.png)

            ```JavaScript
            const newPara = document.createElement('p'); //create Element
            section.append(newPara); //append new Element to section Element
            newPara.textContent = 'new paragraph Element'; //create Text node in new paragraph Element
            
            section.before(newPara); //move the new paragraph Element before the section Element
            // section.before(newPara);
            // section.prepend(newPara);
            // section.after(newPara);
            // section.replaceWith(newPara);
            // section.insertAdjacentElement('afterend', newPara);

            const newPara2 = newPara.cloneNode(true); // clone node
            newPara2.textContent = 'new paragraph Element 2';
            newPara.append(newPara2);
            newPara2.remove(); // remove node
            ```

    - **DOM traversal**:

        - recall, the **DOM tree** is a hierarchical representation of objects (called nodes) that define the structure of a web page. We can use DOM interfaces to can manipulate these nodes. However, instead of specifying each Element that we would like to manipulate, since the DOM tree-like structure is defined by **parent**, **children**, and **sibling** node relationships, we can more effectively navigate the DOM tree using certain properties. This is called **DOM traversal**

            - **parent** node properties:

                ```JavaScript
                h1.parentNode; //returns the parent node in the DOM tree
                h1.parentElement; //returns the parent Element node in the DOM tree
                h1.parentNode.parentNode; //returns the grandparent node in the DOM tree
                ```

                :bulb: the parent of any node is an Element node since Text and Comment nodes cannot be parent nodes. The only exception is that since the parent of the `html` node is the `document` node, `parentElement` returns `null` while `parentNode` returns the `document` node. Therefore `parentNode` is more commonly used

            - **children** node properties:

                ```JavaScript
                const ul = document.querySelector('ul');
                ul.childNodes; //returns a NodeList of child nodes of the Element node
                ul.firstChild; //returns the first child node
                ul.lastChild; //returns the last child node
                ul.firstChild.style.background = 'yellow'; //returns error

                ul.children; //returns a NodeList of child Element nodes of the Element node
                ul.firstElementChild; //returns the first child Element node
                ul.firstElementChild.style.background = 'yellow'; //changes the background color of the first child Element node to yellow
                ul.lastElementChild; //returns the last child Element node

                for (let el of ul.children) {
                    el.style.background = 'green';
                } //iterates through each node in the NodeList, changing the background green
                ul.children[1].style.background = 'fuchsia'; //changes the background of the second node in the NodeList to fuchsia
                ```

                :bulb: `childNodes` property can return Element, Text, and Comment nodes

                :bulb: `ul.childNodes` returns 4 Text nodes which represents the whitespace between Elements within our `HTML` file. Therefore, if we try to change the background color of the first child node (`ul.firstChild.style.background = 'yellow';`), it won't work because the first child is a Text node. The `children`, `firstElementChild`, and `lastElementChild` properties were created to only return child Element nodes

                ![image47](/images/image47.png)

                ![image46](/images/image46.png)

                :bulb: `NodeList` objects are collections of nodes. They are NOT JS arrays, however, we can use some methods (e.g. `forEach()`) and loops (e.g. *for-of* loop) to work with these objects

            - **sibling** node properties:

                ```JavaScript
                const item1 = ul.children[0];
                item1.nextSibling; //returns the next sibling node in the NodeList
                item1.nextElementSibling; //returns the next sibling Element node in the NodeList
                // item1.previousSibling;
                // item1.previousElementSibling;
                item1.nextElementSibling.nextElementSibling.style.background = 'aquamarine'; //changes the background of the next sibling Element node in the NodeList to aquamarine
                ```

    - Styling the **DOM**

        - the `style` property is used to apply inline styles directly to ELements programmatically (e.g. review previous examples on DOM manipulation)

            ```JavaScript
            h1.style.color = 'blue';
            h1.style.backgroundColor = 'red';
            ```

        - **CSS** (Cascading Style Sheets) is used to style and define the layout of web pages. For example, defining the font, size, color, and spacing of content

            :bulb: inline styles take priority over **CSS**

        - recall the steps taken to *style* the DOM:

            1. the browser **parses** the `HTML` file, building the **DOM** node tree. The browser will initiate requests every time the parser finds links to external resources, such as stylesheets (`CSS` files), scripts (JS files), or embedded references

            2. once the **DOM** tree is built, the browser constructs the CSS object model (`CSSOM`), that defines how to style certain nodes of the **DOM**

                ![image38](/images/image38.png)

            3. once the **DOM** and `CSSOM` trees are built, the `Render tree` is created, used to capture visible nodes from the **DOM** tree and any associated styles

                ![image39](/images/image39.png)

            4. after the Render tree is created, the `layout` is determined, defining size and position of each object on the page

                :bulb: subsequent recalculations are called **reflows**, sparking a **repaint**

            5. after layout, pixels are `painted` onto the screen, displaying visual content for the user to see

                :bulb: these steps define the **Critical Rendering Path**; how the browser converts HTML, CSS, and JS into pixels on the screen. These steps are performed by the **Rendering engine**

                ![image34](/images/image34.png)

        - **CSS** is a rule-based language that are defined by *styles* applied to Elements

        - **CSS** syntax:

            - **selector** - selects the Element we are going to style

            - **declarations** - property:value pairs wrapped in {}

        - **Selectors**:

            ```HTML
            <h2>Second header</h2>

            <h3 id="thirdHeader">Third header</h3>

            <p class="firstParagraph">This is the first paragraph!</p>

            <p>
                This is yet another paragraph. <span>Here is a span element.</span> It contains an <em>emphasized</em> element.

                There's also a <a href="https://example.com">link</a>. <span>Here is another span element.</span>
            </p>

            <button class="joinBtn">Hover over me!</button>

            <span>Here is yet another span element .. but it's not within the last paragraph</span>
            ```

            - **type** - selects all Elements of a given type

                ```CSS
                /* apply styles to all <h2> Elements */
                h2 {
                    font-size: 1.5em;
                    margin: 1rem 0.5rem;
                    color: orange;
                }
                ```

            - **class** - matches Elements based on their class attribute

                ```CSS
                /* apply styles to Elements that have a class attribute called firstParagraph */
                .firstParagraph {
                    font-weight: bold;
                    color: #ff02fb;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                ```

                :bulb: p.firstParagraph applies styles to any <p> Elements that have a class of `firstParagraph`

            - **id** - matches Elements based on their id attribute

                ```CSS
                /* apply styles to Elements that have an id attribute called thirdHeader */
                #thirdHeader {
                    color: #00ff3c;
                    width: 200px;
                    height: 50px;
                    padding: 10px;
                    border: 2px solid black;
                    margin: 20px;
                }
                ```

            - **attribute** - matches Elements based on a given attribute

                ```CSS
                /* apply styles to <a> Elements with an href matching "https://example.org" */
                a[href="https://example.com"] {
                    font-size: 2em;
                }
                ```

            - **state** - a keyword added to a selector that specifies a special state of the selected Elements

                ```CSS
                /* apply styles to a <button> element when hovering over */
                .joinBtn {
                    width: 10em;
                    height: 5ex;
                    background-color: gold;
                    border: 2px solid firebrick;
                    border-radius: 10px;
                    font-weight: bold;
                    color: black;
                    cursor: pointer;
                }

                .joinBtn:hover {
                    background-color: rgb(228, 33, 33);
                }
                ```

            - **descendant** - combines two selectors such that Elements matched by the second selector are selected if they have an ancestor Element matching the first selector. Represented by a *space*

                ```CSS
                /* apply styles to an <em> Element that directly follows a <p> Element */
                p em {
                    color: rebeccapurple;
                    font-size: 1.5em;
                }
                ```

                ```CSS
                /* apply styles to a <span> Elements that directly follow a <p> Element */
                p span {
                    color: red;
                }
                ```
