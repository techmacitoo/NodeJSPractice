"use strict";
class GQueue {
    constructor() {
        this._data = [];
    }
    push(item) {
        this._data.push(item);
    }
    pop() {
        return this._data.shift();
    }
    *[Symbol.iterator]() {
        yield* this._data;
    }
}
var ordersGQ = new GQueue();
ordersGQ.push({ id: 1, description: "Order One" });
ordersGQ.push({ id: 2, description: "Order Two" });
ordersGQ.push({ id: 3, description: "Order Three" });
for (const item of ordersGQ) {
    console.log(item);
}
