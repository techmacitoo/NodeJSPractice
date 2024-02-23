// // function hello() {
// //     console.log("Hello World");
// // }

// // // var r = hello();
// // // console.log(r);
// // // console.log(typeof r);

// // var r1: undefined;
// // // r1 = 10;            // Error: Type '10' is not assignable to type 'undefined'.
// // r1 = undefined;
// // r1 = void 0;
// // console.log(r1);

// // var r2: void;
// // // r2 = 10;            // Error: Type '10' is not assignable to type 'void'.
// // r2 = undefined;
// // r2 = void 0;
// // console.log(r2);

// // var r3: never;
// // // r3 = 10;            // Error: Type '10' is not assignable to type 'never'.
// // // r3 = undefined;     // Error: Type 'undefined' is not assignable to type 'never'.
// // // r3 = void 0;        // Error: Type 'void' is not assignable to type 'never'.
// // console.log(r3);

// // var r4: any;
// // console.log(r4.trim());             // No Compile time check are done on Any type

// // var r5: unknown;
// // console.log(r5.trim());             // Error: Property 'trim' does not exist on type 'unknown'.

// // // JAVASCRIPT - undefined / void
// // // TYPESCRIPT - any / unknown / never

// // --------------------------------------------

// // function iterate() {
// //     let i = 1;
// //     while (true) {
// //         console.log(i++);
// //     }
// // }

// // function iterate(): never {
// //     let i = 1;
// //     while (true) {
// //         console.log(i++);
// //     }
// // }

// // iterate();
// // console.log("Last line in the file....");

// // Write a function to log a message passed and throw exception to terminate the execution

// var app: any;

// app.get('/index', (req: any, res: any) => {
//     try {
//         // Database Operation
//     } catch (err) {
//         logAndTerminate(err, req, res);
//         console.log("Some Code to run after I send the response");
//     }
// });

// function logAndTerminate(err: any, req: any, res: any): never {
//     console.log(err);
//     res.send("Some Error Occured");
//     throw new Error("Some Error Occured");
// }

// -------------------------------------------------------

// var c = true;

// function test(): number | undefined {
//     if (c)
//         return 10;
//     else
//         return undefined;
// }

// var result: number | undefined = test();

// if (result !== undefined) {
//     console.log(result.toFixed());
// } else {
//     console.log("Result is undefined");
// }

// -------------------------------------------------------

// Function Declaration
function add1(x: number, y: number): number {
    return x + y;
}

// Function Expression
let add2 = function (x: number, y: number): number {
    return x + y;
}

let add3: (a: number, b: number) => number;
add3 = function (x: number, y: number): number {
    return x + y;
}

let add4: (a: number, b: number) => number;
add4 = function (x, y) {
    return x + y;
}

// Multiline Lambda
let add5: (a: number, b: number) => number;
add5 = (x, y) => {
    return x + y;
}

// Single Line Lambda   
let add6: (a: number, b: number) => number;
add6 = (x, y) => x + y;

console.log(add1(2, 3));
console.log(add2(2, 3));
console.log(add3(2, 3));
console.log(add4(2, 3));
console.log(add5(2, 3));
console.log(add6(2, 3));