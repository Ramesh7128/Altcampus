// document.getElementById("rotate").addEventListener("click", rotateSecond);

let rotateDegSeconds = 0;
let rotateDegMin = 0;
let rotateDegHour = 0;

var dateObj = new Date();
second = dateObj.getSeconds();
minute = dateObj.getMinutes();
hour =dateObj.getHours();
hour = (hour > 12) ? hour-12: hour;
console.log(second, minute, hour);

document.getElementById('secondhand').classList.add('rotateonce');
document.getElementById('minutehand').classList.add('rotateonce');
document.getElementById('hourhand').classList.add('rotateonce');


rotateDegSeconds = rotateDegSeconds + (6*second);
rotateDegMin = rotateDegMin + (6*minute);
rotateDegHour = rotateDegHour + (30*hour) + ((minute/60)*30) + ((second/3600) * 30);
console.log(rotateDegSeconds, rotateDegMin, rotateDegHour);

function colorChange() {
    var firstIndex = Math.floor(Math.random() * Math.floor(254));
    var secondIndex = Math.floor(Math.random() * Math.floor(254));
    var thirdIndex = Math.floor(Math.random() * Math.floor(254));
    document.body.style.background = `rgb(${firstIndex},${secondIndex},${thirdIndex})`;
}

function rotateHands() {
    colorChange();
    document.getElementById('secondhand').style.transform = `rotate(${rotateDegSeconds}deg)`;
    document.getElementById('minutehand').style.transform = `rotate(${rotateDegMin}deg)`;
    document.getElementById('hourhand').style.transform = `rotate(${rotateDegHour}deg)`;

    rotateDegSeconds = rotateDegSeconds + 6;
    rotateDegMin = rotateDegMin + 0.01;
    rotateDegHour = rotateDegHour + 0.00832;
    console.log(rotateDegSeconds, rotateDegMin, rotateDegHour);
}

rotateHands();
setInterval(rotateHands, 1000);