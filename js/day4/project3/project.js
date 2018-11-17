
var myPenguin = {
    name: "Chilly Willy",
    origin: "Chilly Willy",
    notes: "A penguin who does not enjoy being cold, from the classic Walter Lantz cartoons. In addition to his animated cartoons, also had his own comic book in the 1950s."  
}

// 1. Add a new property to your penguin called favoriteFoods and set it equal to an array containing a list of three strings.
myPenguin.favouriteFood = ['fish', 'prawns', 'insects'];

// 2. Access your penguin's second favorite food and print it to the console using console.log()
console.log(myPenguin.favouriteFood[1]);

// 3. Create a new variable called firstFavFood and set it equal to the first item in your penguin's array of favorite foods.
var firstFavFood = myPenguin.favouriteFood[0];

// 4. Add another food to the end of the list.
myPenguin.favouriteFood.push("Meat");

// 5. Print the length of your penguin's favoriteFoods array to the console with console.log()
console.log(myPenguin.favouriteFood.length);

// 6. Without modifying any of your previous code, write a new line of code that changes the value of the last item in the list to "pineapples" (overwriting the previous value).
myPenguin.favouriteFood[myPenguin.favouriteFood.length-1] = "Pineapple";

// 7. Create a new variable named lastFavFood that will always point to the last element of your penguin's favoriteFoods array, no matter how many items are in the list. (Hint: this is essentially the same problem as step 18 from above.)
var lastFavFood = myPenguin.firstFavFood[myPenguin.firstFavFood.length-1]

//8. Write a for loop to iterate through every food in your penguin's favoriteFood property and print each one to the console. (Hint: This loop will look exactly the same as the one you wrote for step 16 above, except now you're accessing the array as a property of an object.)
for (var key in myPenguin.favouriteFood) {
    console.log(myPenguin.favouriteFood[key]);
}