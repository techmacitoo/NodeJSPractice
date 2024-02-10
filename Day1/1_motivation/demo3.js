console.log("Hello from Demo Three");
class CPerson {
    constructor(name) {
        this._name = name;
    }
    getName() {
        return this._name;
    }
    setName(value) {
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
