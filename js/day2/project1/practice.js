"use strict"
// Get two values from the user ‘password’ and ‘confirm password’  using the prompt box and display a message “Password validated” if both the values match else display the message “Password do not match”
var password = prompt("Password");
var confirmPassword = prompt("ConfirmPassword");
(password === confirmPassword) ? console.log("Password Validated"): console.log("Password mismatch");

// Find the output of the following
// Logical AND operation
// true  && true; true
// true  && false; false
// false && true; false
// false && false; false

// Logical OR operation
// true  || true; true
// true  || false; true
// false || true; true
// false || false; false

// "foo" && "bar"; "bar"
// "bar" && "foo"; "foo"
// "foo" && ""; ""
// ""    && "foo"; ""

// "foo" || "bar"; "foo"
// "bar" || "foo"; "bar"
// "foo" || ""; "foo"
// ""    || "foo"; "foo"


// Output of this alert( alert(1) || 2 || alert(3) );
// checks for the first truthy value , from left to right,  alert(1) is non truthy since it returns undefined, so selects 2.
// but ends up executing alert(1) in the process, so the output should be alert(1) and then alert(2)

// Create a function which takes two input and (a,b) and display the sum, sub, multiplication, devision of those two numbers.
function mathOperations(a, b) {
    
    if (isNaN(a) || isNaN(b)) {
        alert("Pass only numbers to the function");
        return;
    }
    a = Number(a);
    b = Number(b);
    var sum = a + b;
    var sub = a - b;
    var multiplication = a * b;
    if (b === 0) {
        var division = "Infinity"
    } else {
        var division = a/b; 
    }
    alert(
        "Sum: " + sum + "\n" +
        "Sub: " + sub + "\n" +
        "Multiplication: " + multiplication + "\n" +
        "Division: " + division
    );
}
mathOperations(32,"4");

// Function to display a number if user enters negative number
function checkNegative(a) {
    if (isNaN(a)) {
        alert('Not a number');
    }
    a = Number(a);
    if (a < 0) {
        alert('Number is a negative: ' + a);
    } else if (a > 0) {
        alert("Not a negative number: " + a);
    } else {
        alert("Zero is neither negative nor positive");
    }
}

checkNegative(-5);
checkNegative(5);
checkNegative(0);

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
function sumMultiples3And5() {
    var sum = 0;
    for (var i=0; 3*i < 1000; i++) {
        if (5*i < 1000) {
            sum = sum + (3*i) + (5*i);
        } else {
            sum = sum + (3*i)
        }
    }
    return sum
}
console.log(sumMultiples3And5());

// If user enters positive number, that number won't be displayed
// done above.


// Funnction to check whether an integer entered by the user is odd or even
function checkOddEven(a) {
    if (a%2 === 0) {
        console.log("Is even");
    } else {
        console.log("Is odd");
    }
}
checkOddEven(4);
checkOddEven(3);


// Funnction to take two input and show the relation using =, > or < i.e (21,45) 21 < 45, (23,12) 23 > 12
function showRelation(a,b) {
    if (a > b) {
        console.log(a + "> " + b);
    } else if (a < b) {
        console.log(a + "< " + b);
    } else {
        console.log(a + "= " + b);
    }
}

showRelation(5,3);


// Funnction to Check Whether a Character is Vowel or Consonant
function vowelCheck(a) {
    a = a.toLowerCase();
    switch(a) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            console.log("Is a vowel");
            break;
        default:
            console.log("Is not a vowel");
    }

}
vowelCheck('a');
vowelCheck('b');


// Funnction to Find the Largest Number Among Three Numbers
// works provided no two numbers are equal.
function maxNumber(a,b,c) {
    if (a>b && a>c) {
        console.log(a + "is the largest number");
    } else if (b>a && b>c) {
        console.log(b + "is the largest number");
    } else {
        console.log(c + "is the largest number");
    }
}
maxNumber(6, 3, 10);


