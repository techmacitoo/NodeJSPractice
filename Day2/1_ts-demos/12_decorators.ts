// class Calculator {
//     add(x: number, y: number) {
//         return x + y;
//     }

//     sub(x: number, y: number) {
//         return x - y;
//     }
// }

// var c = new Calculator();
// console.log(c.add(2, 3));
// console.log(c.sub(24, 35));

// // I want to log the arguments passed to the method, when we call the methods
// // Where should we write the Code for logging?

// // -------------------------------------------------

// class Calculator {
//     add(x: number, y: number) {
//         console.log(`add method called with arguments as ${x} and ${y}`);
//         return x + y;
//     }

//     sub(x: number, y: number) {
//         console.log(`sub method called with arguments as ${x} and ${y}`);
//         return x - y;
//     }
// }

// var c = new Calculator();
// console.log(c.add(2, 3));
// console.log(c.sub(24, 35));

// // I want to log the arguments passed to the method, when we call the methods
// // Where should we write the Code for logging?

// // -------------------------------------------------

// class Calculator {
//     add(x: number, y: number) {
//         log(`add method called with arguments as ${x} and ${y}`);
//         return x + y;
//     }

//     sub(x: number, y: number) {
//         log(`sub method called with arguments as ${x} and ${y}`);
//         return x - y;
//     }
// }

// function log(message: string) {
//     console.log(message);
// }

// var c = new Calculator();
// console.log(c.add(2, 3));
// console.log(c.sub(24, 35));

// // I want to log the arguments passed to the method, when we call the methods
// // Where should we write the Code for logging?

// ----------------------------- Decorators

// Types of Decorators
// Class Decorator <T extends Function>(target:T) => T | void
// Property Decorator (target: Object, propertyKey: string | symbol) => void;
// Method Decorator <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
// Parameter Decorator (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;

class Calculator {
    @log
    add(x: number, y: number) {
        return x + y;
    }

    @log
    sub(x: number, y: number) {
        return x - y;
    }
}

function log<T>(target:T, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalFnRef = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(`${propertyKey} called with arguments as ${args.join(', ')}`);
        return originalFnRef.apply(this, args);
    }
    return descriptor;
}

var c = new Calculator();
console.log(c.add(2, 3));
console.log(c.sub(24, 35));

// // ------------------------------------------------ Class Decorator
// function CityDecorator<T extends { new(...args: any[]): {} }>(target: T) {
//     return class extends target {
//         city = "Pune";
//     };
// }

// @CityDecorator
// class MyPerson {
//     name: string;

//     constructor(n = "NA") {
//         this.name = n;
//     }
// }

// var p = new MyPerson("Manish");
// console.log(JSON.stringify(p));

// ------------------------------------------------ Decorator Factory
function CityDecorator(obj: {cityName: string}) {
    return function <T extends { new(...args: any[]): {} }>(target: T) {
        return class extends target {
            city = obj.cityName;
        };
    }
}

@CityDecorator({
    cityName: "Mumbai"
})
class MyPerson {
    name: string;

    constructor(n = "NA") {
        this.name = n;
    }
}

var p = new MyPerson("Manish");
console.log(JSON.stringify(p));
