/**
 *  寄生式组合继承的实现
 *  inherit
 */
function Person (name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log("My name is " + this.name + ".");
};

function Student (name, grade) {
  Person.call(this, name);
  this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.sayMyGrade = function () {
  console.log("My grade is " + this.grade + ".");
};