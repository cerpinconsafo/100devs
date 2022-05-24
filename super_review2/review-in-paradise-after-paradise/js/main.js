// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
arrLess = [2, 3, 5, 6, 39]
arrMore = [20, 3, 4, 6, 1]
arrTrial = [2, 3, 5, 6, 2]

let hiOrBye = arr => {

    let lastIndex = arr.length - 1;
    if (arr[0] < arr[lastIndex]) {
        alert('HI')
    } else if (arr[0] > arr[lastIndex]) {
        alert('BYE')
    }
    else {
        alert('We close in an hour')
    }
}

hiOrBye(arrTrial)