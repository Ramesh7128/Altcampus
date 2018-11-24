// Use index.html annd do the following:

// 1. Add a script tag to the bottom.
// 2. Change the body style so it has a font-family of "Arial, sans-serif".
// 3. Replace each of the spans (nickname, favorites, hometown) with your own information.
// 4. Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// 5. Create a new img element and set its src attribute to a picture of you. Append that element to the page.

var newscript = document.createElement('script');
document.body.appendChild(newscript);

document.body.classList.add('bodyStyle');

document.getElementById('nickname').textContent = "Rouse";

document.getElementById('favorites').textContent = "boxing";

document.getElementById('hometown').textContent = "chennai";

var newLiElement = document.getElementsByTagName('li');
for (var elem of newLiElement) {
    console.log(elem);
    elem.className = "listitem";
}
var newImage = document.createElement('img');
newImage.src = "http://tineye.com/images/widgets/mona.jpg";
document.body.appendChild(newImage);



