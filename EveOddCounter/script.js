const even  = document.getElementById("even");
const odd = document.getElementById("odd");
const num = document.getElementById("num");

function check (){
let n = Number(num.value);
let ecount = 0;
let ocount = 0;


for(let i=0;i< n;i++ ){
    if(i%2===0 ){
    ecount++;
}


if(i%2!==0){
    ocount++;
}
}
even.value = ecount;
odd.value = ocount;
}