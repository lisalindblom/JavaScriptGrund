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

window.onload = function () {
  let me = new Person("Lisa", "Lindblom", 26, 172);
  let mira = new Person("Mira", "Vitsas", 25, 174);
  let personList = [me, mira];
  let person = document.getElementById("person");
  for (i = 0; i < personList.length; i++) {
    person.innerHTML += personList[i].firstname + " ";
    person.innerHTML += personList[i].lastname + " ";
    console.log(me);
  }
};
