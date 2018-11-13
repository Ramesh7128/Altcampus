"use strict";
// Log message in console saying "I'm Learning Javascript"
console.log("I'm learning Javascript");

// var name = "Mark";  "Mark" is a string.  What is name?
// name is a varible that holds value "Mark"


// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).
var name;
var admin;
name = "John";
admin = name;
alert(admin);

// Use alert function to to show a message saying “Hello World”  https://javascript.info/alert-prompt-confirm
alert("Hello World");

// Write a function which uses prompt to take the name of person and greets them. i.e "Welcome Arun"
function greetings1() {
    var name = prompt("Enter your name");
    alert("Welcome " + name);
}
greetings1();

// Modify the previous program such that only the users Alice and Bob are greeted with their names.
function greetings() {
    var name = prompt("Enter your name");
    if (name === "Alice" || name === "Bob") {
        alert("Welcome " + name);
    }
}

greetings();

// Find the error if any (var product cost = 3.45;)
// variable name cannot have a space in between.