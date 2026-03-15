const display = document.getElementById("display");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

function modify() {
let n1 = Number(num1.value);
let n2 = Number(num2.value);
let sum = n1 + n2;
display.textContent = "The Sum is " + sum;
}


function reset (){
    display.textContent = "The Sum is...";
}


function hoverme(){
    const btn = document.getElementById("btn").style.color = "red";


}

function unhover(){
    const btn = document.getElementById("btn").style.color = "black";
    
}