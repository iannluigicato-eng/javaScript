const btn = document.getElementById("btn");
const item = document.getElementById("input");
const list = document.getElementById("list");

btn.addEventListener("click", function () {
    window.prompt();
    let it = item.value; 
    let time = new Date().toLocaleTimeString();
    let li = document.createElement("li");
    li.innerHTML = it + " added at " + time;
    list.appendChild(li);

    item.value = "";
});