// Topic :-  querySelector, mouseover, click eventListener,  callback function, style.

// Task :- Target the button and change background colour on mouseover.


let sampleBtn = document.querySelector(".btn-cta-big");

let sampleBtnText = document.querySelector(".btn-cta-big .login-btn-text");

// set red color in background on mouseover
sampleBtn.addEventListener("mouseover", ()=>{
  sampleBtnText.style.background = "red";
});

// set transparent background on mouseout
sampleBtn.addEventListener("mouseout", () =>{
  sampleBtnText.style.background = "transparent";
});


