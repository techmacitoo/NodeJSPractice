// interface IPerson {
//     name: string;
//     age: number;
//     greet(message: string): string;
// }

// class Person implements IPerson {
//     constructor(public name: string, public age: number) { }

//     greet(message: string): string {
//         return `Hello`;
//     }
// }

// let p1: IPerson = new Person("Manish", 30);
// console.log(p1.greet("Hi"));

// let p2: IPerson = new Person("John", 40);
// console.log(p2.greet("Hey"));

// // ----------------------------------------------- Multiple Interface Implementation
// interface IPerson {
//     name: string;
//     age: number;
//     greet(message: string): string;
// }

// interface IEmployee {
//     doWork(): string;
// }

// class Person implements IPerson, IEmployee {
//     constructor(public name: string, public age: number) { }

//     greet(message: string): string {
//         return `Hello`;
//     }

//     doWork(): string {
//         return `Learning TypeScript`;
//     }
// }

// let p1: Person = new Person("Manish", 30);
// console.log(p1.greet("Hi"));
// console.log(p1.doWork());

// // ----------------------------------------------- Interface Extraction
// interface IPerson {
//     name: string;
//     age: number;
//     greet(message: string): string;
// }

// interface IEmployee {
//     doWork(): string;
// }

// interface ICustomer {
//     doShopping(): string;
// }

// class Person implements IPerson, IEmployee, ICustomer {
//     constructor(public name: string, public age: number) { }

//     greet(message: string): string {
//         return `Hello`;
//     }

//     doWork(): string {
//         return `Learning TypeScript`;
//     }

//     doShopping(): string {
//         return "Shopping Online";
//     }
// }

// let p1: Person = new Person("Manish", 30);
// console.log(p1.greet("Hi"));
// console.log(p1.doWork());
// console.log(p1.doShopping());

// // Interface Extraction
// let p2: IPerson = new Person("Manish", 30);
// console.log(p2.greet("Hi"));

// let p3: IEmployee = new Person("Manish", 30);
// console.log(p3.doWork());

// let p4: ICustomer = new Person("Manish", 30);
// console.log(p4.doShopping());

// ----------------------------------------------- Interface Extension - Interface can extend other Interface
interface IPerson {
    name: string;
    age: number;
    greet(message: string): string;
}

interface IEmployee extends IPerson {
    doWork(): string;
}

interface ICustomer extends IPerson {
    doShopping(): string;
}

class Person implements IPerson, IEmployee, ICustomer {
    constructor(public name: string, public age: number) { }

    greet(message: string): string {
        return `Hello`;
    }

    doWork(): string {
        return `Learning TypeScript`;
    }

    doShopping(): string {
        return "Shopping Online";
    }
}

let p1: IEmployee = new Person("Manish", 30);
console.log(p1.greet('Hi'));
console.log(p1.doWork());

let p2: ICustomer = new Person("Manish", 30);
console.log(p2.greet('Hi'));
console.log(p2.doShopping());