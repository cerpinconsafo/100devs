let total = 0

document.querySelector('#zero').addEventListener('click', makeZero)
document.querySelector('#addThree').addEventListener('click', addThree)
document.querySelector('#addNine').addEventListener('click', addNine)
document.querySelector('#subTwo').addEventListener('click', subTwo)

function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function addThree() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function addNine() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
}

function subTwo() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerHTML = total
}
