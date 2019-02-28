// ES5 constructor function

function Person(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;

  return {
    name: this.name,
    age: this.age,
    email: this.email
  };
}

const peter = new Person("Peter", 22, "peter@test.com");
console.log(peter);
