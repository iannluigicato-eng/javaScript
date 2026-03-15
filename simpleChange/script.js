const display = document.getElementById("display");
const text = document.getElementById("text");
const btn = document.getElementById("btn");
function modify(){
    display.textContent = "Hello " + text.value;
}

function hoverme(){
btn.style.color = "pink"
}


function unhover(){
btn.style.color = "black"
}