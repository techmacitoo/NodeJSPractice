console.log("Hello from Demo Three");

class CPerson {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }
}

var p1 = new CPerson("Manish");
console.log(p1.getName());
p1.setName("Abhijeet");
console.log(p1.getName());

var p2 = new CPerson("Subodh");
console.log(p2.getName());
p2.setName("Ramakant");
console.log(p2.getName());

console.log(p1);
console.log(p2);

// 136 bytes (68 bytes / instance)