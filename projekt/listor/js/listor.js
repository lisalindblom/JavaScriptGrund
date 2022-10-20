let myName = "Lisa";
let nameLength = myName.length;
let textOutput = document.getElementById("pTag");

window.onload = function () {
  for (i = 0; i < nameLength; i++) {
    //let spaceName = myName[i];
    //textOutput.innerHTML += " "+spaceName;

    let spaceName = myName.split("").join("     ");
    console.log(spaceName);
    textOutput.innerHTML += spaceName;
    break;
  }
};

let numbers = [2, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

for (i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
