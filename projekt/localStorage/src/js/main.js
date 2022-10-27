// lagrar mitt namn i local storage
localStorage.setItem("name", "Lisa");

// hämtar mitt namn från local storage
let myName = localStorage.getItem("name", "Lisa");

//skapar ett p-element
let pTag = document.createElement("p");

//lägger värdet av myName i p-taggen
pTag.innerHTML += myName;

// lägger <p> som child till body
document.body.appendChild(pTag);

//skapar en klass med constructor
class Person {
  constructor(firstname, lastname, age, length) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.length = length;
  }
}

//skapar personer, anger värdet på egenskaper i klassen Person
let me = new Person("Lisa", "Lindblom", 26, 172);
let mira = new Person("Mira", "Vitsas", 25, 174);

//Skapar lista
let people = [me, mira];

// skapar variabel med värdet people, omvandlar people till text
let myText = JSON.stringify(people);

//lagrar i local storage
localStorage.setItem("people", myText);

//hämtar från local storage
localStorage.getItem("people", myText);

//ändrar myText från text till objekt
let myObjekt = JSON.parse(myText);

console.log(myObjekt);
