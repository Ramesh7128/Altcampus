// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
function tellFortune(children, partner, location, title) {
    console.log(`you will be ${title} in ${location}, and married to ${partner} with ${children} kids.`)
}
tellFortune(3, 'babitha', 'mumbai', 'developer');


// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Add an additional argument to the function that takes the conversion rate of human to dog years.
function calculateDogAge(age, conversionRate) {
    var dogYears = age * conversionRate;
    console.log(`your doggie is ${dogYears} years old in dog years!`);
}
calculateDogAge(4, 7);

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Accept floating point values for amount per day, and round the result to a round number.
const MAX_AGE = 50;
function calculateSupply(age, amount) {
    var remaining_age = MAX_AGE - age;
    var consumedAmount = remaining_age * amount;
    consumedAmount = Number(consumedAmount.toFixed());
    console.log(`you will need ${consumedAmount} to last you until the ripe old age of ${MAX_AGE}`);
}   

calculateSupply(20, 10);
// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
function celsiusToFahrenheit(temp) {
    var fahrenheitTemp = temp * 32;
    console.log(`${temp}C is ${fahrenheitTemp}F`);
}

function fahrenheitToCelsius(temp) {
    var celsiusTemp = temp/32;
    console.log(`${temp}F is ${celsiusTemp}C`);
}

celsiusToFahrenheit(32);
fahrenheitToCelsius(142);


//1. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }
  // Will the function work differently if else is removed?
//   NO.
  function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
  }
  // Is there any difference in the behavior of these two variants?
  // both the function behave the same way.
  

  // 2. The following function returns true if the parameter age is greater than 18.
  // Otherwise it asks for a confirmation and returns its result.
  
  function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Do you have your parents permission to access this page?');
    }
  }
  // Rewrite it, to perform the same, but without if, in a single line.
  // Make two variants of checkAge:
  // Using a question mark operator ?
  // Using OR ||

  function checkAge(age) {
      return (age > 18) ? true: confirm("Do you have your parents permission to access this page?");
  }
  
  function checkAge(age) {
      return (age > 18) || confirm("Do you have your parents permission to access this page?");
  }
  
  
  // Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
  // pow(3, 2) = 3 * 3 = 9
  // pow(3, 3) = 3 * 3 * 3 = 27
  // pow(1, 100) = 1 * 1 * ...* 1 = 1
  // Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
  // In this task the function should support only natural values of n: integers up from 1.
  var sum = 1;
  function pow(x, n) {
      if (n === 0) {
          return 1;
      } else {
          sum = x * pow(x, n-1);
      }
      return sum
  }
  pow(3,2);  
  // Enter a string and the program counts the number of vowels in the text. For added complexity have it report a sum of each vowel found.
  function vowelsCount(text) {
    sum = {
        a:0,
        e:0,
        i:0,
        o:0,
        u:0,
    }
    var vowelCount = 0;
    for (var i=0; i<text.length; i++) {
        if (text[i] in sum) {
            vowelCount += 1;
            sum[text[i]] = sum[text[i]] + 1;
        }
    }
    return sum, vowelCount;
  }

  count, indCount = vowelsCount("unicyle");
  
  // Checks if the string entered by the user is a palindrome. That is that it reads the same forwards as backwards like “racecar”
  function checkPalindrome(text) {
      for (var i=0; i<text.length; i++) {
          if (text[i] !== text[text.length-i]) {
              return "Not a Palindrome"
          }
      }
      return "its a palindrome."
  }

  // Counts the number of individual words in a string. For added complexity read these strings in from a text file and generate a summary.
function wordCount(text) {
    var wordCount = 0;
    for( var i=0; i< text.length; i++) {      
        if (text[i] == " ") {
            wordCount += 1;
        }
    }
    return wordCount+1;
}
console.log(wordCount("hello world check"));
  
// Show the following output using one loop.
      // 1, 2, 3, 4, 5
      // 6, 7, 8, 9, 10
tempString = ""
for(var i=1; i<11; i++) {
    tempString = tempString + i + ',';
    if (i === 5) {
        console.log(tempString);
        console.log('\n');
        tempString = '';
    }
}
console.log(tempString);
  
  // Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.
  function operations(n, option) {
      if (option === "sum") {
          var sum = 0;
          for (var i =0; i<n; i++) {
              sum = sum + i;
          }
          return sum;
      } else if (option === 'product') {
          var sum = 1;
          for (var i =0; i<n; i++) {
              sum = sum * i;
          }
          return sum;  
      }
  }

  operations(20, "sum");
  operations(20, "product");
  
  // Write a function that returns the largest element in a list.
function largestElement(a) {
    var largest = 0;
    for (var i=0; i< a.length; i++) {
        if (a[i] > largest) {
            largest = a[i];
        }
    }
    return largest;
}

var testList = [2,3,4,7,4,7];
largestElement(testList); 
  
  // Write a program that asks the user for a number n and prints the sum of the numbers 1 to n
function sumToN(n) {
    var sum = 0;
    for (var i=1; i<n; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log("sum to 10 numbers" + sumToN(10));

// Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
function multiples(n) {
    var sum = 0;
    for (var i=0; i<n; i++) {
        if (i%5 === 0 || i%7 === 0) {
            sum = sum + i;
        }
    }
    return sum;
}
  
  // Write a program that takes a number under (25) and prints the multiplication table for the number.
//   done already.