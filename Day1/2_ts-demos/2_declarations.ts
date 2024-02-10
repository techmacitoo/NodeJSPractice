// Variables created in TypeScript are optionally typesafe
// Untyped Variable - Not TypeSafe, we will not get any intellisense on an untyped variable (any)
// var data;
// data = 10;
// data = "Manish";

// Imipilcitly typed variable - TypeSafe, we will get intellisense on an implicitly typed variable
// var data = 10;
// data = "Manish";    // Error: "Type 'string' is not assignable to type 'number'

// var ename = "Manish";
// ename = 10;    // Error: "Type 'number' is not assignable to type 'string'

// Explicitly typed variable - TypeSafe, we will get intellisense on an explicitly typed variable
// var age: number;
// age = 20;
// age = "Manish";    // Error: "Type 'string' is not assignable to type 'number'

// Function to add two numbers
// function add(x, y) {
//     return x + y;
// }

// function add(x: any, y: any) {
//     return x + y;
// }

function add(x: number, y: number) {
    return x + y;
}

console.log(add(2, 3));
// console.log(add(2, "abc"));
// console.log(add("abc", "xyz"));

// Lefthand side of assignment operator, all JS Types can be used (Declaration)
// number / staring / boolean / undefined / array / object / Date / RegExp /  Function / void 
// any / null / never / enum / tuple / union / intersection / type-aliases / type-guards 
// All the new types which are supported by the latest version of ECMASCRIPT

export var a: Array<number>;
var s: Symbol;
var p: Promise<number>;

// Righthand side of assignment operator, API's (Functions or Types) will come
// If you want to use any API, You can only use them with proper configuration
// Based on target in tsconfig.json
// And lib section configured in your tsconfig.json

// VS Code gives you intellisense using d.ts files (Type Definition Files)
// Install Type Definition Files (TDS) using npm install @types/<package-name>

a = new Array<number>();
s = Symbol("Hello");
p = new Promise<number>((resolve, reject) => {
    resolve(10);
});