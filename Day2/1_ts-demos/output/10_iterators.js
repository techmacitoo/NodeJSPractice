"use strict";
class Queue {
    constructor() {
        this._data = [];
        this._i = 0;
    }
    push(item) {
        this._data.push(item);
    }
    pop() {
        return this._data.shift();
    }
    [Symbol.iterator]() {
        return this;
    }
    next(...args) {
        if (this._i < this._data.length) {
            return {
                done: false,
                value: this._data[this._i++]
            };
        }
        else {
            return {
                done: true,
                value: undefined
            };
        }
    }
}
var ordersQ = new Queue();
ordersQ.push({ id: 1, description: "Order One" });
ordersQ.push({ id: 2, description: "Order Two" });
ordersQ.push({ id: 3, description: "Order Three" });
for (const item of ordersQ) {
    console.log(item);
}
