"use strict";

// let pattern = prompt("enter no of blocks(*should be an even number)", 4);
let boxes = 4;
let completedIndex = [];
let gameObj = {};
let timerRunning = false;

gameObj['clicked'] = new Array(boxes).fill(false);
gameObj['boxValues'] = [];
gameObj['moves'] = 0;
gameObj['time'] = 0;
gameObj['score'] =0;


function randomGenerator(boxes) {
    while(true) {
        let value = (Math.floor(Math.random() * boxes));
        if (!(completedIndex.includes(value))) {
            completedIndex.push(value);
            return value;
        }
        if (!(completedIndex.length < boxes)){
            break;
        }
    }
}

function generateBoxValue(boxes) {
    let patternArray = [];
    let value = boxes/2;
    for (let i = 1; i<=boxes; i++) {
        gameObj['boxValues'][randomGenerator(boxes)] = i%value;
    }
}


function blocksDisplay() {
    console.log(gameObj['boxValues']);
    console.log(gameObj['boxValues'].length)
    for (var i=0; i<gameObj['boxValues'].length; i++) {
        let boxParent = document.getElementById('wrapper');
        let newdiv = document.createElement('div');
        newdiv.classList.add('flip-container');
        newdiv.id = `div-${i}-${gameObj['boxValues'][i]}`;
        newdiv.dataset.key = gameObj['boxValues'][i];
        newdiv.dataset.id = i;
        boxParent.appendChild(newdiv);
        
        let innerdiv = document.createElement('div');
        innerdiv.classList.add('flipper');
        innerdiv.dataset.id = i;
        document.getElementById(`div-${i}-${gameObj['boxValues'][i]}`).appendChild(innerdiv);
    
        let frontdiv = document.createElement('div');
        frontdiv.classList.add('front-side');
        frontdiv.dataset.id = i;
        frontdiv.dataset.key = gameObj['boxValues'][i];
        document.querySelector(`#div-${i}-${gameObj['boxValues'][i]}>div`).appendChild(frontdiv);
    
        let backdiv = document.createElement('div');
        backdiv.classList.add('back-side');
        backdiv.textContent = gameObj['boxValues'][i];
        backdiv.dataset.key = gameObj['boxValues'][i];
        backdiv.dataset.id = i;
        document.querySelector(`#div-${i}-${gameObj['boxValues'][i]}>div`).appendChild(backdiv);
    }
}

function gameLogic(event) {
    gameObj['clicked'][event.target.dataset.id] = true;
    let firstIndex = gameObj['clicked'].indexOf(true);
    let lastIndex = gameObj['clicked'].lastIndexOf(true);
    event.target.parentElement.parentElement.classList.toggle('flipper-container-rotate-class');
    console.log(gameObj['boxValues'][firstIndex]);
    console.log(gameObj['boxValues'][lastIndex]);
    if ((firstIndex !== lastIndex) && (gameObj['boxValues'][firstIndex] != gameObj['boxValues'][lastIndex])) {
        gameObj['clicked'][firstIndex] = false;
        gameObj['clicked'][lastIndex] =  false;
        setTimeout(function flipback() {
                document.getElementsByClassName('flip-container')[firstIndex].classList.toggle('flipper-container-rotate-class');
                document.getElementsByClassName('flip-container')[lastIndex].classList.toggle('flipper-container-rotate-class');
        }, 1000);
    }
    if ((gameObj['boxValues'][firstIndex] === gameObj['boxValues'][lastIndex]) && (firstIndex !== lastIndex)) {
        gameObj['clicked'][firstIndex] = false;
        gameObj['clicked'][lastIndex] =  false;
        gameObj['score'] += 1;
        // document.getElementsByClassName('flip-container')[firstIndex].style.display = 'none';
        // document.getElementsByClassName('flip-container')[lastIndex].style.display = 'none';
    }
    gameObj['moves'] += 1;
}

document.getElementById('wrapper').addEventListener('click', function(event) {
    if (event.target.classList.contains('front-side')) {
        if (!timerRunning) {
            let mins = 2;
            let seconds =  60;
            setInterval(function timer() {
                console.log(mins, seconds);
                console.log(new Date().getSeconds());
                seconds =  (seconds -1);
                console.log()
                if (seconds < 1) {
                    mins = mins - 1;
                    seconds = 60;
                }
                gameObj['time'] = `Mins: ${mins}, secs: ${seconds}`;
            }, 1000);
            timerRunning = true;
        }
        console.log(gameObj['time']);
        gameLogic(event);
    }
});

generateBoxValue(boxes);
blocksDisplay();

