//kopplar ihop mina element från html-filen med mina variabler
let userInput = document.getElementById("userInput");
let userSubmit = document.getElementById("userSubmit");
let userOutput = document.getElementById("userOutput");

//tilldelar knappen en intruktion när den ska anropa funktionen submit
userSubmit.addEventListener("click", submit);

//deklarerar funktionen
function submit() {
  //värdet på userInput ska bli texten som skrivs ut i userOutput
  userOutput.innerText = "Hej " + userInput.value;
}

/****************************************************************/

//deklarera mina variabler
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let submitNumber = document.getElementById("submitNumber");
let outputNumber = document.getElementById("outputNumber");

submitNumber.addEventListener("click", answer);

function answer() {
  // variabel för värdet som användaren fyller i
  let input1 = number1.value;
  let input2 = number2.value;
  // omvandlar string till nummer
  let inputNumber1 = +input1;
  let inputNumber2 = +input2;

  //räknar ut talet
  let finalNumber = inputNumber1 + inputNumber2;

  //lägger till svaret efter texten i elementet
  outputNumber.innerText += finalNumber;
}
