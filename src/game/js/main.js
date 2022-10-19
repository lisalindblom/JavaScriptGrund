let fName = document.getElementById("firstname");
let lName = document.getElementById("lastname");
let nameButton = document.getElementById("userName");
let textOutput = document.getElementById("output");
let gameContainer = document.getElementById("game");

nameButton.addEventListener("click", welcome);

function welcome() {
  textOutput.innerText = "Hej " + fName.value + " " + lName.value + "!";
  playGame();
}

function playGame() {
  //Skapar element h3
  let textGame = document.createElement("h3");
  // lägger till innehåll i h3 tagen
  textGame.innerText = "Vill du spela ett spel?";
  //placerar h3 som ett child till min p tag textOutput
  textOutput.appendChild(textGame);

  let yesButton = document.createElement("button");
  yesButton.innerText = "Ja";
  gameContainer.appendChild(yesButton);

  let noButton = document.createElement("button");
  noButton.innerText = "Nej";
  gameContainer.appendChild(noButton);

  yesButton.addEventListener("click", theGame);
  noButton.addEventListener("click", theEnd);
}

function theGame() {
  console.log("Spelet");
}

function theEnd() {
  console.log("Slut");
}
