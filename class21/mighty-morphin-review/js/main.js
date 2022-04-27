// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let favHoliday = 'Easter';
console.log(favHoliday.toUpperCase());

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let randomString = "Hello Earthling!"
alert(randomString.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

let subFrom100 = function (n1, n2, n3, n4, n5){
    let val = 0;
    val = 100 - n1 - n2 - n3 - n4 - n5
    alert(Math.abs(val));

}

subFrom100(1, 1, 1, 1, 1)


// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.


let lowAndHigh = function (n1, n2, n3){
    let min = Math.min(n1, n2, n3);
    let max = Math.max(n1, n2, n3);

    console.log(`The lowest number is ${min} and the highest number is ${max}`)

}

lowAndHigh(274, 666, .69)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
