"use strict";

let boxElements = document.getElementsByClassName('main-box');

for (var element of boxElements) {
    element.addEventListener('click', function(event) {
        if (event.target.classList.contains('main-box-rotateClass')) {
            event.target.classList.remove('main-box-rotateClass');
        } else {
            event.target.classList.add('main-box-rotateClass');
        }

    });
}