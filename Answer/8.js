// Topic :- Remove Element

// Task :-  Remove alternate languages from the home page languages listed

let arr = document.querySelectorAll("#SIvCob a");

// Remove even number of element in anchor tag
for (i = 0; i < arr.length; i++) {
  if (i % 2 == 0) {
    arr[i].remove();
  }
}
