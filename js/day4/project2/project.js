//1. Pick a penguin from Wikipedia's List of Fictional Penguins (https://en.wikipedia.org/wiki/List_of_fictional_penguins) and create an object named myPenguin with properties that represent the information listed in each column on that Wikipedia page (for example: the character's name, origin, and author).
var myPenguin = {
    name: "Chilly Willy",
    origin: "Chilly Willy",
    notes: "A penguin who does not enjoy being cold, from the classic Walter Lantz cartoons. In addition to his animated cartoons, also had his own comic book in the 1950s."  
}

//2. Use console.log() to print the penguin's name to the console as part of a welcome message, like "Hello, I'm a penguin and my name is [NAME HERE]!"
console.log(myPenguin.name);

//. Write another line of code that adds a new property to your penguin called canFly and set it to false.
myPenguin.canFly = false;

//4. Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?"
myPenguin.chirp = () => {
    console.log("CHIRP CHIRP!")
} 

//5. Add another method to your penguin called sayHello that prints to the console the same message from problem 2 above. But this time, be sure to use the mystical, magical, all-powerful this keyword to access your penguin's name, so that way the sayHello method could potentially work for any penguin that has a name! 
myPenguin.sayHello = () => {
    console.log(this.name);
}

//6. Next, call your penguin's sayHello() method and make sure that it works!
myPenguin.sayHello();

//7. Without modifying any of your previous code, change the penguin's name to "Penguin McPenguinFace" and then call your penguin's sayHello() function one more time to make sure it still works.
myPenguin.name = "Penguin McPenguinFace";

//8. Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.
myPenguin.fly = () => {
    if (this.canFly) {
        console.log("It can fly");
    } else {
        console.log("it can't fly");
    }
}

//9. Call your penguin's fly() method and make sure it works!
myPenguin.fly();

//10. Change the canFly property to true -- again, without modifying any of your previous code!
myPenguin.canFly = true;
//11. Now call your penguin's fly() method again and make sure it works as expected!
myPenguin.fly();
//12. Write a for ... in loop to print each key to the console. (Hint: See this page for an example of this special type of loop.)
for (var key in myPenguin) {
    console.log(key);
}
//13. Write another for ... in loop to print the value of each key to the console. (Hint: You'll need to use bracket notation to access the values this way, instead of dot notation!)
for (var key in myPenguin) {
    console.log(myPenguin[key]);
}