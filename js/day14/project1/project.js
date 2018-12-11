// # Callbacks and Higher-Order Functions

// ## Challenge 1
// Create a function `addTwo` that accepts one input and adds 2 to it.
function addTwo(number) {
    return number+2;
}


// ## Challenge 2
// Create a function `addS` that accepts one input and adds an "s" to it.
function addTwo(text) {
    return text+'s';
}


// ## Challenge 3
// Create a function called map that takes two inputs:
//   1. An array of numbers (a list of numbers)
//   2. A 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
// Have `map` return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
function map(array1, callbackFunc) {
    let newArray = [];
    for(let i=0; i<array1.length; i++) {
        newArray.push(callbackFunc(array1[i]));
    }
    return array1;
}


// ```js
// map([1,2,3,4,5], multiplyByTwo); //-> [2,4,6,8,10]
// multiplyByTwo(1); //-> 2
// multiplyByTwo(2); //-> 4
// ```
function multiplyByTwo(number) {
    return number*2;
}

function map(basearray, multiplyByTwo) {
    let newArray = []
    basearray.forEach((item) => newArray.push(multiplyByTwo(item)));
    return newArray
}

// ## Challenge 4
// The function `forEach` takes an array and a callback, and runs the callback on each element of the array. `forEach` does not return anything.

// ```js
// var alphabet = '';
// var letters = ['a', 'b', 'c', 'd'];
// forEach(letters, function(char) {
//   alphabet += char;
// });
// console.log(alphabet);   //prints 'abcd'
// ```
function forEach(letters, iterfunc) {

}

// ## Extension 1
// In the first part of the extension, you're going to rebuild `map` as `mapWith`. This time you're going to use `forEach` inside of `mapWith` instead of using a for loop.
function mapWith(array1, mapfunc) {
    return array1.forEach(mapfunc);
}

// ## Extension 2
// The function reduce takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
// ```js
var nums = [4, 1, 3];
var add = function(a, b) { return a + b; }
reduce(nums, add, 0);   //-> 8
// ```
function reduce(array1, reduceFunc, accumulator) {
    array1.forEach((element) => {
        accumulator = reduceFunc(accumulator, element);
    });
    return accumulator;
}

// Here's how it works. The function has an "accumulator value" which starts as the `initialValue` and accumulates the output of each loop. The array is iterated over, passing the accumulator and the next array element as arguments to the `callback`. The callback's return value becomes the new accumulator value. The next loop executes with this new accumulator value. In the example above, the accumulator begins at 0. `add(0,4)` is called. The accumulator's value is now 4. Then `add(4, 1)` to make it 5. Finally `add(5, 3)` brings it to 8, which is returned.


// ## Extension 3
// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. Use reduce!
function intersection(...inputArrays) {
    return inputArrays.reduce((accumulator, element) => {
        accumulator = accumulator.reduce((acc, item)=> {
            if (element.includes(item)) {
                acc.push(item);
            }
            return acc;
        }, []);
        return accumulator;
    });
}

// ## Extension 4
// Construct a function union that compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. Use reduce!
function intersection(...inputArrays) {
    return inputArrays.reduce((accumulator, element) => {
        element.forEach((item) => {
            if (!accumulator.includes(item)) {
                accumulator.push(item);
            }   
        });
        return accumulator;
    });
}


// ## Extension 5
// Construct a function `objOfMatches` that accepts two arrays and a callback. `objOfMatches` will build an object and return it. To build the object, `objOfMatches` will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.
function objOfMatches(array1, array2, callbackFunc) {
    newObj = {};
    array1.forEach((element, index) => {
        if (callbackFunc(element) == array2[index]) {
            newObj[element] = array2[index];
        }
    });
    return newObj;
}



// ## Extension 6
// Construct a function `multiMap` that will accept two arrays: an array of values and an array of callbacks. `multiMap` will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

function multiMap(array1, array2) {
    newObj = {};
    array1.forEach((element, index) => {
        newObj[element] = array2[index](element);
    })
    return newObj;
}