// const area = function (rect: { h: number, w?: number }) {
//     rect.w = rect.w || rect.h;
//     return rect.h * rect.w;
// }

// let s1 = { h: 20, w: 10 };
// console.log(area(s1));

// let s2 = { h: 20, w: 10, x: 30 };
// console.log(area(s2));

// let s3 = { h: 20, x: 30 };
// console.log(area(s3));

// // --------------------------------- Type Alias
// type Shape = { h: number, w?: number };

// const area = function (rect: Shape) {
//     rect.w = rect.w || rect.h;
//     return rect.h * rect.w;
// }

// let s1: Shape = { h: 20, w: 10 };
// console.log(area(s1));

// // let s2: Shape = { h: 20, w: 10, x: 30 };
// // console.log(area(s2));

// // let s3: Shape = { h: 20, x: 30 };
// // console.log(area(s3));

// --------------------------------- Interface
// interface IShape {
//     h: number;
//     w?: number;
// }

// const area = function (rect: IShape) {
//     rect.w = rect.w || rect.h;
//     return rect.h * rect.w;
// }

// let s1: IShape = { h: 20, w: 10 };
// console.log(area(s1));

// // let s2: IShape = { h: 20, w: 10, x: 30 };
// // console.log(area(s2));

// // let s3: IShape = { h: 20, x: 30 };
// // console.log(area(s3));

// // ---------------------------------- With Function

// interface IPerson {
//     name: string;
//     age: number;
//     greet(message: string): string;
// }

// let p1: IPerson = {
//     name: "Manish",
//     age: 30,
//     greet: function (msg: string) {
//         return `Hello`;
//     }
// };

// let p2: IPerson = {
//     name: "Abhijeet",
//     age: 25,
//     greet: function (msg: string) {
//         return `Hola`;
//     }
// };

// console.log(p1.greet("Hello"));
// console.log(p2.greet("Hola"));

// type TPerson = {
//     name: string,
//     age: number,
//     greet(message: string): string
// };

// let p3: TPerson = {
//     name: "Subodh",
//     age: 50,
//     greet: function (msg: string) {
//         return `Hey`;
//     }
// };

// console.log(p3.greet("Hey"));

// ------------------------------------ Difference between Type and Interface
// Duplicate identifier 'TShape'.
// type TShape = {
//     height: number;
// }

// type TShape = {
//     width: number;
// }

// Interface Merging
// interface IShape {
//     height: number;
// }

// interface IShape {
//     width: number;
// }

// let s1: IShape = {
//     height: 20,
//     width: 10
// };

// // ----------------------------------------------------- Type Alias and Interface Used Together
// interface ICustomer {
//     doShopping(): string;
// }

// interface IEmployee {
//     doWork(): string;
// }

// type TCustomerOrEmployee = ICustomer | IEmployee;       // Union

// var person1: TCustomerOrEmployee = {
//     doShopping: function () {
//         return `Shopping`;
//     }
// };

// type TCustomerAndEmployee = ICustomer & IEmployee;      // Intersection

// var person2: TCustomerAndEmployee = {
//     doShopping: function () {
//         return `Shopping`;
//     },
//     doWork: function () {
//         return `Working`;
//     }
// };