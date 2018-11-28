"use strict";
// capture the input and append it to a list, later use localstorage.
let todo = {};
let deletedList = {};
let doneList = {};
let count = 0;

function randomGenerator() {
    return Math.floor(Math.random() * Math.floor(25893));
}

document.addEventListener('keydown', function(event) {
    if (event.keyCode == '13') {
        if (event.target.id=='input-text'){
            let value = document.getElementById("input-text").value;
            let key = randomGenerator();
            if (!(/^ *$/.test(value))) {
                let item = {
                    id: key,
                    name: value,
                }
                todo[key] = item;
                document.getElementById("input-text").value = "";
                display("todo-list-section");
            }
        } else if (event.target.id=='edit-text') {
            let value = document.getElementById("edit-text").value;
            let key =  document.getElementById("edit-text").dataset.key;
            if (!(/^ *$/.test(value))) {
                let item = {
                    id: key,
                    name: value,
                }
                todo[key] = item;
                display("todo-list-section");
            }
        }
    }
});

function display(ulId) {
    let iterArray = ((ulId == "todo-list-section")? todo: (ulId == "deleted-list-section") ? deletedList: doneList);
    document.getElementById(ulId).innerHTML = '';
    for (let key in iterArray) {
        var newElement = document.createElement('li');
        newElement.className = 'new-list-element';
        newElement.innerHTML = '<div>';
        newElement.innerHTML += `<span data-key=${iterArray[key].id} class='todo-element'>${iterArray[key].name}</span>`;
        if (ulId == "todo-list-section") {
            newElement.innerHTML += `<span class='action-icons'><i data-action="done" data-key=${iterArray[key].id} class="fa fa-check" aria-hidden="true"></i><i data-action="delete" data-key=${iterArray[key].id} class="fa fa-trash" aria-hidden="true"></i></span>`;
        }
        newElement.innerHTML += '</div>';
        document.getElementById(ulId).appendChild(newElement);
    }
}

document.addEventListener('click', function(event) {
    if (event.target.tagName == "I") {
        let action = event.target.dataset.action;
        let id = event.target.dataset.key
        if(action == 'delete') {
            deletedList[id] = todo[id];
            delete todo[id];
            display("todo-list-section");
            display('deleted-list-section');
        } else if(action == "done") {
            doneList[id] = todo[id];
            delete todo[id];
            display("todo-list-section");
            display('done-list-section');
        }
    }
});

document.addEventListener('dblclick', function(event) {
    let Oldevent = event;
    display('todo-list-section');
    if (event.target.tagName == 'SPAN') {
        let id = event.target.dataset.key;
        let inputElement = document.createElement('input');
        inputElement.id = 'edit-text';
        inputElement.dataset.key = id;
        inputElement.value = todo[id].name;
        let newSpanElement = document.querySelectorAll(`[data-key="${id}"]`)[0];
        console.log(newSpanElement.parentElement.parentElement);
        newSpanElement.parentElement.parentElement.replaceChild(inputElement, newSpanElement.parentElement);
    }
});

