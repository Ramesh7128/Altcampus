"use strict";
// capture the input and append it to a list, later use localstorage.
let todo = [];
let deletedList = [];
let doneList = [];
document.addEventListener('keydown', function(event) {
    if (event.keyCode == '13') {
        let value = document.getElementById("input-text").value;
        let item = {
            name: value,
            done: false,
        }
        todo.push(item);
        var newElement = document.createElement('li');
        newElement.innerHTML = `<span>${value}</span><span><button class='delete'>Delete</button><button class='done'>Done</button></span>`;
        document.getElementById("todo-list-section").appendChild(newElement);
        document.getElementById("input-text").value = "";
    }
});

document.addEventListener('click', function(event) {
    let deleteToDo = document.getElementsByClassName('delete');
    let doneToDo = document.getElementsByClassName('done');
    if (event.target.tagName == "BUTTON") {
        event.target.parentElement.parentElement.parentElement.removeChild(event.target.parentElement.parentElement);
    }
    if (event.target.className == 'delete') {
        document.getElementById('deleted-list-section').appendChild(event.target.parentElement.parentElement);
    } else if (event.target.className == 'done') {
        document.getElementById('done-list-section').appendChild(event.target.parentElement.parentElement);
    }
    console.log("click registerd", deleteToDo);
});

