//Create a button that adds 1 to a botScore stored in localStorage 
//Score of 0 in local Storage on Page Load
localStorage.setItem('botScore', o)

//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function addAnothaOne(){
    //get value from local storage and place in variable
    let botScoreVal =  Number(localStorage.getItem('botScore'))
    //add 1 to the current value
    botScoreVal += 1 
//reset the value of botScore
    localStorage.setItem('botScore', botScoreVal)
}
