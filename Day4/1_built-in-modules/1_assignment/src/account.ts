import EventEmitter from "events";

export class Account extends EventEmitter {
    private _accNumber: number;
    private _balance: number;
    private _annualIntrestRate: number;

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
        } else {
            this.emit('withdrawFailure', this._balance);
        }
    }

    toString() {
        return `Account: ${this._accNumber}, Balance is: ${this._balance}`;
    }
}