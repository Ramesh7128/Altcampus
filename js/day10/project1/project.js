"use strict";
// capture the input and append it to a list, later use localstorage.
let books = {};
books['category'] = [];
books['book'] = {};
let count = 0;

function randomGenerator() {
    return Math.floor(Math.random() * Math.floor(25893));
}

function addbooks(book, category) {
    if (!(books['category'].includes(category))) {
        console.log(category, books['category']);
        books['category'].push(category);
    }
    let item = {
        name: book,
        category: category,
        read: false,
        readingList: false,
    }
    if (!(book.replace(/ /g,'') in books['book'])) {
        books['book'][book.replace(/ /g,'')] = item;
    } else {
        alert("Book with the same name already exists");
    }
}

function displaybooks(searchString="") {
    // if (category) {
        // can use category to render only that particular category.
    // } else {
    let parentCategory = document.getElementById('display-books');
    document.getElementById('display-books').innerHTML = '';
    for (let key in books['book']) {
        if (searchString) {
            if (!(key.toLowerCase().includes(searchString.toLocaleLowerCase()))) {
                continue;
            }
        }
        if (!(document.getElementsByClassName(books['book'][key]['category']).length > 0)) {      
            let newDiv = document.createElement('div');
            newDiv.classList.add('category-box');
            newDiv.classList.add(books['book'][key]['category']);
            newDiv.dataset.category = books['book'][key]['category'];
            newDiv.innerHTML = `<h2>${books['book'][key]['category']}</h1\>`;
            newDiv.innerHTML += `<ul id=${books['book'][key]['category']}></ul>`;
            parentCategory.appendChild(newDiv);
        }
        var newElement = document.createElement('li');
        newElement.className = 'new-list-element';
        newElement.innerHTML += '<div>';
        if (books['book'][key]['read']) {
            newElement.innerHTML += `<span id=${key} data-key=${key} class='todo-element'><strike>${books['book'][key]['name']}</strike></span>`;
        } else {
            newElement.innerHTML += `<span id=${key} data-key=${key} class='todo-element'>${books['book'][key]['name']}</span>`;
        }
        newElement.innerHTML += `<span class='action-icons'><i data-action="done" data-key=${key} class="fa fa-check" aria-hidden="true"></i><i data-action="delete" data-key=${key} class="fa fa-trash" aria-hidden="true"></i></span>`;
        newElement.innerHTML += '</div>';
        document.getElementById(books['book'][key]['category']).appendChild(newElement);
    }    
}

document.getElementById('add-books').addEventListener('click', function(event) {
    let book = document.getElementById('input-text').value.toLowerCase().trim();
    let category = document.getElementById('category-select').value.toLowerCase().trim();
    addbooks(book, category); 
    displaybooks();
});

document.addEventListener('keyup', function(event) {
    let searchString = document.getElementById('search-text').value.toLowerCase();
    console.log(searchString);
    displaybooks(searchString);
});

document.addEventListener('dblclick', function(event) {
    console.log(event, "event");
    console.log(event.target.dataset.key, "before editing display");
    displaybooks();
    if (event.target.tagName == 'SPAN') {
        alert("dblclick triggered");
        let id = event.target.dataset.key;
        console.log(event.target.dataset.key);
        let inputElement = document.createElement('input');
        inputElement.id = 'edit-text';
        inputElement.dataset.key = id;
        inputElement.value = books['book'][id].name;
        let newSpanElement = document.getElementById(id);
        console.log(newSpanElement,'this is the element clicked');
        console.log(newSpanElement.parentElement.parentElement);
        newSpanElement.parentElement.parentElement.replaceChild(inputElement, newSpanElement.parentElement);
    }
});

document.addEventListener('click', function(event) {
    if (event.target.tagName == "I") {
        let action = event.target.dataset.action;
        let id = event.target.dataset.key
        if(action == 'delete') {
            console.log(id);
            delete books['book'][id];
            displaybooks();
        } else if(action == "done") {
            books['book'][id]['read'] = true;
            displaybooks();
        }
    }
});

// document.addEventListener('dblclick', function(event) {
//     let Oldevent = event;
//     display('todo-list-section');
//     if (event.target.tagName == 'SPAN') {
//         let id = event.target.dataset.key;
//         let inputElement = document.createElement('input');
//         inputElement.id = 'edit-text';
//         inputElement.dataset.key = id;
//         inputElement.value = todo[id].name;
//         let newSpanElement = document.querySelectorAll(`[data-key="${id}"]`)[0];
//         console.log(newSpanElement.parentElement.parentElement);
//         newSpanElement.parentElement.parentElement.replaceChild(inputElement, newSpanElement.parentElement);
//     }
// });
// == '13') {
//         if (event.target.id=='input-text'){
//             let value = document.getElementById("input-text").value;
//             let key = randomGenerator();
//             if (!(/^ *$/.test(value))) {
//                 let item = {
//                     id: key,
//                     name: value,
//                 }
//                 todo[key] = item;
//                 document.getElementById("input-text").value = "";
//                 display("todo-list-section");
//             }
//         } else if (event.target.id=='edit-text') {
//             let value = document.getElementById("edit-text").value;
//             let key =  document.getElementById("edit-text").dataset.key;
//             if (!(/^ *$/.test(value))) {
//                 let item = {
//                     id: key,
//                     name: value,
//                 }
//                 todo[key] = item;
//                 display("todo-list-section");
//             }
//         }
//     }
// });

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
//     let Oldevent = event;
//     display('todo-list-section');
//     if (event.target.tagName == 'SPAN') {
//         let id = event.target.dataset.key;
//         let inputElement = document.createElement('input');
//         inputElement.id = 'edit-text';
//         inputElement.dataset.key = id;
//         inputElement.value = todo[id].name;
//         let newSpanElement = document.querySelectorAll(`[data-key="${id}"]`)[0];
//         console.log(newSpanElement.parentElement.parentElement);
//         newSpanElement.parentElement.parentElement.replaceChild(inputElement, newSpanElement.parentElement);
//     }
// });

