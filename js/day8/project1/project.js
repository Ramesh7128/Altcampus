//Select the section with an id of container without using querySelector.


//Select the section with an id of container using querySelector.


//Select all of the list items with a class of "second".



//Select a list item with a class of third, but only the list item inside of the ol tag.
var olElements = document.querySelector('ol>.third');


//Give the section with an id of container the text "Hello!".
document.getElementById('container').textContent = "Hello!";


//Add the class main to the div with a class of footer.
let classSpecificElements = document.getElementsByClassName('footer');
for (var key of classSpecificElements) {
    key.classList.add('main');
}


//Remove the class main on the div with a class of footer.
let classSpecificElements = document.getElementsByClassName('footer');
for (var key of classSpecificElements) {
    key.classList.remove('main');
}


//Create a new li element.
let newli = document.createElement('li');

//Give the li the text "four".
newli.textContent = 'four';


//Append the li to the ul element.
document.getElementsByTagName('ul')[0].append(newli);

//Loop over all of the list inside the ol tag and give them a background color of "green".
for(let key of document.querySelectorAll('ol li')) {
    key.style.background = 'green';
}


//Remove the div with a class of footer.
document.getElementsByClassName('footer')[0].parentElement.removeChild(document.getElementsByClassName('footer')[0]);