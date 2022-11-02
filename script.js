
let randomNumber = document.getElementById("random-number");
let reloadButton = document.getElementsByClassName('reload')[0];

function generateRandomNumber() {
  return Math.floor(Math.random() * 50) + 1
}


reloadButton.addEventListener('click', function() {
  randomNumber.innerHTML = generateRandomNumber(); 
});

 