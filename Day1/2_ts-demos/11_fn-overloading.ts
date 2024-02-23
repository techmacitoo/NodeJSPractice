// function hello() {
//     console.log("Hello World");
// }

// // Error: Duplicate function implementation.
// function hello(name: string) {
//     console.log("Hello " + name);
// }

// hello();
// hello("John");

// -------------------------------------------
function hello(): void;
function hello(name: string): void;

function hello(...args:string []) {
    if(args.length === 0) {
        console.log("Hello World");
    } else {
        console.log("Hello " + args.join(", "));
    }
}

hello();
hello("John");

// hello("John", "Jennie");            // Error: Expected 0-1 arguments, but got 2.