console.log("Hello");

// Data types in JS
let name = "Samson";
// name = 1000;
// console.log(name);
// document.writeln(name + " Type is. :" + typeof name + "<br>");

// name = 12345.6789;
// document.writeln(name + " Type is. :" + typeof name + "<br>");
// name = true;
// document.writeln(name + " Type is. :" + typeof name + "<br>");
// name = undefined;
// document.writeln(name + " Type is. :" + typeof name + "<br>");
// name = null;
// document.writeln(name + " Type is. :" + typeof name + "<br>");
// name = Symbol;
// document.writeln(name + " Type is. :" + typeof name + "<br>");

// // Reference Types JS
// let colors = ["red", "pink", "blue", 1];
// document.writeln(colors[0] + " Type is. :" + typeof colors + "<br>");
// document.writeln(colors[1] + " Type is. :" + typeof colors + "<br>");
// document.writeln(colors[2] + " Type is. :" + typeof colors + "<br>");
// document.writeln(colors[3] + " Type is. :" + typeof colors + "<br>");

// let person = {
//   name: "Samson",
//   age: 19,
//   address: "Vijayawada",
// };

// document.writeln(person.name + " Type is. :" + typeof person.name + "<br>");
// document.writeln(person.age + " Type is. :" + typeof person.age + "<br>");
// document.writeln(
//   person.address + " Type is. :" + typeof person.address + "<br>"
// );

// Functions in JS 
function displayDetails(name)
{
    document.writeln(name);
}

displayDetails("Samson");

document.writeln(person.name+" Type is. :"+typeof person.name+ "<br>");



// Arithmatic operaters in JS 
let x=30;
let y=20;
function add(x,y){
    return x+y;
}

function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function division(x,y){
    return x/y;
}
function exponent(x,y){
    return x**y;
}