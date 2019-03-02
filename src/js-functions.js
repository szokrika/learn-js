// simple utility functions

function upper(value) {
  return value.toString().toUpperCase();
}

function toNumber(myString, decimal) {
  return parseFloat(myString).toFixed(decimal);
}

// ES5 constructor function
function Person(name, age, email, birthDate) {
  this.name = upper(name);
  this.age = toNumber(age, 0);
  this.email = email;
  this.birthDate = upper(birthDate);
  this.updateName = function(name) {
    this.name = upper(name);
  };

  return {
    name: this.name,
    age: this.age,
    email: this.email,
    birthDate: this.birthDate,
    updateName: this.updateName
  };
}

const person = new Person("John Doe", "22", "peter@test.com", "1979 august 16");
console.log(person);

const person2 = new Person("Johann S", "66", "jo@test.com", "1950 august 10");
console.log(person2);

// person.updateName("Jane Doe");
// console.log(person);
