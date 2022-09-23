// Topic :-  Query Selector, Event listeners, Changing Styles

// Task :-  Target the search box and on hover change thebackground color to red.



let inputSelector = document.querySelector(".searchinput___zXLAR"); 


inputSelector.addEventListener("mouseenter", red); 

inputSelector.addEventListener("mouseout", white); 

function red(){
    inputSelector.style.background = "red";
  } 

function white(){
    inputSelector.style.background = "white";
  } 