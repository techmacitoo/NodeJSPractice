"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(message) {
        return `Hello`;
    }
    doWork() {
        return `Learning TypeScript`;
    }
    doShopping() {
        return "Shopping Online";
    }
}
let p1 = new Person("Manish", 30);
console.log(p1.greet('Hi'));
console.log(p1.doWork());
let p2 = new Person("Manish", 30);
console.log(p2.greet('Hi'));
console.log(p2.doShopping());
