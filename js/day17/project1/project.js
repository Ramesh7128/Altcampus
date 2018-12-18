// Create a board object.
// create a list object.
// create an item object.
// Constructor function for board object.

// create a board object. with all boards as entry,
// sample trello object.
// let trello = {
//     boards: {
//         board1: {
//             boardName: board1, 
//             lists: {
//                 list1: {
//                     listname: list1,
//                     items: {
//                          item1: {
//                                itemName: item1,
//                          },...
//                      }    
//                 }
//             }
//         }
//     } 
// }
// single board setup.
// let board = {
//     lists = [{
//         listName:list1,
//         tasks: [{taskName: task1}],
//     }],
// }

class Trello {
    constructor(appName) {
        this.appName = appName;
        this.UniqueBoards = [];
        this.boards = [];
    }
}


class Board {
    constructor(boardName) {
        this.boardName = boardName;
        this.UniqueLists = [];
        this.lists = [];
    }
}

class List {
    constructor(listName) {
        this.listName = listName;
        this.tasks = [];
    }
}

class Task {
    constructor(taskName) {
        this.taskName = taskName;
    }
}

let newApp = null;

// create board object and render board;
let sampleBoard = new Board('SampleBoard');
// renderBoardLists();

function listInputSectionGenerator() {
    let newInputListDiv = document.createElement('div');
    newInputListDiv.id = 'div-input-list';
    newInputListDiv.classList.add('div-input');
    newInputListDiv.textContent = 'Add New List';
    newInputListDiv.classList.add('list-section');
    document.getElementById('task-board').appendChild(newInputListDiv);
    let newInputElement = document.createElement('input');
    newInputElement.id = 'input-list';
    document.getElementById('div-input-list').appendChild(newInputElement);
}

function taskInputGenerator(listId) {
    let newInputTaskDiv = document.createElement('div');
    newInputTaskDiv.id = `div-input-task-${listId}`;
    newInputTaskDiv.classList.add('div-input');
    newInputTaskDiv.textContent = 'Add New Task';
    document.getElementById(listId).appendChild(newInputTaskDiv);
    let newInputElement = document.createElement('input');
    newInputElement.id = `input-task-${listId}`;
    newInputElement.classList.add('div-task-input');
    // newInputElement.dataset.listId = listId.
    document.getElementById(`div-input-task-${listId}`).appendChild(newInputElement);
}

function tasksListGenerator(listId) {
    // render all tasks
    let boardIndex = document.getElementById('board-selector').value;
    listIndex = listId.split('-')[listId.split('-').length-1];
    for (let task of newApp.boards[boardIndex].lists[listIndex].tasks) {
        let newTaskLi = document.createElement('li');
        newTaskLi.textContent = task.taskName;
        newTaskLi.classList.add('task-li');
        document.getElementById(listId).appendChild(newTaskLi);
    }
    taskInputGenerator(listId);
}

function listSectionGenerator(boardIndex) {
    for(let list_index in newApp.boards[boardIndex].lists) {
        let newListDiv = document.createElement('div');
        newListDiv.id = `${newApp.boards[boardIndex].boardName}-${list_index}`;
        newListDiv.classList.add('list-section');
        newListDiv.textContent = newApp.boards[boardIndex].lists[list_index].listName;
        document.getElementById('task-board').appendChild(newListDiv);
        let newUl = document.createElement('ul');
        newUl.id = `${newApp.boards[boardIndex].boardName}-ul-${list_index}`;
        document.getElementById(`${newApp.boards[boardIndex].boardName}-${list_index}`).appendChild(newUl);
        tasksListGenerator(`${newApp.boards[boardIndex].boardName}-ul-${list_index}`);
    }
    listInputSectionGenerator();
}

function renderBoardLists(boardIndex) {
    // iterate through the list array of boards and tasks array of lists.
    document.getElementById('task-board').innerHTML = '';
    if (boardIndex) {
        listSectionGenerator(boardIndex);
    }
}

function renderBoardsInSelect() {
    // iterate through the boards name and display in the select option.
    document.getElementById('board-selector').innerHTML = '';
    let parentSelect = document.getElementById('board-selector');
    let newOption = document.createElement('option');
    newOption.value = 99;
    newOption.textContent = 'Select a board';
    newOption.selected = 'yes';
    parentSelect.appendChild(newOption);
    for(let boardIndex in newApp.boards) {
        newOption = document.createElement('option');
        newOption.value = boardIndex;
        newOption.textContent = newApp.boards[boardIndex].boardName;
        parentSelect.appendChild(newOption);
    }
}

document.getElementById('task-board').addEventListener('keyup', (event)=> {
    if (event.keyCode == 13) {
        let boardIndex = document.getElementById('board-selector').value; 
        console.log(event.target.id);
        if (event.target.id == 'input-list') {
            let listName = document.getElementById('input-list').value.trim();
            if (!(/^ *$/.test(listName))) {
                if (!newApp.boards[boardIndex].UniqueLists.includes(listName.toLowerCase())) {
                    let newList = new List(listName);
                    newApp.boards[boardIndex].lists.push(newList);
                    newApp.boards[boardIndex].UniqueLists.push(listName.toLowerCase());
                } else {
                    alert('This board contains a list with the same name already.');
                }
                renderBoardLists(boardIndex);
            }
        } else {
            let taskName = document.getElementById(event.target.id).value.trim();
            list_index = event.target.id.split('-')[event.target.id.split('-').length-1];
            let newTask = new Task(taskName);
            newApp.boards[boardIndex].lists[list_index].tasks.push(newTask);
            console.log()
            renderBoardLists(boardIndex);
        }
    }  
})

document.getElementById('input-board').addEventListener('keyup', () => {
    if (event.keyCode == 13) {
        let boardName = document.getElementById('input-board').value.trim();
        document.getElementById('input-board').value = '';
        if (!(/^ *$/.test(boardName))) {
            if (!newApp.UniqueBoards.includes(boardName.toLowerCase())) {
                let newBoard = new Board(boardName);
                newApp.boards.push(newBoard);
                newApp.UniqueBoards.push(boardName.toLowerCase());
            } else {
                alert('A board with the given name already exists.');
            }
            renderBoardsInSelect();
            // renderBoardLists();
        }
    }
});

document.getElementById('board-selector').addEventListener('change', (event)=> {
    if (event.target.value != 99) {
        let boardIndex = event.target.value;
        console.log(boardIndex);
        renderBoardLists(boardIndex);
    } else{
        renderBoardLists();
    }
});

function init() {
    newApp = new Trello('AltCampus');
}

init()