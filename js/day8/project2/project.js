// # Todo

// Make a webpage where when you click the background of the page shoud change to some different color.

// * Bonus
// Make a function to randomly generate the background color using combination of hex code.

document.body.addEventListener('click',function(event) {
    console.log('check');
    var firstIndex = Math.floor(Math.random() * Math.floor(254));
    var secondIndex = Math.floor(Math.random() * Math.floor(254));
    var thirdIndex = Math.floor(Math.random() * Math.floor(254));
    document.body.style.background = `rgb(${firstIndex},${secondIndex},${thirdIndex})`;
});