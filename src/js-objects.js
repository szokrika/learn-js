const person = {
  name: "Test Name",
  age: 28,
  sex: "male"
};
console.log("1", person);

// mutating operations
// note that person is stored as reference, so any operation is changing the original

//add field
person.email = "test@test.ca";
console.log("2", person, person.email);

//update field
person.age = 30;
console.log("3", person);

//delete field
delete person.sex;
console.log("4", person);

// non-mutating operatins using ES6 features
// we are returning a new object whithout modifiing the original

let person2 = { ...person };
console.log(person2);

person2.sex = "female";
person2 = { ...person2, sex: "male" };
console.log(person2);

const { name, age, email } = person2;
person2 = { name, age, email };
console.log(person2);
