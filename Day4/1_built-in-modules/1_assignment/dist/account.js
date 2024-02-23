"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const tslib_1 = require("tslib");
const events_1 = tslib_1.__importDefault(require("events"));
class Account extends events_1.default {
    constructor(accNumber = 0, balance = 0, intRate = 0) {
        super();
        this._accNumber = accNumber;
        this._balance = balance;
        this._annualIntrestRate = intRate;
    }
    get AccountNumber() {
        return this._accNumber;
    }
    get AnnualInterestRate() {
        return this._annualIntrestRate;
    }
    set Balance(balance) {
        this._balance = balance;
    }
    set AnnualInterestRate(annualInterestRate) {
        this._annualIntrestRate = annualInterestRate;
    }
    deposit(amount) {
        this._balance += amount;
        this.emit('depositSuccess', this._balance);
    }
    withdraw(amount) {
        if (this._balance >= amount) {
            this._balance -= amount;
            this.emit('withdrawSuccess', this._balance);
        }
        else {
            this.emit('withdrawFailure', this._balance);
        }
    }
    toString() {
        return `Account: ${this._accNumber}, Balance is: ${this._balance}`;
    }
}
exports.Account = Account;
//# sourceMappingURL=account.js.map