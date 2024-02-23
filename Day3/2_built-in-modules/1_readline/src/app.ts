// import * as readline from 'readline';

// const rl = readline.createInterface({
//     input: process.stdin,         // ReadStream
//     output: process.stdout,       // WriteStream
// });

// rl.question('What is your name? ', (name) => {
//     console.log(`Hello, ${name}!`);
//     rl.close();
// });

// console.log("I am the line after rl.question....");

// rl.question('Enter the first number: ', (input1) => {
//     rl.question('Enter the second number: ', (input2) => {
//         let sum = parseInt(input1) + parseInt(input2);
//         console.log(`The sum of ${input1} and ${input2} is ${sum}`);
//         rl.close();
//     });
// });

// ----------------------------------

// function enterNumberOne() {
//     return new Promise((resolve, reject) => {
//         rl.question('Enter the first number: ', (input) => {
//             resolve(input);
//         });
//     });
// }

// function enterNumberTwo() {
//     return new Promise((resolve, reject) => {
//         rl.question('Enter the second number: ', (input) => {
//             resolve(input);
//         });
//     });
// }

// function add([n1, n2]) {
//     var sum = parseInt(n1) + parseInt(n2);
//     console.log('Sum is: ', sum);
//     rl.close();
// }

// enterNumberOne().then((n1) => {
//     enterNumberTwo().then((n2) => {
//         add([n1, n2]);
//     });
// });

// ----------------------------------

// function enterNumberOne() {
//     return new Promise<string>((resolve, reject) => {
//         rl.question('Enter the first number: ', (input) => {
//             resolve(input);
//         });
//     });
// }

// function enterNumberTwo(n1: string) {
//     return new Promise<[string, string]>((resolve, reject) => {
//         rl.question('Enter the second number: ', (input) => {
//             resolve([n1, input]);
//         });
//     });
// }

// function add([n1, n2]: [string, string]) {
//     var sum = parseInt(n1) + parseInt(n2);
//     console.log('Sum is: ', sum);
//     rl.close();
// }

// enterNumberOne().then(enterNumberTwo).then(add);

// ---------------------------------- Async Await

// function enterNumber(message: string) {
//     return new Promise<number>((resolve, reject) => {
//         rl.question(message, (input) => {
//             resolve(parseInt(input));
//         });
//     });
// }

// (async function () {
//     let n1 = await enterNumber('Enter the first number: ');
//     let n2 = await enterNumber('Enter the second number: ');
//     console.log('Sum is: ', n1 + n2);
//     rl.close();
// })();

import './understanding-promise';