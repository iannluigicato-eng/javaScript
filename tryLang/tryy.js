/*
console.log("Hello from tryy.js!");
console.log("I like niggers");

window.alert("I like niggers");
window.alert("I like You");

let fullName = "Iann Luigi";
let age = 19;
let student = true;

document.getElementById("p1").textContent = `My Name is ${fullName}`;
document.getElementById("p2").textContent = `I am ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${student}`;
let studentname;
let age;
let studentId;

document.getElementById("submit").onclick  = function(){
    studentname = document.getElementById("myName").value;
    age = document.getElementById("myAge").value;
    studentId = document.getElementById("myId").value;
    console.log(`Student's name is ${studentname}, age is ${age}, and student ID is ${studentId}`);
    document.getElementById("head").textContent = `Hello My Nigga, ${studentname}!`;
}

*/

const pi = 3.14159;
let radius;
let circumference;

document.getElementById("sub").onclick = function(){
       radius = document.getElementById("rad").value;
       radius = Number(radius);
       circumference = 2 * pi * radius;
       console.log(`This is the Radius ${radius}`);
       document.getElementById("cir").textContent = `The Circumference is ${circumference}cm`;
        
}

