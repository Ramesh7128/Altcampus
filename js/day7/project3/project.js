// # ToDo

// 1. Select the element with an id of `demo` and apply style `1px solid purple` on that.
// 2. Select all the elements by class name of `demo` and apply the style `1px solid orange` to each element.
// 3. Select all the elements by tag name of `article` and apply this style `1px solid blue`.
// 4. Select the element by id of `demo-query` using querySelector and apply style of `1px solid grey`.
// 5. Select the element by class of `demo-query-all` using querySelectorAll and apply style of `1px solid green`.

document.getElementById('demo').classList.add('redborder');
var allClassElements = document.getElementsByClassName('demo');

for (let child of allClassElements) {
    child.classList.add('orangeBorder');
}

var allTagElements = document.getElementsByTagName('article');

for (let child of allTagElements) {
    child.classList.add('blueBorder');
}

document.querySelector('#demo-query').classList.add('greenBorder');

var allClasselement = document.querySelectorAll('.demo-query-all');

for(let child of allClasselement){
    child.classList.add('greyBorder');
}