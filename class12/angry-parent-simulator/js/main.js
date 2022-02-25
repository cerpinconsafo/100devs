//pseudo-code to start thinking through process 

//grab the element for the click event
document.querySelector('#yell').addEventListener('click', fullNameYell)


//create function that combines all inputs and outputs them as a single string
function fullNameYell() {

  //define variables for each input of user name; firstname, firstmid, secondmid, lastname
  const firstName = document.querySelector('#firstName').value
  const firstMidName = document.querySelector('#firstMiddle').value
  const secondMidName = document.querySelector('#lastMiddle').value
  const lastName = document.querySelector('#lastName').value


  //combine each of the inputs into a single string
  const fullName = `$fName $firstMidName $secondMidName $lastName `;


  // show the final full name string as emphasized text
  document.querySelector("#placeToYell").innerText=fullName;

}

// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)
//
// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value
//
//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`
//
//   document.querySelector('#placeToYell').innerText = yellText
//
//   let yellThis = new SpeechSynthesisUtterance(yellText);
//
//   synth.speak(yellThis);
// }
