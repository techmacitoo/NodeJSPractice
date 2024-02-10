// Global Scope (If Module is disabled in tsconfig.json)
// NameSpaces Scope
// Module Scope (If Module is enabled in tsconfig.json and you are using import/export in the file)
// Function Scope
// Block Scope - Only if we use, let and const keyword

// namespace Scopes {
//     var a: number = 10;
// }

// export var a: string = "Manish";

// export function display() {
//     console.log("Display Function");
// }

// export class Employee { }

// var i = 20;
// var i = 30;
// console.log(i);

// var j = 20;
// var j = "Manish";   // Error: "Subsequent variable declarations must have the same type.""

// var Supports Hoisting - Moving Declarations to the top
// a1 = "Hello";
// console.log(a1);
// var a1;

// var i = 20;             // Global or Namespace or Module Scope

// function test() {
//     var i = "Hello";
//     console.log("Inside Function, i is:", i);
// }

// test();
// console.log("Outside Function, i is:", i);

// var does not support Block Scoping
// var i = 20;             // Global or Namespace or Module Scope

// function test() {
//     if (true) {
//         var i = "Hello";
//         console.log("Inside if Block, i is:", i);
//     }
//     console.log("Inside Function, i is:", i);
// }

// test();
// console.log("Outside Function, i is:", i);

// var i = 100;
// console.log("Before Loop, i is:", i);

// for (var i = 0; i < 5; i++) {
//     console.log("Inside Loop, i is:", i);
// }

// console.log("After Loop, i is:", i);


// ----------------------------- Let Keyword

// let i = 20;
// let i = 30;             // Error: "Cannot redeclare block-scoped variable 'i'."
// console.log(i); 

// Let does not Supports Hoisting - Moving Declarations to the top
// a1 = "Hello";
// console.log(a1);
// let a1;

// let does support Block Scoping

// var i = 100;
// console.log("Before Loop, i is:", i);

// for (let i = 0; i < 5; i++) {
//     console.log("Inside Loop, i is:", i);
// }

// console.log("After Loop, i is:", i);

// ----------------------------- Const Keyword
let j: number;
j = 10;
j = 20;

// const env: string;              // Error: 'const' declarations must be initialized.

const env = "Dev";
console.log(env);

// env = "Prod";                      // Error: Cannot assign to 'env' because it is a constant.
// console.log(env);

// const env = "Prod";                   // Error: Cannot redeclare block-scoped variable 'env'.
// console.log(env);

if (true) {
    const env = "Prod";
    console.log("Block Scope, env is:", env);
}