//---Easy
//create a function that subtracts two numbers and alerts the difference
let subtractTwo = (num1, num2) => {
    alert (num1 - num2)
}

subtract(20,7)


//create a function that divides three numbers and console logs the quotient

let divideThree = (num1, num2, num3) => {
    console.log (num1 / num2 / num3)
}
 divideThree(20, 2, 5)


//create a function that multiplys three numbers and returns the product


let productThree = (num1, num2, num3) => {
    console.log (num1 * num2 * num3)
}
 prodThree(2, 3, 4)


//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
let sumAndDivide = (num1, num2, num3) => (num1 + num2) / num3


//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number


let conditionalFunction = (n1, n2, n3, n4) => {
    let product = n1 * n2;

    if (product > 100) {
        console.log(product + n3 + n4)
    }
    else if (product < 100) {
        console.log(product - n3 - n4)
    }
    else {
        alert( (n1*n2*n3) / n4)}
}