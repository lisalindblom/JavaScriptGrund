let animals = ["Katt", "Hund", "Fisk", "Zebra"];
let listContent = document.getElementById("listOfAnimals");

for (i = 0; i < animals.length; i++) {
  console.log(animals[i]);
  //listContent.innerHTML += "<li>" + animals[i] + "</li>";

  let newElement = document.createElement("li");

  newElement.innerText += animals[i];

  listContent.appendChild(newElement);
}
