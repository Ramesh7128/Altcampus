"use strict"
let jigSawPuzzle = (function(){

    let widthpieces = 3;
    let heightpieces = 3;
    let imageArray = [];
    let uploadedUrl = '';
    let matched = new Array(widthpieces*heightpieces).fill(false);
    let filled = new Array(widthpieces*heightpieces).fill(false);
    let initialGridArray = new Array(widthpieces*heightpieces).fill(false);
    let modifiedGridArray = new Array(widthpieces*heightpieces).fill(false);
    let moves = 0;
    let eachWidthPieces = 500/widthpieces;
    let eachHeightPieces = 500/heightpieces;
    
    function reset() {
        widthpieces = 3;
        heightpieces = 3;
        imageArray = [];
        matched = new Array(widthpieces*heightpieces).fill(false);
        filled = new Array(widthpieces*heightpieces).fill(false);
        initialGridArray = new Array(widthpieces*heightpieces).fill(false);
        modifiedGridArray = new Array(widthpieces*heightpieces).fill(false);
        moves = 0;
        eachWidthPieces = 500/widthpieces;
        eachHeightPieces = 500/heightpieces;
        document.getElementById('result').style.visibility = 'hidden';
    }
    
    function shuffleImgArray(imgArray) {
        for(let i=imgArray.length-1; i>0; i--) {
            let randomIndex = Math.floor(Math.random() * (i+1));
            let temp = imgArray[randomIndex];
            imgArray[randomIndex] = imgArray[i];
            imgArray[i] = temp;
        }
    }
    
    function displayPuzzle(puzzleArray) {
        document.getElementById('jumbled-order-puzzles').innerHTML = '';
        let imgParent = document.getElementById('jumbled-order-puzzles');
        for(let i=0; i<puzzleArray.length; i++) {
    
            let newdiv = document.createElement('div');
            newdiv.classList.add('puzzle');
            newdiv.classList.add('img-size');
            newdiv.style.width = `${eachWidthPieces}px`;
            newdiv.style.height = `${eachHeightPieces}px`;
            if (uploadedUrl) {
                newdiv.style.backgroundImage = `url(${uploadedUrl})`;
            } else {
                newdiv.style.backgroundImage = 'url(./img/indiamap1.jpg)';
            }
            if (puzzleArray[i][2]) {
                newdiv.draggable=true;
            } else {
                newdiv.style.opacity = '0.4';
            }
            newdiv.dataset.id = puzzleArray[i][1];
            newdiv.dataset.shuffledId = i;
            newdiv.style.backgroundPosition = puzzleArray[i][0];
            imgParent.appendChild(newdiv);
        }
    }
    
    function generatePuzzleArray() {
        let count = 0;
        imageArray = [];
        for(let i=0; i>(-1*widthpieces*eachWidthPieces); i=i-(eachWidthPieces)) {
            for (let j=0; j>(-1*heightpieces*eachHeightPieces); j=j-(eachHeightPieces)) {
                imageArray.push([`${j}px ${i}px`, count, true]);
                count += 1;
            }
            shuffleImgArray(imageArray);
        }
    }
    
    function displayGrid(gridArray) {
        document.getElementById('ordered-grid').innerHTML = '';
        let gridParent = document.getElementById('ordered-grid');
        for(let i=0; i<(widthpieces*heightpieces);i++) {
            let newdiv = document.createElement('div');
            newdiv.classList.add('order-block');
            newdiv.style.width = `${eachWidthPieces}px`;
            newdiv.style.height = `${eachHeightPieces}px`;
            newdiv.draggable=true;
            if (gridArray[i]) {
                newdiv.classList.add('img-size');
                if (uploadedUrl) {
                    newdiv.style.backgroundImage = `url(${uploadedUrl})`;
                } else {
                    newdiv.style.backgroundImage = 'url(./img/indiamap1.jpg)';
                }
                newdiv.style.backgroundPosition = gridArray[i][0];
            }
            newdiv.dataset.id = i;
            gridParent.appendChild(newdiv);
        }
    }
    
    function endGameSettings(message="You Win!!") {
        let resultDiv = document.getElementById('result');
        let messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        resultDiv.appendChild(messageDiv);
        let movesDiv = document.createElement('div');
        movesDiv.textContent = `Moves: ${moves}`;
        resultDiv.appendChild(movesDiv);
        resultDiv.style.visibility = 'visible';
    }
    
    function checkEndGameconditions() {
        console.log(matched.every((match)=>match));
        return matched.every((match)=>match);
    }
    
    document.getElementById('getval').addEventListener('change', function(event) {
        let file = document.getElementById('getval').files[0];
        console.log(file);
        let reader = new FileReader();
        reader.onloadend = function(event) {
            // The file's text will be printed here
            console.log(reader.result);
            uploadedUrl = reader.result;
            reset();
            generatePuzzleArray();
            displayPuzzle(imageArray);
            displayGrid(modifiedGridArray);
    
            // console.log(uploadedUrl);
        };
        // reader.readAsText(file);
        if(file){
            reader.readAsDataURL(file);
        }
        // console.log(reader.result);
    })
    
    document.getElementById('jumbled-order-puzzles').addEventListener('dragstart', function(event) {
        // event.target.style.opacity = '0.4';
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('shuffledId', event.target.dataset.shuffledId);
        event.dataTransfer.setData('initialId', event.target.dataset.id);
        event.dataTransfer.setData('source', 'jumbled-grid');
    });
    
    
    document.getElementById('ordered-grid').addEventListener('dragstart', function(event) {
        // event.target.style.opacity = '0.4';
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('initialId', event.target.dataset.id);
        event.dataTransfer.setData('source', 'ordered-grid');
    });
    
    document.getElementById('ordered-grid').addEventListener('dragenter', function(event) {
        event.target.classList.add('over');
    });
    
    document.getElementById('ordered-grid').addEventListener('dragleave', function(event) {
        event.target.classList.remove('over');
    });
    
    document.getElementById('ordered-grid').addEventListener('dragover', function(event) {
        if (event.preventDefault) {
            event.preventDefault(); // Necessary. Allows us to drop.
        }
        return false;
    });
    
    document.getElementById('ordered-grid').addEventListener('drop', function(event) {
        console.log(event.dataTransfer.getData('initialId'), event.target.dataset.id);
        if ((event.target.classList.contains('order-block')) && !(filled[event.target.dataset.id])) {
            if (event.dataTransfer.getData('source') == 'jumbled-grid') {
                moves +=1;
                let shuffledId = Number(event.dataTransfer.getData('shuffledId'));
                let initialId =  Number(event.dataTransfer.getData('initialId'));
                let orderGridBoxId = Number(event.target.dataset.id);
                console.log(shuffledId, initialId, orderGridBoxId);
                if (orderGridBoxId == initialId) {
                    matched[orderGridBoxId] = true;
                }
                filled[orderGridBoxId] = true;
                imageArray[shuffledId][2] = false;
                displayPuzzle(imageArray);  
                modifiedGridArray[orderGridBoxId] = imageArray[shuffledId];
                displayGrid(modifiedGridArray);
                if (checkEndGameconditions()) {
                    endGameSettings();
                }
            } else if (event.dataTransfer.getData('source') == 'ordered-grid') {
                moves +=1;
                let initialId =  Number(event.dataTransfer.getData('initialId'));
                let orderGridBoxId = Number(event.target.dataset.id);
                // console.log(puzzleBoxId);
                if (orderGridBoxId == modifiedGridArray[initialId][1]) {
                    matched[orderGridBoxId] = true;
                }
                filled[orderGridBoxId] = true;
                // console.log(imageArray[shuffledId]);
                modifiedGridArray[orderGridBoxId] = modifiedGridArray[initialId];
                modifiedGridArray[initialId] = false;
                filled[initialId] = false;
                // console.log(modifiedGridArray);
                displayGrid(modifiedGridArray);
                if (checkEndGameconditions()) {
                    endGameSettings();
                }
            }
        }
        return false;
    });
    
    function startGame() {
        generatePuzzleArray();
        displayPuzzle(imageArray);
        displayGrid(modifiedGridArray);
        modifiedGridArray = [...initialGridArray];
    }
    return {
        startGame: startGame
    }
})();

jigSawPuzzle.startGame();



