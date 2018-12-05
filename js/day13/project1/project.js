
let todo = [];

function addTodo(todoElement) {
    todo.push(todoElement);
}

function display(todoArray) {
    document.getElementById('todo-list').innerHTML = '';
    for(var i=0; i< todo.length; i++) {
        let newLi = document.createElement('li');
        newLi.className = 'todo-li';
        newLi.id = `todo-li-${i}`;
        newLi.innerHTML = `<div class='li-content'>${todo[i]}</div>`;
        newLi.draggable = true;
        document.getElementById('todo-list').appendChild(newLi);
    }
}

document.getElementById('input-text').addEventListener('keyup', function(event) {
    console.log(event.keyCode);
    if (event.keyCode == 13) {
        let inputValue = document.getElementById('input-text').value;
        addTodo(inputValue);
        display(todo);
    }
});

// document.getElementById('todo-list').addEventListener('dragstart', function)