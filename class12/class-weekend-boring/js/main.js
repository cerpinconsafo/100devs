
//pseudo-code to start thinking through process

//grab the eventListener button
document.querySelector('#check').addEventListener('click', check)


//create function to check user input for day of the week
function check() {


  //force input to lowercase to allow "Tuesday"/"TUESDAY"/"tuesday"/"tUeSdAY" etc
  const day = document.querySelector('#day').value.toLowerCase();

  //conditionals for each specific alert


  //class day
  if (day === "tuesday" || day === "thursday") {
    alert("YOU GON' LEARN TODAY! Learn with Leon, tonight @6pm EST")
  }

  //weekend day
  else if (day === "saturday" || day === "sunday") {
    alert("IT'S THE FREAKIN WEEKEND, TURN UP!")
  }

  //monday, wednesday, friday
  else if (day === "monday" || day === "wednesday" || day === "friday") {
    alert("Oof. Boring day...permission to go back to bed.")
  }

  //anything that is NOT a day of the week
  else alert("That is NOT a valid entry, TRY AGAIN!")
}