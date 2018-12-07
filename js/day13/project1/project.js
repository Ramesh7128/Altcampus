(function () {
    let todo = [];
    function addTodo(todoElement) {
        todo.push(todoElement);
    }
    function display(todoArray) {
        document.getElementById('todo-list').innerHTML = '';
        for (var i = 0; i < todo.length; i++) {
            let newLi = document.createElement('li');
            newLi.className = 'todo-li';
            newLi.dataset.id = i;
            newLi.id = `todo-li-${i}`;
            newLi.innerHTML = `<div class='li-content'>${todo[i]}</div>`;
            newLi.draggable = true;
            document.getElementById('todo-list').appendChild(newLi);
        }
    }

    document.getElementById('input-text').addEventListener('keyup', function (event) {
        // console.log(event.keyCode);
        if (event.keyCode == 13) {
            let inputValue = document.getElementById('input-text').value;
            addTodo(inputValue);
            display(todo);
            document.getElementById('input-text').value = '';
        }
    });

    document.getElementById('todo-list').addEventListener('dragstart', function (event) {
        console.log(event.target);
        event.target.style.opacity = '0.4';
        event.dataTransfer.effectAllowed = 'move';
        // console.log(event.target.parentElement.dataset.id);
        event.dataTransfer.setData('parentIndex', event.target.dataset.id);
    });

    document.getElementById('todo-list').addEventListener('dragenter', function (event) {
        event.target.classList.add('over');
        // console.log(event.target); 
    });

    document.getElementById('todo-list').addEventListener('dragleave', function (event) {
        event.target.classList.remove('over');
        // console.log(event.target); 
    });

    document.getElementById('todo-list').addEventListener('dragover', function (event) {
        if (event.preventDefault) {
            event.preventDefault(); // Necessary. Allows us to drop.
        }
        return false;
    });

    document.getElementById('todo-list').addEventListener('drop', function (event) {
        if (event.target.stopPropagation) {
            event.target.stopPropagation();
        }
        if (event.dataTransfer.getData('parentIndex') != event.target.parentElement.dataset.id) {
            initialIndex = Number(event.dataTransfer.getData('parentIndex'));
            secondaryIndex = Number(event.target.parentElement.dataset.id);
            temp = todo[initialIndex];
            todo[initialIndex] = todo[secondaryIndex];
            todo[secondaryIndex] = temp;
            display();
        }
        return false;
    });
})();







