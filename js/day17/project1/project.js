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
        this.UniqueBoardList = [];
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

// create board object and render board;
let sampleBoard = new Board('SampleBoard');
renderBoardLists();


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
    listIndex = listId.split('-')[listId.split('-').length-1];
    for (let task of sampleBoard.lists[listIndex].tasks) {
        let newTaskLi = document.createElement('li');
        newTaskLi.textContent = task.taskName;
        newTaskLi.classList.add('task-li');
        document.getElementById(listId).appendChild(newTaskLi);
    }
    taskInputGenerator(listId);
}

function listSectionGenerator() {
    for(let list_index in sampleBoard.lists) {
        let newListDiv = document.createElement('div');
        newListDiv.id = `${sampleBoard.boardName}-${list_index}`;
        newListDiv.classList.add('list-section');
        newListDiv.textContent = sampleBoard.lists[list_index].listName;
        document.getElementById('task-board').appendChild(newListDiv);
        let newUl = document.createElement('ul');
        newUl.id = `${sampleBoard.boardName}-ul-${list_index}`;
        document.getElementById(`${sampleBoard.boardName}-${list_index}`).appendChild(newUl);
        tasksListGenerator(`${sampleBoard.boardName}-ul-${list_index}`);
    }
    listInputSectionGenerator();
}

function renderBoardLists() {
    // iterate through the list array of boards and tasks array of lists.
    document.getElementById('task-board').innerHTML = '';
    listSectionGenerator();
}

document.getElementById('task-board').addEventListener('keyup', (event)=> {
    if (event.keyCode == 13) {
        console.log(event.target.id);
        if (event.target.id == 'input-list') {
            let listName = document.getElementById('input-list').value.trim();
            if (!(/^ *$/.test(listName))) {
                if (!sampleBoard.UniqueLists.includes(listName)) {
                    let newList = new List(listName);
                    sampleBoard.lists.push(newList);
                    sampleBoard.UniqueLists.push(listName.toLowerCase());
                } else {
                    alert('This board contains a list with the same name already.');
                }
                renderBoardLists();
            }
        } else {
            let taskName = document.getElementById(event.target.id).value.trim();
            list_index = event.target.id.split('-')[event.target.id.split('-').length-1];
            let newTask = new Task(taskName);
            sampleBoard.lists[list_index].tasks.push(newTask);
            renderBoardLists();
        }
    }

    
})