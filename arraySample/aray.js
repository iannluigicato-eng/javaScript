const message = document.getElementsByClassName("message");
const clock = document.getElementById("clock");
const btn = document.getElementById("btn");
const list = document.getElementById("list");
const item = document.getElementById("items");
const btn2 = document.getElementById("btn2");
const pg = document.getElementById("pg");
const msg = document.querySelectorAll(".msg");

//Array chaging the message in class
function add(){
for(let x = 0; x<message.length;x++){
    message[x].textContent = "Sushi";
    }
}

function backNigga(){
    for(let x = 0; x<message.length;x++){
    message[x].textContent = "Message " + [x+1];
    }
}

//For Clock
setInterval(function(){
    let time  = new Date().toLocaleTimeString();
    clock.textContent = time;
},1000);

//Like the event Listener but instead of List, Paragraph is used
function addP(){
let pgh = pg.value;
let p = document.createElement("p");
p.textContent = pgh;
document.body.appendChild(p);
}

//Array but now chaging collors
function changeBack(){
    for(let x = 0; x<msg.length; x++){
        msg[x].style.color = "black";
    }
}
function change() {
    const msg = document.querySelectorAll(".msg");
    for(let x = 0; x<msg.length ; x++){
        msg[x].style.color = "pink";
 }
}

//Main event, when button is clicked the message will be shown in the webpage
btn.addEventListener("click", function() {
    let it = item.value;
    let time = new Date().toLocaleTimeString();
    let li = document.createElement("li");
    li.textContent = it + " added at " + time;
    list.appendChild(li);

    item.value = "";
});


function hoverme(){
btn.style.color = "red";
}

function unhoverme(){
btn.style.color = "black";
}