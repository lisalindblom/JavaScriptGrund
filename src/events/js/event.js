/*uppgift 3
window.onload = function (){
}*/

//Skapar funktionen
function userInput() {
  console.log("Hello World");
}

//kopplar ihop knappen från dom med en js-class
let saveButton = document.getElementById("saveButton");

//instruerar knappen att anropa funktionen userInput vid klick
saveButton.addEventListener("click", userInput);
