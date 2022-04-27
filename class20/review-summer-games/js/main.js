//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function multiplyArr(arr){

    let product = 1
    for (i = 0; i < arr.length; i++){
        product *= arr[i]
    }
}


function multiplyArrForEach(arr){

let product = 1;

arr.forEach( num => product *= num )
    alert(product)

}


multiplyArrForEach([2,3,4]);