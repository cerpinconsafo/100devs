// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = '   Dr. Pepper '
favDrink = favDrink.trim()
console.log(favDrink)
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let randomString = '';
randomString = 'I used to drink apple juice a lot when I was younger.'

let includesApple = randomString.includes('apple');
console.log(includesApple);
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
let rockPaperScissor = _ => {
    
        let roll = Math.random();
        if (roll < .33) {
            return console.log('ROCK')
        } else if ( roll < .66){
            return console.log('paper')
        } else {
            return console.log('SCISSORS')
        }
    };

rockPaperScissor();
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
