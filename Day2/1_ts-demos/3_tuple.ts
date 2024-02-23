// How Store a fixed collection of values of same or varied types, maintaining the sequence

// Typeguard Array
// var dataArr1: (number | string)[];
var dataArr1: Array<number | string>;

dataArr1 = [1, "Manish"];
dataArr1 = ["Abhijeet", 2];
dataArr1 = ["Abhijeet", "Manish"];
dataArr1 = [1, 2];
dataArr1 = [1, 2, 3, 4, 5];
dataArr1 = [1, "Manish", "Pune", 411021];

// Tuple
var dataRow: [number, string, Array<number>];
dataRow = [1, "Manish", [10, 20]];
// dataRow = ["Abhijeet", 2]; // Compile time Error
// dataRow = ["Abhijeet", "Manish"]; // Compile time Error
// dataRow = [1, 2]; // Compile time Error
// dataRow = [1, 2, 3, 4, 5]; // Compile time Error
// dataRow = [1, "Manish", "Pune", 411021]; // Compile time Error