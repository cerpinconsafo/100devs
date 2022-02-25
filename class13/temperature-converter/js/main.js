//Write your pseduo code first! 


//get celsius

//convert it to farenheight
document.querySelector('#button').addEventListener('click', convertCtoF);

function convertCtoF(){
    let celsius = document.querySelector('#celsius').value;
    let faren = celsius * (9/5) + 32;
    document.querySelector('#showConversion').innerText = faren;
}
//show it


//grab the input that a user will enter as Celsiu
//assign the Celsius input value to a variable


//take the celsius variable and run it through a function that converts to farenheit
    //take celsius variable
    //enter it in the equation to convert
    //return the conversion to farenheit as a variable
    //insert the farenheit variable value as text in the HTML