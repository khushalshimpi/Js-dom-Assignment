// Topic:- Get Element By Id, Create Element, Create Text Node, Append Child.

// Task :-  Add another FAQ 'My New FAQ' to the list



// Select the article text
let list = document.querySelector(".article .accordion-homepage");

// create section tag
let newElem = document.createElement("section");

// give class to section tag.
newElem.className = "parent";

// It create h3 element in section
newElem.appendChild(document.createElement("h3"));

// create text in h3 element
newElem1 = document.createTextNode("My New FAQ");

// add text in h3
newElem.querySelector("h3").appendChild(newElem1);


list.appendChild(newElem);
