// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let favFood;
favFood = 'pizza';
alert(favFood);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
 let someString = 'Sometimes I float.'
 alert(someString.charAt(1));

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function rando(num1, num2, num3){
    alert((num1/num2) * num3)
}
 rando(20, 4, 3)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function cubeRoot(num1){
    console.log(Math.cbrt(num1).toFixed(4))

    
}

cubeRoot(9);
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function isSummer(month) {
    switch (month) {
        case 'June', 'July', 'August':
            console.log('YAY, SUMMER!');
            break;
        case 'January', 'February', 'March', 'April', 'May', 'September', 'October', 'November', 'December':
            console.log('Damn, its not summer, back to bed...');
            break;
        default:
            console.log('Sorry, you did not enter a month!')
    };    
}

isSummer('July');
isSummer('April');
isSummer('Poop')


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function skipFive(num){
    for (let i=1; i <= num; i++ ){
        if (i % 5 !== 0){
            console.log(i)
        }
    }
}

skipFive(20);
