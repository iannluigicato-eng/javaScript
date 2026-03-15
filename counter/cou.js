const dec = document.getElementById("decr"); 
const reset = document.getElementById("reset"); 
const inc = document.getElementById("incr"); 
const countlabel = document.getElementById("countLabel");  
let count = 0;

dec.onclick = function (){
         countlabel.textContent = count-=1;
}

document.getElementById("reset").onclick = function (){
         document.getElementById("countLabel").textContent = count = 0;
}


document.getElementById("incr").onclick = function (){
         document.getElementById("countLabel").textContent = count+=1;
}

