const clock = document.getElementById("clock");

setInterval(function(){
   let time = new Date().toLocaleTimeString();
   clock.innerHTML = time;
}, 1000);