"use strict";
var empListT;
empListT = [
    { id: 1, name: "Manish", city: "Pune" },
    { id: 2, name: "Ramakant", city: "Delhi" },
    { id: 3, name: "Abhijeet", city: "Pune" },
    { id: 4, name: "Subodh", city: "Mumbai" },
    { id: 5, name: "Abhishek", city: "Mathura" }
];
var allNames = empListT.map(e => e.name.toUpperCase());
var result = allNames.includes("MANISH");
console.log(result);
const person = { id: 1, name: "Manish", city: "Pune" };
console.log(Object.values(person));
