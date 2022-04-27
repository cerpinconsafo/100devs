// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".


function hiOrBye(arr){
    let lastIndex = arr.length-1;

    if (arr[0] < arr[lastIndex]){
        alert('Hi!')
    } else if (arr[0] > arr[lastIndex]){
            alert('Bye!')
    } else {            
        alert('We close in an hour!')
        }
    }

    hiOrBye([1, 4, 5, 20])
    