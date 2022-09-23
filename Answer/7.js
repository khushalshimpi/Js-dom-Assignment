// Topic :- Form, Value, Submit

// Task :-  To Search a topic in the MDN Search bar.
//  First add a text to search in the search bar and then hit the submit search button to search the docs using DOM

const searchInput = function (text) {
  let input = document.querySelector("#hp-search-input");
  input.value = text;
  let form = document.querySelector("#hp-search-form");
  form.submit();
}
searchInput("css classes");
