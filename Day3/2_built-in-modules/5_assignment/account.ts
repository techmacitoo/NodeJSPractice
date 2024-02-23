export class Account {
    private _accNumber: number;
    private _balance: number;
    private _annualIntrestRate: number;

    constructor(accNumber = 0, balance = 0, intRate = 0) {
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
    }

    withdraw(amount) {
        if (this._balance >= amount) {
            this._balance -= amount;
        } else {
        }
    }

    toString() {
        return `Account: ${this._accNumber}, Balance is: ${this._balance}`;
    }
}