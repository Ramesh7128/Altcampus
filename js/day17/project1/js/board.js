export class Trello {
    constructor(appName) {
        this.appName = appName;
        this.UniqueBoards = [];
        this.boards = [];

        this.node = document.createElement('div');
        this.node.classList.add('container');

        this.titleNode = document.createElement('h1');
        this.titleNode.textContent = this.appName;
        this.node.appendChild(this.titleNode);

        this.selectNode = document.createElement('select');
        this.node.appendChild(this.selectNode);

        this.inputNode = document.createElement('input');
        this.inputNode.id = 'input-boards';
        this.boardNode = document.createElement('div');
        this.boardNode.classList.add('board-container');

        this.node.appendChild(this.inputNode);
        this.node.appendChild(this.boardNode);

        this.inputNode.addEventListener('keyup', (event) => {
            if (event.keyCode == 13) {
                let boardInput = document.getElementById('input-boards');
                let boardInputValue = boardInput.value;
                if (!(/^ *$/.test(boardInputValue))) {
                    this.inputNode.value = '';
                    if (!this.UniqueBoards.includes(boardInputValue.toLowerCase())) {
                        // create a new board object with appname and board name.
                        // add the board object to boards list and unique board list.
                        let newBoard = new Board(this.appName, boardInputValue);
                        this.boards.push(newBoard);
                        this.UniqueBoards.push(boardInputValue.toLowerCase());
                        this.renderApp();
                    } else {
                        alert('A board with the given name already exists.');
                    }
                }
            }
        });
        this.selectNode.addEventListener('change', (event) => {
            let boardIndex = event.target.value;
            let board = this.boards[boardIndex];
            this.boardNode.innerHTML = '';
            board.renderBoard();
            this.boardNode.appendChild(board.node);
            
        });
    }
    renderApp() {
        this.boards.forEach((board, index) => {
            board.optionNode.value = index;
            this.selectNode.appendChild(board.optionNode);
        });
    }
}

class Board {
    constructor(appName, boardName) {
        this.appName = appName;
        this.boardName = boardName;
        this.UniqueLists = [];
        this.lists = [];

        this.optionNode = document.createElement('option');
        this.optionNode.textContent = this.boardName;
        this.node = document.createElement('div');
        this.titleNode = document.createElement('h2');
        this.titleNode.textContent = this.boardName;
        this.node.appendChild(this.titleNode);

        // section for rendering all list for a board.
        this.listsSectionNode = document.createElement('div');
        this.node.appendChild(this.listsSectionNode);
        
        this.newInputListDiv = document.createElement('div');
        this.newInputListDiv.classList.add('div-input');
        this.newInputListDiv.textContent = 'Add New List';
        this.newInputListDiv.classList.add('list-section');
        this.newInputListDiv.classList.add('three');
        this.newInputListDiv.classList.add('columns');
        this.newInputElement = document.createElement('input');
        
        this.newInputListDiv.appendChild(this.newInputElement);
        this.node.appendChild(this.newInputListDiv);
        
        this.newInputElement.addEventListener('keyup', (event)=> {
            if(event.keyCode == 13) {
                let listInputValue = event.target.value;
                if (!(/^ *$/.test(listInputValue))) {
                    this.newInputElement.value = '';
                    if (!this.UniqueLists.includes(listInputValue.toLowerCase())) {
                        let newList = new List(this.appName, this.boardName, listInputValue);
                        this.lists.push(newList);
                        this.UniqueLists.push(listInputValue.toLowerCase());                
                        this.renderBoard();
                    } else {
                        alert('A List with the given name already exists in this board.');
                    }
                }
            }
        });
    }
    renderBoard() {
        this.lists.forEach((list, index) => {
            this.listsSectionNode.appendChild(list.node);
        });
    }

}

class List {
    constructor(appName, boardName, listName) {
        this.listName = listName;
        this.appName = appName;
        this.boardName = boardName;
        this.listName = listName;
        this.tasks = [];

        this.node = document.createElement('div');
        this.node.classList.add('div-input');
        
        this.titleNode = document.createElement('h3');
        this.titleNode.textContent = this.listName;

        this.node.appendChild(this.titleNode);
        this.node.classList.add('list-section');
        this.node.classList.add('three');
        this.node.classList.add('columns');

        this.taskSectionDiv = document.createElement('div');
        this.node.appendChild(this.taskSectionDiv);

        this.newInputTaskDiv = document.createElement('div');
        this.newInputTaskDiv.classList.add('div-input');
        this.newInputTaskDiv.textContent = 'Add New Task';
        this.newInputElement = document.createElement('input');

        this.newInputTaskDiv.appendChild(this.newInputElement);
        this.node.appendChild(this.newInputTaskDiv);

        this.newInputElement.addEventListener('keyup', (event)=> {
            let taskInputValue = event.target.value;
            if (event.keyCode == 13) {
                if(!(/^ *$/.test(taskInputValue))) {
                    this.newInputElement.value = "";
                    let newTask = new Task(this.appName, this.boardName, this.listName, taskInputValue);
                    this.tasks.push(newTask);
                    this.renderList();
                }
            }
        })

    }
    renderList() {
        this.tasks.forEach((task, index) => {
            this.taskSectionDiv.appendChild(task.node);
        });
    }
}

class Task {
    constructor(appName, boardName, listName, taskName) {
        this.appName = appName;
        this.boardName = boardName;
        this.listName = listName;
        this.taskName = taskName;

        this.node = document.createElement('div');
        this.taskElement = document.createElement('p');
        this.taskElement.textContent = this.taskName;
        this.node.appendChild(this.taskElement);
    }
}