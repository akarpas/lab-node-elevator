const Elevator = require('./elevator.js');
const Person = require('./person.js');

let people = [];

let elevator = new Elevator();
let person1 = new Person('Andy',5,2);
let person2 = new Person('Pam',3,5);
let person3 = new Person('Kate',10,1);
let person4 = new Person('James',2,8);

elevator.start();
elevator.call(person1);
elevator.call(person2);
elevator.call(person3);
elevator.call(person4);

// elevator.start();
// elevator.floorUp();
// console.log(elevator.update());
// elevator.floorUp();
// console.log(elevator.update());
// elevator.floorDown();
// console.log(elevator.update());
// elevator.floorDown();
// console.log(elevator.update());
