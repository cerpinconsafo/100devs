//Create a stopwatch object that has four properties and three methods


let stopwatch = {};

stopwatch.brand = 'Nike'
stopwatch.color = 'Black'
stopwatch.shape = 'round'
stopwatch.size = 'shmmmedium';

stopwatch.start = function(){
    console.log('Starting')
}

stopwatch.stop = function(){
    console.log('Stopping')
}

stopwatch.sayBrand = function(){
    console.log(stopwatch.brand)
}
console.log(stopwatch)


//https://javascript.info/object tasks

//Tasks
//Hello, object
//importance: 5

//Write the code, one line for each action:

    //Create an empty object user.
    let user = {};
    console.log(`This is the value is ${user.name}`);
    //Add the property name with the value John.
    user.name = 'John';
    console.log(`The user.name value is ${user.name}`);

    //Add the property surname with the value Smith.
    user.surname = 'Smith';
    console.log(`The user.surname value is ${user.surname}`);

    //Change the value of the name to Pete.
    user.name='Peter';
    console.log(`The user.name value is ${user.name}`);

    //Remove the property name from the object.
    delete user.name;
    console.log(user);

//
//
//    Check for emptiness
//importance: 5

//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
let isEmpty = obj =>  ( Object.keys(obj).length === 0 ) ? true : false;

//Should work like that:
let schedule = {};
console.log(schedule);

 console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";
schedule.year = 2022;
console.log(schedule.year);
console.log( isEmpty(schedule) ); // false
    
 /*Just loop over the object and return false immediately if there’s at least one property.

function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

*/   




//Sum object properties
//importance: 5

//We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

//Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

//If salaries is empty, then the result must be 0.
function sumAllSalaries(obj) {
    let sum = 0;
    for (let key in obj) {
      sum += obj[key];
        }
      return console.log(sum);
    }    

sumAllSalaries(salaries);


//Multiply numeric property values by 2
//importance: 3

//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

//For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  randomLength: 100,
  title: "My menu"
};

multiplyNumeric(menu);
multiplyNumeric(menu);
multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

//Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

//P.S. Use typeof to check for a number here.

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }    
  }
  console.log(obj);
}