"use strict";
// capture the input and append it to a list, later use localstorage.
let books = (('books' in localStorage) ? JSON.parse(localStorage['books']):{});
books['category'] = (('category' in books) ? books['category']: []);
books['book'] = (('book' in books)? books['book']: {});

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
        localStorage['books'] = JSON.stringify(books);
    } else {
        alert("Book with the same name already exists");
    }
}

function editBooks(editedValue, key) {
    
    if (!(editedValue.replace(/ /g,'') in books['book'])) {
        books['book'][editedValue.replace(/ /g,'')] = {};
        let item = {
            name: editedValue,
            category: books['book'][key]['category'],
            read: books['book'][key]['read'],
            readingList: books['book'][key]['readingList']
        }
        books['book'][editedValue.replace(/ /g,'')] = item;
        delete books['book'][key];
        localStorage['books'] = JSON.stringify(books);
    } else {
        alert("Book with the same name already exists");
    }
}

function creatingCategoryBox(categoryName) {

    let parentCategory = document.getElementById('display-books');
    let newDiv = document.createElement('div');
    newDiv.classList.add('category-box');
    newDiv.classList.add(categoryName);
    newDiv.dataset.category = categoryName;
    newDiv.innerHTML = `<h2>${categoryName}</h1\>`;
    newDiv.innerHTML += `<ul id=${categoryName}></ul>`;
    parentCategory.appendChild(newDiv);
}

function createBookListInCategory(categoryName, key) {

    let newElement = document.createElement('li');
    newElement.className = 'new-list-element';
    newElement.id = `li-${categoryName}-${key}`;
    document.getElementById(categoryName).appendChild(newElement);
    
    let newdiv = document.createElement('div');
    newdiv.id = `div-${categoryName}-${key}`;
    document.getElementById(`li-${categoryName}-${key}`).appendChild(newdiv);
    
    if (books['book'][key]['read']) {
        let newSpan = document.createElement('span');
        newSpan.id = key;
        newSpan.dataset.key = key;
        newSpan.className = 'list-span-element';
        newSpan.innerHTML = `<strike>${books['book'][key]['name']}</strike>`;
        document.getElementById(`div-${categoryName}-${key}`).appendChild(newSpan);
        // newElement.innerHTML += `<span id=${key} data-key=${key} class='todo-element'><strike>${books['book'][key]['name']}</strike></span>`;
    } else {
        let newSpan = document.createElement('span');
        newSpan.id = key;
        newSpan.dataset.key = key;
        newSpan.className = 'list-span-element';
        newSpan.textContent = books['book'][key]['name'];
        document.getElementById(`div-${categoryName}-${key}`).appendChild(newSpan);
    }

    let newSpan = document.createElement('span');
    newSpan.className = 'list-actions-element';
    if (books['book'][key]['readingList']) {
        newSpan.innerHTML = `<i data-action="star" data-key=${key} class="fas fa-star" aria-hidden="true"></i><i data-action="done" data-key=${key} class="fa fa-check" aria-hidden="true"></i><i data-action="delete" data-key=${key} class="fa fa-trash" aria-hidden="true"></i>`;
    } else {
        newSpan.innerHTML = `<i data-action="star" data-key=${key} class="far fa-star" aria-hidden="true"></i><i data-action="done" data-key=${key} class="fa fa-check" aria-hidden="true"></i><i data-action="delete" data-key=${key} class="fa fa-trash" aria-hidden="true"></i>`;
    }
    document.getElementById(`div-${categoryName}-${key}`).appendChild(newSpan);
}

function displaybooks(searchString="") {
    
    document.getElementById('display-books').innerHTML = '';
    for (let key in books['book']) {
        if (searchString) {
            if (!(key.toLowerCase().includes(searchString.toLocaleLowerCase()))) {
                continue;
            }
        }
        if (!(document.getElementsByClassName(books['book'][key]['category']).length > 0)) {
            creatingCategoryBox(books['book'][key]['category']);
        }

        if ((books['book'][key]['readingList']) && (!(document.getElementsByClassName('readingList').length > 0))) {
            creatingCategoryBox('readingList');
        }

        createBookListInCategory(books['book'][key]['category'], key);
        if (books['book'][key]['readingList']) {
            createBookListInCategory('readingList', key);
        }
    }    
}

document.getElementById('add-books').addEventListener('click', function(event) {
    let book = document.getElementById('input-text').value.toLowerCase().trim();
    let category = document.getElementById('category-select').value.toLowerCase().trim();
    if (!(/^ *$/.test(book))) {
        addbooks(book, category); 
        displaybooks();
    }
});

document.getElementById('display-books').addEventListener('keyup', function(event) {
    if (event.keyCode == '13') {
        let editedValue = document.getElementById('edit-text').value.toLowerCase().trim();
        let key = document.getElementById('edit-text').dataset.key;
        if (!(/^ *$/.test(editedValue))) {
            editBooks(editedValue, key); 
            displaybooks();
        }
    }
});

document.getElementById('search-box').addEventListener('keyup', function(event) {
    let searchString = document.getElementById('search-text').value.toLowerCase();
    console.log(searchString);
    displaybooks(searchString);
});

document.addEventListener('dblclick', function(event) {
    displaybooks();
    if (event.target.tagName == 'SPAN') {
        let id = event.target.dataset.key;
        let inputElement = document.createElement('input');
        inputElement.id = 'edit-text';
        inputElement.dataset.key = id;
        inputElement.value = books['book'][id].name;
        document.getElementById(`li-${books['book'][id].category}-${id}`).innerHTML = '';
        document.getElementById(`li-${books['book'][id].category}-${id}`).appendChild(inputElement);
    }
});

document.addEventListener('click', function(event) {
    if (event.target.tagName == "I") {
        let action = event.target.dataset.action;
        let id = event.target.dataset.key
        if(action == 'delete') {
            console.log(id);
            delete books['book'][id];
            localStorage['books'] = JSON.stringify(books);
            displaybooks();
        } else if(action == "done") {
            if (books['book'][id]['read']) {
                books['book'][id]['read'] = false;
            } else {
                books['book'][id]['read'] = true;
                books['book'][id]['readingList'] = false;
            }
            localStorage['books'] = JSON.stringify(books);
            displaybooks();
        } else if(action == 'star') {
            if (books['book'][id]['readingList']) {
                books['book'][id]['readingList'] = false;
            } else {
                books['book'][id]['readingList'] = true;
            }
            localStorage['books'] = JSON.stringify(books);
            displaybooks();
        }
    }
});

displaybooks();