//Switch
// You are given a variable, . Your task is to print:
// - ONE, if num is equal to .
// - TWO, if num is equal to .
// - THREE, if num is equal to .
// - FOUR, if num is equal to .
// - FIVE, if num is equal to .
// - SIX, if num is equal to .
// - SEVEN, if num is equal to .
// - EIGHT, if num is equal to .
// - NINE, if num is equal to .
// - PLEASE TRY AGAIN, if  is none of the above.
var test = prompt("Enter a number between 1-10")
test = Number(test);
switch(test) {
    case 1:
        console.log("ONE");
        break;
    case 2:
        console.log("TWO");
        break;
    case 3:
        console.log("THREE");
        break;
    case 4:
        console.log("FOUR");
        break;
    case 5:
        console.log("FIVE");
        break;
    case 6:
        console.log("SIX");
        break;
    case 7:
        console.log("SEVEN");
        break;
    case 8:
        console.log("EIGHT");
        break;
    case 9:
        console.log("NINE");
        break;
    default:
        console.log("PLEASE TRY AGAIN")
}



// You are given a variable marks. Your task is to print:
// - AA if marks is greater than 90.
// - AB if marks is greater than 80 and less than or equal to 90
// - BB if marks is greater than 70 and less than or equal to 80
// - BC if marks is greater than 60 and less than or equal to 70
// - CC if marks is greater than 50 and less than or equal to 60
// - CD if marks is greater than 40 and less than or equal to 50
// - DD if marks is greater than 30 and less than or equal to 40
// - FF if marks is less than or equal to 30
var marks = prompt("Enter your marks 1-100");
marks = Number(marks);
switch(marks) {
    case (marks > 90):
        console.log("AA");
        break;
    case (marks > 80 && marks < 90):
        console.log("AB");
        break;
    case (marks > 70 && marks < 80):
        console.log("BB");
        break;
    case (marks > 60 && marks < 70):
        console.log("BC");
        break;
    case (marks > 50 && marks < 60):
        console.log("CC");
        break;
    case (marks > 40 && marks < 50):
        console.log("CD");
        break;
    case (marks > 30 && marks < 40):
        console.log("DD");
        break;
    case (marks <= 300):
        console.log("FF");
        break;
    default:
        console.log("NO grades given.")
}

// Funnction to generate Multiplication Table of a given number (use alert for number input)
function multiplicationTable(number) {
    number = Number(number);
    for(var i=1;i <= 20; i++) {
        console.log(number*i);
    }
}

multiplicationTable(prompt("Enter a number for multiplication series"));

// Funnctionn to calculate the Factorial of a Number
function factorialcalculate(a) {
    var factValue = 1;
    for(var i=a; i>0; i--) {
        factValue = factValue * i;
    }
    return factValue;
}

console.log(factorialcalculate(4));

// Output: var x = 10 + "1"; console.log(x); typeof x;
// "101"

//  Solve: 225 % 6 = ?
// 4

// Take two numbers and what to do with that number from user.
// Define an object with these function (add, sub, multiply, divide). Perform the operation
var mathMethods = {
    add: console.log(a+b),
    sub: console.log(a-b),
    multiply: console.log(a*b),
    divide: console.log(a/b),
}

var num1 = prompt("Enter the first Number");
var num2 =  prompt("Enter the second Number");
var operation = prompt("Enter the operation you need to perform");
operation = operation.toLowerCase();
switch(operation) {
    case "add":
        mathMethods.add;
        break;
    case "sub":
        mathMethods.sub;
        break;
    case "multiply":
        mathMethods.multiply;
        break;
    case "divide":
        mathMethods.divide;
        break;
}       

// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
function sumEvenFibonacci() {
    var sumEven = 2;
    var firstNum = 1;
    var secondNum = 2;
    var temp = 0;
    for(var i=0; secondNum < 4000000; i++) {
        temp = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = temp;
        if (temp%2 === 0) {
            sumEven = sumEven + temp;
        }
    }
    return secondNum
}
console.log(sumEvenFibonacci());
