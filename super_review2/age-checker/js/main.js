//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

    if (age < 16) {
        console.log("You can't drive bro")
    }
    else if (age < 18) {
        console.log("You can\'t hate from outside the club, because you cant even GET IT the club, psh, PLEASE")
    }
    else if (age < 21) {
        console.log("You cant drink homie")
    }
    else if (age < 30) {
        console.log("You cant rent a fancy car suckah")
    }
    else {
        console.log("There is nothing else to look forward to")
    }

//--- Harder
//On click of the h1
const h1 = document.querySelector('h1')
h1.addEventListener('click', checkAge)

//Place the result of the conditional in the paragraph
// making the paragraph tag a variable for to keep code DRY
const p = document.querySelector('p');



function checkAge() {
    //Take the value from the input
    let age = Number(document.querySelector('input').value);

    if (age < 16) {
        p.innerText = "You can't drive bro"
    }
    else if (age < 18) {
        p.innerText = "You can\'t hate from outside the club, because you cant even GET IT the club, psh, PLEASE"
    }
    else if (age < 21) {
        p.innerText = ("You cant drink homie")
    }
    else if (age < 30) {
        p.innerText = "You cant rent a fancy car suckah"
    }
    else {
        p.innerText = "There is nothing else to look forward to"
    }

}


