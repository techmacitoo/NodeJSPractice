"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = exports.lname = exports.fname = void 0;
console.log('This is the lib module');
exports.fname = "Manish";
exports.lname = "Sharma";
function check() {
    console.log("Check called from lib.ts");
}
exports.check = check;
