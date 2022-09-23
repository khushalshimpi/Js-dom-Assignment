// Task:- Fetch all the product name and store in an array

//  Declarign the empty array

let arr = [];

// Give the innertext  and push the text in empty array and replace will take two parameter first is what you have to replace and second is replaced value.

document
  .querySelectorAll(".as-imagegrid-item")
  .forEach((elem) => arr.push(elem.innerText.replace("\nSupport", "")));

console.log(arr);
