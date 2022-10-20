class Person {
  firstname;
  age;
  constructor(firstname, age) {
    this.firstname = firstname;
    this.age = age;
  }
}

window.onload = function () {
  let me = new Person("Lisa", "26");
  console.log(me);
};
