//Write your pseduo code first! 
//celsius to far

//get input value of Celsius temp

//use conversion formula

//show value into variable to show Farhenheit

let cToF = () => {
    let c = Number(document.querySelector('input').value)

    let f = (c * 1.8) + 32;
    console.log( f )


    
    document.querySelector('h2').innerText = f
}


document.querySelector('h1').addEventListener('click', cToF)
