// let i = 10;
// console.log(i);
// console.log(typeof i);

// console.log(process);
// console.log(process.cwd());
// console.log(process.env);

// console.log(__dirname);
// console.log(__filename);
// console.log(module);

// -------------------------------------------------

// const lib = require('./lib');
// console.log(lib);

// import { fname, lname, check } from './lib';
// console.log(fname);
// console.log(lname);
// check();

// import * as lib from './lib';
// console.log(lib.fname);
// console.log(lib.lname);
// lib.check();

// import * as lib from './lib';
// import * as lib1 from './lib1';

// lib.check();
// lib1.check();

// import { check as chk1 } from './lib';
// import { check as chk2 } from './lib1';

// chk1();
// chk2();

import { BankAccount } from './lib.js';

var a1 = new BankAccount(1, "Manish");
console.log(`Bank Name: ${a1.BankName}`);
console.log(`Account Number: ${a1.AccountNumber}`);
console.log(`Account Holder Name: ${a1.AccountHolderName}`);

var a2 = new BankAccount(2, "Abhijeet");
console.log(`\nBank Name: ${a2.BankName}`);
console.log(`Account Number: ${a2.AccountNumber}`);
console.log(`Account Holder Name: ${a2.AccountHolderName}`);