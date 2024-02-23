// class Queue {
//     private _data: number[] = [];

//     push(item: number) {
//         this._data.push(item);
//     }

//     pop(): number | undefined {
//         return this._data.shift();
//     }
// }

// var numbersQ = new Queue();
// numbersQ.push(10);
// numbersQ.push(20);
// numbersQ.push(30);

// console.log(numbersQ.pop());
// console.log(numbersQ.pop());
// console.log(numbersQ.pop());

// --------------------------------------------------- Any type

// class Queue {
//     private _data: any[] = [];

//     push(item: any) {
//         this._data.push(item);
//     }

//     pop(): any | undefined {
//         return this._data.shift();
//     }
// }

// var numbersQ = new Queue();
// numbersQ.push(10);
// numbersQ.push(20);
// numbersQ.push(30);

// console.log(numbersQ.pop());
// console.log(numbersQ.pop());
// console.log(numbersQ.pop());

// var ordersQ = new Queue();
// ordersQ.push("Order Id: 1");
// ordersQ.push("Order Id: 2");
// ordersQ.push("Order Id: 3");
// ordersQ.push(10);

// console.log(ordersQ.pop().toUpperCase());
// console.log(ordersQ.pop());
// console.log(ordersQ.pop());
// console.log(ordersQ.pop().toUpperCase()); 

// // --------------------------------------------------- Generics
// // Generics allows you to create a component that can work over a variety of types
// // rather than a single one, without loosing type safety and intellisense

// class Queue<T> {
//     private _data: T[] = [];

//     push(item: T) {
//         this._data.push(item);
//     }

//     pop(): T | undefined {
//         return this._data.shift();
//     }
// }

// var numbersQ = new Queue<number>();
// numbersQ.push(10);
// numbersQ.push(20);
// numbersQ.push(30);

// console.log(numbersQ.pop());
// console.log(numbersQ.pop());
// console.log(numbersQ.pop());

// var ordersQ = new Queue<string>();
// ordersQ.push("Order Id: 1");
// ordersQ.push("Order Id: 2");
// ordersQ.push("Order Id: 3");
// // ordersQ.push(10);               // Error: Argument of type 'number' is not assignable to parameter of type 'string'

// console.log(ordersQ.pop()?.toUpperCase());
// console.log(ordersQ.pop());
// console.log(ordersQ.pop());
// console.log(ordersQ.pop()?.toUpperCase()); 

// --------------------------------------------------------------------- 

// Create a Generic Method to merge 2 objects
// function merge<T1, T2>(obj1: T1, obj2: T2): T1 & T2 {
//     return { ...obj1, ...obj2 };
// }

// // ----------------------------------------------------------------------------------- Generic Constrains
// function merge<T1 extends object, T2 extends object>(obj1: T1, obj2: T2): T1 & T2 {
//     return { ...obj1, ...obj2 };
// }

// let rObj1 = merge({ id: 1, name: "Product 1" }, { price: 100 });
// console.log(rObj1);

// // let rObj2 = merge(10, true);            // Error: Argument of type '10' is not assignable to parameter of type 'object'
// // console.log(rObj2);

// // -----------------------

// interface IShape {
//     draw(): void;
// }

// class Circle implements IShape {
//     draw(): void {
//         console.log("Circle Drawn");
//     }
// }

// class Square implements IShape {
//     draw(): void {
//         console.log("Square Drawn");
//     }
// }

// function drawShapes<T extends IShape>(shapes: T[]): void {
//     for (const shape of shapes) {
//         shape.draw();
//     }
// }

// drawShapes([new Circle(), new Square()]);

// -----------------------

var per = { id: 1, name: "Person 1", age: 30 };

// function getPropertyValue<T, K>(obj: T, key: K) {
//     return obj[key];            // Error: Type 'K' cannot be used to index type 'T'
// }

function getPropertyValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

console.log(getPropertyValue(per, "id"));
console.log(getPropertyValue(per, "name"));
console.log(getPropertyValue(per, "age"));