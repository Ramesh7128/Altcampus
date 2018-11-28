"use strict";
// capture the input and append it to a list, later use localstorage.

document.addEventListener('keydown', function(event) {
    let keyvalue = event.keyCode;
    console.log(keyvalue);
    let newElement= document.getElementById(keyvalue);
    newElement.currentTime = 0;
    newElement.play();
});

// function display(ulId) {
//     let iterArray = ((ulId == "todo-list-section")? todo: (ulId == "deleted-list-section") ? deletedList: doneList);
//     document.getElementById(ulId).innerHTML = '';
//     for (let key in iterArray) {
//         var newElement = document.createElement('li');
//         newElement.className = 'new-list-element';
//         newElement.innerHTML = '<div>';
//         newElement.innerHTML += `<span data-key=${iterArray[key].id} class='todo-element'>${iterArray[key].name}</span>`;
//         if (ulId == "todo-list-section") {
//             newElement.innerHTML += `<span class='action-icons'><i data-action="done" data-key=${iterArray[key].id} class="fa fa-check" aria-hidden="true"></i><i data-action="delete" data-key=${iterArray[key].id} class="fa fa-trash" aria-hidden="true"></i></span>`;
//         }
//         newElement.innerHTML += '</div>';
//         document.getElementById(ulId).appendChild(newElement);
//     }
// }

// document.addEventListener('click', function(event) {
//     if (event.target.tagName == "I") {
//         let action = event.target.dataset.action;
//         let id = event.target.dataset.key
//         if(action == 'delete') {
//             deletedList[id] = todo[id];
//             delete todo[id];
//             display("todo-list-section");
//             display('deleted-list-section');
//         } else if(action == "done") {
//             doneList[id] = todo[id];
//             delete todo[id];
//             display("todo-list-section");
//             display('done-list-section');
//         }
//     }
// });

// document.addEventListener('dblclick', function(event) {
//     if (event.target.tagName == 'SPAN') {
//         let id = event.target.dataset.key;
//         let inputElement = document.createElement('input');
//         inputElement.id = 'edit-text';
//         inputElement.dataset.key = id;
//         inputElement.value = todo[id].name;
//         event.target.parentElement.parentElement.replaceChild(inputElement,event.target.parentElement);
//     }
// });

