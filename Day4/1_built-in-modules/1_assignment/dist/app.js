"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = require("./account");
const utilities_1 = require("./utilities");
let a1 = new account_1.Account(1, 1000, 0.05);
// Code to display message on the console
a1.on('depositSuccess', (balance) => {
    console.log('\nDeposit Success, Balance: ', balance);
});
a1.on('withdrawSuccess', (balance) => {
    console.log('\nWithdraw Success, Balance: ', balance);
});
a1.on('withdrawFailure', (balance) => {
    console.log('\nWithdraw Failure, Balance: ', balance);
});
// Code to send SMS
a1.on('depositSuccess', (balance) => {
    utilities_1.smsClient.send(`Deposit Success, Balance is: ${balance}`);
});
a1.on('withdrawSuccess', (balance) => {
    utilities_1.smsClient.send(`Withdraw Success, Balance is: ${balance}`);
});
a1.on('withdrawFailure', (balance) => {
    utilities_1.smsClient.send(`Withdraw Failure, Balance is: ${balance}`);
});
// Code to send SMS
a1.on('depositSuccess', (balance) => {
    utilities_1.emailClient.send(`Deposit Success, Balance is: ${balance}`);
});
a1.on('withdrawSuccess', (balance) => {
    utilities_1.emailClient.send(`Withdraw Success, Balance is: ${balance}`);
});
a1.on('withdrawFailure', (balance) => {
    utilities_1.emailClient.send(`Withdraw Failure, Balance is: ${balance}`);
});
a1.deposit(1000);
a1.withdraw(2000);
a1.withdraw(1000);
//# sourceMappingURL=app.js.map