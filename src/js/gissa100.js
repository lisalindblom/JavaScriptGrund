let number = document.getElementById("number");
let userSubmit = document.getElementById("userSubmit");
let output = document.getElementById("output");

//Kopplar scss
userSubmit.className = "button";

userSubmit.addEventListener("click", submit);

function submit() {
  let userAnswer = parseInt(number.value);
  if (userAnswer > 100) {
    output.innerText = "Det var ett stort tal";
  }

  if (userAnswer < 100) {
    output.innerText = "Det var ett litet tal";
  }
}
