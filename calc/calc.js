const display = document.getElementById("display");
const ikwal = document.getElementById("ikwal");

function appendToDisplay (input){
         display.value += input;
}

function clearDisplay(){
         display.value = "";
}

function equal(){
    try {
        display.value = eval(display.value);
    }catch (error){
        display.value = "Syntax Error";
    }
}

function hoverme(){
    ikwal.style.color = "red";
}

function unhoverme(){
    ikwal.style.color = "black";
}