//skapar klassen Person
class Person {
  firstname;
  lastname;
  age;
  length;
  constructor(firstname, lastname, age, length) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.length = length;
  }
}

// skapar en funktion som körs när sidan laddar
window.onload = function () {
  let me = new Person("Lisa", "Lindblom", 26, 172);
  let mira = new Person("Mira", "Vitsas", 25, 174);
  // gör personerna till en lista för att kunna loopa igenom och skriva ut värdet
  let personList = [me, mira];
  let person = document.getElementById("person");
  //loopen går lika många varv som listan är lång
  for (i = 0; i < personList.length; i++) {
    person.innerHTML += personList[i].firstname + " ";
    person.innerHTML += personList[i].lastname + " ";
  }
};
