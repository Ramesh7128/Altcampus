// Write a JavaScript function to check whether an `input` is a string or not.
function testString(input) {
    if (typeof input == "string") {
        console.log('Is a string');
    } else {
        console.log("NOt a string");
    }
}
testString("check");
testString(2);

// Write a JavaScript function to check whether a string is blank or not.
function testBlank(input) {
    if (input) {
        console.log("Is not blank")
    } else {
        console.log("Is blank");
    }
}

testBlank();
testBlank("");
testBlank('check');

// Write a JavaScript function to split a string and convert it into an array of words.
// Input -> "Hello World In Javascript"
// Output -> ['Hello','World', 'In', 'Javascript']
function splitStings(input) {
    var newList = input.split(" ");
    return newList;
}

console.log(splitStings("Hello World In Javascript"));

// Write a JavaScript function to extract a specified number of characters from a string.
// Input -> (string, number) -> ('Hello World!', 4)
// Ouptut -> String -> "Hell"

let fetchChar = (input, number) => {
    console.log(input.substr(0, number));
};


// Write a JavaScript function to convert a Full Name like (Rahul Dravid) -> (Rahul D.)
// Input -> (String)
// Output (String)
let nameShorten = (input) => {
    var subString = input.substr(0, input.indexOf(' ')+2);
    var finalString = subString + "."
}

nameShorten("Rahul Dravid");



// Write a JavaScript function to hide email addresses to protect from unauthorized user.
// Input -> (String) -> "someone@altcampus.io"
// Output -> (String) -> "som....@altcampus.io"
let emailHide = (input) => {
    var subString = input.substr(0, input.indexOf('@'));
    var endString = input.substr(input.indexOf('@'));
    subString = subString.slice(0,3) + "..."
    var finalString = subString + endString;
    return finalString;
}
emailHide("ramesh7128@gmail.com");

// Write a JavaScript function to parameterize a string
// Input -> (String) -> ('The Perks Of Being A Wallflower')
// Output -> (String) -> 'the-perks-of-being-a-wallflower
let parameterize = (input) => {
    var subString = input.replace(/ /g, '-').toLowerCase();
    return subString;
}
parameterize("The Perks Of Being A Wallflower")

// Write a JavaScript function to capitalize the first letter of every Word of a string.
// Inpput -> (String) -> 'hello Batman from India'
// Output -> (String) -> 'Hello Batman From India'
function inputText(input) {
    let inputList = input.split(' ');
    (() => {
        inputList.forEach((element, i) => {
            inputList[i] = element[0].toUpperCase() + element.slice(1);
        });
    })();
    console.log(inputList.join(' '));
}
inputText("hello Batman from India");


// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
// Input (String) -> 'AaBbcVv'
// Output -> 'aAbBCvV'
function inputText(input) {
    var copyString =  "";
    for(var a of input) {
        console.log(copyString);
        copyString = copyString + ((a == a.toLowerCase()) ? a.toUpperCase(): a.toLowerCase());
    }
    return copyString;
}

inputText("aAbabVxFsd");
// check output.

// Write a JavaScript function to convert a string into camel case.
// Input (String) -> 'Learning about js'
// Output -> 'LearningAboutJs'
function convertCase(input) {
    let inputList = input.split(' ');
    (() => {
        inputList.forEach((element, i) => {
            inputList[i] = element[0].toUpperCase() + element.slice(1).toLowerCase();
        });
    })();
    console.log(inputList.join(''));
}
convertCase("Learning about js.");

// Write a JavaScript function to uncamelize a string
// Input (String) -> 'LearningAboutJs'
// Output -> 'Learning About Js'
function uncamelize(input) {
    var newstring = "";
    (() => {
        for (var item of input) {
            console.log(newstring);
            newstring = newstring + ((item === item.toUpperCase()) ? " " + item: item);
        }
    })();
    return newstring.trim();
}

uncamelize("LearningAboutJs");


// Write a JavaScript function to concatenates a given string n times
// Input (String, number) -> ('Hello!', 4)
// Output -> 'Hello!Hello!Hello!Hello!'
function concatenate(input, times) {
    return input.repeat(times);
}

concatenate('hello', 5);

// Write a JavaScript function to humanized number
// Input -> (Number) -> 1 or 2
// Output -> (String) -> 1st or 2nd

function humanized(number) {
    return ((number%100 >=11 && number%100 <=20) ?
        ((number + "th")):(number%10 == 1) ? ((number + "st")): (number%10 == 2) ? (number + "nd") : (number%10 == 3) ? (number + "rd"): (number + "th")); 
}

humanized(111);
humanized(23);



