//--- Easy
//create a variable and assign it a number
let num = 74;
//minus 10 from that number
num -= 10;
//print that number to the console
console.log(num)


//--- Medium
//create a variable that holds a value from the input

// we wrap it in Number() so that it makes sure we are dealing with an integer
// let numFromInput = Number(document.querySelector('#danceDanceRevolution').value)


// //add 25 to that number
// numFromInput += 25
// //alert that number
// console.log(numFromInput)


//--- Hard
//create a variable that holds the h1
const h1 = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
let clickH1 = h1.addEventListener('click', addTwo)

function addTwo() {
    let numFromInput = Number(document.querySelector('#danceDanceRevolution').value)

    //add 25 to that number
    numFromInput += 25
    //alert that number
    console.log(`The  numFromInput + 25 is "${numFromInput}"`)
    console.log(`The num from value is "${num}"`)
    console.log("The sum of num + numFromInput is " + (num + numFromInput))
}