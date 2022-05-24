//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

let checkEvens = arr => {
    let evenArr = [];
    arr.forEach( num => {
        if ( num % 2 === 0) {
            evenArr.push(e)
        }
    })
    return evenArr
}

console.log( checkEvens([1, 2, 3, 4, 5, 6, 7, 8]) )