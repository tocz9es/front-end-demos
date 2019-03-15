function Person () {

}

Person.prototype.name = 'Ada';

var person = new Person();

console.log(person.__proto === Person.prototype); // true
console.log(Person === Person.prototype.constructor); // true
// Get the prototype of an object
console.log(Object.getPrototypeOf(person) === Person.prototype); // true

person.name = 'John';
console.log(person.name); // John

delete person.name;
console.log(person.name); // Ada