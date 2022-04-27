//Create a pizza object that has four properties and three methods


// let pizza = {};

// pizza.size = 'large'
// pizza.top = ['spinach', 'onion', 'banana peppers', 'garlic']
// pizza.crust = 'stuffed'
// pizza.sauce = 'heavy'


// pizza.estimatedDeliveryTime = function(){
//     console.log('Calculating...')
// }

// pizza.burnMouth = function(){
//     console.log('FUIgviuhdVuhVSRUHIVeUgh!!!!@!@!???!!@$.')
// }

// pizza.fisbee = function() {
//     console.log('YEEEeeeet!')
// }

// constructor object

function MakePizza (size, toppings, crust, sauce){

    this.size = size
    this.toppings = toppings
    this.crust = crust
    this.sauce = sauce
    this.deliveryTime = function(){
        console.log('AYO! The Pizza is on its way!')
    }
    this.burnMouth = function(){
        console.log('FUIgviuhdVuhVSRUHIVeUgh!!!!@!@!???!!@$.')
    }
    
    this.fisbee = function() {
        console.log('YEEEeeeet!')
    }
}

let pizza = new MakePizza('large', ['garlic', 'chicken', 'peppers'], 'thick', 'bbq sauce')