//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function sortEven(arr){

    let evens = [];    

    arr.forEach( num => {
        if (num % 2 === 0){
            evens.push(num)
            }
    })
    return evens;
}

console.log(sortEven(2,3,4,5,6));