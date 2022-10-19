let fName = document.getElementById("firstname");
let lName = document.getElementById("lastname");
let nameButton = document.getElementById("userName");
let textOutput = document.getElementById("output");
let gameContainer = document.getElementById("game");
let gameRules = document.getElementById("rules");

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
  textOutput.appendChild(yesButton);

  let noButton = document.createElement("button");
  noButton.innerText = "Nej";
  textOutput.appendChild(noButton);

  yesButton.addEventListener("click", theGame);
  noButton.addEventListener("click", theEnd);
}

let correctNumber = Math.floor(Math.random() * 101);

function theGame() {
  console.log("Spelet");

  gameRules.innerText =
    "Gissa ett tal mellan 1 och 100, det måste vara heltal. Du har 10 försök på dig.";

  let guessedNumber = document.createElement("input");
  guessedNumber.placeholder = "Gissa";
  // placeras i <p>, vill att den hamnar under <p>
  gameRules.appendChild(guessedNumber);

  for (i = 0; i < 10; i++) {
    if (guessedNumber === correctNumber) {
      let correctAnswer = document.createElement("p");
      correctAnswer.innerText = "Du gissade rätt!";
      gameContainer.appendChild("correctAnswer");
    } else {
      /*let wrongAnswer = document.createElement("p");
      wrongAnswer.innerText = "Försök igen";
      gameContainer.appendChild("wrongAnswer");*/
      console.log("fel");
    }
  }
}

function theEnd() {
  console.log("Slut");
}
