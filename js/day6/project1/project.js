// Arrays to work on
// var numbers = [1,12,4,18,9,7,11,3,101,5,6];
// var strings = ['this','is','a','collection','of','words'];


// Use the above two arrays and practice array methods


// Find largest number in numbers
function largestNumber() {
    let numbers = [1,12,4,18,9,7,11,3,101,5,6];
    let largestNumber = 0;
    numbers.forEach((num, i) => {
        if (num > largestNumber) {
            largestNumber = num;
        }
    });
    return largestNumber;
}


// Find longest string in strings
function largestNumber() {
    let strings = ['this','is','a','collection','of','words'];
    let largestString = '';
    numbers.forEach((str, i) => {
        if (str.length > largestString.length) {
            largestString = str;
        }
    });
    return largestString;
}


// Find all the even numbers
function evenNumbers() {
    let numbers = [1,12,4,18,9,7,11,3,101,5,6];
    let evenArray = numbers.reduce((acc, num) => {
        if (num%2 == 0) {
            acc.push(num);
        }
        return acc;
    }, []);
    return evenArray;
}

// Find all the odd numbers
function oddNumbers() {
    let numbers = [1,12,4,18,9,7,11,3,101,5,6];
    let oddArray = numbers.reduce((acc, num) => {
        if (num%2 !== 0) {
            acc.push(num);
        }
        return acc;
    }, []);
    return oddArray;
}

// Find all the words that contain 'is' use string method 'contains'
function checkString(input, subString) {
    input.reduce((acc, name) => {
        if (name.includes(subString)) {
            acc.push(name);
        }
        return acc;
    })
    
}


// Find all the words that contain 'is' use string method 'indexOf'
function checkString(input, subString) {
    input.reduce((acc, name) => {
        if (name.indexOf(subString)!== -1) {
            acc.push(name);
        }
        return acc;
    })
    
}


// Check if all the numbers in numbers array are divisible by three use array method (every)
function letNumber() {
    let numbers = [1,12,4,18,9,7,11,3,101,5,6];
    console.log(numbers.every((number) => {
        return (number%3 == 0);
    }))
}


//  Sort Array from smallest to largest
function smallestLargest() {
    let numbers = [1,12,4,18,9,7,11,3,101,5,6];
    let sortedNumber = numbers.sort();
    return sortedNumber;
}

// Remove the last word in strings
function lastWord(input) {
    let modifiedString = input.split(' ').slice(0, -1).join(' ');
}

// Add a new word in the array
function addWord(input, newWord) {
    input.push(newWord);
    return input;
}


// Remove the first word in the array
function removeFirstWord(input) {
    input.shift();
    return input;
}


// Place a new word at the start of the array use (upshift)
function addNewWord(input, newWord) {
    input.upshift(newWord);
    return input;
}


// Make a subset of numbers array [18,9,7,11]
function subset() {
    let numbers = [1,12,4,18,9,7,11,3,101,5,6];
    let newArray = numbers.slice(3,7);
    return newArray;
}


// Make a subset of strings array ['a','collection']
function subsetString() {
    let strings = ['this','is','a','collection','of','words'];
    let newString = strings.slice(2, 4);
    return newString;
}



// Replace 12 & 18 with 1221 and 1881
function replaceString() {
    let number = [1,12,4,18,9,7,11,3,101,5,6];
    let index12 = number.indexOf(12);
    let index18 = number.indexOf(18);
    number[index12] = 1221;
    number[index18] = 1881;
    return number;
}

// Replace words with string in strings array
function replaceWord() {
    let strings = ['this','is','a','collection','of','words'];
    strings.splice(-1, 1, 'strings');
    return strings;
}

// Customers Array
var customers = [
    { firstname : 'Joe', lastname : 'Blogs'},
    { firstname : 'John', lastname : 'Smith'},
    { firstname : 'Dave', lastname : 'Jones'},
    { firstname : 'Jack', lastname : 'White'}
];
// Find all customers whose firstname starts with 'J'
let newCustomerArray = customers.reduce((acc, number) => {
    if (number.firstname[0].toLowerCase() == "j") {
        acc.push(number);
    }
    return acc;
}, []);

// Create new array with firstname and lastname
let newFirstNameArray = customers.reduce((acc, name) => {
    acc.push(number.firstname);
    acc.push(number.lastname);
    return acc;
}, []);

// Sort the array created above alphabetically
let newFirstArray = newFirstNameArray.sort();