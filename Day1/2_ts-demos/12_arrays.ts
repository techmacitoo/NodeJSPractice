// // Implicitly Typed Arrays
// // var arr1 = [1, 2, 3, 4, 5];
// // var arr2 = ["Manish", "Sharma"];
// // var arr3 = [1, "Manish", true];

// // Explicitly Typed Arrays
// var arr4: number[];
// arr4 = [10, 20, 30, 40];

// var arr5: Array<number>;
// arr5 = [100, 200, 300, 400];

// var arr6: Array<number> = [1000, 2000, 3000, 4000];

// var arr7 = new Array<number>();
// console.log(arr7);
// console.log(arr7.length);

// var arr8 = new Array<number>(5);
// console.log(arr8);
// console.log(arr8.length);

// var arr9 = new Array<string>("Manish");
// console.log(arr9);
// console.log(arr9.length);

// var arr10 = Array.of(5);
// console.log(arr10);
// console.log(arr10.length);

// var arr = [1, 2, 3, 4, 5];

// var arr11 = new Array(arr);
// console.log(arr11);
// console.log(arr11.length);

// var arr12 = Array.from(arr);
// console.log(arr12);
// console.log(arr12.length);

// var arr13 = [...arr];
// console.log(arr13);
// console.log(arr13.length);

// // -------------------------------------------- Array of Objects

// var empList: Array<{ id: number, name: string, city: string }>;

// empList = [
//     { id: 101, name: "Manish", city: "Pune" },
//     { id: 102, name: "Kartik", city: "Mumbai" },
//     { id: 103, name: "Nidhi", city: "Pune" },
//     { id: 104, name: "Jennie", city: "Pune" },
//     { id: 105, name: "John", city: "Mumbai" }
// ];

// empList.push({ id: 106, name: "Kartik", city: "Pune" });
// console.log(empList);

// -------------------------------------------- Type Alias

type Employee = { id: number, name: string, city: string };

var empList: Array<Employee>;

empList = [
    { id: 101, name: "Manish", city: "Pune" },
    { id: 102, name: "Kartik", city: "Mumbai" },
    { id: 103, name: "Nidhi", city: "Pune" },
    { id: 104, name: "Jennie", city: "Pune" },
    { id: 105, name: "John", city: "Mumbai" }
];

empList.push({ id: 106, name: "Kartik", city: "Pune" });
// console.log(empList);

// delete empList[3];

// empList.forEach((item, index) => {
//     console.log(`Item at ${index} is: `, item);
// });

// for (let i = 0; i < empList.length; i++) {
//     console.log(`Item at ${i} is: `, empList[i]);
// }

// for(let index in empList) {
//     console.log(`Item at ${index} is: `, empList[index]);
// }

// for(let item of empList) {
//     console.log(`Item is: `, item);
// }

// --------------------------------------------- Pure Impure

// // Impure Function
// function append1(arr: number[], item: number): number[] {
//     arr[arr.length] = item;
//     return arr;
// }

// // Pure Function
// function append2(arr: number[], item: number): number[] {
//     var rArr = [...arr];
//     rArr[rArr.length] = item;
//     return rArr;
// }

// var numArr = [10, 20, 30, 40, 50];

// var newNumArr = append2(numArr, 60);
// console.log(newNumArr);         // [10, 20, 30, 40, 50, 60]

// var newNumArr1 = append2(numArr, 60);
// console.log(newNumArr1);         // [10, 20, 30, 40, 50, 60]

// --------------------------------------------- Array Methods

let r1 = empList.find(e => e.id === 104);
console.log(r1);

let r2 = empList.findIndex(e => e.id === 104);
console.log(r2);

let names = empList.map(e => e.name.toUpperCase());
console.log(names);

let ids = empList.map(e => e.id);
console.log(ids);

var sum = ids.reduce((prev, current) => prev + current);
console.log(sum);

var cities = empList.map(e => e.city);
console.log(cities);

var uniqueCities = Array.from(new Set(cities));
console.log(uniqueCities);