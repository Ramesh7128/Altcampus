//1
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
let newArray = array.reduce((acc, element) => {
  acc.concat(element);
  return acc;
}, []);
console.log(newArray);

function loop(number, condFunc, updateFunc, bodyFunc) {
    for(let i=number; i>0;) {
      if (condFunc(i)) {
        bodyFunc(i);
        i = updateFunc(i);
      }
    }
  }   
      
loop(3, n => n > 0, n => n - 1, console.log);

//2
function every(array, test) {
for(var key of array) {
    if (!(test(key))) {
    return false;
    }
}
return true;
}

function every(array, test) {
!array.some(n => !(n < 10))
}

// some(

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true  


