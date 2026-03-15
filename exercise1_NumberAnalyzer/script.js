const type = document.getElementById("type");
const sign = document.getElementById("sign");
const square = document.getElementById("square");
const num = document.getElementById("num");

function solve(){
let n = Number(num.value);

if(n %2== 0){
   type.value = "Even";
}else {
    type.value = "Odd";
}

if (n>0){
    sign.value = "Positive Number";
}else if (n<0){
    sign.value = "NiggaTive Number";
}

let nsq = n * n;
square.textContent = nsq;
}