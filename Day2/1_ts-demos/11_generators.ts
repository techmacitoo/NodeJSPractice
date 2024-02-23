// // Eager Executed
// function idNormal() {
//     console.log("Id is created via normal function");
// }

// // Lazy Executed
// function* idGenerator() {
//     console.log("Id is created via generator function");
// }

// // idNormal();
// // idGenerator();

// var genObj = idGenerator();
// // console.log(genObj);
// console.log(genObj.next());

// -------------------------------------------------

// function* idGenerator() {
//     console.log("Generator function execution started...");
//     yield 1;
//     yield 2;
//     yield 3;
//     console.log("Generator function execution completed...");
// }

// var genObj = idGenerator();
// console.log(genObj.next());
// console.log(genObj.next());
// console.log(genObj.next());
// console.log(genObj.next());

// -------------------------------------------------

// class GQueue<T> {
//     private _data: T[] = [];

//     push(item: T) {
//         this._data.push(item);
//     }

//     pop(): T | undefined {
//         return this._data.shift();
//     }

//     *[Symbol.iterator]() {
//         for (let i = 0; i < this._data.length; i++) {
//             yield this._data[i];
//         }
//     }
// }

class GQueue<T> {
    private _data: T[] = [];

    push(item: T) {
        this._data.push(item);
    }

    pop(): T | undefined {
        return this._data.shift();
    }

    *[Symbol.iterator]() {
        yield* this._data;
    }
}

type GOrder = {
    id: number,
    description: string
}

var ordersGQ = new GQueue<GOrder>();
ordersGQ.push({ id: 1, description: "Order One" });
ordersGQ.push({ id: 2, description: "Order Two" });
ordersGQ.push({ id: 3, description: "Order Three" });

for (const item of ordersGQ) {
    console.log(item);
}