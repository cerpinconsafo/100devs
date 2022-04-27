//Create an array of movie titles. Loop through the array and each element to the h2.

let movieArr = ['the matrix', 'rocky', '21 grams'];

for (let i=0; i < movieArr.length; i++){
    document.querySelector('h2').innerText += movieArr[i];
}

//Create an array of numbers. Loop through the array and three to each number and replace the old number.

let numArr = [10, 20, 30, 40, 50]
console.log('This is the first numArr', numArr)

for (i= 0; i < numArr.length; i++){
    numArr[i] += 3;
    console.log(numArr[i])

}
console.log('This is the updated numArr', numArr)

numArr.forEach((item, i) =>{
    numArr[i] = item + 3

})

//Find the average of all the numbers from question three
