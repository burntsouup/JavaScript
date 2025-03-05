
//console.dir(document); // returns properties of the document object
//window

// ------------------------------
// SELECTING ELEMENTS
// ------------------------------

// console.log(document.getElementById("main-title"));
// console.log(document.getElementById("main-title").innerHTML);
// console.dir(document.getElementById("main-title"));
// console.log(document.getElementsByClassName("firstParagraph"));
// console.log(document.getElementsByClassName("list-item"));
// console.log(document.getElementsByTagName("h1"));

// console.log(document.querySelector("h1"));
// console.log(document.querySelector("#main-title"));
// console.log(document.querySelector(".firstParagraph"));
// console.log(document.querySelector(".list-item"));
// console.log(document.querySelectorAll(".list-item"));

// ------------------------------
// MANIPULATING NODES
// ------------------------------ 

const h1 = document.querySelector('h1');
// console.dir(h1);

// console.log(h1.id);
// console.log(h1.textContent);

h1.textContent = "I'm changing the Text node using JS!";

h1.className = "new-class";
// console.log(h1.className);

h1.style.color = 'blue';
h1.style.backgroundColor = 'red';

// console.log(h1.getAttribute("id"));
h1.setAttribute("new-atr", "new-atr-value");

// ------------------------------
// ADDING/REMOVING ELEMENTS
// ------------------------------

const section = document.querySelector('section');
section.innerHTML = '<p>replacing content with a new paragraph</p>';

section.insertAdjacentHTML('beforebegin', '<p>inserting content "beforebegin"</p>');
section.insertAdjacentHTML('beforeend', '<p>inserting content "beforeend"</p>');

const newPara = document.createElement('p');
section.append(newPara);
newPara.textContent = 'new paragraph Element';
// section.before(newPara);
// section.prepend(newPara);
// section.after(newPara);
// section.replaceWith(newPara);
// section.insertAdjacentElement('afterend', newPara);

const newPara2 = newPara.cloneNode(true);
newPara2.textContent = 'new paragraph Element 2';
newPara.append(newPara2);
newPara2.remove();

// ------------------------------
// DOM TRAVERSAL
// ------------------------------

// console.dir(h1);

h1.parentNode;
h1.parentElement;
h1.parentNode.parentNode.parentNode;

const ul = document.querySelector('ul');
ul.childNodes;
ul.firstChild;
// ul.firstChild.style.background = 'yellow';
ul.lastChild;

ul.children;
ul.firstElementChild;
ul.firstElementChild.style.background = 'yellow';
ul.lastElementChild;

for (let el of ul.children) {
    el.style.background = 'green';
}
ul.children[1].style.background = 'fuchsia';


const item1 = ul.children[0];
item1.nextSibling;
item1.nextElementSibling;
// item1.previousSibling;
// item1.previousElementSibling;
item1.nextElementSibling.nextElementSibling.style.background = 'aquamarine';
