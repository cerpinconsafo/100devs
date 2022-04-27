//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let movies = ['movie1', 'movie2', 'movie3', 'movie4', 'movies5']

movies.forEach(n => console.log(n));

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

let numArr = [2, 5, 7, 11, 20, 74, 89];
let onlyEvens = arr => arr.filter( n => n % 2 === 0)

console.log(onlyEvens(numArr))





//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number


function sumSecondLowHigh(arr){
    let sorted = arr.sort((a,b) => a-b)
    
    alert( sorted[1] + sorted[ sorted.length - 2] )
}

sumSecondLowHigh([2, 3, 1, 5, 4])