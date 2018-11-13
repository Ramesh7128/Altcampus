const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;


// Write a program to calculate the total price of your phone purchase.
// You will keep purchasing phones (hint: loop!) until you run out of bank balance.
// You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.
var amountAccesoryInclusive = 0;
amount = amount + PHONE_PRICE;
var newAmount =  amount
if (amount > bank_balance) {
    var newAmount = amount;
    amount = 0;
}
while(newAmount < bank_balance) {
    newAmount = amount + PHONE_PRICE
    if (newAmount < bank_balance) {
        amount = newAmount
    }   
    amountAccesoryInclusive = amount + amountAccesoryInclusive 
    if (amountAccesoryInclusive < SPENDING_THRESHOLD) {
        amount = amount + ACCESSORY_PRICE;
    }
}
// amount will hold the value of total purchase amount.
console.log("total amount" + amount);

//After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
var taxInclusiveAmount =  amount + (amount * TAX_RATE);
console.log("Calcutated purchase amount: " + formatAmount(taxInclusiveAmount));

//Finally, check the amount against your bank account balance to see if you can afford it or not.
if (taxInclusiveAmount < bank_balance) {
    console.log("You can afford it");
} else {
    console.log("You do not have sufficient funds")
}

// Write a function called calculateTax which takes an argument 'amount' and calculates the tax you need to pay.
function calculateTax(amount) {
    return amount * TAX_RATE;
}
console.log(calculateTax(amount));


// Write a function named formatAmount which returns you amount in this format '$ 132.45' make the decimal fixed to 2 places.
function formatAmount(amount) {
    return "$ " + amount.toFixed(2);
}

console.log(formatAmount(amount))

// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

function fizzbuzz () {
    for(var i = 1; i<100; i++) {
        var message = (i%3 === 0 && i%5 === 0)? "FizzBuzz":
            (i%3 === 0) ? "Fizz":
            (i%5 === 0) ? "Buzz":
            i;
        console.log(message);
    }
}

fizzbuzz()