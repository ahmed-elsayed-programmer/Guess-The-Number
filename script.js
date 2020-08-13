let coputerGuess;
let userGusses = [];
let attempts = 0;
let maxGuesses;
let low = 1;
let high = 100;

function updateRange() {
  const rangeOutput = document.getElementById("rangeOutput");
  rangeOutput.innerText = `${low} - ${high}`;
  rangeOutput.style.marginRight = 100 - high + "%";
  rangeOutput.style.marginLeft = low + "%";
  rangeOutput.classList.add("flash");
  const lowValue = document.getElementById("low");
  lowValue.style.flex = low + "%";
  lowValue.style.background = "#ef7b54";
  const space = document.getElementById("space");
  space.style.flex = high - low + "%";
  space.style.background = "#83e1d0";
  const highValue = document.getElementById("high");
  highValue.style.flex = 100 - high + "%";
  highValue.style.background = "#ef7b54";
}

function gameEnded() {
  document.getElementById("newGame").style.display = "inline";
  document.getElementById("inputBox").setAttribute("readonly", "readonly");
}
function newGame() {
  window.location.reload();
  console.log("hello");
}

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
  maxGuesses = 10;
  startGameView();
}
function hardMode() {
  maxGuesses = 10;
  startGameView();
}
function compareGuess() {
  const userGuess = Number(document.getElementById("inputBox").value);
  userGusses.push(userGuess);
  document.getElementById("gusses").innerHTML = userGusses;
  attempts++;
  document.getElementById("attempt").innerHTML = attempts;
  if (attempts < maxGuesses) {
    if (userGuess > coputerGuess) {
      if (userGuess < high) high = userGuess;
      document.getElementById("textOutput").innerHTML = "yor guess is too high";
      document.getElementById("inputBox").value = "";
    } else if (userGuess < coputerGuess) {
      if (userGuess > low) low = userGuess;
      document.getElementById("textOutput").innerHTML = "yor guess is too low";
      document.getElementById("inputBox").value = "";
    } else {
      document.getElementById("textOutput").innerHTML =
        "courrict! you got it in " + attempts + " attempts";
      document.getElementById("inputBox").value = "";
      gameEnded();
    }
  } else {
    if (userGuess > coputerGuess) {
      document.getElementById("textOutput").innerHTML =
        "you Lost!. <br> the number was " + coputerGuess;
      gameEnded();
    } else if (userGuess < coputerGuess) {
      document.getElementById("textOutput").innerHTML =
        "you Lost!. <br> the number was " + coputerGuess;
      gameEnded();
    } else {
      document.getElementById("textOutput").innerHTML =
        "courrict! you got it in " + attempts + " attempts";
      document.getElementById("inputBox").value = "";
      gameEnded();
    }
  }
  updateRange();
}
