// console.log('This is the lib module');
// console.log(module);

// var fname = "Manish";
// module.exports = fname;

export var fname = "Manish";
export var lname = "Sharma";

export function check() {
    console.log("Check called from lib.ts");
}

export class BankAccount {
    private static _bankName: string = "ICICI";

    constructor(private readonly _accNumber: number, private _accName: string) { }

    get BankName() {
        return BankAccount._bankName;
    }

    static set BankName(value: string) {
        BankAccount._bankName = value;
    }

    get AccountNumber(): number {
        // this._accNumber = 100;          // Error: Cannot assign to '_accNumber' because it is a read-only property.
        return this._accNumber;
    }

    get AccountHolderName() {
        return this._accName;
    }
}