let coputerGuess;
let userGusses = [];
function init() {
  coputerGuess = Math.floor(Math.random() * 100, 1);
  document.getElementById("newGame").style.display = "none";
  document.getElementById("gamearea").style.display = "none";
}

function startGameView() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("gamearea").style.display = "block";
}

function easyMode() {
  startGameView();
}
function hardMode() {
  startGameView();
}
function compareGuess() {
  const userGuess = Number(document.getElementById("inputBox").value);
  userGusses.push(userGuess);
  document.getElementById("gusses").innerHTML = userGusses;
  if (userGuess > coputerGuess) {
    document.getElementById("textOutput").innerHTML = "yor guess is top";
    document.getElementById("inputBox").value = "";
  } else if (userGuess < coputerGuess) {
    document.getElementById("textOutput").innerHTML = "yor guess is low";
    document.getElementById("inputBox").value = "";
  } else {
    document.getElementById("textOutput").innerHTML = "courrict";
    document.getElementById("inputBox").value = "";
  }
}
