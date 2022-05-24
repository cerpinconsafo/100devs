//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

// this was for a stopwatch object 
// let stopwatch = {};

// stopwatch.color = "yellow"
// stopwatch.brand = "Doodie Gym Class Plus 3000"
// stopwatch.shape = 'round'
// stopwatch.start = function(){
//     console.log('The stopwatch started'
//     )
// }


function CreateFighter(charName, health, speed, special, taunt) {
    this.charName = charName
    this.health = health
    this.speed = speed
    this.special = special

    this.throw = function () {
        console.log('YEEEEEEEtttt')
    }
    this.taunt = function () { console.log(`You cant handle my ${tagline}`) }

    this.fatality = function () {
        console.log('HADDDDOOOOOOKEEEN')
    }}