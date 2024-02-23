"use strict";
class BankAccount {
    constructor(_accNumber, _accName) {
        this._accNumber = _accNumber;
        this._accName = _accName;
    }
    get BankName() {
        return BankAccount._bankName;
    }
    static set BankName(value) {
        BankAccount._bankName = value;
    }
    get AccountNumber() {
        return this._accNumber;
    }
    get AccountHolderName() {
        return this._accName;
    }
}
BankAccount._bankName = "ICICI";
var a1 = new BankAccount(1, "Manish");
console.log(`Bank Name: ${a1.BankName}`);
console.log(`Account Number: ${a1.AccountNumber}`);
console.log(`Account Holder Name: ${a1.AccountHolderName}`);
var a2 = new BankAccount(2, "Abhijeet");
console.log(`\nBank Name: ${a2.BankName}`);
console.log(`Account Number: ${a2.AccountNumber}`);
console.log(`Account Holder Name: ${a2.AccountHolderName}`);
