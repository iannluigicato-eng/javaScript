const key = document.getElementById("key");
const list = document.getElementById("list");

key.addEventListener("keydown", function(k) {
    
    let p = document.createElement("p");
    p.textContent = k.key + " is pressed";
    list.appendChild(p);
});