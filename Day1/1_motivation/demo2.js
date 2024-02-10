console.log("Hello from Demo Two");

var Person = (function () {
    function Person(name) {
        this._name = name;
    }

    Person.prototype.getName = function () {
        return this._name;
    }

    Person.prototype.setName = function (name) {
        this._name = name;
    }

    return Person;
})();

var p1 = new Person("Manish");
console.log(p1.getName());
p1.setName("Abhijeet");
console.log(p1.getName());

var p2 = new Person("Subodh");
console.log(p2.getName());
p2.setName("Ramakant");
console.log(p2.getName());

console.log(p1);
console.log(p2);

// 136 bytes (68 bytes / instance)