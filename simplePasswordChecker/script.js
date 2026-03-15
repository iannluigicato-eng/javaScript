
const display = document.getElementById("display");
const name = document.getElementById("name");
const pass = document.getElementById("pass");

function check(){
let n = name.value;
let p = pass.value;
const uname = "luigi";
const upass = "2725";

if(n===uname && p===upass){
    display.value = "Welcome luigi";
}
}