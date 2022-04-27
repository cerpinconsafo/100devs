//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let randomArr = [3, 5, 6, 7, 9, 10];

let sumArr = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    alert(sum)
}
 sumArr(randomArr);

//reduce method
 let nums = [42, 19, 77, 33, 57];

 let sum = nums.reduce( (acc, currentVal) => acc + currentVal, 0)

 alert(sum);


//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

//Create a function that takes string
//Print the reverse of that string to the console

//Create a function that takes in a string
//Alert if the string is a palindrome or not
