"use strict";
class Vehicle {
    constructor(id, make = "na") {
        this._id = id;
        this._make = make;
    }
    start() {
        return `Vehicle with id ${this._id}, make as ${this._make}, is started`;
    }
}
class FourWheeler extends Vehicle {
    constructor(id, make = "Honda", model = "Civic") {
        super(id);
        this._make = make;
        this._model = model;
    }
    start() {
        var bResult = super.start();
        return `${bResult} and it's a ${this._model}`;
    }
    move() {
        return `Moving like ${this._model}`;
    }
}
;
let v = new FourWheeler(1, "Ford", "Mustang");
console.log(v.start());
console.log(v.move());
