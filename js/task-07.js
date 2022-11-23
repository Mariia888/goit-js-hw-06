const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

console.log(inputEl);
console.log(spanEl);


inputEl.addEventListener("input", (event) => {
 const size = inputEl.value;
 spanEl.style.fontSize = size + "px";
}); 

//input.value {
 //   spanEl.getElementsByClassName.fontSize = input.value + "px"
//});


