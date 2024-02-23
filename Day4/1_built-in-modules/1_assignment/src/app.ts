import { Account } from "./account";
import { smsClient, emailClient } from "./utilities";

let a1 = new Account(1, 1000, 0.05);

// Code to display message on the console
a1.on('depositSuccess', (balance: number) => {
    console.log('\nDeposit Success, Balance: ', balance);
});

a1.on('withdrawSuccess', (balance: number) => {
    console.log('\nWithdraw Success, Balance: ', balance);
});

a1.on('withdrawFailure', (balance: number) => {
    console.log('\nWithdraw Failure, Balance: ', balance);
});

// Code to send SMS
a1.on('depositSuccess', (balance: number) => {
    smsClient.send(`Deposit Success, Balance is: ${balance}`);
});

a1.on('withdrawSuccess', (balance: number) => {
    smsClient.send(`Withdraw Success, Balance is: ${balance}`);
});

a1.on('withdrawFailure', (balance: number) => {
    smsClient.send(`Withdraw Failure, Balance is: ${balance}`);
});

// Code to send SMS
a1.on('depositSuccess', (balance: number) => {
    emailClient.send(`Deposit Success, Balance is: ${balance}`);
});

a1.on('withdrawSuccess', (balance: number) => {
    emailClient.send(`Withdraw Success, Balance is: ${balance}`);
});

a1.on('withdrawFailure', (balance: number) => {
    emailClient.send(`Withdraw Failure, Balance is: ${balance}`);
});

a1.deposit(1000);
a1.withdraw(2000);
a1.withdraw(1000);