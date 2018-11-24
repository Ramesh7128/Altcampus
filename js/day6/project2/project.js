var words = [
    'mystery',
    'brother',
    'aviator',
    'crocodile',
    'pearl',
    'orchard',
    'crackpot'
  ];
  //Write a function findLongestWord that takes an array of words and returns the longest one.
  //If there are 2 with the same length, it should return the first occurrence.
function longestWord(words) {
    let word_length = 0;
    let longWord = words.reduce((acc, word) => {
        if (word_length < word.length) {
            acc= word;
            word_length = word.length;
        }
        return acc;
    }, "");
    return longWord;
}
  
longestWord(words);
  
  var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
  // Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
  // Use reduce method of array
  // Use the above sum and calculate the average.
  function sumArray(numbers) {
      let sum = numbers.reduce((acc, number) => acc + number);
      return sum;
  }
  
  
  var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
  //Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
  function averageArray(numbers) {
    let sum = numbers.reduce((acc, number) => acc + number);
    return sum/(numbers.length + 1);
  }
  
  
  var words2 = [
    'seat',
    'correspond',
    'linen',
    'motif',
    'hole',
    'smell',
    'smart',
    'chaos',
    'fuel',
    'palace'
  ];
  //Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
  
  function averageWordsLengthArray(words) {
    let sum = words.reduce((acc, word) => acc + word.length);
    return sum/(words.length + 1);
  }
  