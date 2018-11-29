"use strict";
// capture the input and append it to a list, later use localstorage.

document.addEventListener('keydown', function(event) {
    let keyvalue = event.keyCode;
    console.log(keyvalue);
    let newElement= document.getElementById(keyvalue);
    newElement.currentTime = 0;
    newElement.play();
});
