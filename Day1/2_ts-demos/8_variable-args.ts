// ------------------------------------ Rest parameter
// Rest Parameter should always be the last parameter
// Rest Parameter is an array of values

function Average(...args: number[]) {
    if (args.length > 0) {
        let sum = args.reduce((prev, current) => prev + current);
        return sum / args.length;
    } else {
        return 0;
    }
}

console.log(Average());
console.log(Average(1));
console.log(Average(1, 2));
console.log(Average(1, 2, 3, 4, 5));
console.log(Average(1, 2, 3, 4, 5, 6, 7, 8, 9));

// Combine comma seperated items into a Array (...) - Rest Parameter
// ... used in function parameter at the time of function creation - Rest Parameter
// ... on Left hand side of assignment operator - Rest Parameter

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(Average(number));           // Error: Argument of type 'number[]' is not assignable to parameter of type 'number'.
console.log(Average(...numbers));         // Spread Operator

// Split Array/Object to a comma seperated items - Spread Operator
// ... used in function argument at the time of function call - Spread Operator
// ... on Right hand side of assignment operator - Spread Operator