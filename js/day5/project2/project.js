// Write a JavaScript function to chop a string into chunks of a given length.
// Input ( String, Number) -> ('Hello World!', 2)
// Output ['He', 'll', 'o ', 'Wo', 'rl', 'd!']
function chopLength(input, length) {
    let element = "";
    let elementArray = [];
    for(var i=0; i<input.length; i++) {
        element = element + input[i];
        if ((i+1)%length==0) {
            elementArray.push(element);
            element = "";
        }
    }
    elementArray.push(element);
    return elementArray; 
}

chopLength("hello world", 2);



//Write a JavaScript function to count the occurrence of a substring in a string.
// Input (String, String) -> ('The world of the dogs', 'the')
// Output (Number) -> 2
function countOccurence(input, subInput) {
    var count = 0;
    var inputArray = input.split(' ');
    var re = new RegExp(subInput, "i");
    for (let key of inputArray) {
        if (re.test(key)) {
            count += 1;
        }
    }
    return count;
}

countOccurence('The world of the dogs', 'the');



//  Write a JavaScript function to strip leading and trailing spaces from a string.
// Input (String) -> ('Hello World   ')
// Output String -> "Hello World"
function removeSpaces(input) {
    return input.trim();
}

removeSpaces(" hello world  ");


// Write a JavaScript function to truncate a string to a certain number of words.
// Input (String, Number) -> ('The quick brown fox jumps over the lazy dog', 4)
// Output ( String ) -> "The quick brown fox"
function truncate(input, count) {
    let inputList = input.split(' ');
    let truncateArray = input.splice(0, count);
    return truncate.join(' ');
}

truncate('The quick brown fox jumps over the lazy dog', 4);

// Write a JavaScript function to alphabetize a given string.(A -z)
// Input (String) -> 'United States'
// Output 'SUadeeinsttt'
function alphabetize(input) {
    return input.split('').sort().join('');
}

alphabetize('SUadeeinsttt');


// Write a JavaScript function to test case insensitive (except special Unicode characters) string comparison.
// Input ( String String) -> ('abcd', 'AbcD')
// Output Boolean -> true
// ('ABCD', 'Abce') -> false
function checkString(input, checkInput) {
    return ((input.toLowerCase() == checkInput.toLowerCase()) ? true: false);
}

checkString('abcd', 'AbcD');

