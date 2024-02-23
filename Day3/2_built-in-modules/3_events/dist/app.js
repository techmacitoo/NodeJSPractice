"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_emitter_1 = require("./string-emitter");
const stringEmitter = string_emitter_1.StringEmitter.getInstance();
// const str = stringEmitter.getString();
// console.log(str);
// setInterval(() => {
//     const str = stringEmitter.getString();
//     console.log(str);
// }, 2000);
// // ---------------------------------------
// // stringEmitter.pushString((str) => {
// //     console.log(str);
// // });
// stringEmitter.pushString((str) => {
//     console.log("S1: ", str);
// });
// stringEmitter.pushString((str) => {
//     console.log("S2: ", str);
// });
// --------------------------------------- Events
// stringEmitter.on('stringEmitted', (str) => {
//     console.log(str);
// });
stringEmitter.on('stringEmitted', (str) => {
    console.log("S1: ", str);
});
// stringEmitter.on('stringEmitted', (str) => {
//     console.log("S2: ", str);
// });
let count = 0;
function printString(str) {
    console.log("S2: ", str);
    count++;
    if (count === 3) {
        stringEmitter.off('stringEmitted', printString);
    }
}
stringEmitter.on('stringEmitted', printString);
//# sourceMappingURL=app.js.map