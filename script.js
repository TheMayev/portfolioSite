function generateRandomNumber() {
  return Math.floor(Math.random() * 100)
}

function refresh() {
  window.location.reload();
}

document.getElementById("random-number").innerHTML = generateRandomNumber();
//document.getElementsByClassName("reload").addEventListener("click", refresh());

